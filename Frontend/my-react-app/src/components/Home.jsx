import * as React from 'react';
import styles from "../styles/Home.module.css";

function Home(){
  return (

    <div className={styles.container}>
    <h1 className={styles.header}>Hi welcome to my Portfolio Website</h1>
    <h2>Computer Science Major & Math-Minor</h2>
    <p>Specializing in FullStack Development w/ React for the front-end and Node JS as well as Springboot for the backend</p>
    <img className={styles.picture} src="/Joshua_Head_Shot.jpg" alt="Picture of Me" />
    <a href="https://github.com/joshuaconrad04">GitHub</a>
    <a href="https://www.linkedin.com/in/joshua-conrad-3a7725219/">LinkedIn</a>

    <h3>Technologies and Skills</h3>

  </div>
  )
}
export default Home;