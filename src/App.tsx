import { HashRouter } from "react-router-dom";

import { Case, Keycap } from "@/components";

const LAYOUTS: UnitType[][] = [
  ["1u", "1u", "1u", "1u", "1u", "1u", "1u", "1u", "1u", "1u", "1u", "1u", "1u", "2u", "1u"],
];

function App() {
  return (
    <HashRouter>
      <Case>
        {LAYOUTS.map((layout) => (
          <Case.Line>
            {layout.map((key) => (
              <Keycap text={key} size={key} />
            ))}
          </Case.Line>
        ))}
      </Case>
    </HashRouter>
  );
}

export default App;
