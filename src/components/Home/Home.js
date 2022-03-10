import { FaEnvelope, FaGithub, FaPhoneAlt } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home-wrapper container">
          <img
            className="profile-icon"
            src="images/profile.jpg"
            alt="profile-icon"
          />
          <p className="name">JEERANAN PHAKSONGSRI</p>
          <p className="text">Front-end Developer</p>
          <div className="contact-icon">
            <a
              href="mailto:jeeranan.phaksongsri@gmail.com"
              className="contact-wrapper"
            >
              <FaEnvelope className="icon" />
              <p>jeeranan.phaksongsri@gmail.com</p>
            </a>
            <a href="tel:0922570180" className="contact-wrapper">
              <FaPhoneAlt className="icon" />
              <p>0922570180</p>
            </a>
            <a
              href="https://github.com/christycrt"
              target="_blank"
              rel="noreferrer"
              className="contact-wrapper"
            >
              <FaGithub className="icon" />
              <p>christycrt</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
