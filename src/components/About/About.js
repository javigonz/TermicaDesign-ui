import React from "react";
import "./About.css";

function About() {
  return (
    <div className="main-content_about">
      <h1>
        I´m Javier González
        <br />
        JS developer
      </h1>
      <div className="main-content_specialized">
        <p>
          I’m a Front-End Developer based in Spain (Málaga). A passionate
          software developer, expert in Javascript and web technology.
          Specialized in drawing and polishing FrontEnd architectures (with or
          without framework).
        </p>
        <p>
          I love working with teams that can inspire me or provide solutions to
          any problem or challenge. I constantly need to know about the latest
          technologies and methodologies, that&apos;s why I like twitter so
          much.
        </p>
        <p>
          Enthusiastic about outdoor sports, especially cycling and any activity
          in the sea. At home, I can&apos;t stop watching series or horror
          movies, reading autobiographical books and visiting any art gallery
          that exhibits impressionist paintings. <br />
          One of my latest passions is listening to podcasts about videogames
          while programming.
        </p>
      </div>
    </div>
  );
}

export default About;
