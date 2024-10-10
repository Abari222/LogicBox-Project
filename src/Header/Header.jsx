// import { useState } from "react";
import "./Header.css";
import {CgMenuGridR} from "react-icons/cg";
import {Link, NavLink} from "react-router-dom";
import Logo from '../assets/Logo.jpg';




const Header = () => {

  // const {}= useState()

  return (
    <div className="Hader-Container">

        <div className="Header-Logo">
          <img src={Logo} alt="Logo" style={{height:'50px'}} />
        </div>
      
      <section className="Header-Navs">
        <NavLink to="/" style={({isActive})=> isActive ? {color:"#295249"}: {color: "#5688c7"}}>Service Portfolio</NavLink>
        <NavLink to="/Our Offices" style={({isActive})=> isActive ? {color:"#295249"}: {color:"#5688c7"}}>Our Offices</NavLink>
        <NavLink to="/FAQs" style={({isActive})=> isActive ? {color:"#295249"}: {color:"#5688c7"}}>FAQs</NavLink>
        <NavLink to="/About us" style={({isActive})=> isActive ? {color:"#295249"}: {color:"#5688c7"}}>About us</NavLink>
        <NavLink to="/Contact us" style={({isActive})=> isActive ? {color:"#295249"}: {color:"#5688c7"}}>Contact us</NavLink>
      </section>
      <section>
      <div className="Header-Button">
        <button>Sign up</button>
      </div>
      <div className="Header-Burger">
        <CgMenuGridR />
      </div>
      </section>
    </div>
  )
}


export default Header