import React from "react";
import "./Movies.css";
import { Link } from 'react-router-dom';
const movies = (props) => {

    return (
        <main className="main">
            <div className="divider"></div>
            
            <div className="main-wrapper">
                <div className="card-sectionTrending">
                {props.movies.map((term) => {
                return (
                    <div className="card">
                        <div className="image">
                            <img src={term.movie_picture_url}/>
                        </div>
                        <div className="text-section">
                            {term.movie_name}
                        </div>
                    </div>

                );
            })
        }

                {/* </div>
                <div class="h1Combined">
            <h1 style={{color:"white"}}>Trending </h1><h1 style={{color:"red"}}>Zilla</h1>
            </div>
                
                <div className="card-sectionTrending">
                {props.movies.map((term) => {
                return (
                    <div className="card">
                        <div className="image">
                            <img src={term.movie_picture_url}/>
                        </div>
                        <div className="text-section">
                            {term.movie_name}
                        </div>
                    </div>
                );
            })
        } */}

                </div>
                <div class="h1Combined">
            <h1 style={{color:"white"}}>Rating </h1><h1 style={{color:"red"}}>Zilla</h1>
            </div>

            
            </div>
        </main>
    
    
    );
}

export default movies;