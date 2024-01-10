interface TittleProps{
    tittle: string;
    color: string;
}

const Tittle = ( {tittle, color}: TittleProps ) => {
  return (
    <div className="flex flew-row items-center justify-center mt-14 mb-10">
      <h3 className={`uppercase font-newake tracking-[0.5rem] lg:tracking-[1rem] text-6xl lg:text-[8rem] ${color} `}>
        {tittle}
      </h3>
    </div>
  );
};

export default Tittle;
