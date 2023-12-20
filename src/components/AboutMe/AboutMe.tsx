import miPortrait from '../../assets/photos/me.webp';
import { downloadCV } from './AboutMe.controller';

const AboutMe = () => {
  return (
    <div className="">
      <div className="h-fit lg:h-full flex flex-col-reverse lg:flex-row justify-center">
            <img
              className="px-6 lg:pl-8 w-full lg:w-2/5 h-1/2 lg:h-full object-cover"
              src={miPortrait}
              alt="A Very Talented web Dev"
            />
            <div>
              <p className="text-white text-xl lg:text-2xl font-worksans h-0 lg:h-fit whitespace-pre-wrap tracking-[2px] flex-1 px-8 lg:px-6   lg:sticky lg:top-0">
                Hi! <br />
                My name is Oscar Flores.
                <br />I am a <span className="text-accent font-semibold">
                  software developer
                </span>{" "}
                focused on
                <span className="text-primary font-semibold"> web development.</span> <br />I
                studied a computer science degree that helped me discover my passion
                for the process of creating agile solutions to improve and
                streamline outdated processes.
              </p>
              
              <div className="flex justify-end px-14">
                <button className="btn btn-primary mx-5 my-10" onClick={downloadCV}>Get my CV</button>
              </div>
            </div>
            
      </div>
    </div>
  )
}

export default AboutMe
