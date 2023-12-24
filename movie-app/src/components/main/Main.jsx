import React from "react";
import { useEffect, useState } from 'react';
import s from './Main.module.scss';
// import Movie from "./Movie";
import Sidebar from "../sidebar/Sidebar";

// const IMG_API = "http://img.omdbapi.com/?apikey=[28b2e27a]&";

const Main = () => {

  let movieSearch = "flash";

  const FEATURED_API = "http://www.omdbapi.com/?s=" + movieSearch + "&apikey=28b2e27a";
  const [movies, setMovies] = useState([]);

  const getMovies = () => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.Search);
      });
  }
  useEffect(() => {
    getMovies();
  }, []);


  return (
    <div className={s.main_wrapper}>
      <div className={s.sidebar}>
        <Sidebar/>
      </div>
      <div className={s.Main}>
        Main
        <div className={s.movies}>
          {movies.length > 0 && movies.map((data ,movie) => (
            <div className={s.movie_card}>
              <div className="movie_poster">
                <img src={data.Poster} alt="movie" />
              </div>
              <div className="movie_title">{data.Title}</div>
              <div className="movie_desc">{data.Year}</div>
              <button className="movie_btn">Watch</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
