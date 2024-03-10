const HeroSection = ({ onOpen }) => {
  return (
    <div className="flex justify-around m-5 items-center pt-5">
      <div>
        <h2
          className="text-5xl font-extrabold"
          style={{ letterSpacing: "-4px" }}
        >
          Upto 100% cashback <br />
          <span style={{ color: "#DE3996" }}> on your Shoutout</span>
        </h2>
        <p className="my-4 text-xl">Encash your influence</p>
        <button
          className="bg-black text-white font-bold px-6 py-4 rounded-full"
          onClick={onOpen}
        >
          Join Our wishlist
        </button>
      </div>
      <div>
        <img
          style={{ width: "548px", height: "582px" }}
          src="https://www.zywa.co/wp-content/uploads/2023/03/Group-48098216-2-930x1024.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroSection;
