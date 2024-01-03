import { Icon } from "@iconify/react/dist/iconify.js";
import Html from "../CustomIcons/Html";
import Tailwind from "../CustomIcons/Tailwind";

const Stack = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-y-8 lg:gap-10 mt-5 lg:px-0 lg:w-full items-center lg:items-start">
        <div className="flex flex-col w-10/12 lg:w-1/2 lg:px-10 xl:pr-5 gap-y-1 lg:gap-y-4">
          <h1 className="text-3xl lg:text-5xl font-worksans font-bold text-white tracking-[4px]">
            What I Do.
          </h1>
          <p className="text-white font-thin text-base lg:text-2xl font-worksans lg:h-fit whitespace-pre-wrap tracking-[2px]">
            Craft minimalist and elegant solutions that help businesses
            enhance their outdated processes, bringing a technological twist to
            their operations.
          </p>
        </div>

        <div className="w-[90%] h-1 bg-secondary rounded-lg lg:hidden">

        </div>

        <div className="flex flex-col gap-y-8 lg:gap-10 w-10/12 lg:w-1/2 lg:pr-10">
          <div className="flex justify-around lg:justify-between gap-8 text-primary text-6xl lg:text-9xl">
              <Icon icon="uil:react" />
              <Html className="fill-primary w-[3.75rem] lg:w-32" />
              <Tailwind className="fill-primary w-[6rem] lg:w-40"/>
          </div>
          <div className="flex justify-around lg:justify-between gap-8 text-primary text-6xl lg:text-9xl">
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
