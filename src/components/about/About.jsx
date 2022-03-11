import "./about.css";
import Me from "../../assetts/me2.png";
import { RiAwardFill } from "react-icons/ri";
import { HiUsers } from "react-icons/hi";
import { AiFillFolderAdd } from "react-icons/ai";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="about" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <RiAwardFill className="about__icon" />
              <h5>Experience</h5>
              <small>1+ year Working</small>
            </article>
            <article className="about__card">
              <HiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>50+ Worldwide</small>
            </article>
            <article className="about__card">
              <AiFillFolderAdd className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>
            My name is Zahid Hussain,a Software Engineer.I possess the deep
            frontend skills and have worked with local and foreign clients on
            different platforms.I can assure you of the best service you can get
            ever. I have strong expertise in Web based Application, as well as
            upgrading or fixing of your existing applications.You came to the
            right place.Do not hesitate to contact me.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
