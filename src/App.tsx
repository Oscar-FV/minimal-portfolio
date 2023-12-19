import miPortrait from '../src/assets/photos/me.webp';

function App() {
  return (
    <>
      <div className="container h-[100vh] font-newake flex justify-center items-center">
        <div className="h-1/5 flex justify-center items-end ">
          <div className="tracking-[6px] w-[12rem] lg:w-[24rem]">
            <h1 className="text-6xl lg:text-9xl h-12 lg:h-24 text-white">Oscar</h1>
            <h2 className="text-xl lg:text-4xl whitespace-pre-wrap text-primary">
              Software Developer
            </h2>
          </div>

          <div className="border-[10px] border-accent h-[9rem] lg:h-[15rem] w-[9rem] lg:w-[15rem] text-white flex items-center justify-center ">
            <h1 className="text-white text-6xl h-12 lg:text-9xl lg:h-24 tracking-[6px]">FV</h1>
          </div>
        </div>
      </div>

      <div className="h-[100vh]">
        {/* THIS IS THE TITLE COMPONENT */}
        <div className="my-5">
          <h3 className="pl-6 lg:pl-16 font-newake text-3xl lg:text-6xl text-white">About Me</h3>
          <div className="lg:pl-8 w-[60%] lg:w-1/2 flex gap-x-[10px] lg:gap-x-[20px]">
            <svg className="w-[100%] h-[20px]">
              <rect fill="#ADA9D0" className="w-[100%] h-[10px] lg:h-[20px]"/>
            </svg>
            <svg className="w-[20px] h-[20px]">
              <rect fill="#6559D0" className="w-[10px] lg:w-[20px] h-[10px] lg:h-[20px]"  />
            </svg>
          </div>
        </div>

        <div className="h-fit lg:h-full flex flex-col-reverse lg:flex-row gap-6 justify-center">
          
          <img
            className="px-6 lg:pl-8 w-full lg:w-2/5 h-1/2 lg:h-full object-cover"
            src={miPortrait}
            alt="A Very Talented web Dev"
          />
          <p className="text-white text-xl lg:text-4xl font-worksans h-0 lg:h-fit whitespace-pre-wrap tracking-[2px] flex-1 px-6 lg:pr-8 lg:sticky lg:top-0">
            Hi! <br />
            My name is Oscar Flores and I am a{" "}
            <span className="text-accent">software developer</span> focused on
            <span className="text-primary"> web development.</span> <br />
            I studied a computer science degree that helped me discover my passion for the process of creating agile solutions to improve and streamline
            outdated processes.
          </p>
        </div>
      </div>

    </>
  );
}

export default App;
