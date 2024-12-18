import * as React from 'react';
import styles from "../styles/Home.module.css";
import ProjectCard from './ProjectCard';
import HeaderCard from './HeaderCard';
import Contact from './Contact';
import About from './About';


function Home(){
  return (
    <div>
    {/* Header Section */}
  <section id= "home">
  <HeaderCard/> 
  </section>

    {/* About Section */}
  <section id= "about"> 
  <About/>
</section>
<br />  

{/* Project Section */}
 <section id= "projects"> 

<div className={styles.title}>
  <h4>Heres are some of my notable projects. Hover over a picture if you would like to look at it longer.</h4>
  <h4>All code in GitHub that is linked above</h4>
</div>

<ProjectCard 
  title="Football/Soccer Data Searcher"
  description= "• Launched a fully functional web application that streamlined soccer data access, currently utilized by over
members of the UIS soccer Team; provides a centralized platform for users.
• Engineered a comprehensive soccer data lookup tool that consolidated over 50,000 historical records,
empowering users to explore player statistics and team performance, significantly enhancing the research.
• Implemented an interactive front-end utilizing HTML, CSS, EJS, and Bootstrap, enabling users to easily
query for their desired data. Integrated a Node and Express JS backend with Axios to pull real-time data from
the football-data.org public API, establishing a reliable data source."
image1="/WebsiteScreenShots/FootballSearcherPics1.png"  
image2="/WebsiteScreenShots/FootballSearcherPics2.png"  
image3="/WebsiteScreenShots/FootballSearcherPics4.png"
/>
<ProjectCard 
  title="Movie Review Website"
  description="● Web App which allows multiple users to write, edit and delete show/movie reviews with ease.
● Has functionality to sort written reviews by rating, date added and by user that wrote the review.
● Built using Node and Express JS as a backend along with the front end written using React, Tailwind and
Bootstrap."
image1="/WebsiteScreenShots/MovieReviewPic1.png"  
image2="/WebsiteScreenShots/MovieReviewPic2.png"  
image3="/WebsiteScreenShots/MovieReviewPic3.png"
/>
<ProjectCard
  title="Ant Colony Simulation"
  description=" ● Engineered a dynamic ant-colony simulation using Java and Java Swing, successfully applying MVC
 and Object-Oriented principles; project enhanced understanding of algorithm efficiency and achieved a
 speed increase of 150% through the use of differing data structures and algorithms.
 ● The colony created consist of a queen and her brood, which will have workers
 ● to gather food and scout the terrain surrounding the colony and soldiers to protect the colony.
 from enemies(Bala ants). The colony will start off with only the queen and a few workers and soldiers.
 ● Overtime the colony will expand to function like a real ant colony, to a limited extent.
 ● Colony comes with different buttons and modes which influence the colony differently"
  image1="/antsimpic1.jpg"  
  image2="/antsimpic2.jpg"  
  image3="/antsimpic3.jpg"
  />
</section>


{/* Contact Section */}
  <section id= "contact"> 
    <Contact/>
  </section>
  </div>
  )
}
export default Home;