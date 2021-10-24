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

### Loan Contract Workflow
1. The exhibitor puts the NFT in the smart contract.
2. Bidders bid the desired price.
3. The exhibitor makes a successful bid at a price and duration that meets the conditions.
4. Bidders can cancel their bids and withdraw their ETH. 
5. At the same time as the successful bid, the exhibitor can borrow a fund from the successful bidder, where the fee (5%) to the administrator is deducted from the successful bid amount.
6. The exhibitor repays the borrowed fund and interest to the successful bidder.
7. If there is no repayment from the exhibitor at the time of contract expiration, the successful bidder can withdraw the NFT from the smart contract.

## Project Directory Structure  
│  avoiding_common_attacks.md  &emsp;# my security measures  
│  deployed_address.txt  &emsp;&emsp;&emsp;&emsp;&emsp;# the testnet address and network where your contract(s) have been deployed  
│  deployed_info.js  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;# deployed information including contract address and abi file  
│  design_pattern_decisions.md  &emsp;&nbsp;&nbsp;# my design patterns  
│  index.html  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;# frontend interface  
│  package-lock.json  
│  README.md  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;# this file  
│  style.css  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;# frontend interface  
│  truffle-config.js  
│  
├─contracts  
│  &emsp;&emsp;    Migrations.sol                     
│  &emsp;&emsp;    NFToken.sol  &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# mint NFT contract for SecuredLoan.sol  
│  &emsp;&emsp;    SecuredLoan.sol  &emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;# implement NFT secured loan contract  
│      
├─migrations  
│  &emsp;&emsp;    1_initial_migration.js           
│  &emsp;&emsp;                2_deploy.js  
│  
└─test  
&nbsp;&emsp;&emsp;&emsp;     1_SecuredLoan_test.js  &emsp;&emsp;# NFT secured loan test file  
&nbsp;&emsp;&emsp;&emsp;     2_NFToken_test.js  &emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;# minted NFT test file  

## Public Ethereum Address for my certification
0x15a90bfF905908AceFb858681d1Be35C60C2FE04