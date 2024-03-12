const SecondSection = () => {
  return (
    <div className="flex items-center py-20 px-20 bg-[#fd7f3e]">
      <div className="w-1/2 m-5">
        <h2
          className="text-white text-5xl font-extrabold"
          style={{ letterSpacing: "-4px" }}
        >
          Are you an influencer?
        </h2>
      </div>
      <div className="w-1/2">
        <img
          style={{ height: "555px", width: "388px" }}
          src="https://www.zywa.co/wp-content/uploads/2023/02/Rectangle-5-716x1024.png"
          alt=""
        />
      </div>
      <div className="w-1/2 m-5">
        <h2
          className="text-white text-2xl font-bold mt-60"
          style={{ letterSpacing: "-2px" }}
        >
          Are you an influencer looking to monetize your social media presence?
          Boast is here to revolutionize the way you engage with brands and earn
          rewards for your influence.
        </h2>
      </div>
    </div>
  );
};

export default SecondSection;
