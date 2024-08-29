import { HashRouter } from "react-router-dom";

import { Case, Keycap } from "@/components";

const LAYOUTS: UnitType[][] = [
  ["1u", "1u", "1u", "1u", "1u", "1u", "1u", "1u", "1u", "1u", "1u", "1u", "1u", "2u", "1u"],
];

function App() {
  return (
    <HashRouter>
      <Case layouts={LAYOUTS}>
        {({ layout }) => layout.map((key) => <Keycap size={key} text={key} />)}
      </Case>
    </HashRouter>
  );
}

export default App;
