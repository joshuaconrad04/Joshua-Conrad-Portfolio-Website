import React from 'react';
import styles from "../styles/About.module.css";

/**
 * About
 *
 * A brief overview of my education, skills, and experience in the field of computer science.
 *
 * @returns {ReactElement} A div containing a brief bio, a description of my skills and experience, and a mention of my
 *                         extracurricular activities.
 */
function About() {
  return (
    <div className={styles.container}>
      <h2>About Me</h2>
  <p>
    Hi, I'm <strong>Joshua Conrad</strong>, a passionate <strong>Computer Science undergraduate</strong> at the 
    <strong>University of Illinois at Springfield</strong>, where I’m pursuing a degree in Computer Science 
    with a minor in Mathematics (GPA: 3.8/4.0).
    I have a strong foundation in  
    <strong> Full-Stack Development</strong> with experience building dynamic web 
    applications. My toolkit includes <strong>Wordpress, Java, Python, Javascript, React, Node.js, Express.js, WorkPress, Postgres and MySQL</strong>, 
    and more.
    </p>
    <br></br>
    <p>I've honed these skills through various internships at startups and working on personal projects and <strong>I'm now offering services to clients as a freelance developer
    and Tutor.</strong>
    </p>
      <p>
        <strong><a href="#contact-me">Contact Me</a> if interested</strong>
      </p> 

  <h3>Beyond Tech</h3>
  <p>
    Outside coding, I’m a driven athlete who has competed in <strong>NCAA Division II soccer</strong> for the 
    <strong>#15 nationally ranked UIS Men's Soccer Team</strong>. Balancing academics and athletics has taught me 
    discipline, teamwork, and perseverance—values I bring into every project. I also enjoy playing the piano and reading in my downtime. 
  </p>
    </div>
  );
}

export default About;

