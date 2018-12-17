import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title:'Matrix',
    poster:'https://cdn3-www.comingsoon.net/assets/uploads/2018/03/dee4528e57d45839b54d53d0ea27c010.jpg',
  },
  {
    title:'Full Metal Jaket',
    poster:'https://cinema.cornell.edu/Fall2018/images/full-metal-jacket.jpg',
  },
  {
    title:'Oldboy',
    poster:'https://i.kinja-img.com/gawker-media/image/upload/s--lGW5m0gy--/c_scale,f_auto,fl_progressive,q_80,w_800/i2eoqko3y4azntzc6fon.jpg',
  },
  {
    title:'Star Wars',
    poster:'https://cdn3.movieweb.com/i/article/IwOYVaoJz2xThk854h3ybec9UYm9xt/798:50/Star-Wars-9-Rumor-Darth-Vader-Return.jpg',
  },
]

class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map( movie => {
          return <Movie title={movie.title} poster={movie.poster}/>
        })}
      </div>
    )
  }
}

export default App;
