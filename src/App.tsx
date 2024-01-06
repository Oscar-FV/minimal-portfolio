import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import Logo from "./components/Logo/Logo";
import Container from "./components/Container/Container";
import Tittle from "./components/Tittle/Tittle";
import AboutMe from "./components/AboutMe/AboutMe";
import NavBar from "./components/NavBar/NavBar";
import Stack from "./components/Stack/Stack";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {

    const scrollColorElems = document.querySelectorAll("section");
    console.log(scrollColorElems)

    scrollColorElems.forEach((colorSection, i) => {
      const color = colorSection.getAttribute("data-bgColor");
      const prevColor = i === 0 ? "" : scrollColorElems[i - 1].getAttribute("data-bgColor");

      if( color && prevColor ){

        ScrollTrigger.create({
          trigger: colorSection,
          start:'top 50%',
          end:'bottom 80%',
          onEnter: () => gsap.to("main", { backgroundColor: color, overwrite: 'auto' }),
          onLeaveBack: () => gsap.to("main", { backgroundColor: prevColor, overwrite: 'auto' }),
        });
        
      }
      
    });
  }, []);

  return (
    <>
    
      <main className="bg-[#09090D]">
      <NavBar />

      <Container
        className="font-newake flex flex-col justify-center items-center min-h-screen"
      >
        <Logo />
      </Container>

      <Container className="xl:mx-32 lg:mx-10" bgColor="#09090D">
        <Tittle tittle="About Me" />
        <AboutMe />
      </Container>

      <Container className="lg:mt-20 xl:mx-32 lg:mx-10" bgColor="#FFFFFF">
        <Tittle tittle="Stack" />
        <Stack />
      </Container>

      <Container className="lg:mt-20 xl:mx-32 lg:mx-10" bgColor="#09090D">
        <Tittle tittle="Projects" />
        <Projects />
      </Container>

      <Container className="lg:mt-16 xl:mx-32 lg:mx-10" bgColor="#FFFFFF">
        <Tittle tittle="Contact" />
        <Contact />
      </Container>

      </main>
      
    </>
  );
}

export default App;
