import React, { useEffect, useState } from "react";
import { ReactComponent as Logo } from "../../assets/netflix.svg";
import { Link, NavLink } from "react-router-dom";
import "./header.css";
import Img from "../../img/JLkRF8ZY_400x400.png";
export default function Header() {
  const [show, handleShow] = useState(false);
  const [flage, setFlage] = useState(false);
  const toggling =()=>{
    return flage ? setFlage(false) : setFlage(true)
  }
  let scroll = () => {
    if (window.scrollY > 100) {
      if (!show) handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);
  return (
    <div className={show ? `header  nav__black` : `header `}>
      <div className="container-nav">
        <a className="nav__logo" to="/">
          <Logo className="logo" />
        </a>
        <div className="responsiveList" onClick={()=>toggling()}>
          Browse
          <span className="arrow-avatar" to="/">
            <i className="fa-solid fa-caret-down"></i>
          </span>
        </div>
        {flage ?
        <div className='menu'>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/"
            onClick={()=> setFlage(false)}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/tvShows"
            onClick={()=> setFlage(false)}

          >
            TV Shows
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/movies"
            onClick={()=> setFlage(false)}

          >
            Movies
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/celeberties"
            onClick={()=> setFlage(false)}

          >
            Celebrities
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/myList"
            onClick={()=> setFlage(false)}

          >
            My List
          </NavLink>
        
        </div>
        :null}
        <div className="left">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/tvShows"
          >
            TV Shows
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/movies"
          >
            Movies
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/celeberties"
          >
            Celebrities
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/myList"
          >
            My List
          </NavLink>
        </div>
        <div className="options right">
          <span>
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            // className="option"
            to="/kids"
          >
            Kids
          </NavLink>
          <span>
            <i className="fa-solid fa-bell"></i>
          </span>
          <img src={Img} alt="" className="avatar" />
          <span className="arrow-avatar" to="/">
            <i className="fa-solid fa-caret-down"></i>
          </span>
        </div>
      </div>
    </div>
  );
}
