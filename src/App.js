import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import TimeVaultProjectInfo from "./TimeVaultProjectInfo";
import JTokenProjectInfo from "./JTokenProjectInfo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/timevault" element={<TimeVaultProjectInfo />} />
      <Route path="/jtoken" element={<JTokenProjectInfo />} />
    </Routes>
  );
}

export default App;
