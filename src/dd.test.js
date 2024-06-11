// This is the function we will be testing
function add(a, b) {
  return a + b;
}

// This is our test suite
describe("add", () => {
  // This is an individual test..
  it("adds two numbers correctly", () => {
    expect(add(1, 2)).toBe(3);
  });
});
