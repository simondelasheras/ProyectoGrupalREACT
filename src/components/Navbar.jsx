"use client"

import React, {useState} from "react"
import styled from "styled-components"
import BurgerButton from "./BurgerButton"
import Image from "next/image"
import logo from "../../public/images/logo.jpeg"
import { NavDropdown } from "react-bootstrap"




function Navbar() {
  const [clicked, setClicked] = useState(false)

  const handleClick =  () => {
    setClicked(!clicked)
  }
    return (
        <>
        <NavContainer>
          <div>
            <Image className="img" src={logo} alt="Gym" height={200} width={200}></Image>
          </div>
   


            <div className={`links ${clicked ? 'active' : ''}`}>
<ul className="permalinks"> 


              <a href="/">Home</a>
              <NavDropdown title= "Shops">
<NavDropdown.Item href="Products/man">Man</NavDropdown.Item>
<NavDropdown.Item href="Products/women">Women</NavDropdown.Item>

</NavDropdown>



              <NavDropdown title= "Abouts">
<NavDropdown.Item href="Products/us">Us</NavDropdown.Item>
</NavDropdown>

<NavDropdown title= "Rutin">
<NavDropdown.Item href="Products/curso1">Curso 1</NavDropdown.Item>
<NavDropdown.Item href="Products/curso2">Curso 2</NavDropdown.Item>
<NavDropdown.Item href="Products/curso 3">Curso 3</NavDropdown.Item>
<NavDropdown.Item href="Products/curso 4">Curso 4</NavDropdown.Item>
</NavDropdown>

              
              <a href="/">Contact</a>
              </ul>
            </div>

           









            <div className="burger"> 
            <BurgerButton clicked={clicked} handleClick={handleClick} />
            </div>
            <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
        </NavContainer>
        
        
        </>

    )
}

export default Navbar



const NavContainer = styled.nav`

padding: 4rem;
background-color: black;
display:flex;
align-items: center;
justify-content: space-between;
a{
  color:white;
  text-decoration: none;
  margin-right: 1rem;
}

.img{
  border-radius: 50%;
}


.links{
  position: absolute;
  top: -700px;
  left: -2000px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  a{
    color: white;
    font-size: 2rem;
    display: block;
  }

  @media(min-width: 768px){
    position: initial;
    margin: 0;
    a{
      font-size: 1rem;
      color: #c72929;
      display:inline-block;
    }
    display: block;

  }
}

.links.active{
  width: 80%;
  display: block;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  top: 40%;
  left: 0;
  right: 0;
  text-align: center;
  a{
    font-size: 2rem;
    margin-top: 1rem;
    color: #c72929;
   }
  
}
.burger{
  @media(min-width: 768px){
    display: none;
  
}



} `



const BgDiv = styled.div`
background-color: #222;
position: absolute;
top: -2000px;
left: -1000px;
width: 100%;
height: 100%;
z-index: -1;
transition: all .6s ease ;

&.active{
  border-radius: 0 0 80% 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
} 


`

