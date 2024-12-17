import React from "react";
import styles from "../styles/ProjectCard.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ensure Bootstrap JS is loaded

const ProjectCard = (props) => {
  return (
    <div className={styles.container}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      {/* Bootstrap Carousel */}
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={props.image1} className="d-block w-100" alt="Project 1" />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={props.image2} className="d-block w-100" alt="Project 2" />
          </div>
          <div className="carousel-item">
            <img src={props.image3} className="d-block w-100" alt="Project 3" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
