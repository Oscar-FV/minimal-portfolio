import { Icon } from "@iconify/react/dist/iconify.js"
import Tittle from "../Tittle/Tittle"

const Projects = () => {
  return (
    <>
      <Tittle tittle="Stack" />
      <div className="grid grid-cols-4 gap-4 lg:gap-10">
        <p className="col-span-4 lg:col-span-2 text-white text-base lg:text-2xl font-worksans lg:h-fit whitespace-pre-wrap tracking-[2px] mb-8 lg:px-10 xl:pr-5">
          I enjoy crafting minimalist and elegant solutions that help businesses
          enhance their outdated processes, bringing a technological twist to
          their operations.
        </p>
        <div className="col-span-2 lg:col-span-1 py-5 gap-5 flex flex-col items-center text-primary text-6xl lg:text-8xl">
          <div className="flex gap-5">
            <Icon icon="uil:react" />
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1 py-5 gap-5 flex flex-col items-center text-primary text-6xl lg:text-8xl">
          <div className="flex gap-5">
            <Icon icon="la:node" />
            <Icon icon="simple-icons:nestjs" />
          </div>

          <div className="flex gap-20">
            <Icon icon="ph:file-sql" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
