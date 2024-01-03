import Logo from "./components/Logo/Logo";
import Container from "./components/Container/Container";
import Tittle from "./components/Tittle/Tittle";
import AboutMe from "./components/AboutMe/AboutMe";
import NavBar from "./components/NavBar/NavBar";
import Stack from "./components/Stack/Stack";
function App() {
  return (
    <>
      <NavBar />
      <Container className="font-newake flex flex-col justify-center items-center min-h-screen">
        <Logo />
      </Container>

      <Container className="lg:mx-16">
        <Tittle tittle="About Me" />
        <AboutMe />
      </Container>

      <Container className="lg:mt-28 lg:mx-16">
        <Stack />
      </Container>

      {/* <Container className="mx-10 lg:mx-16">
        <Projects />
      </Container> */}
    </>
  );
}

export default App;
