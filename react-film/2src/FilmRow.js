import React, { Component } from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';

class FilmRow extends Component {

  handleDetailsClick = () => {
    this.props.onFilmRowToggle();
  }

  render() {

    let {title,release_date,poster_path} = this.props.film;
    var year = new Date(release_date);
    return (
      <div className="film-row" onClick={this.handleDetailsClick} >
        <FilmPoster posterUrl={poster_path} />

        <div className="film-summary">
          <h1>{title}</h1>
          <p>{ year.getFullYear()}</p>
        </div>
        <Fave onFaveToggle={this.props.onFaveToggle} isFave={this.props.isFave} />

      </div> 
    );
  }
}

export default FilmRow;

