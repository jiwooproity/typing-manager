import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { calcDoubleLength } from "@/utils";
import { UNIT_LAYOUTS } from "@/sample";

import { Case } from ".";

describe("case.tsx", () => {
  it("should case component to contain case line components", () => {
    render(
      <Case layouts={UNIT_LAYOUTS as UnitLayoutsType[][]}>
        {({ layout }) => layout.map((key) => <span key={key.id}>{key.text}</span>)}
      </Case>
    );

    const container = screen.getByTestId("case-container");
    expect(container).toBeInTheDocument();

    UNIT_LAYOUTS.forEach((_, index) => {
      const caseLine = screen.getByTestId(`case-line-${index}`);
      expect(container).toContainElement(caseLine);
    });
  });

  it("should renderer line components of layout keys", () => {
    render(
      <Case layouts={UNIT_LAYOUTS as UnitLayoutsType[][]}>
        {({ layout }) => layout.map((key) => <span key={key.id}>{key.text}</span>)}
      </Case>
    );

    UNIT_LAYOUTS.forEach((_, index) => {
      const caseLine = screen.getByTestId(`case-line-${index}`);
      expect(caseLine).toBeInTheDocument();
    });

    const container = screen.getByTestId("case-container");
    const keys = container.getElementsByTagName("span");

    expect(keys).toHaveLength(calcDoubleLength(UNIT_LAYOUTS));
  });
});
