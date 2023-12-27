import Logo from './components/Logo/Logo';
import Container from './components/Container/Container';
import Tittle from './components/Tittle/Tittle';
import AboutMe from './components/AboutMe/AboutMe';
import NavBar from './components/NavBar/NavBar';

function App() {

  return (
    <>
      <NavBar />
      <Container className="font-newake flex flex-col justify-center items-center">
        <Logo />
      </Container>

      <Container className="">
        <Tittle tittle="About Me" />
        <AboutMe />
      </Container>

      <Container className="">
        <Tittle tittle="Stack" />
          <div className="px-16 py-5">
            <div className="flex border border-white min-h-[50vh]">
              <p className="text-white text-xl lg:text-xl font-worksans lg:h-fit tracking-[2px] flex-1">
                I enjoy crafting minimalist and elegant solutions that help
                businesses enhance their outdated processes, bringing a
                technological twist to their operations.
              </p>
              <div className="w-1/4 border border-yellow-300"></div>
              aaaaaaaa
              <div className="w-1/4 border border-yellow-300"></div>
            </div>
          </div>
      </Container>
    </>
  );
}

export default App;
