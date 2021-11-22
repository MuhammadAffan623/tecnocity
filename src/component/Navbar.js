import React,{useState} from 'react'
import { NavLink } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import logo from '../images/logo.jpeg'
import "../Styles/Navbar.css"

function Navbar() {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    const clicked =() => {setIsNavCollapsed(!isNavCollapsed)}

    
    return (
       
        <>
        
        <nav className= "navbar  navbar-expand-md navbar-light bg-light fw-bold ">
        <div className="container-fluid  ">
            <a className="navbar-brand  fw-900 " href="/">
                <img src={logo} alt='logo' height='70px'/><span> TechnoCity</span></a>
            <button className="navbar-toggler me-2 " type="button" data-bs-toggle="collapse" data-bs-target="#navmenu"
            aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
            <span className="navbar-toggler-icon "></span>
            </button>
            <div className={`${isNavCollapsed ? 'collapse' : 'navbar-collapse '} navbar-collapse`} id="navmenu">
            <ul className="navbar-nav text-center ms-auto ">
                <li className="nav-item pe-md-4 pe-lg-5 text-primary">
                <NavLink className="nav-link text-primary" exact activeClassName='text-light menuactive' to='/' onClick={()=>clicked()}>Home</NavLink>
                </li>
                <li className="nav-item pe-md-4 pe-lg-5 text-primary">
                <NavLink className="nav-link text-primary" exact activeClassName='text-light menuactive' to='/projects' onClick={()=>clicked()} >Projects</NavLink>

                </li>
                <li className="nav-item pe-md-4 pe-lg-5 ">
                <NavLink className="nav-link text-primary" exact activeClassName='text-light menuactive' to='/services' onClick={()=>clicked()}>Services</NavLink>
                
                </li>
                <li className="nav-item pe-md-4 pe-lg-5">
                <NavLink className="nav-link text-primary" exact activeClassName='text-light menuactive' to='/product' onClick={()=>clicked()}>Product</NavLink>

                </li>
                <li className="nav-item pe-md-4 pe-lg-5 ">
                <NavLink className="nav-link text-primary" exact activeClassName='text-light menuactive' to='/contact' onClick={()=>clicked()}>Contact</NavLink>

                </li>
            
            </ul>
            </div>
        </div>
        </nav>
    
        
        </>
        
    )
}

export default Navbar
