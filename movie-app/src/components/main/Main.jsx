import React from "react";
import s from './Main.module.scss';
import Movie from "./Movie";
import Sidebar from "../sidebar/Sidebar";

const Main = () => {

  const movies = ['1', '2', '3'];

  return (
    <div className={s.main_wrapper}>
      <div className={s.sidebar}>
        <Sidebar/>
      </div>
      <div className={s.Main}>
        Main
        <div className={s.movies}>
          {movies.map(movie => (
            <Movie />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
