import Logo from './components/Logo/Logo';
import Container from './components/Container/Container';
import Tittle from './components/Tittle/Tittle';
import AboutMe from './components/AboutMe/AboutMe';

function App() {
  return (
    <>
      <Container className="container font-newake flex justify-center items-center">
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
