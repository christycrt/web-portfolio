import About from "../components/Home/About";
import Certificates from "../components/Home/Certificates";
import Education from "../components/Home/Education";
import Home from "../components/Home/Home";
import Portfolio from "../components/Home/Portfolio";
import Skills from "../components/Home/Skills";

import CertData from "../data/CertData.json";
import ProjectData from "../data/ProjectData.json";

const HomePage = () => {
  return (
    <div>
      <Home />
      <About />
      <Skills />
      <Education />
      <Certificates data={CertData} />
      <Portfolio data={ProjectData} />
    </div>
  );
};

export default HomePage;
