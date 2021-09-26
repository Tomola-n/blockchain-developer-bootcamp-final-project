# blockchain-developer-bootcamp-final-project
## Project Overview

### Project Name
Utilization of NFT (Non-fungible token)

### What is the business case, area, or topic that this use case applies to?
NFT secured loan

### What problem am I trying to solve? What value will be created by solving this problem?
Recently, marketplaces dealing with NFT such as digital art are popular, but it is only buying and selling NFT. 
Since NFTs are valuable, NFT owners can also use them as collateral to borrow stable coin or other tokens. 
This is to build a new market where NFT can be used more effectively.

### Borrowing Contract Workflow
1. The exhibitor sets the desired maximum bid price for the NFT and puts it on the smart contract.
2. Bidders bid the desired price.
3. The exhibitor can cancel the exhibit.
4. Bidders can cancel the bid.
5. The exhibitor makes a successful bid at a price that meets the conditions.
6. At the same time as the successful bid, the exhibitor can borrow a fund from the successful bidder, where the fee (e.g. 1%) to the administrator is deducted from the successful bid amount.
7. The NFT is deposited as collateral in the smart contract.
8. The exhibitor repays the borrowed fund and interest to the successful bidder.
9. When the contract expires (e.g. overnight loan), the exhibitor cannot withdraw NFT.
10. If there is no repayment from the exhibitor at the time of contract expiration, the successful bidder can withdraw the NFT from the smart contract.
