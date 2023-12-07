import classes from "./Home.module.css";


export default function Home() {
  return (
    <div className={classes.centeredContainer}>
      <div className={classes.profileCard}>
        <img
          src="/images/WhatsApp Image 2023-10-16 at 19.45.40_e43ddf9f.jpg"
          className={classes.profilePicture}
          alt="ProfilePic"
        />
        <div className={classes.headerSection}>
          <h1>Lulu</h1>
          <h2>Software Developer</h2>
        </div>
        <div className={classes.profileDescription}>
          <h2>
            As a highly motivated and quick learner, I am enthusiastic about
            advancing my skills and contributing to dynamic software development
            teams. With a strong commitment to staying up-to-date with the
            latest technologies and best practices, I am dedicated to crafting
            efficient and high-quality software solutions. My passion for
            problem-solving and my experience in Html, Css, Javascript, ReactJs
            and NextJs make me a valuable asset to any software development
            project
          </h2>
          <div className={classes.icons}>
            <a
              className={classes.iconlink}
              href="https://github.com/MOSOBELULU"
            >
              <img
                // className={classes.icon}
                src="/images/github (1).png"
                alt=""
              />
            </a>

            <a
              className={classes.iconlink}
              href="https://www.linkedin.com/in/lulu-mosobe-b96a99139/"
            >
              <img
                // className={classes.icon}
                src="/images/linkedin (1).png"
                alt=""
              />
            </a>

            <a className={classes.iconlink} href="https://wa.me/C2IKIHH3LESAM1">
              <img
                // className={classes.icon}
                src="public/images/whatsapp.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    
    </div>
  );
}
