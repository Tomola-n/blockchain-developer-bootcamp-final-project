const SecuredLoan = artifacts.require('./SecuredLoan.sol');

contract('SecuredLoan', function ([creator, ...accounts]) {
    const [_owner, alice, bob] = accounts;
    const name = "testname";
    const duration = "10";
    const receivable = "15";
    const excessAmount = "20";
    const emptyAddress = "0x0000000000000000000000000000000000000000";
 
    let instance;

    beforeEach(async () => {
        instance = await SecuredLoan.new();
    });

    describe("Variables", () => {
        
        it("should have an owner.", async () => {
            assert.equal(typeof instance.owner, 'function', "the contract has no owner");
        });

        it("should have a phase.", async () => {
            assert.equal(typeof instance.phase, 'function', "the contract has no phase");
        });

    });

    describe("Bidder's balance", () => {
        
        it("should have a bidder's balance of 20.", async () => {
            const tx = await instance.firstBid(name, duration, receivable, { from: alice, value: excessAmount});
            let balance = await instance.getBidderInfoByIndex(0);
            assert.equal(balance[2], 20, "balance is not the same");
        });
        
    });
  
    describe("Use cases", () => {

        it("should emit a BidLog event when a bid is added.", async () => {
            let eventEmitted = false;
            const tx = await instance.firstBid(name, duration, receivable, { from: alice, value: excessAmount});
            if (tx.logs[0].event == "BidLog") {
              eventEmitted = true;
            }
            assert.equal(
              eventEmitted,
              true,
              "adding an item should emit a Bid event.",
            );
        });

    });

});