// SPDX-License-Identifier: GPL-2.0
pragma solidity >=0.4.21 <0.9.0;
import "../node_modules/openzeppelin-solidity/contracts/token/ERC721/ERC721Full.sol";
import "../node_modules/openzeppelin-solidity/contracts/token/ERC721/ERC721Mintable.sol";

/// @title NFT secured loan
/// @author T. N

contract NFToken is ERC721Full, ERC721Mintable {
    
    struct ExhibitParam {
        string itemName;
        string author;
        string modified;
        string ipfsHash;
    }

    string constant name = "FinalProjectToken";
    string constant symbol = "FPT";
    address public owner;
    ExhibitParam[] public params;
    event Mint(address from, uint256 tokenId, string tokenURI);

    /// @dev Create this contract owner.
    constructor() ERC721Full(name, symbol) public {
        owner = msg.sender;
    }

    function mintExhibitAsset(string memory _itemName, string memory _author, string memory _modified, string memory _ipfsHash, string memory _tokenURI) public {
        mintExhibitAsset(msg.sender, _itemName, _author, _modified, _ipfsHash, _tokenURI);
    }

    /// @dev Mint the exhibit NFT asset.
    function mintExhibitAsset(address _initOwner, string memory _itemName, string memory _author, string memory _modified, string memory _ipfsHash, string memory _tokenURI) public {
        require(owner == msg.sender);
        ExhibitParam memory param = ExhibitParam(_itemName, _author, _modified, _ipfsHash);
        uint256 _tokenId = params.push(param) - 1;
        _mint(_initOwner, _tokenId);
        _setTokenURI(_tokenId, _tokenURI);
        emit Mint(_initOwner, _tokenId, _tokenURI);
    }

    /// @dev Get the exhibit NFT parameters.
    function getExhibitParam(uint256 _tokenId) public view returns (string memory itemName, string memory author, string memory modified, string memory ipfsHash) {
        return (params[_tokenId].itemName, params[_tokenId].author, params[_tokenId].modified, params[_tokenId].ipfsHash);
    }
    
}