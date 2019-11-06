import React from 'react';

const FilmPoster = (props) => {

  let {posterUrl} = props;

  return (
    <img src={'https://image.tmdb.org/t/p/w780/'+posterUrl} alt="" />
  )
}

export default FilmPoster;
