import React,{useEffect, useState} from "react";
import { useParams } from "react-router";
import {Movieallinfo} from "../../api/index";
import "./Allinfo.css";
const AboutMovie=()=>
{
  const [moviedata,setMoviedata]=useState({});
  let {id}=useParams()
  useEffect(() => {
    console.log(id)

    const movie=async()=>{
        const data=await Movieallinfo({id});
        console.log(data);
        setMoviedata(data);
    }
    
movie()


  }, [])
    return (
      <>
        {
          <>
            <img
              class='backdrop_poster'
              src={`https://image.tmdb.org/t/p/original/${moviedata.backdrop_path}`}
            />
            <div class='about_movie'>
              <img
                class='poster'
                src={`https://image.tmdb.org/t/p/w300/${moviedata.poster_path}`}
              />

              <div class='some_info_movie'>
                <h1>{moviedata.original_title}</h1>
                <img src='https://img.icons8.com/material-outlined/50/000000/play-button-circled.png' />

                <h3>Overview:</h3>
                <h4>{moviedata.overview}</h4>

                <h2>Releasing on:{moviedata.release_date}</h2>
              </div>
            </div>

            <div class='body_container'>
              <div id='genres_Area'>
                <h1>Genres:</h1>
                <div class='movie_genre'>
                  {(moviedata.genres || []).map((gen, ind) => (
                    <div class='genre' key={ind}>
                      {gen.name}
                    </div>
                  ))}
                </div>
              </div>

              <div id='production_Area'>
                <h1>Production Companies:</h1>
                {(moviedata.production_companies || []).map((com, ind) => (
                  <div class='company_card' key={ind}>
                    <img
                      src={`https://image.tmdb.org/t/p/original/${com.logo_path}`}
                    />
                    <h3>{com.name}</h3>
                  </div>
                ))}
              </div>

              <h1>Status:</h1>
              <h3>{moviedata.status}</h3>
              <h1>Popularity</h1>
              <h3>{moviedata.popularity}</h3>
              <h1>Original Language</h1>
              <h3>${moviedata.original_language}</h3>
            </div>
          </>
        }

        {/* <div className="background_posture">
            <img className="background_poster" src='https://image.tmdb.org/t/p/original/620hnMVLu6RSZW6a5rwO8gqpt0t.jpg' />
    </div>
        <div className="movie_content">
        <img src="https://image.tmdb.org/t/p/w300/jTswp6KyDYKtvC52GbHagrZbGvD.jpg" />
        <div className="movie_info"> 
            <h2>LUCA</h2>
        </div>

        </div> */}
      </>
    );
}

export default AboutMovie;