import React from "react";
import Navbar from "./Navbar/Navbar";
import MovieSlider from "./MoviesSlider/MovieSlider";
const App=()=>
{
return (
  <>
    <Navbar />
    <MovieSlider type={'upcoming'} />
    <MovieSlider type={'now_playing'} />
    <MovieSlider type={'top_rated'} />
    <MovieSlider type={'popular'} />
  </>
);
} 

export default App;