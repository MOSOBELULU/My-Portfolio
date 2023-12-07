import classes from './Contact.module.css'

export default function Contact() {
  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>Contact Me</h1>
      <a href="mailto:mosobelulu@gmail.com">mosobelulu@gmail.com</a>
      <form className={classes.form} action="https://formsubmit.co/mosobelulu@gmail.com" method="POST" >
<div className={classes.control}>
    <label htmlFor='name'>Name</label>
    <input type='text' required id='name'/>
</div>

<div className={classes.control}>
    <label htmlFor='surname'>Surname</label>
    <input type='text' required id='surname' />
</div>

<div className={classes.control}>
    <label htmlFor='description'>Leave a message for me</label>
    <textarea id='description' required rows='5' ></textarea>
</div>

<div className={classes.actions}>
    <button>Contact Me</button>
</div>
        </form>
    </div>
  )
}
