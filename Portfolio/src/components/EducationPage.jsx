
import { Link } from 'react-router-dom';
import { educationData } from './DummyData';
import classes from './EducationPage.module.css';

function EducationPage() {

  return (
    <div className={classes.EducationPage}>
      <h1 className={classes.EducationHeading}>Education</h1>
      <ul className={classes.EducationList}>
        {educationData.map((item, index) => (
          <li key={index} className={classes.EducationItem}>
               {/* {item.ImageUrl && <img src={item.ImageUrl} alt={item.Institution} className={classes.img} />} */}
            <h3>{item.Institution}</h3>
            <p className={classes.Qualification}>{item.Qualification}</p>
            <p className={classes.Duration}>{item.Duration}</p>
          </li>
        ))}
      </ul>
      <Link to="/about">
        <button className={classes.btn}>Back</button>
      </Link>
    </div>
  );
}

export default EducationPage;
