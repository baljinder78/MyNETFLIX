import React, { useState, useEffect } from 'react';

//api function
import {Moviedata} from "../../api";

//material ui
import Badge from '@material-ui/core/Badge';
import CircularProgress from '@material-ui/core/CircularProgress';

//Rating component
import Ratingcompo from './Rating';

//swiper import
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

//Swiper css
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

//css
import './MovieSlider.css';

import testposter from '../../Images/testposter.jpg';

//swiper use
SwiperCore.use([Navigation, Pagination, Scrollbar]);

//main component
const MovieSlider = ({type}) => {
  //movies array
  const [movies, setmovies] = useState({});
  let arr=[];
  useEffect(()=> {
    async function fetchdata(){
        setmovies(await Moviedata({type}))
    }
    fetchdata();
  },[]);

  return (
    <div className='movie_Slider'>
      <div className='movie_slider_header'>
        <h1>{type}</h1>
        <h3 className="movieslider_showall">show All</h3>
      </div>
      <div className='movie_slider_allmovies'>
        {movies.results != undefined ? (
          <Swiper slidesPerView={5} navigation>
            {movies.results.map((movie, i) => (
              <SwiperSlide key={i}>
                <div className='movie_slider_card'>
                  {movie.adult ? (
                    <Badge badgeContent={'+18'} color='error'>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt='test'
                      />
                    </Badge>
                  ) : (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt='test'
                    />
                  )}

                  <div className='movie_slider_card_moviedet'>
                    <h2 className='movie_slider_movie_title'>
                      {movie.original_title}
                    </h2>
                    <p className='movie_slider_movie_date'>
                      {movie.release_date}
                    </p>
                    <Ratingcompo rating={movie.vote_average} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <CircularProgress/>
        )}
      </div>
    </div>
  );
};
export default MovieSlider;
