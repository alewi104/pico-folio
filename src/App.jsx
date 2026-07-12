import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={import.meta.env.BASE_URL} element={<Home />} />
        <Route
          path={import.meta.env.BASE_URL + "/resume"}
          element={<Resume />}
        />
      </Routes>
    </Router>
  );
}

export default App;
