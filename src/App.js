import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


class App extends Component {

  // Render : componentWillMount() -> render() -> componentDidMount()
  // Update : componentWillReceiveProps() -> shouldComponentUpdate()-> componentWillUpdate() -> render() -> componentDidUpdate()
  state = {
    greeting: 'hello!',
    movies: [
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
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies: [
          ...this.state.movies,
          {
            title:'Transpotting',
            poster:'https://homemcr.org/app/uploads/2011/04/Trainspotting-781x460.jpg',
          }
        ]
      })
    }, 5000)
  }

  render() {
    return (
      <div className="App">
      {this.state.greeting}
        {this.state.movies.map( (movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    )
  }
}

export default App;
