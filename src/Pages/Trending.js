import React, { useEffect, useRef, useState } from 'react'
import '../Pages/Page.css'
import { movieactions } from '../store/moviereducer';
import { useDispatch , useSelector } from 'react-redux'
import Movieinfocomponent from '../Landingpage/Movieinfocomponent';

const Trending = (props) => {
    
    const idref=useRef()
    const[movies,setmovies]=useState([])
    const dispatch =useDispatch()
    const[page,setpage]=useState(1)
    console.log(movies)

    const [movieselect , onmovieselect] = useState();
    
    useEffect(() => {
         fetchdata()
    },[page])
    
    function fetchdata(){
        fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=f63923ae53d3c7bba7dec61d91dd3e09`).
            then(data => data.json()).
            then(res=>{
                console.log(res.results);
                setmovies(res.results)
                dispatch(movieactions.setishomepage())

            })
    }

    console.log(movieselect)

  return (
    <>
    { movieselect && <Movieinfocomponent movieselect={movieselect} onmovieselect={onmovieselect}/>}
    
    <div className='trend_container'>
        { movies && movies.map((movie)=>{
            return (<div className='movie__card'  id={movie.id}  onmovieselect={onmovieselect} onClick={()=>onmovieselect(movie.id)}>
            <div>
                <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt=""  /> 
            </div>
            <div>
                <strong><p>{movie.original_name || movie.original_title}</p></strong>
            </div>
        </div>)
        })}
    </div>
    </>
  )
}

export default Trending