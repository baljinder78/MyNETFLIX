import React,{useEffect} from "react";
import { useParams } from "react-router";
import "./Allinfo.css";
const AboutMovie=()=>
{
  let {id}=useParams()
  useEffect(() => {
    console.log(id)
  }, [])
    return (
      <>
    <div className="background_posture">
            <img className="background_poster" src='https://image.tmdb.org/t/p/original/620hnMVLu6RSZW6a5rwO8gqpt0t.jpg' />
    </div>
        <div className="movie_content">
        <img src="https://image.tmdb.org/t/p/w300/jTswp6KyDYKtvC52GbHagrZbGvD.jpg" />
        <div className="movie_info"> 
            <h2>LUCA</h2>
        </div>

        </div>
      </>
    );
}

export default AboutMovie;