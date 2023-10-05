import classes from './Home.module.css'

export default function Home() {
  return (
    <div>
      <h2>As a highly motivated and quick learner, I am enthusiastic about advancing my skills and contributing to dynamic software development teams. With a strong commitment to staying up-to-date with the latest technologies and best practices, I am dedicated to crafting efficient and high-quality software solutions. My passion for problem-solving and my experience in Html, Css, Javascript, ReactJs and NextJs make me a valuable asset to any software development project</h2>
        <a  className={classes.iconlink} href="https://github.com/MOSOBELULU"><button className={classes.btn}>
        <img className={classes.icon} src="public\images\github (1).png" alt=''/> </button></a>
        
        <a  className={classes.iconlink} href="https://www.linkedin.com/in/lulu-mosobe-b96a99139/"><button className={classes.btn}>
        <img className={classes.icon} src="public\images\linkedin (1).png" alt=''/> </button></a>
        
        <a className={classes.iconlink} href="https://wa.me/C2IKIHH3LESAM1"><button className={classes.btn}>
    <img className={classes.icon} src="public/images/whatsapp.png" alt=''/>
</button></a>

       


      {/* <button>LinkedIn</button>
      <button></button>
      <button></button> */}
    </div>
  )
}
