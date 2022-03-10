import "aos/dist/aos.css";
import "./style/App.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import AOS from "aos";
import HomePage from "./page/HomePage";
import Layout from "./components/common/Layout";
import ProjectDetail from "./page/ProjectDetail";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="project/:slug" element={<ProjectDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
