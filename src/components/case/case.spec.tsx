import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { Case } from ".";

describe("case.tsx", () => {
  it("should mount case wrapper", () => {
    render(<Case>test</Case>);
    expect(screen.getByText("test")).toBeInTheDocument();
  });

  it("should mount case wrapper with line", () => {
    render(
      <Case>
        <Case.Line>test</Case.Line>
      </Case>
    );
    expect(screen.getByText("test")).toBeInTheDocument();
  });
});
