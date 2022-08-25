import React from 'react'
import './Navabr.css';

const Navbar = ({ setMovieCategory}) => {
  return <header className='movie__header flex items-center justify-between'>
    <div className='container flex items-center justify-between'>
      <div className='movie__logo'>
        <p>Movies</p>
      </div>
      <nav className='movie__nav flex items-center'>
          <li onClick={() => setMovieCategory('popular')}>Popular</li>
          <li onClick={() => setMovieCategory('top_rated')}>Top Rated</li>
          <li onClick={() => setMovieCategory('upcoming')}>Upcoming</li>      
      </nav>
    </div>    
  </header>   
  
}

export default Navbar