import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import './RowPost.css'
import { imageUrl,API_KEY } from "../../Constants/Constants";
import  YouTube  from "react-youtube";
import  movieTrailer  from "movie-trailer";

function RowPost(props) {
    //states
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState(``)

    useEffect(() => {
       axios.get(props.url).then((res)=>{
           console.log(res,`from row`);
           setMovies(res.data.results)
       })
    }, [props.url])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          
          autoplay: 1,
        },
      };

      const handleClick=(movie)=> {
        if (trailerUrl) {
          setTrailerUrl('')
        }else{
         
          movieTrailer(movie.name||movie.title).then(url => {
            const urlParams=new URLSearchParams(new URL(url).search)
            setTrailerUrl(urlParams.get("v")) 
          }).catch(err=>console.log(err))
        }
    
      }
    return (
        <div className="row">
            <h2>{props.title}</h2>
            <div className="posters">
            {movies.map((movie) =>
             <img key={movie.id} onClick={()=>{handleClick(movie)}} className={props.isSmall?`smallPoster`:`poster`} src={ `${imageUrl}${props.isSmall?movie.backdrop_path:movie.poster_path}`} alt="" />
            )}
            </div>
              { trailerUrl &&  <YouTube videoId={trailerUrl} opts={opts}> </YouTube> }
              
        </div>
    )
}

export default RowPost
