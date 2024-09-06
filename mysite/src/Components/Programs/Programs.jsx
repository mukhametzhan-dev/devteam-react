import React from 'react'
import './Programs.css'
import first from '../../assets/first.jpg'
import second from '../../assets/2.jpeg'
import third from '../../assets/third.jpg'
import first_icon from '../../assets/first-icon.png'
import second_icon from '../../assets/second-icon.png'
import third_icon from '../../assets/third-icon.png'

const Programs = () => {
  return (
    <div > 
        <div className="programs" name="programs">
            <div className="program">
                <img src={first} alt
                ="first" />
                <div className='caption'>
                    <p>Frontend</p>
                    <img src={first_icon} alt='first_icon' />
                </div>
                </div>
            <div className="program" >
                <img src={second} alt
                ="second" />
                                <div className='caption'>
                    <p>Backend</p>
                    <img src={second_icon} alt='second_icon' />
                </div>
                </div>
            <div className="program" >
                <img src={third} alt
                ="third" />
                                <div className='caption'>
                    <p>Cybersecurity</p>
                    <img src={third_icon} alt='third_icon' />
                    </div>


                </div>
                </div>
    </div>
  )
}

export default Programs