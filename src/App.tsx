function App() {
  return (
    <>
      <div className="h-[100vh] flex items-center justify-center font-newake">
        <div className="flex items-end justify-center text-white h-[30%] w-[100vh] gap-3 tracking-[6px]">

          <div className="grid h-full items-end gap-y-1">
            <h1 className="text-9xl h-6">Oscar</h1>
            <h2 className="text-4xl w-0 whitespace-pre-wrap text-primary">
              Software              Developer
            </h2>
          </div>

          <div className="border-[10px] border-accent h-[28vh] w-[28vh] flex items-center justify-center">
            <h1 className="text-9xl h-[40%] mb-6">FV</h1>
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
        
        <div className="border border-white h-full flex gap-10">
          
          <img className="pl-16 w-[40%] h-full object-cover" src="/src/assets/photos/me.webp" alt="A Very Talented web Dev" />

          <p className="text-white text-5xl tracking-wide font-worksans w-[45%] h-fit whitespace-pre-wrap border border-white">
            Hi! <br />
            My name is Oscar Flores and I am a <span className="text-accent">software developer</span> focused on <span className="text-primary">web development.</span>                                       I studied a computer science degree that helped me discover my passion for the process of creating agile solutions to improve and streamline outdated processes.
          </p>

        </div>

      </div>

    </>
  );
}

export default App;
