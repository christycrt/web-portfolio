import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

const Portfolio = ({ data }) => {
  return (
    <>
      <div id="portfolio" className="portfolio">
        <div className="container">
          <p className="title">Portfolio</p>
          <div className="row">
            {data.map((item, key) => {
              return (
                <Link
                  key={key}
                  to={`/project/${item.slug}`}
                  className="col-12 col-sm-4"
                >
                  <div>
                    <div className="card-wrapper" data-aos="fade-up">
                      <ProjectCard item={item} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
