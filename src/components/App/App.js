
import './App.css';
import { Component } from 'react';
import Header from '../Header/Header';
import background from '../Images/giphy33.webp';
import Movies from '../Movies/Movies';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Repository from '../../repository/Repository';
import HeaderLeft from '../Header/HeaderLeft';
class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
          movies: [],
          products: []
      }
  }

  render() {
          return (
            <Router >
                <HeaderLeft />
                <div className="App" style={{backgroundRepeat: "no-repeat",backgroundSize: "cover"}}>

                    <Header />
                    
           
                    <Routes >
                    <Route path = { "/home" } exact element = { < Movies movies = { this.state.movies }/>}/>
                                    </Routes> 
                     </div>
                    </Router >         
            );

        }

        componentDidMount() {
          this.fetchData()
      }

      fetchData = () => {
          this.loadMovies();
        
      }

      loadMovies = () => {
          Repository.fetchMovies()
              .then((data) => {
                  this.setState({
                      movies: data.data
                  })
              });
      }

  }



  export default App;