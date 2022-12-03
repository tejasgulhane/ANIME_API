import React, { useEffect, useState } from 'react'
import Card from '../Card/Card';
import { useDispatch , useSelector } from 'react-redux'
import'./Landingpage.css'
import Movieinfocomponent from './Movieinfocomponent';
import '../Pages/Page.css'


const Landingpage = () => {
  let fmovies= useSelector(state => state.movie.filtermoviearr);
  const [movieselect , onmovieselect] = useState();
  console.log(fmovies);
  return (
    <>
        <div className='landingpage'>
        { movieselect && <Movieinfocomponent movieselect={movieselect}  onmovieselect={onmovieselect}/>}
          <div className="container">
          { fmovies && fmovies.map((movie ,index )=>{ 
              return  <Card  
                          movie={movie}
                          key={index} 
                          onmovieselect={onmovieselect} 
                        />})
          }
         
          </div>
        </div>  
    </>
  )
}

export default Landingpage