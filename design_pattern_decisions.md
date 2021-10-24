# Design Pattern Decisions
Here, we describe two design patterns:  
- Access control design patterns,
- Inheritance and interfaces.


## Access Control Design Patterns
### `SecuredLoan.sol`
#### Restricting Access and Ownable
- In this contract, the code declares the variable `owner` and assigns that role to whoever is creating the contract, using the `msg.sender` global variable. 
- Only the `owner` can receive the usage fee generated when the `borrowFund()` function is executed.

#### Pausable
- We use the enum variable type `phases` to create a series of possible states: `{exhibit, bid, bidend, repayed, closed}`. 
To have access control, we'll then assign only certain functions to run when the contract is in a certain state.
- We then declare a modifier `atPhase()`, which establishes a security check at the top of each function we assign it. Using the modifier syntax, We require a check to see if the requested state matches the state at the time of each function execution.

### `NFToken.sol`
#### Restricting Access and Ownable
- In this contract, the code declares the variable `owner` and assigns that role to whoever is creating the contract, using the `msg.sender` global variable.
- Only the `owner` can exhibit his NFT, where the `owner` and the `exhibitor` are assumed to be the same.


## Inheritance and Interfaces
### `NFToken.sol`
This contract imports ERC721Full.sol and ERC721Mintable.sol of OpenZeppelin, 
and inherits `ERC721Full` and `ERC721Mintable`.