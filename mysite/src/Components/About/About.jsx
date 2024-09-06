import React from 'react'
import './About.css'
import aboutjpg from '../../assets/handsome-man-posing.jpg'
import play from '../../assets/play.png'

const About = () => {
  return (
    <div className="about"> 
    <div className="about-left"> 
    <img src={aboutjpg} alt="about" className="about-img" />
    <img src={play} alt="play" className="about-play" />

    </div>

    <div className="about-right">
      <h2> 
      About Us </h2>
      <p> 
        <h1> More than 100+ of successfully completed projects.</h1> We are a team of dedicated professionals who are always ready to help you.
        We provide a wide range of services, from web development to digital marketing. We are always ready to help you with your project.
        It doesn't matter if you are a small business or a large corporation, we are always ready to serve you. 
        </p> </div>

    </div>
  )
}

export default About