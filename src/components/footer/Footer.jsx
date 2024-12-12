import React from 'react'
import './footer.css'
import {RiLinkedinFill} from 'react-icons/ri'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

function Footer() {
  return (
   <footer>
    <a href="#" className='footer_logo'>PALLAVI KUMARI</a>
    <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
     
    </ul>
    <div className="footer_socials">
      <a href="https://www.linkedin.com/in/pallavi-kumari-a07869200/"><RiLinkedinFill/></a>
      <a href="https://www.instagram.com/p_a_ll_a_v_ithakur/"><BsInstagram/></a>
      <a href="https://twitter.com/Pallavi84939831"><BsTwitter/></a>
    </div>
   </footer>
  )
}

export default Footer
