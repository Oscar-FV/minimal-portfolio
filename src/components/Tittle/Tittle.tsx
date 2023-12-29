interface TittleProps{
    tittle: string;
}

const Tittle = ( {tittle}: TittleProps ) => {
  return (
    <div className="flex flew-row items-center justify-center mt-14 mb-10">
      <h3 className="uppercase font-newake tracking-[0.5rem] lg:tracking-[1rem] text-6xl lg:text-[8rem] text-white">
        {tittle}
      </h3>
    </div>
  );
};

export default Tittle;
