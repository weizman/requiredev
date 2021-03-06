require = require('../../index.js')(require);

describe("requiree", function() {
  it("should be able to regulary import a standard module", function() {
    var dummyModule = require('../dummy-module.js');

    expect(dummyModule.getOne).not.toBe(undefined);
    expect(dummyModule.getOne()).toBe(1);

    expect(dummyModule._Numbers).toBe(undefined);
    expect(dummyModule.Numbers).toBe(undefined);
  });
});
