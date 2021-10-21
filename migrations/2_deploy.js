const fs = require('fs');
var NFToken = artifacts.require("./NFToken.sol");
var SecuredLoan = artifacts.require("./SecuredLoan.sol");

module.exports = function(deployer, network, accounts) {
    var obj_NFToken;
    var obj_SecuredLoan;
    deployer.deploy(NFToken).then((instance) => {
        obj_NFToken = instance;
        return obj_NFToken.mintExhibitAsset("My favicon", "https://3oakleaves.com/", "2017/6/15 1:46:20", "QmNVv14FWjejXuYBk5Sp3J1kvXiHSpLjcmNgXMWn6z1B5i", "https://gateway.pinata.cloud/ipfs/QmNVv14FWjejXuYBk5Sp3J1kvXiHSpLjcmNgXMWn6z1B5i");    
    }).then(() => {
        return deployer.deploy(SecuredLoan);
    }).then((instance) => {
        obj_SecuredLoan = instance;
        return obj_NFToken.approve(obj_SecuredLoan.address, 0);
    }).then(() => {
        return obj_SecuredLoan.exhibitNFT(obj_NFToken.address, 0);    
    }).then(() => {
        const outputfilename1 = "./deployed_info.js";
        //var msg = "var deployed_network = '" + network + "';\r\n\r\n"; 
        var msg = "var deploy_account = '" + accounts[0] + "';\r\n\r\n";
        msg += "var nft_address = '" + obj_NFToken.address + "';\r\n"; 
        msg += "var nft_abi = " + JSON.stringify(obj_NFToken.abi) + ";\r\n\r\n";
        msg += "var sl_address = '" + obj_SecuredLoan.address + "';\r\n"; 
        msg += "var sl_abi = " + JSON.stringify(obj_SecuredLoan.abi) + ";\r\n\r\n";
        fs.writeFileSync(outputfilename1, msg);
    });
}