import { NavLink } from 'react-router-dom'
import React, { useState } from "react";


const Navbar = () => {

  const [click,setClick] = useState(false);

  const handleClick1 = () => setClick(!click);
 

  return (
    <>
    <nav className="navbar">
    <div className="nav-container">
      <NavLink exact to="/" className="nav-logo">
        Farmer Managment System
      
      </NavLink>
          {/* {FamEmp && ( */}
            <> <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick1}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/famadd"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick1}
              >
                Add Farmers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/farmerEmployeehome"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick1}
              >
                Manage Employees 
              </NavLink>
            </li>
            
          </ul>
          {/* <div className="nav-icon" onClick={handleClick1}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div><>
            
            </><div>
              <span className='bb'>{FamEmp.email}</span>
              <button className='dan' onClick={handleClick}>Log out</button>
            </div></>
            
          )} */}
          {/* {!FamEmp && (
            <div>
              <Link to="/login" className='danLink'>Farmer Managment Login</Link>
            </div>
          )} */}
        
      </></div>
      </nav>
      </>
  )
}

export default Navbar