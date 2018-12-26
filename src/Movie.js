import React, {Component} from 'react';
import propTypes from 'prop-types';
import './Movie.css';

class Movie extends Component{
    static propTypes = {
        title: propTypes.string.isRequired,
        poster: propTypes.string.isRequired,
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
                    <p className="Movie__Synopsis">
                       <span>{this.props.synopsis}</span>
                    </p>
                    <ul className="Movie__torrents">
                     {this.props.torrents.map ((torrents, index) => <Torrents torrents={torrents.url} key={index} index={index} /> )}
                    </ul>
                </div>
                
            </div>
        )
    }
}


class Torrents extends Component{
    render(){

        return(
            <li><a className="Movie__torrents__Link" href={this.props.torrents}>Link {this.props.index+1} </a> </li>
        )
    }    
}

class MovieGenres extends Component{
    static propTypes = {
        genres: propTypes.string.isRequired
    }
    render(){
        return(
            <span className="Movie__Genres">{this.props.genres}  </span>
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
            <img src={this.props.poster} alt={this.props.title} title={this.props.title} className="Movie_Poster" />
        )
    }    
}


export default Movie;