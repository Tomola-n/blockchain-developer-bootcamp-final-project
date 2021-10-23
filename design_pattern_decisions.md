# Design Pattern Decisions

## Access Control Design Patterns

### SecuredLoan.sol
#### Restricting Access and Ownable
1. In this contract, the code declares the variable `owner` and assigns that role to whoever is creating the contract, using the `msg.sender` global variable. 
2. Only the `owner` can receive the usage fee generated when the `borrowFund()` function is executed.

#### Pausable
1. We then declare a modifier `atPhase()`, which establishes a security check at the top of each function we assign it. Using the modifier syntax, We require a check to see if the requested `phase` matches the `phase` at the time of each function execution.
2. 

### NFToken.sol
1. 


## Inheritance and Interfaces