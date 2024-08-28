import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { Keycap } from ".";

describe("keycap.tsx", () => {
  it("should mount keycap component", () => {
    render(<Keycap text="1u" size="1u" />);
    expect(screen.getByText("1u")).toBeInTheDocument();
  });
});
