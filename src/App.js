import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import TimeVaultProjectInfo from "./TimeVaultProjectInfo";
import JTokenProjectInfo from "./JTokenProjectInfo";
import GraphicsProjectInfo from "./GraphicsProjectInfo";
import HRDatabaseProjectInfo from "./HRDatabaseProjectInfo";
import ResearchProjectInfo from "./ResearchProjectInfo";
import BBProjectInfo from "./BBProjectInfo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/timevault" element={<TimeVaultProjectInfo />} />
      <Route path="/jtoken" element={<JTokenProjectInfo />} />
      <Route path="/graphics" element={<GraphicsProjectInfo />} />
      <Route path="/hrdatabase" element={<HRDatabaseProjectInfo />} />
      <Route path="/research" element={<ResearchProjectInfo />} />
      <Route path="/blockchainblackjack" element={<BBProjectInfo />} />
    </Routes>
  );
}

export default App;
