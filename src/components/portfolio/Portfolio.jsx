import "./portfolio.css";
import pro1 from "../../assetts/me.png";
import pro from "../../assetts/project1a.PNG";
import pro2 from "../../assetts/project2.png";
import pro3 from "../../assetts/project3.png";


const data = [
{
  id:1,
  image:pro,
  title:'crytp currenecy dashboard and finanacial',
  github:"https://github.com",
  demo:"https://styledcomponentsweb.herokuapp.com/"
},
{
  id:2,
  image:pro2,
  title:'crytp currenecy dashboard and finanacial',
  github:"https://github.com",
  demo:"https://dribble.com"
},
{
  id:3,
  image:pro3,
  title:'crytp currenecy dashboard and finanacial',
  github:"https://github.com",
  demo:"https://dribble.com"
},
{
  id:4,
  image:pro1,
  title:'crytp currenecy dashboard and finanacial',
  github:"https://github.com",
  demo:"https://dribble.com"
},
{
  id:5,
  image:pro1,
  title:'crytp currenecy dashboard and finanacial',
  github:"https://github.com",
  demo:"https://dribble.com"
},
]

const Portfolio = () => {
  return (
    <section>
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
