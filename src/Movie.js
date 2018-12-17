import React, {Component} from 'react';
import propTypes from 'prop-types';
import './Movie.css';

class Movie extends Component{
    static propTypes = {
        title: propTypes.string.isRequired,
        poster: propTypes.string.isRequired
    }
    render(){
       return(
           <div>
                <MoviePoster poster={this.props.poster} title={this.props.title}/>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}


class MoviePoster extends Component {
    static propTypes = {
        title: propTypes.string.isRequired,
        poster: propTypes.string.isRequired
    }
    render(){
        return(
            <img src={this.props.poster} alt={this.props.title} />
        )
    }    
}


export default Movie;