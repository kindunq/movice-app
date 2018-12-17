import React, {Component} from 'react';
import './Movie.css';

class Movie extends Component{
    render(){
       return(
           <div>
                <MoviePoster/>
                <h1>hello this is a movie</h1>
            </div>
        )
    }
}


class MoviePoster extends Component {
    render(){
        return(
            <img src="http://pbs.twimg.com/media/CQrmQp5WgAAWtQC.jpg" alt="헝거게임"/>
        )
    }    
}


export default Movie;