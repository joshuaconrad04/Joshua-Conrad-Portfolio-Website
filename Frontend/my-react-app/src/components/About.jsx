import React from 'react';
import styles from "../styles/About.module.css";

function About() {
  return (
    <div className={styles.container}>
      <h2>About Me</h2>
  <p>
    Hi, I'm <strong>Joshua Conrad</strong>, a passionate <strong>Computer Science undergraduate</strong> at the 
    <strong>University of Illinois at Springfield</strong>, where I’m pursuing a degree in Computer Science 
    with a minor in Mathematics (GPA: 3.8/4.0). I have a strong foundation in 
    <strong>Full-Stack Development</strong> with experience building dynamic web 
    applications. My toolkit includes <strong>Java, Python, Javascript, React, Node.js, Express.js, WorkPress, Postgres and MySQL</strong>, 
    and more.
  </p>

  <h3>What I Do</h3>
  <p>
    <strong>Web Development:</strong> I’ve created projects like a <em>Movie Review Website</em> and a 
    <em>Soccer Data Searcher</em>, integrating real-time APIs and building user-friendly interfaces using 
    React, Bootstrap, and modern back-end frameworks.
  </p>
  <p>
    <strong>Algorithmic Programming:</strong> From <em>data structures</em> to <em>algorithm optimization</em>, I engineered 
    an <em>Ant Colony Simulation</em> that improved efficiency by 150% using Java Swing and OOP principles.
  </p>
  <p>
    <strong>Tutoring:</strong> As a <em>CS Tutor</em> at UIS, I help students master programming concepts in 
    <strong>Java</strong>, fostering problem-solving skills and a deeper understanding of recursion, arrays, and linked lists.
  </p>

  <h3>Beyond Tech</h3>
  <p>
    Outside coding, I’m a driven athlete who has competed in <strong>NCAA Division II soccer</strong> for the 
    <strong>#15 nationally ranked UIS Men's Soccer Team</strong>. Balancing academics and athletics has taught me 
    discipline, teamwork, and perseverance—values I bring into every project.
  </p>
    </div>
  );
}

export default About;

