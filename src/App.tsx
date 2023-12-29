import Logo from './components/Logo/Logo';
import Container from './components/Container/Container';
import Tittle from './components/Tittle/Tittle';
import AboutMe from './components/AboutMe/AboutMe';
import NavBar from './components/NavBar/NavBar';
import { Icon } from '@iconify/react';
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
            <div className="flex  min-h-[50vh]">
              <p className="text-white text-xl lg:text-2xl font-worksans lg:h-fit tracking-[2px] flex-1">
                I enjoy crafting minimalist and elegant solutions that help
                businesses enhance their outdated processes, bringing a
                technological twist to their operations.
              </p>
              <div className="w-1/4 py-5 gap-5 flex flex-col items-center text-primary text-8xl"> 

                <p className="font-worksans text-3xl text-accent tracking-[1px] rounded-md px-2 py-1 mb-10"> Frontend </p>

                <div className="flex gap-20">
                  <Icon icon="uil:react"/>
                </div>
    
              </div>
              <div className="w-1/4 py-5 gap-5 flex flex-col items-center text-primary text-8xl">

              <p className="font-worksans text-3xl text-accent tracking-[1px] rounded-md px-2 py-1 mb-10"> Backend </p>

                <div className="flex gap-20">
                  <Icon icon="la:node"/>
                  <Icon icon="simple-icons:nestjs"/>
                </div>

                <div className="flex gap-20">
                  <Icon icon="ph:file-sql"/>
                </div>    
    
              </div>
            </div>
          </div>
      </Container>
    </>
  );
}

export default App;
