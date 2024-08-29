import { HashRouter } from "react-router-dom";

import { Case, Keycap } from "@/components";
import { UNIT_LAYOUTS } from "@/sample";

function App() {
  return (
    <HashRouter>
      <Case layouts={UNIT_LAYOUTS}>
        {({ layout }) =>
          layout.map((key) => <Keycap key={`keycap-${key.id}`} size={key.size} text={key.text} />)
        }
      </Case>
    </HashRouter>
  );
}

export default App;
