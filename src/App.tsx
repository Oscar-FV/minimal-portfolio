import Logo from './components/Logo/Logo';
import Container from './components/Container/Container';
import Tittle from './components/Tittle/Tittle';
import AboutMe from './components/AboutMe/AboutMe';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Container className="container font-newake flex flex-col justify-center items-center">
        <Logo />
      </Container>  

      <Container>
        <Tittle tittle="About Me" />
        <AboutMe />
      </Container>

    </>
  );
}

export default App;
