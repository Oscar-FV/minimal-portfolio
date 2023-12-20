interface TittleProps{
    tittle: string;
}

const Tittle = ( {tittle}: TittleProps ) => {
  return (
    <div className="my-5">
      <h3 className="pl-6 lg:pl-16 font-newake text-3xl lg:text-5xl text-white">
        {tittle}
      </h3>
      <div className="lg:pl-8 w-[60%] lg:w-1/2 flex gap-x-[10px] lg:gap-x-[20px]">
        <svg className="w-[100%] h-[20px]">
          <rect fill="#ADA9D0" className="w-[100%] h-[10px] lg:h-[20px]" />
        </svg>
        <svg className="w-[20px] h-[20px]">
          <rect
            fill="#6559D0"
            className="w-[10px] lg:w-[20px] h-[10px] lg:h-[20px]"
          />
        </svg>
      </div>
    </div>
  );
};

export default Tittle;
