function App() {
  return (
    <>
      <div className="h-[100vh] flex items-center justify-center font-newake">
        <div className="flex items-center md:items-end justify-center text-white w-[50vh] h-[50vh] md:h-[30%] md:w-[100vh] gap-3 tracking-[6px]">

          <div className="grid h-1/4 md:h-full md:items-end">
            <h1 className="text-5xl md:text-9xl h-6">Oscar</h1>
            <h2 className="text-lg md:text-4xl w-0 whitespace-pre-wrap text-primary">
              Software              Developer
            </h2>
          </div>

          <div className="mb-7 md:mb-0 border-[4px] md:border-[10px] border-accent  h-[20%] w-[20%] md:h-[28vh] md:w-[28vh] flex items-center justify-center">
            <h1 className="text-5xl md:text-9xl h-[40%] md:mb-5">FV</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
