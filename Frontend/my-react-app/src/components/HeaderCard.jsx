import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Tooltip } from '@mui/material';
import styles from "../styles/HeaderCard.module.css";




const HeaderCard = () => {

  

  return (

    <div className={styles.container}>
    <h1 className={styles.header}>Hi welcome to my Portfolio Website</h1>
    <br></br>
    <h2>Computer Science Major & Math-Minor</h2>
    <p>Specializing in FullStack Development w/ React for the front-end and Node JS as well as Springboot for the backend</p>
    <img className={styles.picture} src="/Learning.jpg" alt="Picture of Me" />

    <div className="icon-container">
      <Tooltip title="Click Me to view my Github!" placement='top'>
    <a href="https://github.com/joshuaconrad04" target="_blank" rel="noopener noreferrer">
        <GitHubIcon  />
    </a>
    </Tooltip>

    <Tooltip title="Click Me to view my LinkedIn!" placement='top'>
    <a href="https://www.linkedin.com/in/joshua-conrad-3a7725219/" target="_blank" rel="noopener noreferrer">
      <LinkedInIcon />
    </a>
  </Tooltip>
</div>

    <h3>Technologies and Skills</h3>
    <ul>
    <li>Experience in Full Stack development using Node & Express JS  or Springboot for the Backend.
    </li>
    <li>
React, HTML, CSS, Bootstrap, Tailwind and Javascript for the front-end.
</li>
<li>
SQL and Relational Databases such as Postgres and MySQL 
</li>
<li>
Ability to create and use API’s as well of knowledge of both Functional and Object Oriented Programming Paradigms
</li>
    </ul>
  </div>
  )
}

export default HeaderCard
