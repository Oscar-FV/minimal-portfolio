import miPortrait from '../src/assets/photos/me.webp';

function App() {
  return (
    <>
      <div className="container h-[100vh] font-newake flex justify-center items-center">
        <div className="h-1/5 flex justify-center items-end ">
          <div className="tracking-[6px] w-[24rem]">
            <h1 className="text-9xl h-24 text-white">Oscar</h1>
            <h2 className="text-4xl whitespace-pre-wrap text-primary">
              Software Developer
            </h2>
          </div>

          <div className="border-[10px] border-accent h-[15rem] w-[15rem] text-white flex items-center justify-center ">
            <h1 className="text-white text-9xl h-24 tracking-[6px]">FV</h1>
          </div>
        </div>
      </div>

      <div className="h-[100vh]">
        {/* THIS IS THE TITLE COMPONENT */}
        <div className="my-5">
          <h3 className="pl-16 font-newake text-6xl text-white">About Me</h3>
          <div className="pl-8 w-[48%] flex gap-x-[20px]">
            <svg width="100%" height="20">
              <rect width="100%" height="20" fill="#ADA9D0" />
            </svg>
            <svg width="20" height="20">
              <rect width="20" height="20" fill="#6559D0" />
            </svg>
          </div>
        </div>

        <div className="h-full flex gap-6 justify-center">
          
          <img
            className="pl-8 w-[40%] h-full object-cover"
            src={miPortrait}
            alt="A Very Talented web Dev"
          />
          <p className="text-white text-4xl font-worksans h-fit whitespace-pre-wrap tracking-[2px] flex-1 pr-8 sticky top-0">
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
