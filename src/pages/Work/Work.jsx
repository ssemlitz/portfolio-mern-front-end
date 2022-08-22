import { projectData } from "../../data/project-data";
import styles from './Work.module.css'

const Work = () => {
  return ( 
    <section id="portfolio">
      <h1>Porfolio</h1>
      <div className={styles.projectCard}>{
        projectData.map(({title, deployment, image, github, description}) => {
          return (
            <article>
            <div>
              <img className={styles.projectImg} src={image} alt={title} />
            </div>
            <h3>{title}</h3>  
            <p>{description}</p>
            <div>
              <a href={github}>Github</a>
              <a href={deployment}>Deployment</a>
            </div>
            </article>
          )
        })
        
        }
      </div>
    </section>
  );
}

export default Work;
