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
            <small>4 completed</small>
          </article>
         

        </div>
        <p>Hello there! I'm a passionate engineering student with a strong affinity for Information Science. I excel in technologies like Flutter, React, and Python, seamlessly blending them with engineering principles. I build cross-platform applications, create engaging interfaces, and elegantly solve complex problems. Backed by a solid engineering foundation, I'm poised to innovate across various domains. Join me on this journey of merging technology and engineering. Let's shape the future together.</p>
<a href="#contact" className='btn btn-primary'>Let's Talk</a>

      </div>
      </div>

    </section>
  )
}

export default About
