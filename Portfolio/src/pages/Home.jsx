import classes from './Home.module.css'

export default function Home() {
  return (
    <div>
      <h1>JUNIOR SOFTWARE DEVELOPER</h1>
      <h2>opening line...</h2>
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
