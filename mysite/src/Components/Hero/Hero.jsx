import React from 'react'
import './Hero.css'
import explore from '../../assets/explore.png'
export const Hero = () => {
  return (
    <div className='hero' id="hero" >
        <ul>
            <li>
        <h1>          We will implement all your ideas</h1></li>
        
        <li>
                <p className='under' > An experienced development team to solve all your coding related problems. Fully automate your tasks on internet. Collect information using parsing/scraping</p> </li>
                <li> <button className='main-btn' > Get Started  <img src={explore} className='explore' alt=''/></button> </li>

                 </ul>
                
                 </div>
  )
}
