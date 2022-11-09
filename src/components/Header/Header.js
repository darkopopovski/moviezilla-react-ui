import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../Images/LOGOPNG2.png'
import './Header.css';
import { HiUser} from "react-icons/hi";
const header = (props) => {

    return (

    <nav className="navbar">
        <div className="nav-left">
            <img src={logo} width="90"/>
            <div class="h1Combined2">
            <h1 style={{color:"white"}}>Movie</h1><h1 style={{color:"red"}}>Zilla</h1>
            </div>
        </div>
      
        <div className="right">
        <HiUser className="login"/>
        <a href="#"><li>Login</li></a>
        </div>
    </nav>
    );
}

export default header;