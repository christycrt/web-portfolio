import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import CertCard from "./CertCard";
import Slider from "react-slick";
import { useRef } from "react";

const settings = {
  dots: true,
  arrows: false,
};

const Certificates = ({ data }) => {
  const ref = useRef(null);

  const Next = () => {
    ref.current.slickNext();
  };

  const Prev = () => {
    ref.current.slickPrev();
  };

  return (
    <>
      <div id="certificates" className="certificate">
        <div className="container">
          <p className="title">Certificates</p>
          <div className="slider-wrapper">
            <Slider ref={ref} {...settings}>
              {data.map((item, key) => {
                return (
                  <div key={key}>
                    <CertCard item={item} />
                  </div>
                );
              })}
            </Slider>
            <button className="prev-btn btn-icon" onClick={Prev}>
              <FaAngleLeft className="icon" />
            </button>
            <button className="next-btn btn-icon" onClick={Next}>
              <FaAngleRight className="icon" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificates;
