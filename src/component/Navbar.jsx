import React from 'react'
import {Link} from 'react-router-dom'
import logoimg from './commonCom/image/logoimg.jpg'

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg  bg-dark text-white">
      {/* // Container wrapper  */}
      <div className="container-fluid">
        
        <button
          type="button"
          className='btnNavbar navbar-toggler'
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
        >  <i class="fas fa-bars"></i>
          {/* <Link className="" to='/'></Link> */}
          
        </button>
    
        
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
      
          <ul className="navbar-nav me-auto mb-4 mb-lg-0 ">
          <li className="nav-item">
         
          <Link to='/' className="nav-link NavBtn text-white" href="#"> Ecom
          </Link>
       
            </li>
            <li className="nav-item">
              <Link to='/' className="nav-link text-white" href="#">Home</Link>
            </li>
            <li className="nav-item">
              <Link to ="/about" className="nav-link text-white" href="#">About</Link>
            </li>
            <li   className="nav-item">
              <Link to  = "/product" className="nav-link text-white" href="#">Product</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link text-white" href="#">Contact</Link>
            </li>
          </ul>     
        </div>
         
        <div className="d-flex align-items-center">
   
          <Link to='/cart' className="text-reset me-3" href="#">
            <i className="fas fa-shopping-cart"></i>
          </Link>
       
          <div className="dropdown">
            <a
              className="dropdown-toggle d-flex align-items-center hidden-arrow"
              href="#"
              id="navbarDropdownMenuAvatar"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src={logoimg}
                className="rounded-circle"
                height="25"
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuAvatar"
            >
              <li>
                <a className="dropdown-item" href="#">My profile</a>
              </li>
              <li>
                
              </li>
              <li>
                <a className="dropdown-item" href="#">Logout</a>
              </li>
            </ul>
          </div>
        </div>
          
      </div>
     
    </nav>
    </>
  )
}

export default Navbar