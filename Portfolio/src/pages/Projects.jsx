import classes from './Projects.module.css'

export default function Projects() {
  return (
    <div>
      <h1 className={classes.heading}>My Projects</h1>
      <a href="https://ur-budget-pal.vercel.app/">
        <img src="/images/budget-logo.png" alt="" className={classes.img} />
      </a>
      <a href="https://blog-nextjs-project-csnb.vercel.app/">
        <img src="/images/blog.png" alt=""  className={classes.img}/>
      </a>
      <a href="https://github.com/MOSOBELULU/PodcastApp.git">
        <img src="/images/podcastapp.png" alt=""  className={classes.img}/>
      </a>
      
    </div>
  );
}
