import { createRoot } from "react-dom/client";
import App from "./App";

import "./assets/global/global.scss";

const container = document.getElementById("root");
const root = createRoot(container as Element);

root.render(<App />)