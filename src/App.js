import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const moviesTitles =[
  'Matrix',
  'Full Metal Jaket',
  'Oldboy',
  'Star Wars'
]

const movieImages =[
  'https://cdn3-www.comingsoon.net/assets/uploads/2018/03/dee4528e57d45839b54d53d0ea27c010.jpg',
  'https://cinema.cornell.edu/Fall2018/images/full-metal-jacket.jpg',
  'https://i.kinja-img.com/gawker-media/image/upload/s--lGW5m0gy--/c_scale,f_auto,fl_progressive,q_80,w_800/i2eoqko3y4azntzc6fon.jpg',
  'https://cdn3.movieweb.com/i/article/IwOYVaoJz2xThk854h3ybec9UYm9xt/798:50/Star-Wars-9-Rumor-Darth-Vader-Return.jpg'
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={moviesTitles[0]} poster={movieImages[0]}/>
        <Movie title={moviesTitles[1]} poster={movieImages[1]}/>
        <Movie title={moviesTitles[2]} poster={movieImages[2]}/>
        <Movie title={moviesTitles[3]} poster={movieImages[3]}/>
      </div>
    )
  }
}

export default App;
