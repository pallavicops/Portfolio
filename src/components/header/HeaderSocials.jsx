import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'
function HeaderSocials() {
  return (
    <div className='header_socials'>
        
      <a href="https://www.linkedin.com/in/pallavi-kumari-a07869200/" target='_blank'><BsLinkedin/></a>
      <a href="https://github.com/pallavicops" target='_blank'><FaGithub/></a> 
      <a href="https://dribbble.com/pallvicops" target='_blank'><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocials
