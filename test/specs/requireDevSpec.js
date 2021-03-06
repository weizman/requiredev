require = require('../../index.js')(require);

describe("requiree", function() {
  it("should be able to import a standard module with it's dev properties", function() {
    var dummyModule = require.dev('../dummy-module.js');

    expect(dummyModule.getOne).not.toBe(undefined);
    expect(dummyModule.getOne()).toBe(1);

    expect(dummyModule.Numbers).not.toBe(undefined);

    expect(dummyModule.Numbers.ZERO).not.toBe(undefined);
    expect(dummyModule.Numbers.ONE).not.toBe(undefined);

    expect(dummyModule.Numbers.ZERO).toBe(0);
    expect(dummyModule.Numbers.ONE).toBe(1);

    expect(dummyModule._Numbers).toBe(undefined);
  });
});
