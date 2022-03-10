const ProjectCard = ({ item }) => {
  return (
    <div>
      <div className="project-img-wrapper">
        <img className="project-img" src={item.image} alt="project" />
      </div>
      <div className="project-cover"></div>
      <div className="detail">
        <p className="project-name">{item.name}</p>
        <p>{item.tool}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
