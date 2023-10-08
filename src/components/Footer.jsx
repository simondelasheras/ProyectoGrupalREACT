import React from 'react'
import styled from "styled-components"
import "./footer/footer.css"
import {FaFacebookF} from "react-icons/fa"
import {BiLogoInstagramAlt} from "react-icons/bi"
import {BiLogoTwitter} from "react-icons/bi"

function Footer() {
  return (

<footer>
    <a href='#' className='footer_logo'> Power Sport </a>

<ul className='permalinks'>
    <li>  <a href='#'> Home</a>  </li>
    <li>  <a href='#about'> About</a> </li>
    <li>  <a href='#experoence'> Expeirience</a> </li>
    <li>  <a href='#services'> Servicies</a> </li>
    <li>  <a href='#porfolio'> Porfolio</a> </li>
    <li>  <a href='#testimonials'> Testimonials</a> </li>
    <li>  <a href='#contact'> Contact</a> </li>


</ul>


  
  <div className='footer_socials'>
<a href='https://facebook.com'> <FaFacebookF/> </a>
<a href='https://instagram.com'> < BiLogoInstagramAlt/>  </a>
<a href='https://twitter.com'> <BiLogoTwitter/> </a>

  </div>
  
  <div className='footer_copyright'>
    <small> &copy; Power Sport GYM </small>

  </div>
  
  
  </footer>

    
  )
}

export default Footer
