import formatLabels from "./formatLabels";
describe("formatLabels", () => {
  it("should convert snake_case to Capital case", () => {
    expect(formatLabels(["coffee_leaf_rust", "ripening_of_fruit"])).toEqual([
      "Coffee leaf rust",
      "Ripening of fruit",
    ]);
  });
});
