import * as React from 'react';
import styles from "../styles/Home.module.css";
import ProjectCard from './ProjectCard';
import HeaderCard from './HeaderCard';

function Home(){
  return (
    <div>
  <section id= "home">
  <HeaderCard/> 
  </section>
  <br></br>

  <section id= "About"> 
</section>

 <section id= "Projects"> 
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

<br></br>
<ProjectCard 
  title="Football/Soccer Data Searcher"
  description= "• Launched a fully functional web application that streamlined soccer data access, currently utilized by over
members of the UIS soccer Team; provides a centralized platform for users.
• Engineered a comprehensive soccer data lookup tool that consolidated over 50,000 historical records,
empowering users to explore player statistics and team performance, significantly enhancing the research.
• Implemented an interactive front-end utilizing HTML, CSS, EJS, and Bootstrap, enabling users to easily
query for their desired data. Integrated a Node and Express JS backend with Axios to pull real-time data from
the football-data.org public API, establishing a reliable data source."
image1="/WebsiteScreenShots/MovieReviewPic2.png"  
image2="/WebsiteScreenShots/MovieReviewPic3.png"  
image3="/WebsiteScreenShots/MovieReviewPic4.png"
/>
</section>


  <section id= "Contact"> 
  </section>
  </div>
  )
}
export default Home;