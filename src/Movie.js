import React, {Component} from 'react';
import propTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'
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
                <div className="Movie__Column Movie_poster_wrap">
                    <MoviePoster poster={this.props.poster} title={this.props.title}/>
                </div>
                <div className="Movie__Column">
                     <h3>rating {this.props.rating}</h3>
                    <h1>{this.props.title}</h1>
                    <div className="Movie__Genres">
                         {this.props.genres.map ((genre, index) => <MovieGenres genres={genre} key={index} /> )}
                    </div>
                    <div className="Movie__Synopsis">
                       <LinesEllipsis
                        text={this.props.synopsis}
                        maxLine='3'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'
                        />   
                    </div>
                    <div className="Movie__torrents__title">
                        Torrent Download link
                    </div>
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
            <li><a className="Movie__torrents__Link" href={this.props.torrents}>Link{this.props.index+1} </a> </li>
        )
    }    
}

class MovieGenres extends Component{
    static propTypes = {
        genres: propTypes.string.isRequired
    }
    render(){
        return(
            <span className="Movie__Genre">{this.props.genres}  </span>
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
            <img src={this.props.poster} alt={this.props.title} title={this.props.title} className="Movie__Poster" />
        )
    }    
}


export default Movie;