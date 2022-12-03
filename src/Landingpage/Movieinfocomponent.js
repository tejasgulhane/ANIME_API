import React, { useEffect, useState } from 'react'
import './Movieinfocomponent.css'
import { useDispatch , useSelector } from 'react-redux'
import { movieactions } from '../store/moviereducer'
import { useNavigate } from 'react-router-dom'


const Movieinfocomponent = (props) => {
  
    const [backdrop,setbackdrop]=useState()
    const [poster,setposter]=useState()
    const [name,setname]=useState()
    const [genres,setgenres]=useState([])
    const [overview,setoverview]=useState()
    const [relasedate,setrelasedate]=useState()
    const [launguage,setlaunguage]=useState()
    const [video,setvideo]=useState()
    const [show,setshow]=useState(false)
    const dispatch = useDispatch()

    const id =props.movieselect;
    
    const navigate= useNavigate()

  //   useEffect(() => {
  //       fetchdata();
  //       fetchvideodata();
  //   },[id])

  //    const fetchdata =()=>{
  //       fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f63923ae53d3c7bba7dec61d91dd3e09&language=en-US`).
  //           then(data => data.json()).
  //           then(res=>{
  //               setposter(res.poster_path)
  //               setbackdrop(res.backdrop_path)
  //               setgenres(res.genres)
  //               setoverview(res.overview)
  //               setname(res.original_title)
  //               setrelasedate(res.release_date)
  //               setlaunguage(res.original_language)
  //               console.log(res)
  //           })
  //    }

  //    const fetchvideodata =()=>{
  //     fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=f63923ae53d3c7bba7dec61d91dd3e09&language=en-US`).
  //         then(data => data.json()).
  //         then(res=>{
  //             console.log(res.results[0].key)
  //             console.log(res.results)
  //             setvideo(res.results[0].key)
  //         })
  //  }
     
  const movies = useSelector(state=> state.movie.moviearr)
  console.log(id);
  return (
    <>
    
      <div className="movie_card" id="bright">
      <div className='close'>
        <button onClick={()=>props.onmovieselect()}>close</button>
      </div>
    <div className="info_section">
      <div className="movie_header">
        <h1>{id.title}</h1>
        <span className="type">{id.genres && id.genres.map((genres)=>{
            return <p>{genres.name}</p> 
        })}</span>
      <div>
        <h2>{id.year}</h2>
      </div>
      </div>
      <div className='launguage'>
        <button><a href={`https://www.youtube.com/watch?v=${id.trailer.youtube_id}`}>Watch Trailer</a></button>
      </div>
      <div className="movie_desc">
        <p className="text">{id.synopsis}</p>
      </div>
    </div>
    <div className="blur_back bright_back">
        <img src={id.images.jpg.image_url} alt="" />
    </div>
      </div>
      
    </>
    
  
  )
}

export default Movieinfocomponent