import React from 'react'
import IM1 from '../../assets/p1.png'
import IM2 from '../../assets/p2.png'
import IM3 from '../../assets/p3.png'
import IM4 from '../../assets/p4.png'
import IM5 from '../../assets/p5.png'

import './portfolio.css'

function Portfolio() {
  return (
   <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>
    <div className="container portfolio_container">
      <article className='portfolio_item'>
        <div className="porifolio_item-image">
         <img src={IM1} alt="" />
        </div>
        <h3>Personal portfolio </h3>
        <div className="portfolio_item-cta">
           
         <a href="https://github.com/pallavicops/FirstStepInReact" className='btn'>Github</a>
         <a href="https://github.com/pallavicops/FirstStepInReact" className='btn btn-primary' target='blank'>Live Demo</a>

        </div>
      </article>
      <article className='portfolio_item'>
        <div className="porifolio_item-image">
         <img src={IM2} alt="" />
        </div>
        <h3>Sullabus Content System</h3>
         
        <div className="portfolio_item-cta">
           
           <a href="https://github.com/pallavicops/ise_notes" className='btn'>Github</a>
           <a href="https://github.com/pallavicops/ise_notes" className='btn btn-primary' target='blank'>Live Demo</a>
  
          </div>
      </article>
      <article className='portfolio_item'>
        <div className="porifolio_item-image">
         <img src={IM3} alt="" />
        </div>
        <h3>NaukariTak</h3>
        <div className="portfolio_item-cta">
           
           <a href="https://github.com/iamabhishekthakur/Naukari-Tak" className='btn'>Github</a>
           <a href="https://play.google.com/store/apps/details?id=dev.abhishekthakur.quiz" className='btn btn-primary' target='blank'>Live Demo</a>
  
          </div>
      </article>
      <article className='portfolio_item'>
        <div className="porifolio_item-image">
         <img src={IM4} alt="" />
        </div>
        <h3>ClipBoard Activity</h3>
        <div className="portfolio_item-cta">
           
           <a href="https://github.com/pallavicops/ClipBoardActivity" className='btn'>Github</a>
           <a href="https://github.com/pallavicops/ClipBoardActivity" className='btn btn-primary' target='blank'>Live Demo</a>
  
          </div>
      </article>
      <article className='portfolio_item'>
        <div className="porifolio_item-image">
         <img src={IM5} alt="" />
        </div>
        <h3>Currency Converter</h3>
        <div className="portfolio_item-cta">
           
           <a href="https://github.com/pallavicops/ClipBoardActivity" className='btn'>Github</a>
           <a href="https://github.com/pallavicops/ClipBoardActivity" className='btn btn-primary' target='blank'>Live Demo</a>
  
          </div>
      </article>
     
    </div>
   </section>
  )
}

export default Portfolio
