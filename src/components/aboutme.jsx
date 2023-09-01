import { useContext } from "react";
import LanguageContext from "../context/languagecontext";

const AboutMe = () => {
  const { language } = useContext(LanguageContext);

  return (
    <section id="aboutme">
      <div className="section-container">
        <h1 className="section-title">About me 😊</h1>
        <div className="section-description">
          { language === 'en'
          ?
            <p>
              Hello again! Thanks for scrolling this far!✨<br/>
              I&rsquo;m goint to graduated from <span className="text-primary-600">CICCC&#40;Web and Mobile Application Development&#41;</span>.<br/>
              Other than coding, I spend most of my free time playing FPS games.
            </p>
          :
            <p>
              ここまで見てくださってありがとうございます！✨<br/>
              プログラミングと英語を勉強すべくカナダへ移動し、<span className="text-primary-600">CICCC&#40;Web and Mobile Application Development&#41;</span>を卒業予定です<br/>
              空いてる時間はもっぱらFPSゲームをしているゲーマーでもあります😆
            </p>
          }
        </div>
      </div>
    </section>
  )
}

export default AboutMe;