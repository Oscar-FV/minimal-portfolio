import Logo from "./components/Logo/Logo";
import Container from "./components/Container/Container";
import Tittle from "./components/Tittle/Tittle";
import AboutMe from "./components/AboutMe/AboutMe";
import NavBar from "./components/NavBar/NavBar";
import Stack from "./components/Stack/Stack";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <NavBar />
      <Container className="font-newake flex flex-col justify-center items-center min-h-screen">
        <Logo />
      </Container>

      <Container className="xl:mx-32 lg:mx-10">
        <Tittle tittle="About Me" />
        <AboutMe />
      </Container>

      <Container className="lg:mt-20 xl:mx-32 lg:mx-10">
        <Tittle tittle="Stack" />
        <Stack />
      </Container>

      <Container className="lg:mt-20 xl:mx-32 lg:mx-10">
        <Tittle tittle="Projects" />
        <Projects />
      </Container>

      <Container  className="lg:mt-16 xl:mx-32 lg:mx-10">
        <Tittle tittle="Contact" />
        <Contact />
      </Container>
    </>
  );
}

export default App;
