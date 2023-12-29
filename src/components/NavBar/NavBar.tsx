import miniLogo from '../../assets/imgs/miniLogo.png'

const NavBar = () => {

  return (
    <nav id="navbar" className="flex justify-between items-center fixed z-10 top-0 bg-black py-3 px-6 lg:px-16 w-full">
      <img src={miniLogo} alt="" className="w-10 lg:w-[2rem] cursor-pointer"/>
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
