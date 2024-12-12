import React from 'react'
import './about.css'
import ABOUTME from '../../assets/aboutme.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {FaRegFolderOpen} from 'react-icons/fa'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
     
      <div className='container about_container'>
      
      <div className="about_me">
    <div className="about_me_image">
      <img src={ABOUTME} alt="about image" />
    </div>
      </div>
      <div className="about_content">
        <div className="about_cards">
          <article className='about_card'>
            <FaAward className='about_icon'/>
            <h5>Experience</h5>
            <small>0 years working</small>
          </article>
          <article className='about_card'>
            <FiUsers className='about_icon'/>
            <h5>Clients</h5>
            <small>no clients</small>
          </article>
          <article className='about_card'>
            <FaRegFolderOpen className='about_icon'/>
            <h5>Projects</h5>
            <small>6 completed</small>
          </article>
         

        </div>
        <p>A motivated developer with experience in building and deploying applications across front-end, back-end, mobile, and web 
        environments. Eager to contribute to impactful projects and grow through continuous learning and collaboration.
</p>

<a href="#contact" className='btn btn-primary'>Let's Talk</a>

      </div>
      </div>

    </section>
  )
}

export default About
