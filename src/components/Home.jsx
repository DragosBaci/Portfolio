import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";

const Home = ({ nav }) => {
  console.log(nav);
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full z-0">
        <p className="text-pink-600">Hi, my name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Dragos Baci
        </h1>
        {!nav && (
          <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0] ">
            I'm a
            <TypeAnimation
              sequence={[
                "Developer",
                2000,
                "Coder",
                2000,
                "Tech Enthusiast",
                2000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
            />
          </h2>
        )}
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I am a full stack web developer based in Romania who loves coding and
          always trying to improve my skills.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
