const NavBar = () => {

  return (
    <nav id="navbar" className="flex justify-between items-center fixed z-10 top-0 bg-inherit py-3 px-6 lg:px-16 w-full">
      <div className="border-[2px] border-primary h-[2.5rem] lg:h-[2.5rem] w-[2.5rem] lg:w-[2.5rem] flex items-center justify-center cursor-pointer">
          <h1 className="h-5 tracking-[0.1rem] font-newake">
            FV
          </h1>
        </div>
      <ul className="flex gap-8 justify-end items-center text-base">
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Stack</li>
        <li className="cursor-pointer">Projects</li>
        <li className="cursor-pointer">Let's Talk!</li>
      </ul>
    </nav>
  );
};

export default NavBar;
