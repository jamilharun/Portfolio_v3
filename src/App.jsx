import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import Introduction from "./components/Introduction";

function App() {
  return (
    <>
      <Router basename="/Portfolio_v3">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/intro" element={<Introduction />} />
          <Route path="/home/*" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
