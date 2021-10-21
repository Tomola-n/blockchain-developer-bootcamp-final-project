const NFToken = artifacts.require('./NFToken.sol');

contract('NFToken', function ([creator, ...accounts]) {
    const name = "FinalProjectToken";
    const symbol = "FPT";

    it("check token name and tokenId.", async () => {
        const instance = await NFToken.deployed();
        let tokenName = await instance.name();
        let tokenSymbol = await instance.symbol();

        assert.equal(tokenName, name, "Name isn't the same.");
        assert.equal(tokenSymbol, symbol, "Account isn't the same.");
    });

    it("check token total supply.", async () => {
        const instance = await NFToken.deployed();
        let totalSupply = await instance.totalSupply();
        let num = totalSupply.toNumber();

        assert.equal(num, 1, "total Supply is not same." + num + "desu.");
    });

    it("check asset parameters.", async () => {
        const instance = await NFToken.deployed();
        await instance.mintExhibitAsset("HOGE", "HOGEHOGE", "HOGEHOGEHOGE", "HASH", "URI"); // 2番目のNFTを発行している。1番目 (token ID は 0) のNFTは "2_deploy.js" で発行済み。
        let as = await instance.getExhibitParam(0);
        
        assert.equal(as[0], "My favicon", `itemName isn't the same. (${as[0]})`);
        assert.equal(as[1], "https://3oakleaves.com/", `author isn't the same. (${as[1]})`);
        assert.equal(as[2], "2017/6/15 1:46:20", `modified isn't the same. (${as[2]})`);
        assert.equal(as[3], "QmNVv14FWjejXuYBk5Sp3J1kvXiHSpLjcmNgXMWn6z1B5i", `ipfsHash isn't the same. (${as[3]})`);
    });
});
