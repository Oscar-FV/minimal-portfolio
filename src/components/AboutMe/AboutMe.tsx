import miPortrait from "../../assets/imgs/me.webp";
import { useScroll } from "../NavBar/useScroll";
import { downloadCV } from "./AboutMe.controller";

const AboutMe = () => {
  const { isNavBarFixed } = useScroll("aboutMe");

  return (
    <div className="mt-5 h-fit lg:h-full flex flex-col-reverse lg:flex-row justify-center items-center lg:items-start">
      <img
        className="rounded-xl lg:ml-8 w-10/12 lg:w-2/5 lg:h-full object-cover"
        src={miPortrait}
        alt="A Very Talented web Dev"
      />

      <div id="aboutMe" className="lg:sticky lg:top-0 w-10/12">
        <div
          className={`w-full lg:sticky space-y-4 lg:transform lg:transition-transform lg:duration-500 ease-in-out ${
            isNavBarFixed ? "lg:translate-y-20" : ""
          }`}
        >
          <p className="text-white text-base lg:text-2xl font-worksans lg:h-fit whitespace-pre-wrap tracking-[2px] flex-1 lg:px-10 xl:pr-5">
              I am a <strong className="text-accent font-semibold">
                software developer </strong> focused on <strong className="text-primary font-semibold">web development.</strong>
            </p>
            <p className="text-white text-base  lg:text-2xl font-worksans lg:h-fit whitespace-pre-wrap tracking-[2px] flex-1 lg:px-10 xl:pr-5"    >
            I pursued a computer science degree, uncovering a passion for crafting agile solutions to enhance and streamline outdated processes.
            </p>

            <p className="text-white text-base lg:text-2xl font-worksans lg:h-fit whitespace-pre-wrap tracking-[2px] flex-1 lg:px-10 xl:pr-5"    >
            I often wear headphones, immersing myself in my own world. Yet, I enjoy collaborating on diverse projects, making it easy for me to grasp and express ideas.
            </p>

          <div className="flex justify-end lg:px-10">
            <button
              className="btn btn-primary my-5 lg:my-10 text-base lg:text-xl "
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
