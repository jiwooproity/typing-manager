import "./keycap.css";

import { calcUnitSize } from "@/utils";

export function Keycap({ text, size }: KeycapProps) {
  const width = calcUnitSize(size);

  return (
    <div className="keycap-box" style={{ width, height: "30px" }}>
      {text}
    </div>
  );
}
