import miniLogo from '../../assets/imgs/miniLogo.png'

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center sticky top-0 z-20 bg-black py-3 px-6 lg:px-16">
      <img src={miniLogo} alt="" className="w-[10%] lg:w-[3rem] cursor-pointer"/>
      <ul className="flex gap-8 justify-end items-center">
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Stack</li>
        <li className="cursor-pointer">Projects</li>
        <li className="cursor-pointer">Let's Talk!</li>
      </ul>
    </nav>
  );
};

export default NavBar;
