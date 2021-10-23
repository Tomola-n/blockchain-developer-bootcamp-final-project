// SPDX-License-Identifier: GPL-2.0
pragma solidity >=0.5.0 <0.9.0;
import "openzeppelin-solidity/contracts/token/ERC721/IERC721.sol";

/// @title NFT secured loan
/// @author T. N

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

    /// @dev Check the current phase of this contract.
    modifier atPhase(phases _phase) {
        require(phase == _phase);
        _;
    }

    /// @dev Check if the current time is before the due date.
    modifier checkTime(uint _duration) {
        // uint due = contractTime + _duration * 86400 seconds;
        uint due = contractTime + _duration * 10 seconds;
        require(block.timestamp < due);
        _;
    }

    /// @dev Check if the current time is past the due date.
    modifier expireTime(uint _duration) {
        uint due = contractTime + _duration * 10 seconds;
        require(due < block.timestamp);
        _;
    }

    /// @dev Create this contract owner.
    constructor() public payable {
        owner = msg.sender;
    }

    /// @notice 1. The exhibitor puts the NFT in the smart contract.
    /// @dev Accept the exhibit. Move phase from exhibit to bid. 
    function exhibitNFT(address _addr, uint256 _tokenId) public atPhase(phases.exhibit) {
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

    /// @notice 2. Bidders bid the desired price.
    function firstBid(string memory _name, uint _duration, uint _receivable) public payable {        
        require(bidderBalance[msg.sender] == 0);
        addBid();
        bidderName[msg.sender] = _name;
        bidderDuration[msg.sender] = _duration;
        bidderReceivable[msg.sender] = _receivable;
        biddersList.push(msg.sender);
    }

    /// @dev Add bids on the exhibited NFT.
    function addBid() public payable {
        require(msg.value > 0);
        bidderBalance[msg.sender] += msg.value;
        emit BidLog(msg.sender, bidderName[msg.sender], msg.value);
    }

    /// @dev Get the number of bidders.
    /// @return Number of bidders
    function getBiddersNum() public view returns (uint) {
        return biddersList.length;
    }

    /// @dev Get the information of a bidder for the index.
    /// @return Name, balance, duration and receivable ETH of a bidder for the index.
    function getBidderInfoByIndex(uint _idx) public view returns (address, string memory, uint, uint, uint) {
         return (biddersList[_idx], bidderName[biddersList[_idx]], bidderBalance[biddersList[_idx]], 
         bidderDuration[biddersList[_idx]], bidderReceivable[biddersList[_idx]]);
    }

    /// @dev Get the information of a bidder for the address.
    /// @return Name, balance, duration and receivable ETH of a bidder for the address.
    function getBidderInfoByAddr(address _addr) public view returns (string memory, uint, uint, uint) {
        return (bidderName[_addr], bidderBalance[_addr], bidderDuration[_addr], bidderReceivable[_addr]);
    }

    
    /// @notice 4. Bidders can cancel their bids and withdraw their ETH.
    /// @dev Cancel the bid and retrieve the Ether deposited in the smart contract.
    function withDrawBidders() public atPhase(phases.bidend) {
        require(bidderBalance[msg.sender] > 0);
        msg.sender.transfer(bidderBalance[msg.sender]);
        bidderBalance[msg.sender] = 0;
        emit WidhDrawETHLog(address(this), msg.sender, bidderBalance[msg.sender]);
    }

    /// @notice 3. The exhibitor makes a successful bid at a price and duration that meets the conditions.
    /// @notice 5. At the same time as the successful bid, the exhibitor can borrow a fund from the successful bidder, where the fee (5%) to the administrator is deducted from the successful bid amount.
    /// @dev Move phase from bid to bidend.
    function borrowFund(address payable _addr, uint _duration) public atPhase(phases.bid) {
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
    
    /// @notice 6. The exhibitor repays the borrowed fund and interest to the successful bidder.
    /// @dev Move phase from bidend to repayed.
    function repayFund() public payable atPhase(phases.bidend) checkTime(bidderDuration[successfulBidderAddress]) {
        require(exhibitorAddress == msg.sender);
        require(bidderReceivable[successfulBidderAddress] <= msg.sender.balance);
        successfulBidderAddress.transfer(msg.value);
        phase = phases.repayed;
    }

    /// @notice 7. If there is no repayment from the exhibitor at the time of contract expiration, the successful bidder can withdraw the NFT from the smart contract.
    /// @dev Move phase from bidend to closed.
    function transferNFT() public atPhase(phases.bidend) expireTime(bidderDuration[successfulBidderAddress]) {
        require(successfulBidderAddress == msg.sender);
        finalProjectNFT.safeTransferFrom(exhibitorAddress, successfulBidderAddress, exhibitionTokenId);
        successfulBidderAddress.transfer(bidderBalance[successfulBidderAddress]);
        bidderBalance[successfulBidderAddress] = 0;
        phase = phases.closed;
    }

}