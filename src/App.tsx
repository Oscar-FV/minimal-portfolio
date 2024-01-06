import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Scrollbar from "smooth-scrollbar";

import Logo from "./components/Logo/Logo";
import Container from "./components/Container/Container";
import Tittle from "./components/Tittle/Tittle";
import AboutMe from "./components/AboutMe/AboutMe";
import NavBar from "./components/NavBar/NavBar";
import Stack from "./components/Stack/Stack";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import { useEffect } from "react";

function App() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const mainContainer = document.querySelector(".main");

    if (mainContainer) {
      const scrollBar = Scrollbar.init(mainContainer as HTMLElement, {
        damping: 0.06,
        delegateTo: document,
        alwaysShowTracks: false,
      });

      ScrollTrigger.defaults({
        scroller: ".main",
      });

      ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
          if (arguments.length && value !== undefined) {
            scrollBar.scrollTop = value;
          }
          return scrollBar.scrollTop;
        },
      });

      scrollBar.addListener(ScrollTrigger.update);

      const sectionColors = document.querySelectorAll("[data-bgcolor]");

      if (sectionColors && sectionColors.length > 0) {
        (sectionColors).forEach((sectionColor, i) => {
          const currentBgColor = (sectionColor as HTMLElement).dataset.bgcolor;
          const prevBgColor = i === 0 ? "" : (sectionColors[i - 1] as HTMLElement).dataset.bgcolor;

          ScrollTrigger.create({
            trigger: sectionColor,
            scroller: ".main",
            start: "top 30%",
            onEnter: () => animateBackgroundColor(currentBgColor),
            onLeaveBack: () => animateBackgroundColor(prevBgColor),
          });
        });
      }
    }
  }, []);

  const animateBackgroundColor = (sectionColor: string | undefined) => {
    console.log(sectionColor)
    gsap.to(".main", {
      backgroundColor: sectionColor,
      overwrite: "auto",
    });
  };

  return (
    <>
      <NavBar />
      <div className="main h-screen"> 
        <Container
          className="font-newake flex flex-col justify-center items-center min-h-screen"
          bgColor="#09090D"
        >
          <Logo />
        </Container>

        <Container className="xl:mx-32 lg:mx-10" bgColor="#ADA9D0">
          <Tittle tittle="About Me" />
          <AboutMe />
        </Container>

        <Container className="lg:mt-20 xl:mx-32 lg:mx-10" bgColor="#09090D">
          <Tittle tittle="Stack" />
          <Stack />
        </Container>

        <Container className="lg:mt-20 xl:mx-32 lg:mx-10" bgColor="#ADA9D0">
          <Tittle tittle="Projects" />
          <Projects />
        </Container>

        <Container className="lg:mt-16 xl:mx-32 lg:mx-10" bgColor="#09090D">
          <Tittle tittle="Contact" />
          <Contact />
        </Container>
      </div>
    </>
  );
}

export default App;
