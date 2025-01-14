import React from 'react';
import styles from "../styles/About.module.css";


function About() {
  return (
    <div className={styles.container}>
      <section aria-labelledby="about-heading">
        <h2 id="about-heading">About Me</h2>
        <div className={styles.introduction}>
          <p>
            Hi, I'm <strong>Joshua Conrad</strong>, a passionate <strong>Computer Science undergraduate</strong> at the{' '}
            <strong>University of Illinois at Springfield</strong>, where I'm pursuing a degree in Computer Science 
            with a minor in Mathematics (GPA: 3.8/4.0).
          </p>
        </div>

        <section aria-labelledby="technical-background">
          <h3 id="technical-background">Technical Background</h3>
          <p>
            I have a strong foundation in{' '}
            <strong>Full-Stack Development</strong> with experience building dynamic web 
            applications. My toolkit includes <strong>Wordpress, Java, Python, Javascript, React, Node.js, Express.js, WorkPress, Postgres and MySQL</strong>, 
            and more.
          </p>
          <p>
            I've honed these skills through various internships at startups and working on personal projects and{' '}
            <strong>I'm now offering services to clients as a freelance developer
            and Tutor.</strong>
          </p>
          <p>
            <strong>
              <a href="#contact-me" aria-label="Navigate to contact section">Contact Me</a> if interested
            </strong>
          </p>
        </section>

        <section aria-labelledby="personal-interests">
          <h3 id="personal-interests">Beyond Tech</h3>
          <p>
            Outside coding, I'm a driven athlete who has competed in <strong>NCAA Division II soccer</strong> for the{' '}
            <strong>#15 nationally ranked UIS Men's Soccer Team</strong>. Balancing academics and athletics has taught me 
            discipline, teamwork, and perseverance—values I bring into every project. I also enjoy playing the piano and reading in my downtime. 
          </p>
        </section>
      </section>
    </div>
  );
}

export default About;

