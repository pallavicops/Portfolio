import React from 'react'
import './experience.css'
import {BiSolidBadgeCheck} from 'react-icons/bi'
function Experience() {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_fronted">
          <h3>Frontend Developement</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BiSolidBadgeCheck className='experience_details-icon'/>
              <div><h4>HTML</h4>
              <small className='text-light'>Intermediate</small></div>
            </article>
            <article className='experience_details'>
              <BiSolidBadgeCheck className='experience_details-icon'/>
             <div>
             <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
             </div>
            </article>
            <article className='experience_details'>
              <BiSolidBadgeCheck className='experience_details-icon'/>
             <div>
             <h4>Tailwind CSS</h4>
              <small className='text-light'>Intermediate</small>
             </div>
            </article>
            <article className='experience_details'>
              <BiSolidBadgeCheck className='experience_details-icon'/>
              <div><h4>JavaScript</h4>
              <small className='text-light'>Intermediate</small></div>
            </article>
            <article className='experience_details'>
              <BiSolidBadgeCheck className='experience_details-icon'/>
              <div><h4>React</h4>
              <small className='text-light'>Intermediate</small></div>
            </article>
            <article className='experience_details'>
              <BiSolidBadgeCheck className='experience_details-icon'/>
              <div><h4>Flutter</h4>
              <small className='text-light'>Intermediate</small></div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
        <h3>Backend Developement</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BiSolidBadgeCheck className='experience_details-icon'/>
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BiSolidBadgeCheck className='experience_details-icon'/>
             <div>
             <h4>PHP</h4>
              <small className='text-light'>Intermediate</small>
             </div>
            </article>
            <article className='experience_details'>
              <BiSolidBadgeCheck className='experience_details-icon'/>
              <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience_details'>
              <BiSolidBadgeCheck className='experience_details-icon'/>
              <div>
              <h4>Python</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BiSolidBadgeCheck className='experience_details-icon'/>
              <div>
              <h4>Node JS</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience_details'>
              <BiSolidBadgeCheck className='experience_details-icon'/>
              <div>
              <h4>Express JS</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
