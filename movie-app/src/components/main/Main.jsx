import React from "react";
import { useEffect, useState } from 'react';
import s from './Main.module.scss';
import headerStyle from '../header/Header.module.scss'
import Sidebar from "../sidebar/Sidebar";
import Movie from "./Movie";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons';
// const IMG_API = "http://img.omdbapi.com/?apikey=[28b2e27a]&";

const Main = () => {

  const [search, setSearch] = useState('');

  const FEATURED_API = `http://www.omdbapi.com/?s=${search}&apikey=28b2e27a`;
  const [movies, setMovies] = useState([]);

  const getMovies = () => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        if (data.Search) {
          setMovies(data.Search)
          console.log(data);
        }
      });
  }
  useEffect(() => {
    getMovies();
  }, [search]);


  return (
    <div className={s.main_wrapper}>

      <div className='Header'>
          <div className="container">
              <div className={headerStyle.nav}>
                <ul className={headerStyle.menu}>
                    <li><a href="" className="menu_list">Movies</a></li>
                    <li><a href="" className="menu_list">TV Shows</a></li>
                    <li><a href="" className="menu_list">Anime</a></li>
                </ul>
                <div className={headerStyle.search}>
              <span><FontAwesomeIcon icon={ faSearch } /></span><input type="search" name="search" id="" placeholder='Search' onChange={(e) => setSearch(e.target.value)} /><span><FontAwesomeIcon icon={faFilter} /></span>
                </div>
              </div>
          </div>
      </div>

      <div className={s.sidebar}>
        <Sidebar/>
      </div>
      <div className={s.Main}>
        Main
        <div className={s.movies}>
          {movies.length > 0 && movies.map((data) => (
            <Link to={`/movie/${data.imdbID}`}>
            {/* // <Link to={data.id}> */}
              <div className={s.movie_card}>
                <div className="movie_poster">
                  <img src={data.Poster} alt="movie" />
                </div>
                <div className="movie_title">{data.Title}</div>
                <div className="movie_desc">{data.Year}</div>
                <button className="movie_btn">Watch</button>
              </div>
            </Link> 
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
