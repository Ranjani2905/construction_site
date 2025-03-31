import { HashRouter, Routes, Route } from "react-router";
import Login from "./components/loginpage";
import ConstructionLanding from "./components/landing";
function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<ConstructionLanding />} />
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
