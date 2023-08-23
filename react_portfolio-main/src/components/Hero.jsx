import React from "react";
import hero from "../assets/images/hero.png";
const Hero = () => {
  const social_media = [
    { name: "logo-instagram", link: "https://www.instagram.com/sri_anshika25/" },
    { name: "logo-linkedin", link: "https://www.linkedin.com/in/anshikasrivastava1998/" },
    { name: "logo-twitter", link: "https://twitter.com/Anshika16880278" },
  ];
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={hero} alt="" className="md:w-1/2 h-small object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Anshika Srivastava</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
           Student
          </h4>
          <button className="btn-primary mt-8">
            <a href = "mailto:anshika199825@gmail.com" className = "text-white">
            Contact Me
            </a>
          </button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon) => (
              <div>
               <a 
                key={icon.name}
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-white cursor-pointer "
              >
                <ion-icon name={icon.name}></ion-icon>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
