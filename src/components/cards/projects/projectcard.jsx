import PropTypes from 'prop-types';
import { useContext } from "react";
import LanguageContext from '../../../context/languagecontext';

const ProjectCard = ({ projects }) => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="mb-8 w-full grid grid-cols-2 max-lg:grid-cols-1 place-items-center px-40 max-lg:px-8 gap-8 max-lg:gap-16">
      {projects.map((project) => {
        return (
          <div 
            key={project.label}
            className="relative flex justify-center w-full h-full drop-shadow-lg"
          >
            <div className="w-full h-full">
              <img 
                src={project.image}
                alt={project.label}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-0 opacity-0 hover:opacity-100 w-full h-full bg-black bg-opacity-70 transition-opacity flex flex-col justify-center gap-4">
              <div className="text-white">
                <h2 className="text-3xl max-lg:text-2xl max-md:text-lg font-bold mb-2">{project.label}</h2>
                <p className="text-lg max-lg:text-sm max-md:text-xs">
                  { language === 'en' ? <>{project.comment_en}</> : <>{project.comment_jp}</> }
                </p>
              </div>
              <div className="flex justify-center gap-4">
                {project.tools.map((tool) => {
                  return (
                    <div key={tool} className="bg-white py-1 px-2 rounded-full">
                      <div className="font-bold max-lg:text-xs">{tool}</div>
                    </div>
                  )
                })}
              </div>
              <div className="flex justify-center gap-8">
                <button className="text-white font-bold max-lg:text-xs p-1 rounded-md bg-primary-600">
                  <a href={project.url} target="_blank" rel="noopener noreferrer">VIEW LIVE</a>
                </button>
                <button className="text-white font-bold max-lg:text-xs p-1 rounded-md bg-primary-600">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">GIT HUB</a>
                </button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

ProjectCard.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    tools: PropTypes.arrayOf(PropTypes.string).isRequired,
    comment_en: PropTypes.string.isRequired,
    comment_jp: PropTypes.string.isRequired,
  })).isRequired,
};

export default ProjectCard;