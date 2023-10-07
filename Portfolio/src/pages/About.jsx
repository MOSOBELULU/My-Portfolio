import AboutData from "../components/AboutData";
import classes from '../pages/About.module.css'
import { useState, useEffect } from "react";

export default function About() {
  const [text, setText] = useState('');
  const fullText = 'Get to know me better and learn about my background, skills, and passion for Software Engineering. Explore this section to discover more about my journey, experiences, and what drives me in Software Engineering.'

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50); // Adjust typing speed by changing the interval time
  }, []);

    
  return (
    <div>
      <h3 className={classes.typingText}>{text}</h3>
      <AboutData />
      
    </div>
  )
}
