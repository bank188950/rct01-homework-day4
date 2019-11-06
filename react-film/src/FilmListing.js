import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmListing extends Component {

  state = {
    filter: "all"
  }

  handleFilterClick = (choose) => {
    this.setState({filter:choose})
  }

  render() {

    let allFilms;
    let faves = this.props.faves;
    let check_faves = [];
    
    faves.forEach(element => {
      check_faves.push(element.id);
    });

    if(this.state.filter === "all"){
      
      allFilms = this.props.films.map( (film, index) => ( 
        <FilmRow film={film} key={film.id} onFaveToggle={() => this.props.onFaveToggle(film)} isFave={check_faves.includes(film.id)} onDetailsClick={() => this.props.onDetailsClick(film)} />
      ))

    } else {
      
      allFilms = this.props.faves.map( (film, index) => ( 
        <FilmRow film={film} key={film.id} onFaveToggle={() => this.props.onFaveToggle(film)} isFave={check_faves.includes(film.id)} onDetailsClick={() => this.props.onDetailsClick(film)} />
      ))

    }

    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick("all")}>
            ALL
            <span className="section-count">{this.props.films.length}</span>
          </div>
          <div className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick("faves")}>
            FAVES
            <span className="section-count">{this.props.faves.length}</span>
          </div>
        </div>

        {allFilms}
      </div>
    );
  }
}

export default FilmListing;
