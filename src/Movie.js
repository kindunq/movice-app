import React, {Component} from 'react';
import propTypes from 'prop-types';
import './Movie.css';

class Movie extends Component{
    static propTypes = {
        title: propTypes.string.isRequired,
        poster: propTypes.string.isRequired,
        genres: propTypes.string.isRequired,
        synopsis: propTypes.string.isRequired
    }
    render(){
       return(
           <div className="Movie">
                <div className="Movie__Columns">
                    <MoviePoster poster={this.props.poster} title={this.props.title}/>
                </div>
                <div className="Movie__Columns">
                    <h1>{this.props.title}</h1>
                    <div className="Movie__Genres">
                         {this.props.genres.map ((genre, index) => <MovieGenres genres={genre} key={index} /> )}
                    </div>
                </div>
                
            </div>
        )
    }
}


class MovieGenres extends Component{
    render(){
        return(
            <span className="Movie__Genres">{this.props.genres}</span>
        )
    }    
}


class MoviePoster extends Component {
    static propTypes = {
        title: propTypes.string.isRequired,
        poster: propTypes.string.isRequired,
        genres: propTypes.string.isRequired,
        synnopsis: propTypes.string.isRequired
    }
    render(){
        return(
            <img src={this.props.poster} alt={this.props.title} />
        )
    }    
}


export default Movie;