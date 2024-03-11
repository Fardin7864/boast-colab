/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Input, ModalHeader } from "@nextui-org/react";
import style from "../../styles/WishlistForm.module.css";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";

const BrandSection = () => {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 500,
    pauseOnHover: true,
    cssEase: "linear",
    nextArrow: (
      <SampleNextArrow style={{}} onClick={undefined} className={undefined} />
    ),
    prevArrow: (
      <SamplePrevArrow className={undefined} style={{}} onClick={undefined} />
    ),
    // responsive: [
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //       initialSlide: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 1920,
    //     settings: {
    //       slidesToShow: 5,
    //       slidesToScroll: 1,
    //       infinite: true,
    //     },
    //   },

    //   {
    //     breakpoint: 1921,
    //     settings: {
    //       slidesToShow: 5,
    //       slidesToScroll: 1,
    //       infinite: true,
    //     },
    //   },
    // ],
  };

  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [brand, setBrand] = useState("");
  const handleBrandChange = (e) => {
    setBrand(e.target.value);
  };

  const handleJoinNow = () => {
    onOpen();
  };

  const handleClose = () => {
    onClose();
    setBrand("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleJoinNow();
  };
  return (
    <div className="my-28">
      <Slider {...settings} className="bg-black py-10">
        <div className="px-10">
          <img
            className="bg-black mx-10"
            style={{ width: "fitContent", height: "100px" }}
            src="https://www.zywa.co/wp-content/uploads/2023/03/fortune-logo-white-1.png"
            alt=""
          />
        </div>
        <div className="px-10">
          <img
            className="bg-black mx-10"
            style={{ width: "fitContent", height: "100px" }}
            src="https://www.zywa.co/wp-content/uploads/2023/03/yourstory-logo-white.png"
            alt=""
          />
        </div>
        <div className="px-10">
          <img
            className="bg-black mx-10"
            style={{ width: "fitContent", height: "100px" }}
            src="https://www.zywa.co/wp-content/uploads/2023/02/image-8-1.png"
            alt=""
          />
        </div>
        <div className="px-10">
          <img
            className="bg-black mx-10"
            style={{ width: "fitContent", height: "100px" }}
            src="https://www.zywa.co/wp-content/uploads/2023/02/image-10-2.png"
            alt=""
          />
        </div>
        <div className="px-10 flex justify-center items-center">
          <h2 className="bg-black px-10 text-white">Brand still loading</h2>
        </div>
        <div className="px-10 ">
          <h2 className="bg-black px-10 text-white">Brand still loading</h2>
        </div>
      </Slider>

      <div className="my-10 flex justify-center">
        <form className="flex mt-5" onSubmit={handleSubmit}>
          <input
            type="text"
            required
            placeholder="Name your favourite local brand"
            className={`text-black rounded-none bg-inherit border border-black px-3 focus:outline-black ${style.placeholderWhite} w-64`}
            onChange={handleBrandChange}
            value={brand}
          />
          <Button
            type="submit"
            onClick={handleJoinNow}
            className="rounded-none text-white bg-black"
          >
            Add
          </Button>
        </form>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="bg-[#ffc200]">
                Name your favourite local brand
              </ModalHeader>
              <ModalBody className=" ">
                <form action="" className="">
                  <Input
                    className="mb-5"
                    variant="underlined"
                    type="text"
                    label="Name"
                    // placeholder="Enter your Name"
                  />
                  <div className="flex gap-5 mb-5">
                    <Input
                      variant="underlined"
                      type="text"
                      label="Instagram ID"
                      // placeholder="Enter your Instagram ID"
                    />
                    <Input
                      variant="underlined"
                      type="text"
                      label="Other Social Media ID"
                      // placeholder="Other Social Media ID"
                    />
                  </div>
                  <div className="flex gap-5 mb-5">
                    <Input
                      variant="underlined"
                      type="text"
                      label="Phone No."
                      // placeholder="Enter your Phone No."
                    />
                    <Input
                      variant="underlined"
                      type="email"
                      label="Email"
                      // placeholder="Enter your email"
                    />
                  </div>
                  <Input
                    variant="underlined"
                    className="mb-5"
                    type="text"
                    // label="Number of followers on Insta/FB/tiktok"
                    placeholder="Number of followers on Insta/FB/tiktok"
                  />
                  <Input
                    variant="underlined"
                    type="text"
                    // label="Number of followers on Insta/FB/tiktok"
                    placeholder="Name your favourite local brand"
                    value={brand}
                  />
                </form>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onClick={handleClose}
                  className="rounded-full"
                >
                  Cancel
                </Button>
                <button
                  onClick={handleClose}
                  className="bg-black hover:bg-[#DE3996] text-white px-6 py-2 rounded-full hover:text-black duration-300 "
                >
                  Join
                </button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default BrandSection;

//

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "gray",
      }}
      onClick={onClick}
    />
  );
}
