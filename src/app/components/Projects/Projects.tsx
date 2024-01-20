import HeaderSection from "../HeaderSection";
import Card from "../_baseComponents/Card";
import ProjectCard from "@baseComponents/ProjectCard";

import img from "../../../../public/assets/images/teste.png";

const Projects = () => {
  return (
    <Card>
      <HeaderSection subtitle="Apredizado" title="Meus projetos" />
      <section className="w-[96%] grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14">
        <ProjectCard img="teste" />
      </section>
    </Card>
  );
};

export default Projects;
