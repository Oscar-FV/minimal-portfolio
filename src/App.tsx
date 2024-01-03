import Logo from "./components/Logo/Logo";
import Container from "./components/Container/Container";
import Tittle from "./components/Tittle/Tittle";
import AboutMe from "./components/AboutMe/AboutMe";
import NavBar from "./components/NavBar/NavBar";
import Stack from "./components/Stack/Stack";
import Projects from "./components/Projects/Projects";
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

      <Container className="lg:mt-20 lg:mx-16">
        <Tittle tittle="Stack" />
        <Stack />
      </Container>

      <Container className="lg:mt-20 lg:mx-16">
        <Tittle tittle="Projects" />
        <Projects />
      </Container>
    </>
  );
}

export default App;
