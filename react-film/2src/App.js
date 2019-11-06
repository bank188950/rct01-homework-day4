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

  handleFilmRowToggle = film => {
    console.log(film);
  }

  render() {
    return (
      <div className="film-library">
        <FilmListing films={this.state.films} faves={this.state.faves} onFaveToggle={this.handleFaveToggle} onFilmRowToggle={this.handleFilmRowToggle} />
        <FilmDetails films={this.state.films} current={this.state.current}  />
      </div>
    );
  }
}

export default App;
