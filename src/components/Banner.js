import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../requests";
import classes from "./Banner.module.css";

const Banner = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {

      async function fetchData() {

          const request = await axios.get(requests.fetchNetflixOriginals);

          const ArrMovie = request.data.results;

          // console.log(ArrMovie[Math.floor(Math.random()* ArrMovie.length + 1)])

          const returnedArray = Math.floor(Math.random() * ArrMovie.length) + 1;

          setMovies(ArrMovie[returnedArray]);

          return request;
      } 

      fetchData();

  }, []); //runs only once when the site loads because dependency is empty.

  console.log(movies);

  function truncate(str, num) {

      return str?.length > num ? str.slice(0, num) + "..." : str;

  }

  return (

    <header
      className={classes.banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movies?.backdrop_path}')`,
        backgroundPosition: "center center",
      }}
    >

      <div className={classes.banner__contents}>

          <h1 className={classes.banner__title}>
              {movies?.name || movies?.title || movies?.original_name}
          </h1>

        <div className={classes.banner__btns}>

          <button className={classes.banner__button}>Play</button>
          <button className={classes.banner__button}>My List</button> 

        </div>

        <h1 className={classes.banner__description}>

            {truncate(movies?.overview, 150)}

        </h1>

      </div>

      <div className={classes.fade__Button} />

    </header>
  );
};

export default Banner;
