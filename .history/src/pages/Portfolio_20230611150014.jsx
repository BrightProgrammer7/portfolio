import "../styles/Portfolio.css";
import { INFO } from "../data";
import { HtmlReactParser } from 'html-react-parser';

const Portfolio = () => {
  const skillDescription = HtmlReactParser(INFO.skills[0].description);

  return (
    <div className="Portfolio">
      <div className="top-container">
        <img className="top-cloud" src="cloud.png" alt="cloud" />
        <h1 className="name font-extrabold">I`m Akhmim Abdelilah</h1>
        <h2 className="profession font-bold uppercase">An Engineer Student</h2>
        {/* <h2 className="profession">Junior Back-end Developer</h2> */}
        <img className="bottom-cloud" src="cloud.png" alt="cloud" />
        <img src="mountain.png" className="mountain" alt="mountain" />
      </div>
      <div className="middle-container">
        <div className="profile">
          <img src="me.png" alt="me" />
          <h2 className="text-5xl">{INFO.profile.title}</h2>
          <p className="intro">
          {INFO.profile.intro}
          </p>
        </div>
        <hr />
        <div className="skills">
          <h2 className="text-4xl" >My Skills</h2>
          {/* <div className="skill-row">
            <img className="sport-img" src="sport.jpg" alt="sport" />
            <h3>Sport</h3>
            <p>
              I started training Jujutsu since I was 14 years old and after
              starting high school i tried new sports such as Handball and even Musculation which I found very interesting. In 2019
              and because of Covid-19, I started running to keep my self
              healthy, it was really an awesome experience.
            </p>
          </div> */}
          <div className="skill-row">
            <img className="code-img" src="programming.jpg" alt="YOOOOO!" />
            <h3 className="text-2xl">{INFO.skills[0].title}</h3>
            <p>{skillDescription}
            </p>
          </div>
          <div className="skill-row">
            <img className="computer-img" src="computer.png" alt="sport" />
            <h3 className="text-2xl">{INFO.skills[1].title}</h3>
            <p>
            {INFO.skills[1].description}
            </p>
          </div>
          <hr />
          <div className="contact-me">
            <h2>Get in touch</h2>
            <h3>Contact information`s</h3>
            <p>If you are interested in my work you`r welcome to contact me</p>
            <div className="contacts">
              <div className="email">
                <a className="btn" href="MAILTO:abdelilahakhmim@gmail.com">
                  Email Me
                </a>
              </div>
              <div className="tel">
                <a className="btn" href="TEL:+212 645310812">
                  Call Me
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-container">
          <div className="social-profile">
            <div className="img-c">
              <a href="https://twitter.com/Abdelil07833296">
                <img className="twitter" src="twitter.png" alt="twitter" />
                Twitter
              </a>
            </div>
            <div className="img-c">
              <a href="https://www.linkedin.com/in/akhmim-abdelilah/">
                <img className="linkedin" src="linkedin.png" alt="linkedin" />
                Linkedin
              </a>
            </div>
            <div className="img-c">
              <a href="https://github.com/BrightProgrammer7/">
                <img className="github" src="github.png" alt="github" />
                Github
              </a>
            </div>
          </div>

          <div className="credits">
            <p className="copyright">
              © 2023 By AKHMIM ABDELILAH. All Right Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
