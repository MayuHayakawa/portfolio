import { useContext } from "react";
import LanguageContext from "../context/languagecontext";

const Summary = () => {
  const { language } = useContext(LanguageContext);

  return (
    <section id="summary" className="h-screen flex items-center">
      <div className="section-container lg:flex gap-4">
        <div className="lg:h-60 lg:flex-col lg:justify-between">
          <h1 className="section-title">Hello! I&rsquo;m Mayu 👋</h1>
          <div className="section-description">
            { language === 'en'
            ? 
            <p>A Frontend Developer specialized in using <span className="text-primary-600">React.js, Next.js</span> and <span className="text-primary-600">Redux</span>.<br />
              I also have some experience in backend development using <span className="text-primary-600">Node.js.</span><br />
              I&rsquo;m always developing applications with a passion<br />
              for creating engaging and entertaining user experiences.🧡
            </p>
            :
            <p><span className="text-primary-600">React.js, Next.js</span> と <span className="text-primary-600">Redux</span>が得意なフロントエンドディベロッパーです！<br />
              <span className="text-primary-600">Node.js</span>を使用したバックエンド開発の経験もあります。<br />
              ”システムで世の中をもっと便利に”をモットーに開発をするのが大好きです😆
            </p>
            }
          </div>
        </div>
        <div className="lg:w-48 lg:h-48 w-40 h-40 mx-auto">
          <img 
            src="/image/myphoto.png"
            alt="photo"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default Summary;