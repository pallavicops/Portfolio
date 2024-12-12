import React from 'react'
import IM1 from '../../assets/p1.png'
import IM2 from '../../assets/p2.png'
import IM3 from '../../assets/p3.png'
import IM4 from '../../assets/p4.png'
import IM5 from '../../assets/p5.png'
import IM6 from '../../assets/p6.png'
import IM7 from '../../assets/p7.png'
import IM8 from '../../assets/p8.png'
import IM9 from '../../assets/p9.png'
import IM10 from '../../assets/p10.png'
import {FaAward} from 'react-icons/fa'

import './portfolio.css'

function Portfolio() {

const [seeAll, setSeeAll] = React.useState(false);



  return (
    <>
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
         <img src={IM10} alt="" />
        </div>
        <h3>KeyFury</h3>
        <div className="portfolio_item-cta">
           
         <a href="https://github.com/pallavicops/keyfury" className='btn'>Github</a>
         <a href="https://keyfury.netlify.app/" className='btn btn-primary' target='blank'>Live Demo</a>

        </div>
      </article>


      <article className='portfolio_item'>
        <div className="porifolio_item-image">
         <img src={IM7} alt="" />
        </div>
        <h3>Blog App </h3>
        <div className="portfolio_item-cta">
           
         <a href="https://github.com/pallavicops/appBlog" className='btn'>Github</a>
         <a href="https://github.com/pallavicops/appBlog" className='btn btn-primary' target='blank'>Live Demo</a>

        </div>
      </article>

      
      <article className='portfolio_item'>
        <div className="porifolio_item-image">
         <img src={IM9} alt="" />
        </div>
        <h3>Chat App</h3>
        <div className="portfolio_item-cta">
           
           <a href="https://github.com/pallavicops/chat-app" className='btn'>Github</a>
           <a href="https://github.com/pallavicops/chat-app" className='btn btn-primary' target='blank'>Live Demo</a>
  
          </div>
      </article>

      <article className='portfolio_item'>
        <div className="porifolio_item-image">
         <img src={IM6} alt="" />
        </div>
        <h3>Restaurant </h3>
        <div className="portfolio_item-cta">
           
         <a href="https://github.com/pallavicops/restaurent" className='btn'>Github</a>
         <a href="https://github.com/pallavicops/restaurent" className='btn btn-primary' target='blank'>Live Demo</a>

        </div>
      </article>

      <article className='portfolio_item'>
        <div className="porifolio_item-image">
         <img src={IM8} alt="" />
        </div>
        <h3>Breast Cancer Detection </h3>
        <div className="portfolio_item-cta">
           
         <a href="https://github.com/pallavicops/Breast-Cancer-detection" className='btn'>Github</a>
         <a href="https://github.com/pallavicops/Breast-Cancer-detection" className='btn btn-primary' target='blank'>Live Demo</a>

        </div>
      </article>

      

      <article className='portfolio_item'style={{display: seeAll ? 'block' : 'none'}}>
        <div className="porifolio_item-image">
         <img src={IM2} alt="" />
        </div>
        <h3>Sullabus Content System</h3>
         
        <div className="portfolio_item-cta">
           
           <a href="https://github.com/pallavicops/ise_notes" className='btn'>Github</a>
           <a href="https://github.com/pallavicops/ise_notes" className='btn btn-primary' target='blank'>Live Demo</a>
  
          </div>
      </article>
      <article className='portfolio_item'style={{display: seeAll ? 'block' : 'none'}}>
        <div className="porifolio_item-image">
         <img src={IM3} alt="" />
        </div>
        <h3>NaukariTak</h3>
        <div className="portfolio_item-cta">
           
           <a href="https://github.com/iamabhishekthakur/Naukari-Tak" className='btn'>Github</a>
           <a href="https://play.google.com/store/apps/details?id=dev.abhishekthakur.quiz" className='btn btn-primary' target='blank'>Live Demo</a>
  
          </div>
      </article>
      <article className='portfolio_item'style={{display: seeAll ? 'block' : 'none'}}>
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

   <button style={{marginLeft:'65rem', }} className='btn btn-primary' onClick={() => setSeeAll(!seeAll)}>{seeAll ? 'See Less' : 'See All'}</button>
  </>
  )
}

export default Portfolio
