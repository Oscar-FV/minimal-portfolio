import miPortrait from "../../assets/imgs/me.webp";
import { useScroll } from "../NavBar/useScroll";
import { downloadCV } from "./AboutMe.controller";

const AboutMe = () => {
  const { isNavBarFixed } = useScroll("aboutMe");

  return (
    <div className="mt-5 mx-8 h-fit lg:h-full flex flex-col-reverse lg:flex-row justify-center items-center lg:items-start">
      <img
        className="rounded-xl lg:ml-8 w-10/12 lg:w-2/5 h-10/12 lg:h-full object-cover"
        src={miPortrait}
        alt="A Very Talented web Dev"
      />

      <div id="aboutMe" className="lg:sticky lg:top-0">
        <div
          className={`w-10/12 pr-10 lg:w-full lg:sticky lg:space-y-4 lg:transform lg:transition-transform lg:duration-500 ease-in-out ${
            isNavBarFixed ? "lg:translate-y-20" : ""
          }`}
        >
          <p className="text-white text-xl lg:text-2xl font-worksans lg:h-fit whitespace-pre-wrap tracking-[2px] flex-1 lg:px-10 xl:pr-5">
              I am a <strong className="text-accent font-semibold">
                software developer </strong> focused on <strong className="text-primary font-semibold">web development.</strong>
            </p>
            <p className="text-white text-xl lg:text-2xl font-worksans lg:h-fit whitespace-pre-wrap tracking-[2px] flex-1 lg:px-10 xl:pr-5"    >
            I studied a computer science degree that helped me discover my
            passion for the process of creating agile solutions to improve and
            streamline outdated processes.
            </p>

            <p className="text-white text-xl lg:text-2xl font-worksans lg:h-fit whitespace-pre-wrap tracking-[2px] flex-1 lg:px-10 xl:pr-5"    >
            I enjoy spending my free time playing video games, as well as greatly appreciating outdoor spaces
            </p>

            <p className="text-white text-xl lg:text-2xl font-worksans lg:h-fit whitespace-pre-wrap tracking-[2px] flex-1 lg:px-10 xl:pr-5"    >
            Usually, I find myself with my headphones on, immersing myself in my own bubble. However, I have a great time collaborating with people on various types of projects, which has provided me with the ability to easily grasp ideas and express my own.
            </p>

          <div className="flex justify-end lg:px-10 xl:px-20">
            <button
              className="btn btn-primary my-5 lg:my-10 text-xl"
              onClick={downloadCV}
            >
              Get my CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
