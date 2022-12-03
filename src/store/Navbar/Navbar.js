import React, { useRef, useState } from 'react'
import'./Navbar.css'
import { movieactions } from '../store/moviereducer'
import { useDispatch , useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const imageref = useRef()
  const dispatch= useDispatch()
  const navigate= useNavigate()
  const[ismovie,setismovie]=useState(false)

  const movies= useSelector(state => state.movie.moviearr)
  console.log(movies);
  const fetchmovies = () => {
      const query=imageref.current.value;

       const res = movies.filter((mname)=>{
        return query === mname.title.toLowerCase()
      })
      console.log(res);
      dispatch(movieactions.setfiltermoviearr(res))
      setismovie(true)
      navigate('/showsearchedmovie')
  }

  const trendingclickhandler =()=>{
       navigate('/trending')
  }
  const latestclickhandler =()=>{
       navigate('/latest')         
  }
  const showclickhandler =()=>{
       navigate('/show')
  }
  return (
    <>
        <div className="header">
            <div id='heading'>ANIME WORLD</div>
            <div id='searchbox'>
                <input type="text"  ref={imageref}/>
                <i className='fas fa-search' onClick={fetchmovies}></i>
            </div>
            <div id='menu'>
                <i className="fas fa-bars"></i>
            </div>
        </div>
        <div className="section">
          <button onClick={trendingclickhandler}>Trending</button>
          <button onClick={latestclickhandler}>Upcoming</button>
          <button onClick={showclickhandler}>Shows</button>
        </div>
        
    </>
  )
}

export default Navbar