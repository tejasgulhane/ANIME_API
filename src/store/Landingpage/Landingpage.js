import React, { useEffect, useState } from 'react'
import Card from '../Card/Card';
import { useDispatch , useSelector } from 'react-redux'
import'./Landingpage.css'
import Movieinfocomponent from './Movieinfocomponent';
import '../Pages/Page.css'


const Landingpage = () => {

  const movies= useSelector(state => state.movie.moviearr)

  const [movieselect , onmovieselect] = useState();
  const [page , setpage] = useState(1);
  const [movieslist , onmovieslist] = useState([]);

  const dispatch =useDispatch()
  console.log(movies);
 
  
  

  return (
    <>
        <div className='landingpage'>
          { movieselect && <Movieinfocomponent 
          movieselect={movieselect} 
          onmovieselect={onmovieselect}
          />}
          <div className="container">
          { movies && movies.map((movie ,index )=>{ 
              return  <Card  
                        movie={movie} 
                        index={movie.id}
                        key={index}
                        onmovieselect={onmovieselect}
                        onClick={()=>{onmovieselect(movie)}}
                        />})
          }
         
          </div>
        </div>  
    </>
  )
}

export default Landingpage