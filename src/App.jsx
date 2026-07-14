import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={import.meta.env.BASE_URL} element={<Home />} />
        <Route
          path={import.meta.env.BASE_URL + "resume"}
          element={<Resume />}
        />
        <Route
          path={import.meta.env.BASE_URL + "projects"}
          element={<Projects />}
        />
        <Route
          path={import.meta.env.BASE_URL + "projects/:slug"}
          element={<ProjectPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
