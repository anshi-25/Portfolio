import React from "react";
import aboutImg from "../assets/images/about.png";
const About = () => {
  
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
              "Hello and welcome to my portfolio website! I'm ANSHIKA SRIVASTAVA, a passionate and dedicated student excited to embark on a career journey in the corporate world.What makes me different is my strong curiosity and love for learning. I always believe in getting better and never stop trying to improve myself. I enjoy taking on new challenges and opportunities to grow my skills.
              I do really well in exciting and fast-moving situations. I enjoy being part of a team where I can share my ideas and work together with others to reach our goals." 
              </p> 
              <br />
              <br />
              <a href="./src/assets/Anshika's Resume[1].pdf" download>
                <button className="btn-primary">Download Resume</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
