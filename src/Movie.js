import React, {Component} from 'react';
import './Movie.css';

class Movie extends Component{
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
    render(){
        return(
            <img src={this.props.poster} alt={this.props.title} />
        )
    }    
}


export default Movie;