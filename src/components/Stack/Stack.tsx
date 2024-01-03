import { Icon } from "@iconify/react/dist/iconify.js";
import Tittle from "../Tittle/Tittle";
import Html from "../CustomIcons/Html";
import Tailwind from "../CustomIcons/Tailwind";

const Stack = () => {
  return (
    <>
      <Tittle tittle="Stack" />
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 pt-5 px-5 lg:px-0">
        <div className="flex flex-col lg:w-1/2 mb-8 lg:px-10 xl:pr-5 gap-y-1 lg:gap-y-4">
          <h1 className="text-3xl lg:text-5xl font-worksans font-bold text-white tracking-[4px]">
            my mision.
          </h1>
          <p className="text-white font-thin text-base lg:text-2xl font-worksans lg:h-fit whitespace-pre-wrap tracking-[2px]">
            Craft minimalist and elegant solutions that help businesses
            enhance their outdated processes, bringing a technological twist to
            their operations.
          </p>
        </div>
        
        <div className="flex flex-col gap-4 lg:gap-10 lg:w-1/2 lg:pr-10">
          <h1 className="text-3xl lg:text-5xl font-worksans font-bold text-white tracking-[4px]">
              my digital toolbox.
          </h1>
          <div className="flex justify-between gap-8 text-primary text-6xl lg:text-9xl">
              <Icon icon="uil:react" />
              <Html className="fill-primary w-[3.75rem] lg:w-32" />
              <Tailwind className="fill-primary w-[6rem] lg:w-40"/>
          </div>
          <div className="flex justify-between gap-8 text-primary text-6xl lg:text-9xl">
              <Icon icon="la:node" />
              <Icon icon="simple-icons:nestjs" />
              <Icon icon="ph:file-sql" />
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Stack;
