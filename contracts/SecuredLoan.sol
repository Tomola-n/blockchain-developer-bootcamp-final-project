// SPDX-License-Identifier: GPL-2.0
pragma solidity >=0.5.0 <0.9.0;
import "openzeppelin-solidity/contracts/token/ERC721/IERC721.sol";

/// @title NFT secured loan
/// @author T. Nakagawa

contract SecuredLoan {
    
    address payable public owner;
    IERC721 public finalProjectNFT;

    enum phases {exhibit, bid, bidend, repayed, closed}
    phases public phase = phases.exhibit;
    
    address payable public exhibitorAddress;
    uint256 public exhibitionTokenId;
    uint public exhibitorBalance;
    
    address[] biddersList;
    mapping(address => string) bidderName;
    mapping(address => uint) bidderBalance;
    mapping(address => uint) bidderDuration;
    mapping(address => uint) bidderReceivable;
    address payable public successfulBidderAddress;

    uint public contractTime;

    event BidLog(address bidder, string name, uint addvalue);
    event WidhDrawETHLog(address from, address to, uint value);

    /// @notice 
    modifier atPhase(phases _phase) {
        require(phase == _phase);
        _;
    }

    modifier checkTime(uint _duration) {
        // uint due = contractTime + _duration * 86400 seconds;
        uint due = contractTime + _duration * 10 seconds;
        require(block.timestamp < due);
        _;
    }

    modifier expireTime(uint _duration) {
        uint due = contractTime + _duration * 10 seconds;
        require(due < block.timestamp);
        _;
    }

    constructor() public payable {
        owner = msg.sender;
    }

    // 1. The exhibitor sets the desired successful bid price for the NFT 
    // and puts it in the smart contract.
    function exhibitNFT(address _addr, uint256 _tokenId) public atPhase(phases.exhibit) {
        // accepts the exhibit  
        set721ContractAddress(_addr);
        if(checkApproved(_tokenId) == address(this)) {
            exhibitionTokenId = _tokenId;
            exhibitorAddress = msg.sender;
            phase = phases.bid;
        }
    }

    function set721ContractAddress(address _addr) public {
        finalProjectNFT = IERC721(_addr);
    }

    function checkApproved(uint256 _tokenId) public view returns (address) {
        if(address(finalProjectNFT) != address(0)) {
            return finalProjectNFT.getApproved(_tokenId);
        }
        return address(-1);
    }

    // 2. Bidders bid the desired price.
    function firstBid(string memory _name, uint _duration, uint _receivable) public payable {        
        // bids on the exhibited NFT
        require(bidderBalance[msg.sender] == 0);
        addBid();
        bidderName[msg.sender] = _name;
        bidderDuration[msg.sender] = _duration;
        bidderReceivable[msg.sender] = _receivable;
        biddersList.push(msg.sender);
    }

    function addBid() public payable {
        require(msg.value > 0);
        bidderBalance[msg.sender] += msg.value;
        emit BidLog(msg.sender, bidderName[msg.sender], msg.value);
    }

    function getBiddersNum() public view returns (uint) {
        return biddersList.length;
    }

    function getBidderInfoByIndex(uint _idx) public view returns (address, string memory, uint, uint, uint) {
         return (biddersList[_idx], bidderName[biddersList[_idx]], bidderBalance[biddersList[_idx]], 
         bidderDuration[biddersList[_idx]], bidderReceivable[biddersList[_idx]]);
    }

    function getBidderInfoByAddr(address _addr) public view returns (string memory, uint, uint, uint) {
        return (bidderName[_addr], bidderBalance[_addr], bidderDuration[_addr], bidderReceivable[_addr]);
    }

    // 3. The exhibitor can cancel the exhibit.
    

    // 5. The exhibitor makes a successful bid at a price that meets the conditions.
    
    // 4. Bidders can cancel the bid.
    function withDrawBidders() public atPhase(phases.bidend) {
        // cancels the bid
        // retrieves the Ether deposited in the smart contract
        require(bidderBalance[msg.sender] > 0);
        msg.sender.transfer(bidderBalance[msg.sender]);
        bidderBalance[msg.sender] = 0;
        emit WidhDrawETHLog(address(this), msg.sender, bidderBalance[msg.sender]);
    }

    // 6. At the same time as the successful bid, 
    // the exhibitor can borrow a fund from the successful bidder, 
    // where the fee (e.g. 1%) to the administrator is deducted from the successful bid amount.
    function borrowFund(address payable _addr, uint _duration) public atPhase(phases.bid) {
        // borrows a fund from the successful bidder
        require(exhibitorAddress == msg.sender);
        (successfulBidderAddress) = _addr;
        require(bidderBalance[successfulBidderAddress] > 0);
        uint fee = bidderBalance[successfulBidderAddress] * 5 /100 * _duration / 365;
        exhibitorBalance = bidderBalance[successfulBidderAddress] - fee;

        owner.transfer(fee);
        exhibitorAddress.transfer(exhibitorBalance);
        exhibitorBalance = 0;
        bidderBalance[successfulBidderAddress] = 0;

        bidderDuration[successfulBidderAddress] = _duration;
        contractTime = block.timestamp;
        phase = phases.bidend;
    }

    // 7. The NFT is deposited as collateral in the smart contract.
    
    // 8. The exhibitor repays the borrowed fund and interest to the successful bidder.
    function repayFund() public payable atPhase(phases.bidend) checkTime(bidderDuration[successfulBidderAddress]) {
        // repays a fund to the successful bidder
        require(exhibitorAddress == msg.sender);
        require(bidderReceivable[successfulBidderAddress] <= msg.sender.balance);
        successfulBidderAddress.transfer(msg.value);
        phase = phases.repayed;
    }

    // 9. When the contract expires (e.g. overnight loan), the exhibitor cannot withdraw NFT.
    
    // 10. If there is no repayment from the exhibitor at the time of contract expiration, 
    // the successful bidder can withdraw the NFT from the smart contract.
    function transferNFT() public atPhase(phases.bidend) expireTime(bidderDuration[successfulBidderAddress]) {
        // withdraws the NFT from the smart contract.
        require(successfulBidderAddress == msg.sender);
        finalProjectNFT.safeTransferFrom(exhibitorAddress, successfulBidderAddress, exhibitionTokenId);
        successfulBidderAddress.transfer(bidderBalance[successfulBidderAddress]);
        bidderBalance[successfulBidderAddress] = 0;
        phase = phases.closed;
    }

}