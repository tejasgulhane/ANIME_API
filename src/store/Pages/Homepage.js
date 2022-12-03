import React, { useEffect, useState } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import Movieinfocomponent from '../Landingpage/Movieinfocomponent';
import './Page.css';
import {movieactions} from '../store/moviereducer'

const Homepage = () => {

    let movies= useSelector(state => state.movie.moviearr);
    // console.log(movies);
    
    const dispatch=useDispatch();
    const [movieselect , onmovieselect] = useState();
    const [movieslist , onmovieslist] = useState([]);
  
  
    useEffect(()=>{
      nowplaying();
    },[])
  
    const nowplaying = ()=>{
         fetch(`https://api.jikan.moe/v4/anime`).
         then(data => data.json()).
         then(res => {
          onmovieslist(res.data)
          console.log(res.data);
          dispatch(movieactions.setmoviesarray(res.data))
        })
      }


  return (

    <>
            <div>
                <h1>Now Playing</h1>
            </div>
            { movieselect && <Movieinfocomponent movieselect={movieselect}  onmovieselect={onmovieselect}/>}
            <div className='trend_container'>
            { movieslist && movieslist.map((movie ,index)=>{
            return (
            <div className='movie__card' 
              key={index} 
              onmovieselect={onmovieselect} 
              onClick={()=>{onmovieselect(movie)}}>
            <div>
                <img src={`${movie.images.jpg.image_url}`} alt="" /> 
            </div>
            <div>
                <strong><p>{movie.title || movie.original_title}</p></strong>
            </div>
                </div>)
                })}
            </div>
          </>
  )
}

export default Homepage