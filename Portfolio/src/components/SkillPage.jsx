import classes from './SkillPage.module.css';
import { Link } from 'react-router-dom';
import { skillsData } from './DummyData';

function SkillsPage() {

  // function HandleBtn(){

  // }
  return (
    <div className={classes.SkillPage}>
      <h1 className={classes.SkillHeading}>Skills</h1>
      <div className={classes.SkillsCategories}>
        {Object.keys(skillsData).map((category, index) => (
          <div key={index} className={classes.SkillsCategory}>
            <h2 className={classes.Category}>{category}</h2>
            <ul className={classes.SkillsList}>
              {skillsData[category].map((skill, skillIndex) => (
                <li key={skillIndex} className={classes.SkillItem}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Link to="/about"> 
      <button className={classes.btn}>Back</button>
      </Link>
    </div>
  );
}

export default SkillsPage;
