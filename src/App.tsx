import Logo from './components/Logo/Logo';
import Container from './components/Container/Container';
import Tittle from './components/Tittle/Tittle';
import AboutMe from './components/AboutMe/AboutMe';
import NavBar from './components/NavBar/NavBar';

function App() {

  return (
    <>
      <NavBar />
      <Container className="h-[100vh] font-newake flex flex-col justify-center items-center">
        <Logo />
      </Container>  

      <Container className=''>
        <Tittle tittle="About Me" />
        <AboutMe />
      </Container>

      <Container className="">
        <Tittle tittle="Stack" />

        <div className="px-16 py-5">
          <p className="text-white text-xl lg:text-xl font-worksans lg:h-fit whitespace-pre-wrap tracking-[2px] flex-1">
          I enjoy crafting minimalist and elegant solutions. While I possess a solid understanding of UX/UI, my true expertise lies in seamlessly constructing business logic through the backend. I find joy in bringing efficiency and functionality to the forefront of every project, ensuring a harmonious blend of aesthetics and robust functionality.
          </p>
        </div>

        <div className="grid grid-cols-3 grid-rows-3 gap-4 text-white px-16 py-5">
            <div className="row-span-3">
              
            </div>
            <div className="row-span-2">

            </div>
            <div className="row-span-2">

            </div>
        </div>
    
      </Container>

    </>
  );
}

export default App;
