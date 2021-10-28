import React, { useState, useEffect } from "react";
import "./About.css";
import fotoJaviGonz from "../../images/fotoJaviGonz.png";
import { CSSTransition } from "react-transition-group";

function About() {
  const [showSkills, setShowSkills] = useState(false);
  const [showMe, setShowMe] = useState(false);

  useEffect(() => {
    setShowSkills(true);
    setShowMe(true);
  }, []);

  return (
    <div className="main-content_about">
      <CSSTransition
        in={showMe}
        timeout={300}
        classNames="metransition"
        unmountOnExit
      >
        <div className="main-content_me">
          <h1>
            Hi,
            <br />
            I´m Javier González
            <br />
            JS <a className="highlight">developer</a>
          </h1>
          <div className="main-content_specialized">
            <p>
              I’m a FrontEnd Developer based in Spain (Málaga). A
              <b> passionate software developer</b>, expert in Javascript and
              latest web technology. Specialized in drawing and polishing
              FrontEnd architectures (with or without framework).
              <br /> I´ve got experience working with agile methodologies and
              full remote teams. I love working with teams that can inspire me
              or provide solutions to any problem or challenge. I constantly
              need to know about the latest technologies.
            </p>
            <p>
              Enthusiastic about outdoor sports, especially cycling and any
              activity in the sea. At home, I can&apos;t stop watching series or
              horror movies, reading autobiographical books and visiting any art
              gallery that exhibits impressionist paintings.
            </p>
          </div>
          <div className="main-content_skillsdetails">
            <div className="chart">
              <span>React / React native</span>
              <footer>
                <div style={{ width: "95%", animation: "w95 3s" }}></div>
              </footer>
            </div>
            <div className="chart">
              <span>Next.js</span>
              <footer>
                <div style={{ width: "75%", animation: "w75 3s" }}></div>
              </footer>
            </div>
            <div className="chart">
              <span>Jest / Testing-library / Cypress</span>
              <footer>
                <div style={{ width: "85%", animation: "w85 3s" }}></div>
              </footer>
            </div>
            <div className="chart">
              <span>NodeJs</span>
              <footer>
                <div style={{ width: "20%", animation: "w20 3s" }}></div>
              </footer>
            </div>
            <div className="chart">
              <span>AWS / Serveless</span>
              <footer>
                <div style={{ width: "50%", animation: "w50 3s" }}></div>
              </footer>
            </div>
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={showSkills}
        timeout={300}
        classNames="skillstransition"
        unmountOnExit
      >
        <div className="main-content-skills">
          <div className="card-container">
            <span className="pro">JS developer</span>
            <img className="round" src={fotoJaviGonz} alt="user" />
            <h3>Javier González</h3>
            <h6>Málaga (Spain)</h6>
            <h5>Computer Engineering Degree</h5>
            <br />
            <div className="description">
              <p>
                <b>+15 years</b> of experience <br />
                in create full dinamic Web / Mobile content <br />
                in Javascript / HTML / CSS and integration with RESTful APIs
                <br />
                <br />
                Taking care about UI/UX, automated testing and performance. Full
                stack SW development knowledge <br />
                <br /> Focus in CI/CD and Cloud computing
              </p>
            </div>
            <div className="skills">
              <h6>Skills</h6>
              <ul>
                <li>Javascript</li>
                <li>Typescript</li>
                <li>HTML5</li>
                <li>CSS</li>
                <li>React / React Native</li>
                <li>Redux</li>
                <li>Angular</li>
                <li>Node</li>
                <li>Next.js</li>
                <li>AWS</li>
                <li>Serverless</li>
                <li>Adobe suit</li>
              </ul>
            </div>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}

export default About;
