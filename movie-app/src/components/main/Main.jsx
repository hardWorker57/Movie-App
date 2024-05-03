import React from "react";
import { useEffect, useState } from 'react';
import s from './Main.module.scss';
import headerStyle from '../header/Header.module.scss'
import Sidebar from "../sidebar/Sidebar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFilter, faPlus, faStar } from '@fortawesome/free-solid-svg-icons';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
//API key = a219995f42d8e2bee4b8e6bce90eab21
//API entrance key = eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjE5OTk1ZjQyZDhlMmJlZTRiOGU2YmNlOTBlYWIyMSIsInN1YiI6IjY1N2RkYWZlMWRhN2E2MDc4ZTJhMzc0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v9QzJklEoIsghH0k9gjsN341VqSfYufP309PMY4jqZo

const Main = () => {

  const [search, setSearch] = useState('');

  // const FEATURED_API = `https://www.omdbapi.com/?s=${search}&page=1&apikey=28b2e27a`;
  const FEATURED_API = `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=a219995f42d8e2bee4b8e6bce90eab21`;
  // const HomeMovies_API = `https://api.themoviedb.org/3/movie/popular&api_key=a219995f42d8e2bee4b8e6bce90eab21`;
  // const HomeMovies_API = `https://api.themoviedb.org/3/search/movie?query=popular&api_key=a219995f42d8e2bee4b8e6bce90eab21`;
  const HomeMovies_API = `https://api.themoviedb.org/3/movie/popular?api_key=a219995f42d8e2bee4b8e6bce90eab21&language=en-US`;

  // https://api.themoviedb.org/3/movie/popular?language=en-US&page=1
  const [movies, setMovies] = useState([]);
  const [homeMovies, setHomeMovies] = useState([]);
  // const [moiveRating, setMovieRating] = useState(0);

  const getMovies = () => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setMovies(data.results)
        }
      });
  }
  const getHomeMovies = () => {
    fetch(HomeMovies_API)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setHomeMovies(data.results)
          console.log(data)
        }
      });
  }
  useEffect(() => {
    getMovies();
    getHomeMovies();
    // getTest();
  }, [search]);

  return (
    <div className={s.main_wrapper}>

      <div className='Header'>
          <div className="container">
              <div className={headerStyle.nav}>
                <ul className={headerStyle.menu}>
                    <li><Link to="/" className="menu_list">Movies</Link></li>
                    <li><Link to="/movies/tv" className="menu_list">TV Shows</Link></li>
                    <li><Link to="/movies/anime" className="menu_list">Anime</Link></li>
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
        <div className={s.poster}>
          <Carousel
            showThumbs={false}
            autoPlay={true}
            transitionTime={2}
            infiniteLoop={true}
            showStatus={false}
          >
            {
              homeMovies.slice(0, 14).map((movie, index) => (
                <Link to={`/movie/${movie ? movie.id : ''}`} key={index}>
                  <div className={s.slider_poster}>
                    <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path ? movie.backdrop_path : ''}`} alt="No image"/>
                  </div>
                  <div className={s.slider_overlay}>
                    <span>{movie ? movie.title : ''}</span>
                  </div><br />
                </Link>
              ))
            }
          </Carousel>
        </div>
        <div className={s.movies}>
          {movies.length > 0 && movies.map((data, index) => (
            <Link to={`/movie/${data ? data.id : ''}`} key={index}>
              <div className={s.movie_card}>
                <div className={s.movie_poster}>
                  <img src={`https://image.tmdb.org/t/p/original${data ? data.poster_path : ''}`} alt="No image" />
                  <div className={s.movie_content}>
                    <div className={s.movie_title}>{data ? data.title : ''} <div className={s.movie_rating}><FontAwesomeIcon icon={faStar} /> *4 </div></div>
                    {/* <div className="movie_desc">{data.Year}</div> */}
                    <div className={s.card_desc}>
                      <div className={s.add_favorites}><FontAwesomeIcon icon={ faPlus } /></div>
                      <button className="movie_btn">Watch</button>
                    </div>
                </div>
                </div>
              </div>
            </Link> 
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
