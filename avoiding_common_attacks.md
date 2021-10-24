# Avoiding Common Attacks
Here, we describe two avoiding common attacks:  
- Solidity pitfalls and attacks,
- Smart contract pitfalls and attacks.

## Solidity Pitfalls and Attacks
### `SecuredLoan.sol`
#### Use Modifiers Only for Validations
- This contract uses three modifiers `atPhase()`, `checkTime()` and `expireTime()`, all of which are used only for validation.
- Just do validations within modifiers and avoid external calls on them.

#### Proper Use of `require()`
- In three functions `borrowFund()`, `repayFund()` and `transferNFT()`, `require()` is used to validate the input and variables before changing the state.
Validation of inputs and variables before state changes. 


## Smart Contract Pitfalls and Attacks
### `SecuredLoan.sol`
#### Integer Overflow / Underflow (SWC-101)
- For variables of positive integers handled in this contract, they are declared as 256-bit: `uint`. 
- In particular, in order to prevent users from entering invalid values (of different types or that cause overflow / underflow) into the form, we control them in the frontend in addition to `require()` when the `firstBid()` function is executed.

### `NFToken.sol`
#### `Tx.Origin` Authentication (SWC-115)
- We never use `tx.origin` in Solidity for authorization. 
- The global variable `msg.sender` references the address of the sender of the current call, 
so that only `owner==msg.sender` can execute the `mintExhibitAsset()` function that issues his NFT and exhibits them to the contract.


