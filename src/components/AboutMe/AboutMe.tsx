import miPortrait from "../../assets/photos/me.webp";
import { downloadCV } from "./AboutMe.controller";

const AboutMe = () => {
  return (
    <div className="h-fit lg:h-full flex flex-col-reverse lg:flex-row justify-center items-center">
      
      <img
        className="lg:pl-8 w-10/12 lg:w-2/5 h-10/12 lg:h-full object-cover"
        src={miPortrait}
        alt="A Very Talented web Dev"
      />

<div className="w-10/12 lg:w-full lg:sticky lg:top-0">
        <p className="text-white text-xl lg:text-2xl font-worksans lg:h-fit whitespace-pre-wrap tracking-[2px] flex-1 lg:px-6">
          Hi! <br /> 
          My name is Oscar Flores.
          <br />I am a{" "}
          <span className="text-accent font-semibold">
            software developer
          </span>{" "}
          focused on
          <span className="text-primary font-semibold">
            {" "}
            web development.
          </span>{" "}
          <br />I studied a computer science degree that helped me discover my
          passion for the process of creating agile solutions to improve and
          streamline outdated processes.
        </p>

        <div className="flex justify-end lg:px-14">
          <button className="btn btn-primary  my-5 lg:my-10" onClick={downloadCV}>
            Get my CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
