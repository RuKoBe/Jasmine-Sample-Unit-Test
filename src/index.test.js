//Create a test suite
describe("Sample Jasmine Test Suite (Unit Test)", () => {
  //Create a test spec
  it("Sample spec: toBe", () => {
    //Create an actual test
    expect(require("./index")(2)).toBe(true);
  });
  it("Sample spec: toBeFalse", () => {
    expect(require("./index")(3)).toBeFalse();
  });
  it("Sample spec: toBeFalsy", () => {
    expect(require("./index")(3)).toBeFalsy();
  });
  it("Sample spec: toBeGreaterThan", () => {
    expect(require("./index")(2)).toBeGreaterThan(0);
  });
});
