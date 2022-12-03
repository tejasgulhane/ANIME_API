import React from 'react'
import './Card.css'

const Card = (props) => {
  
console.log(props.movie)

  return (
    <> 
    <div className="movie-card"  id={props.index} onClick={()=>{props.onmovieselect(props.movie.id)}}>
      <div className="movie-header manOfSteel">
        <div className="header-icon-container">
          <a href="#">
            <img src={`${props.movie.images.jpg.image_url}`} alt="" />
          </a>
        </div>
      </div>
      <div className="movie-content">
        <div className="movie-content-header">
          <a href="http://henrycavill.org/images/Films/2013-Man-of-Steel/posters/3-Walmart-Superman-a.jpg">
            <h2 className="movie-title">{props.movie.title}</h2>
          </a>
          <div className="imax-logo"></div>
        </div>
        <div className="movie-info">
          <div className="info-section">
            <p> Release Year </p>
            <span>{props.movie.year}</span>
          </div>
          <div className="info-section">
            <p>Popularity</p>
            <span>{props.movie.popularity}</span>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Card