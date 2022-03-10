import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { FaGithub, FaEye } from "react-icons/fa";

import Loading from "../components/ProjectDetail/Loading";
import NotFound from "../components/ProjectDetail/NotFound";
import Projects from "../data/Projects.json";

const ProjectDetail = () => {
  let params = useParams();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setData(Projects[params.slug]);
    setLoading(false);
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (!data) {
    return <NotFound />;
  }

  return (
    <>
      <div className="project-detail ">
        <div className="container">
          <p className="title">{data.name}</p>
          <img className="project-img" src={data.image} alt="project" />
          <div className="detail-wrapper">
            <p className="tool">{data.tool}</p>
            <div className="btn-wrapper">
              <a href={data.github} target="_blank" rel="noreferrer">
                <button className="btn">
                  View code
                  <FaGithub className="icon" />
                </button>
              </a>
              <a href={data.preview} target="_blank" rel="noreferrer">
                <button className="btn">
                  Preview
                  <FaEye className="icon" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
