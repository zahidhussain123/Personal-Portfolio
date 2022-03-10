import "./portfolio.css";
import pro from "../../assetts/project2.png";
import pro1 from "../../assetts/project1.PNG";
import pro2 from "../../assetts/project7.PNG";
import pro3 from "../../assetts/project4.png";
import pro4 from "../../assetts/project5.png";
import pro5 from "../../assetts/project6.png";


const data = [
{
  id:1,
  image:pro1,
  title:'Static Beautiful portfolio design with animation.',
  github:"https://github.com/zahidhussain123",
  demo:"https://styledcomponentsweb.herokuapp.com/"
},
{
  id:2,
  image:pro,
  title:'Beautiful Modern Figma Design website..Developed using React. ',
  github:"https://github.com/zahidhussain123",
  demo:"https://dribble.com"
},
{
  id:3,
  image:pro2,
  title:'Portfolio Website design with animation using Reactjs...',
  github:"https://github.com/zahidhussain123",
  demo:"https://reactsportfolio.herokuapp.com/"
},
{
  id:4,
  image:pro3,
  title:'Google keep Clone developed using reactjs along with hooks.',
  github:"https://github.com/zahidhussain123",
  demo:"https://dribble.com"
},
{
  id:5,
  image:pro4,
  title:'Weather App by using fetching Api. ',
  github:"https://github.com/zahidhussain123",
  demo:"https://dribble.com"
},
{
  id:6,
  image:pro5,
  title:'Cryptocurrency price tracker with live results.',
  github:"https://github.com/zahidhussain123",
  demo:"https://dribble.com"
},
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
       {data.map(({id ,image, title ,github,demo})=> (
        <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt="portfolio" />
          </div>
          <h3>{title} </h3>
          <div className="portfolio__item-cta">
            <a href={github} className="btn" target="__blank">
              Github
            </a>
            <a
              href={demo}
              className="btn btn-primary"
              target="__blank"
            >
              Live Demo
            </a>
          </div>
        </article>
       ))}
        
      </div>
    </section>
  );
};

export default Portfolio;
