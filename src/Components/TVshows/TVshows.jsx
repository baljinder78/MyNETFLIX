import React from 'react';
import MovieSlider from '../MoviesSlider/MovieSlider';
const Tvshows = () => {
  return (
    <>
      <MovieSlider type={'upcoming'} />
      <MovieSlider type={'now_playing'} />
      <MovieSlider type={'top_rated'} />
      <MovieSlider type={'popular'} />
    </>
  );
};

export default Tvshows;
