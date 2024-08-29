import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { calcDoubleLength } from "@/utils";

import { Case } from ".";

describe("case.tsx", () => {
  const TEST_LAYOUT: UnitType[][] = [
    ["1u", "1u", "1u", "1u", "1u", "1u", "1u", "1u", "1u", "1u", "1u", "1u", "1u", "2u", "1u"],
  ];

  it("should case component to contain case line components", () => {
    render(
      <Case layouts={TEST_LAYOUT}>{({ layout }) => layout.map((key) => <span>{key}</span>)}</Case>
    );

    const container = screen.getByTestId("case-container");
    expect(container).toBeInTheDocument();

    const caseLine = screen.getByTestId("case-line");
    expect(container).toContainElement(caseLine);
  });

  it("should renderer line components of layout keys", () => {
    render(
      <Case layouts={TEST_LAYOUT}>{({ layout }) => layout.map((key) => <span>{key}</span>)}</Case>
    );

    const caseLine = screen.getByTestId("case-line");
    expect(caseLine).toBeInTheDocument();

    const keys = caseLine.getElementsByTagName("span");
    expect(keys).toHaveLength(calcDoubleLength(TEST_LAYOUT));
  });
});
