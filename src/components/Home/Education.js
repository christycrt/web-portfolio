import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <>
      <div id="education" className="education">
        <div className="education-wrapper container">
          <p className="title">Education</p>
          <div className="education-box">
            <div className="education-box-1">
              <div className="timeline">
                <FaGraduationCap className="icon" />
              </div>
              <div className="edu-detail1">
                <p>
                  <span className="year">2017-2021</span> <br />
                  <span className="major">
                    Bachelor of Science (Information Technology)
                  </span>
                  <br />
                  School of Information Technology
                  <br />
                  King Mongkut’s University of Technology Thonburi (KMUTT)
                  <br />
                  GPAX: 2.91
                </p>
              </div>
            </div>
            <div className="education-box-2">
              <div className="timeline">
                <FaGraduationCap className="icon" />
              </div>
              <div className="edu-detail2">
                <p>
                  <span className="year">2011-2016</span> <br />
                  <span className="major">Computer-Science</span>
                  <br />
                  Debsirin Romklao School
                  <br />
                  GPAX: 3.07
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
