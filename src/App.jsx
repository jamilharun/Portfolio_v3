import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import Introduction from "./components/Introduction";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <>
      <Router basename="/Portfolio_v3">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/intro" element={<Introduction />} />
          <Route path="/home/*" element={<Home />} />
          {/* <Route path="/aboutMe" element={<AboutMe />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
