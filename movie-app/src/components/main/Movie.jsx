import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const Movie = () => {
  const [CurrentMovieDetail, setMovie] = useState();
  const { id } = useParams();
  const FEATURED_API = `https://www.omdbapi.com/?i=${id}&apikey=28b2e27a`;

  useEffect(() => {
    getData()
    window.scrollTo(0,0)
  }, [])

  const getData = () => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setMovie(data)
          console.log(data)
        }
      });
  }

  return (
    <div className='movie'>
      <div className="container">
        {/* {CurrentMovieDetail.map((data) => {
          <h1>{data.Title}</h1>
        })} */}
        <img src={CurrentMovieDetail ? CurrentMovieDetail.Poster : ''} alt="" />
        {CurrentMovieDetail ? CurrentMovieDetail.Title : ''}
      </div>
    </div>
  )
}

export default Movie