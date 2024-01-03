interface Props {
  className ?: string;
  projectImage : string;
  projectName : string;
  projectDescription ?: string;
}

const ProjectItem = ({ className, projectImage, projectName, projectDescription }: Props) => {
  return (
    <div
      className={`${className} relative rounded-xl
                backdrop-blur-md
                border border-accent/10
                shadow-inner shadow-primary/10
                overflow-hidden
                group`}
    >
      <div className="absolute bottom-0 top-0 z-10 h-full w-full bg-gradient-to-b from-transparent from-40% via-primary/50 to-primary/80"></div>

      <div className={`absolute bottom-0 left-0 top-0 -z-10 h-full w-full bg-primary ${projectImage} bg-cover opacity-70 bg-blend-luminosity transition-all ease-in-out duration-500 group-hover:opacity-100 group-hover:bg-blend-normal`}></div>

      <div className="relative z-20 flex h-full select-none flex-col justify-end gap-1 p-2 text-lg md:p-6">
        <h2 className="mb-4 text-balance text-3xl font-newake tracking-[3px] font-semibold uppercase text-white">
          {projectName}
        </h2>
        <h3 className="-mt-4 mb-4 text-2xl font-worksans text-white">
          {projectDescription}
        </h3>
      </div>
    </div>
  );
};

export default ProjectItem;
