import { describe, expect, it } from "vitest";
import { calcUnitSize } from "./calc-unit-size";

describe("calc-unit-size.ts", () => {
  it("should returns unit size (px) from unit list", () => {
    const unitSize = "1u";
    const result = calcUnitSize(unitSize);

    expect(result).toBeTypeOf("string");
    expect(result).toBe("30px");
  });
});
