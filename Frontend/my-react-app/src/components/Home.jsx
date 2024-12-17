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
  title="Project 1"
  description="Description of Project 1"
  image1="/IMG_0111.jpg"  
  image2="/IMG_0135.jpg"  
  image3="/IMG_0136.JPG"
  />

  </section>


  <section id= "Contact"> 
  </section>
  </div>
  )
}
export default Home;