import React, { useEffect, useState } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import Movieinfocomponent from '../Landingpage/Movieinfocomponent';
import './Page.css';
import {movieactions} from '../store/moviereducer'

const Homepage = () => {

    let movies= useSelector(state => state.movie.moviearr);
    
    
    const dispatch=useDispatch();

    const [movieselect , onmovieselect] = useState();
    const [page , setpage] = useState(1);
    const [movieslist , onmovieslist] = useState([]);
  
  
    useEffect(()=>{
      nowplaying();
    },[page])
  
    const nowplaying = ()=>{
         fetch(`https://api.jikan.moe/v4/anime?page=${page}`)
         .then(data => data.json())
         .then(res => {
          onmovieslist(res.data)
          console.log(res.data);
          dispatch(movieactions.setmoviesarray(res.data))
        })
      }

      const addtowatchlist =(movie)=>{
          dispatch(movieactions.setwatchlistarr(movie))
      }

      const pageclick = (e) => {
        console.log(e.target.innerHTML)
        setpage(e.target.innerHTML)
      }

  return (

    <>
            { movieselect && <Movieinfocomponent movieselect={movieselect}  onmovieselect={onmovieselect}/>}
            <div className='trend_container'>
            { movieslist && movieslist.map((movie ,index)=>{
            return (
            <div className='movie__card' 
              key={index} 
              onmovieselect={onmovieselect} 
              >
            <div>
                <img src={`${movie.images.jpg.image_url}`} alt="" /> 
            </div>
            <div>
                <strong><p>{movie.title || movie.original_title}</p></strong>
            </div> 
            <div>
                <h6>{movie.rating}</h6>
            </div>
            <div className='watchlist'>
                <button onClick={()=>{addtowatchlist(movie)}}>Add</button>
            </div>
            <div className='watchlist left'>
                <button onClick={()=>{onmovieselect(movie)}}>View</button>
            </div>
           
                </div>
                )
                })}
            </div>

            <div className='pagination'>
        <div className='pagination_container' onClick={(e)=>pageclick(e)}>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
        </div>
        </div>
          </>
  )
}

export default Homepage