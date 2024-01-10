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

    scrollColorElems.forEach((colorSection, i) => {
      const color = colorSection.getAttribute("data-bgColor");
      const textColor = colorSection.getAttribute("data-textColor");
      const prevColor = i === 0 ? "" : scrollColorElems[i - 1].getAttribute("data-bgColor");
      const prevTextColor = i === 0 ? "" : scrollColorElems[i - 1].getAttribute("data-textColor");

      if( color && prevColor && textColor && prevTextColor ){

        ScrollTrigger.create({
          trigger: colorSection,
          start:'top 50%',
          end:'bottom 80%',
          onEnter: () => gsap.to("main", { backgroundColor: color, color: textColor, overwrite: 'auto' }),
          onLeaveBack: () => gsap.to("main", { backgroundColor: prevColor, color: prevTextColor, overwrite: 'auto' }),
        });
        
      }
      
    });
  }, []);

  return (
    <>
    
      <main className="bg-[#101014] text-white">
      <NavBar />

      <Container
        className="font-newake flex flex-col justify-center items-center min-h-screen"
      >
        <Logo />
      </Container>

      <Container className="xl:mx-32 lg:mx-10 min-h-screen" bgColor="#101014" textColor="white">
        <Tittle tittle="About Me" color="text-white" />
        <AboutMe />
      </Container>

      <Container className="lg:mt-32 xl:mx-32 lg:mx-10 h-[65vh]" bgColor="#ADA8BE" textColor="black">
        <Tittle tittle="Stack" color="text-black"/>
        <Stack />
      </Container>

      <Container className="lg:my-20 xl:mx-32 lg:mx-10 min-h-screen" bgColor="#ADA8BE" textColor="black">
        <Tittle tittle="Projects" color="text-black"/>
        <Projects />
      </Container>

      <Container className="lg:mt-16 xl:mx-32 lg:mx-10" bgColor="#101014" textColor="white">
        <Tittle tittle="Contact" color="text-white"/>
        <Contact />
      </Container>

      </main>
      
    </>
  );
}

export default App;
