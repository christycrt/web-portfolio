const About = () => {
  return (
    <>
      <div id="about" className="about">
        <div className="about-wrapper container">
          <p className="title">About me</p>
          <div className="row profile-wrapper">
            <div className="col-12 col-sm-3">
              <img
                className="profile-icon"
                src="images/profile.jpg"
                alt="profile-icon"
              />
            </div>
            <div className="col-12 col-sm-9">
              <div className="about-box">
                I am Jeeranan Phaksongsri. Seeking a job as a frontend developer
                in organization that give an opportunity to use my knowledge of
                HTML, CSS and frameworks to create website that have real users.
                <a href="/Resume-JEERANAN PHAKSONGSRI.pdf" download>
                  <button className="dowload-btn">Dowload resume</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
