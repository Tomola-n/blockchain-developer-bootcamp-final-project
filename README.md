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
1. The exhibitor puts his NFT in the smart contract.
2. Bidders bid the desired price.
3. The exhibitor makes a successful bid at a price and duration that meets the conditions.
4. Bidders can cancel their bids and withdraw their ETH. 
5. At the same time as the successful bid, the exhibitor can borrow a fund from the successful bidder, where the fee (5%) to the administrator is deducted from the successful bid amount.
6. The exhibitor repays his borrowed fund and interest to the successful bidder.
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
0xA2F91444b7163A8bF0F9F36fd022ea0F551aEE22

## Hosted on


## Instructions
### Installing dependencies for this project
- nvm (Node Version Manager): `Running version 1.1.7.`  
  1. (Windows) Download the nvm installer from the URL below:  
  https://github.com/coreybutler/nvm-windows/releases
  1. After downloading and extracting `nvm-setup.zip`, you will see `nvm-setup.exe`. 
  1. Double-click `nvm-setup.exe` to install it.  
- Node.js: `v8.15.0`
  ```sh
  nvm install 8.15.0
  ``` 
  ```sh
  nvm use 8.15.0
  ``` 
- npm: `6.4.1`  
- truffle: `v5.0.3`
  ```sh
  npm install -g truffle@5.0.3
  ```
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
  ```sh
  npm i dotenv
  ```
- openzeppelin-solidity: `2.3.0` 
  ```sh
  npm install openzeppelin-solidity@2.3.0
  ``` 
- truffle-hdwallet-provider: `1.0.14`  
  ```sh
  npm install truffle-hdwallet-provider@1.0.14
  ```
- web3: `1.0.0-beta.37`
  ```sh
  npm install web3@1.0.0-beta.37
  ```
- express: `4.17.1`  
  ```sh
  npm install express
  ```

### Accessing or running this project
1. Clone and pull down this repository into a branch via git:  
```sh
git clone https://github.com/Tomola-n/blockchain-developer-bootcamp-final-project
```
2. Go to the directory you cloned into:  
```sh
cd blockchain-developer-bootcamp-final-project
```
3. Install the packages required to run the program:  
```sh
npm install
```  
and install dependencies for this project (see "Installing dependencies for my project").   

4. Run the compilation
```sh
truffle compile
```
5. Run the migration
```sh
truffle migrate --network ropsten
```
6. Start the web server 
```sh
node finalproject.js
```
7. Access the following page: http://localhost:3000/

### Running smart contract unit tests and which port a local testnet should be running on
- Connect the geth console to Ganache GUI via RPC.  
    1. Configure the following settings in the "SERVER" of the Ganache configuration screen:
        - Set "HOSTNAME" to `127.0.0.1`,
        - Set "PORT NUMBER" to `7545`.
    2. Execute `geth attach` command  
    ```sh
    geth attach rpc:http://127.0.0.1:7545
    ```
    If you see the following output, the connection is successful: 

    ```sh
    Welcome to the Geth JavaScript console!

    instance: EthereumJS TestRPC/v2.13.1/ethereum-js
    coinbase: 0x369bc12b2f6dfcd13bd117825ec0e5d2bddc42ae
    at block: 0 (Sat, 30 Oct 2021 18:09:15 JST)
    modules: eth:1.0 evm:1.0 net:1.0 personal:1.0 rpc:1.0 web3:1.0

    >
    ```
- Running my smart contract unit tests  
    1. Open another PowerShell screen and run the unit tests
    ```sh
    truffle test
    ```
    2. See output
    ```
    Using network 'development'.
    
    Compiling .\contracts\Migrations.sol...
    Compiling .\contracts\NFToken.sol...
    Compiling .\contracts\SecuredLoan.sol...
    Compiling .\node_modules\openzeppelin-solidity\contracts\access\Roles.sol...
    Compiling .\node_modules\openzeppelin-solidity\contracts\access\roles\MinterRole.sol...
    Compiling .\node_modules\openzeppelin-solidity\contracts\drafts\Counters.sol...
    Compiling .\node_modules\openzeppelin-solidity\contracts\introspection\ERC165.sol...
    Compiling .\node_modules\openzeppelin-solidity\contracts\introspection\IERC165.sol...
    Compiling .\node_modules\openzeppelin-solidity\contracts\math\SafeMath.sol...
    Compiling .\node_modules\openzeppelin-solidity\contracts\token\ERC721\ERC721.sol...
    Compiling .\node_modules\openzeppelin-solidity\contracts\token\ERC721\ERC721Enumerable.sol...
    Compiling .\node_modules\openzeppelin-solidity\contracts\token\ERC721\ERC721Full.sol...
    Compiling .\node_modules\openzeppelin-solidity\contracts\token\ERC721\ERC721Metadata.sol...
    Compiling .\node_modules\openzeppelin-solidity\contracts\token\ERC721\ERC721Mintable.sol...Compiling .\node_modules\openzeppelin-solidity\contracts\token\ERC721\IERC721.sol...
    Compiling .\node_modules\openzeppelin-solidity\contracts\token\ERC721\IERC721Enumerable.sol...
    Compiling .\node_modules\openzeppelin-solidity\contracts\token\ERC721\IERC721Metadata.sol...Compiling .\node_modules\openzeppelin-solidity\contracts\token\ERC721\IERC721Receiver.sol...
    Compiling .\node_modules\openzeppelin-solidity\contracts\utils\Address.sol...


  Contract: NFToken
    √ check token name and tokenId. (332ms)
    √ check token total supply. (107ms)
    √ check asset parameters. (860ms)

  Contract: SecuredLoan
    Variables
      √ should have an owner.
      √ should have a phase.
    Bidder's balance
      √ should have a bidder's balance of 20. (725ms)
    Use cases
      √ should emit a BidLog event when a bid is added. (434ms)


  7 passing (4s)
    ```
### Remember: DO NOT UPLOAD SENSITIVE INFORMATION TO GITHUB OR A PUBLIC SITE
Your Infura account details, MetaMask mnemonics, any private keys, etc., should all be in a `.env` file which you add to your `.gitignore` in your project locally.  

Read more about that as follows:  
https://blog.infura.io/how-to-use-dotenv-to-enhance-basic-security-within-your-dapp/


## A screencast of my walking through this project
https://www.loom.com/share/86e3e02ee4ec43c896ec4ffb843261a1