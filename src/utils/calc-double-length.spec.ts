import { describe, expect, it } from "vitest";
import { calcDoubleLength } from "./calc-double-length";

describe("calc-double-length.ts", () => {
  const TEST_ARR = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];

  it("should return number type after calculation of double array", () => {
    const result = calcDoubleLength(TEST_ARR);
    expect(result).toBeTypeOf("number");
  });

  it("should return calculated number of double array length", () => {
    const result = calcDoubleLength(TEST_ARR);
    expect(result).toBe(9);
  });
});
