import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-10/12 lg:w-full h-[100rem] lg:h-[40rem] grid grid-cols-5 grid-rows-5 gap-4">

          <ProjectItem className="col-span-5 lg:col-span-3 lg:row-span-3" projectImage="bg-bento1" projectName="project 1" projectDescription="Project Description"/>
          <ProjectItem className="col-span-5 lg:col-span-3 lg:row-span-2 lg:col-start-3 lg:row-start-4" projectImage="bg-bento2" projectName="project 2" projectDescription="Project Description"/>
          <ProjectItem className="col-span-5 lg:col-span-2 lg:row-span-2 lg:col-start-1 lg:row-start-4" projectImage="bg-bento3" projectName="project 3" projectDescription="Project Description"/>
          <ProjectItem className="col-span-5 lg:col-span-2 lg:row-span-3 lg:col-start-4 lg:row-start-1" projectImage="bg-bento4" projectName="project 4" projectDescription="Project Description"/>
        </div>
      </div>
    </>
  );
};

export default Projects;
