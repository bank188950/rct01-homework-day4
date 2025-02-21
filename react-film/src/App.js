import React, { Component } from 'react';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';

class App extends Component {
  
  state = {
    films: TMDB.films,
    faves: [],
    current: {} 
  }

  handleFaveToggle = film => {

    let faves = [...this.state.faves];
    let filmIndex = faves.indexOf(film); 

    if(filmIndex < 0) {
      faves.push(film);
    } else {
      faves.splice(filmIndex, 1);
    }

    this.setState({faves});

  }

  handleDetailsClick = film => {
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`;

    fetch(url)
    .then((response) => {
      return response.json();
    }).then((data) => {
      this.setState({current: data});
    });
  }


  render() {
    return (
      <div className="film-library">
        <FilmListing films={this.state.films} faves={this.state.faves} onFaveToggle={this.handleFaveToggle} onDetailsClick={this.handleDetailsClick} />
        <FilmDetails film={this.state.current} />
      </div>
    );
  }
}

export default App;
