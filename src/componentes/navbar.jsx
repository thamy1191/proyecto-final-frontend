

import "../styles/añadir.css"

import { Link } from "react-router-dom";


function NavScrollExample() {

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" >
  <div className="container-fluid" >
    {/* <a className="navbar-brand" href="home" style={{color: "white"}}>Home </a> */}
    <Link 

     className="nav-link" style={{color: "white"}}
          to="/home">
          <p>Home</p>
        </Link>
       
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
       
         
        <li className="nav-item">

        <Link 
         className="nav-link" style={{color: "white"}}

          to="/suplementos"
         
        >
          <p>Suplementos</p>
        </Link>

          {/* <a className="nav-link"
          
          href="/Suplementos"
          
          style={{color: "white"}}>suplementos</a> */}
        </li>
        <li className="nav-item">
        
        
          {/* <a className="nav-link" href="/añadir" style={{color: "white"}}>Administracion</a> */}
          <Link
             className="nav-link" style={{color: "white"}}
          to="/añadir"
          
        >
          <p>Administracion</p>
        </Link>
        
       
        </li>
        <li className="nav-item">
         
         
          {/* <a className="nav-link" href="/contacto" style={{color: "white"}}>Contacto</a> */}
       
          <Link
             className="nav-link" style={{color: "white"}}
          to="/contacto"
          
        >
          <p>Contacto</p>
        </Link>
       
       
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="/login" style={{color: "white"}}>Cuenta</a> */}
       
          <Link
             className="nav-link" style={{color: "white"}}
          to="/login"
          
        >
          <p>Cuenta</p>
        </Link>
       
       
       
        </li>
        
        
      </ul>
    </div>
  </div>
</nav>
  );
}

export default NavScrollExample;

<img src="https://th.bing.com/th/id/OIP.kWJtGnZ0NjqYGUTOQfEz6gHaCe?rs=1&pid=ImgDetMain" alt="" />


      
  
  



