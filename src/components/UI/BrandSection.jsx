/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BrandSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },

      {
        breakpoint: 1921,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="my-28">
      <Slider {...settings}>
        <div>
          <img
            className="bg-black mx-10"
            style={{ width: "fitContent", height: "100px" }}
            src="https://www.zywa.co/wp-content/uploads/2023/03/fortune-logo-white-1.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="bg-black mx-10"
            style={{ width: "fitContent", height: "100px" }}
            src="https://www.zywa.co/wp-content/uploads/2023/03/fortune-logo-white-1.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="bg-black mx-10"
            style={{ width: "fitContent", height: "100px" }}
            src="https://www.zywa.co/wp-content/uploads/2023/03/fortune-logo-white-1.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="bg-black mx-10"
            style={{ width: "fitContent", height: "100px" }}
            src="https://www.zywa.co/wp-content/uploads/2023/03/fortune-logo-white-1.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="bg-black mx-10"
            style={{ width: "fitContent", height: "100px" }}
            src="https://www.zywa.co/wp-content/uploads/2023/03/fortune-logo-white-1.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="bg-black mx-10"
            style={{ width: "fitContent", height: "100px" }}
            src="https://www.zywa.co/wp-content/uploads/2023/03/fortune-logo-white-1.png"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default BrandSection;
