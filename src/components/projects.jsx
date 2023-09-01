import { useContext } from "react";
import LanguageContext from "../context/languagecontext";

import ProjectCard from "./cards/projectcard";
import { projects } from "../constants/index";

const Projects = () => {
  const { language } = useContext(LanguageContext);

  return (
    <section id="projects">
      <div className="section-container">
        <h1 className="section-title m-8">Projects</h1>
        { language === 'en'
        ?
        <h3>Hover over any projects to leran more!</h3>
        :
        <h3>ホバーするとプロジェクトの概要が確認できます</h3>
        }
        <div>
          <ProjectCard projects={projects} />
        </div>
      </div>
    </section>
  )
}

export default Projects;