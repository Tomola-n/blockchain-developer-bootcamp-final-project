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
│  finalproject.js  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;# web server program for localhost: 3000   
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
&emsp;&emsp;&emsp;     1_SecuredLoan_test.js  &emsp;&emsp;# NFT secured loan test file  
&emsp;&emsp;&emsp;     2_NFToken_test.js  &emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;# minted NFT test file  

## Public Ethereum Address for my certification
0x15a90bfF905908AceFb858681d1Be35C60C2FE04

## Hosted on

## Instructions
### Installing dependencies for my project
- nvm (Node Version Manager): `Running version 1.1.7.`  
  1. (Windows) Download the nvm installer from the URL below:  
  https://github.com/coreybutler/nvm-windows/releases
  1. After downloading and extracting `nvm-setup.zip`, you will see `nvm-setup.exe`. 
  1. Double-click `nvm-setup.exe` to install it.  
- Node.js: `v8.15.0`
  1. `nvm install 8.15.0` 
  1. `nvm use 8.15.0` 
- npm: `6.4.1`  
- truffle: `v5.0.3`
  1. `npm install -g truffle@5.0.3`
- geth: `Version 1.8.27-stable`  
  1. (Windows) Open the following geth download page:  
  https://geth.ethereum.org/downloads/
  1. Scroll down and look for "Geth & Tools 1.8.27" in "Stable releases",
  1. Unzip the downloaded zip file and create the Path.
- Ganache GUI: `v2.5.4`  
  1. (Windows) Access the following download page and click "DOWNLOAD": 
  https://truffleframework.com/ganache
  1. Open the downloaded file and install Ganache.
- dotenv: `10.0.0`  
  1. `npm i dotenv`
- openzeppelin-solidity: `2.3.0` 
  1. `npm install openzeppelin-solidity@2.3.0` 
- truffle-hdwallet-provider: `1.0.14`  
  1. `npm install truffle-hdwallet-provider@1.0.14`
- web3: `1.0.0-beta.37`
  1. `npm install web3@1.0.0-beta.37`
- express: `4.17.1`  
  1. `npm install express`

### Accessing or running my project
1. Clone and pull down this repository into a branch via git:  
`git clone https://github.com/Tomola-n/blockchain-developer-bootcamp-final-project`
1. Go to the directory you cloned into:  
`cd blockchain-developer-bootcamp-final-project`
1. Install the packages required to run the program:  
`npm install` and install dependencies for my project.  
1. Run the compilation
```
truffle compile
```
1. Run the migration
```
truffle migrate --network ropsten
```
1. Start the web server 
```
node finalproject.js
```
1. Access the following page: 
http://localhost:3000/

### Running my smart contract unit tests and which port a local testnet should be running on
Connect the geth console to Ganache via RPC.
## A screencast of my walking through my project