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
                I am Jeeranan Phaksongsri. I am interested in web developing
                <a href="/Resume.pdf" download>
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
