const Logo = () => {
  return (
    <>
      <div className="h-1/5 flex justify-center items-end pb-20">
        <div className="tracking-[6px] w-[12rem] lg:w-[24rem]">
          <h1 className="text-6xl lg:text-9xl h-12 lg:h-24 text-white">
            Oscar
          </h1>
          <h2 className="text-xl lg:text-4xl whitespace-pre-wrap text-primary">
            Software Developer
          </h2>
        </div>

        <div className="border-[10px] border-accent h-[9rem] lg:h-[15rem] w-[9rem] lg:w-[15rem] text-white flex items-center justify-center ">
          <h1 className="text-white text-6xl h-12 lg:text-9xl lg:h-24 tracking-[6px]">
            FV
          </h1>
        </div>
      </div>
    </>
  );
};

export default Logo;
