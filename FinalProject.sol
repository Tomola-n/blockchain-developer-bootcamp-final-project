pragma solidity >=0.5.16 <0.9.0;

contract FinalProject {
    
    // 1. The exhibitor sets the desired maximum bid price for the NFT 
    // and puts it on the smart contract.
    function exhibitNFT(address _exhibitor, uint256 _tokenId, uint _exhibitPrice, uint _duration, uint _repaymentAmount) public {

        // accepts the exhibit

    }

    // 2. Bidders bid the desired price.
    function bid(address _bidder, uint bidPrice, uint _duration, uint _billingAmount) public {

        // bids on the exhibited NFT

    }

    // 3. The exhibitor can cancel the exhibit.
    function cancelExhibit() public {

        // cancels the exhibit
        // retrieves the NFT deposited in the smart contract

    }

    // 4. Bidders can cancel the bid.
    function cancelBid() public {

        // cancels the bid
        // retrieves the Ether deposited in the smart contract

    }

    // 5. The exhibitor makes a successful bid at a price that meets the conditions.
    function successfulBid() public {

        // makes a successful bid for a NFT

    }

    // 6. At the same time as the successful bid, 
    // the exhibitor can borrow a fund from the successful bidder, 
    // where the fee (e.g. 1%) to the administrator is deducted from the successful bid amount.
    function borrowFund() public {

        // borrows a fund from the successful bidder
    
    }

    // 7. The NFT is deposited as collateral in the smart contract.
    function depositNFT() public {

        // deposits a NFT in the smart contract

    }

    // 8. The exhibitor repays the borrowed fund and interest to the successful bidder.
    function repayFund() public {

        // repays a fund to the successful bidder

    }

    // 9. When the contract expires (e.g. overnight loan), the exhibitor cannot withdraw NFT.
    function expireContract() public {

        // prohibits the exhibitor from withdrawing the NFT

    }

    // 10. If there is no repayment from the exhibitor at the time of contract expiration, 
    // the successful bidder can withdraw the NFT from the smart contract.
    function withdrawNFT() public {

        // withdraws the NFT from the smart contract.

    }

}