import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import { Link } from 'react-scroll'
export const Navbar = () => {

  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setSticky(true) : setSticky(false)})	
      // Если скролл больше 50px, то добавляем класс sticky, иначе удаляем
      

  },[])
  
  
  return (
     <nav className={`container ${sticky? 'container-dark' : ''}`}>  
     {/* /* Если sticky = true, то добавляем класс container-dark */}
        <img src = {logo} alt="logo" className='logo' />
        <span className='company-name'>Developers team</span>
        <ul>
        <li><Link className='btn' to="hero" smooth={true} duration={500} >Home</Link></li>
        <li><Link className='btn' to="about" smooth={true} duration={500} offset={-200}>About</Link></li>
        <li><Link className='btn' to="programs" smooth={true} duration={500} offset={-400}>Services</Link></li>
        <li><Link className='btn' to="contact" smooth={true} duration={800} offset={-200}>Contact</Link></li>
        <li><Link className='btn' to="testimonials" smooth={true} duration={1000} offset={-300}>Testimonials</Link></li>
        </ul>
    </nav>
  )
}
export default Navbar