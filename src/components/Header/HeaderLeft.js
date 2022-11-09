import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../Images/LOGOPNG2.png'
import './Header2.css';
import HomeIcon from '@mui/icons-material/Home';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import MovieIcon from '@mui/icons-material/Movie';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const headerleft = (props) => {

    return (

    <nav className="navbar2">
            <ul>
                <div className="picwithtext">
                    <a><HomeIcon style={{color:"white"}}/></a>
                    <a href="#"><li>Home</li></a>
                </div>

                <div className="picwithtext">
                <a><LocalMoviesIcon style={{color:"white"}}/></a>
                    <a href="/movies"><li>Movies</li></a>
                </div>

                <div className="picwithtext">
                <a><MovieIcon style={{color:"white"}}/></a>
                <a href="#"><li>Series</li></a>
                </div>
                
                <div className="picwithtext">
                <a><EmojiEventsIcon style={{color:"white"}}/></a>
                <a href="#"><li>Top IMDB</li></a>
                </div>
                
                <a href="#" className="outlaw"><li>Genre</li></a>
            </ul>
        <div className="footer" style={{color:"white"}}>
        ©FINKI.UKIM.MK
        </div>
    </nav>
    );
}

export default headerleft;