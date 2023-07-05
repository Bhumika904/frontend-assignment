import React,{useState} from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../../../Assets/Images/logo.png'
import bangle from '../../../Assets/Images/bangle.png'
import '../../../Assets/CSS/Navbar.css'
import * as AIicons  from "react-icons/ai";
import * as Bsicons  from "react-icons/bs";
import * as IOicons  from "react-icons/io";
import * as BIicons  from "react-icons/bi";
export default function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  return (
    <div>
      <div className='wholeContainer'>
        <div className='topContainer'>
          <div className='contactss'>
            <IOicons.IoIosCall size={15}/>
            <label>025-543211</label>
          </div>
          <div className='storeName'>
          <img src={logo} width={`100px`}/>
          <label>Isharya Gold Store</label>
        </div>
          <div className='rates'>
            <label>Gold Rate: Rs. 9,349.50</label>
          </div>
          
          <div className='login' >
          <Link to='/login' style={{ textDecoration: "none" }}> 
            <BIicons.BiSolidUser size={15}/>
              <label style={{cursor:'pointer'}}>login</label>
              </Link>
            </div>
        </div>
       
      </div>
        <nav className="navbar">
      <div className="container">
        <div className="logo">
        <Link to='/' style={{ textDecoration: "none" }}>   
       <img src={bangle} width={'90px'}/>
       </Link>  
       <div className='search'>
       <Bsicons.BsSearchHeart size={20} className='searchbutton'/>
            <input type='search'/>
        </div>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
        <AIicons.AiOutlineAlignLeft size={60}/>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Diamond</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Gold</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Nepal Traditional </NavLink>
            </li>
            <li>
              <NavLink to="/about">Silver</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Collections</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}
