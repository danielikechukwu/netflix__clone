import React, { useState, useEffect } from "react";
import axios from "../axios";
import classes from "./Row.module.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseURL = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchURL, isLargeRow }) => {

const [movies, setMovies] = useState([]);

const [trailerUrl, setTrailerUrl ] = useState('');

  //useEffect that allows the movies to load wwhen the row components Loads on the page
    useEffect(() => {
    //Performing an async function
        async function fetchData() {

            const request = await axios.get(fetchURL);

            console.log(request.data.results);

            setMovies(request.data.results);

            return request;
        }

    //return keyword
    fetchData();

  }, [fetchURL]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {

    if (trailerUrl) {

      setTrailerUrl('');

    }

    else{

      movieTrailer(movie?.name || "" )

      .then((url) => {

        //https://api.themoviedb.org/3/search/movie?api_key=9d2bff12ed955c7f1f74b83187f188ae&query=

        //https://www.youtube.com/watch?v=IN5TD4VRcSM

        const urlParams = new URLSearchParams(new URL(url).search)

        setTrailerUrl(urlParams.get('v'));

      })

      .catch((error) => console.log(error));

    }
  };

  console.log(movies)

  return (

    <div className={classes.row}>

      <h2>{title}</h2>

      <div className={classes['row__posters']}>

        {movies.map((movie) => (
            
          <img
            key={movie.id}

            onClick={() => handleClick(movie)}

            src={`${baseURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
            className={classes[`${isLargeRow ? 'row__posterLarge' : 'row__poster'}`]}
          />
          
        ))}

      </div>
          
          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}

    </div>
  );
};

export default Row;
