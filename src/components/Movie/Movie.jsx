import React from 'react'
import './Movie.css';

const Movie = ({ title, release_date, backdrop_path}) => {
  const postURL = `https://image.tmdb.org/t/p/w1280${backdrop_path}`
  return (
    <article className='movie slide-in-fwd-center'>
      <div className='movie__info flex items-center justify-between'>
        <h1 className='movie__title'>{title?.split(':')[0]}</h1>
        <p>{release_date.split('-')[0]}</p>
      </div>
      <div>
        <img 
          src={postURL ? postURL : 'https://via.placeholder.com/800'}
          alt={title}
          className='movie__image'
          loading='lazy'
        />
      </div>
    </article>
  )
}

export default Movie
