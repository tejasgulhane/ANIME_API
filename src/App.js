import './style.css';
import Navbar from './Navbar/Navbar';
import Landingpage from './Landingpage/Landingpage';
import Latest from'./Pages/Latest';
import Show from'./Pages/Show';
import Trending from'./Pages/Trending';
import { Routes,Route } from  'react-router-dom'
import { useDispatch , useSelector } from 'react-redux'
import Homepage from './Pages/Homepage';


function App() {

  return (
   <>
   <Navbar />
   <Routes>
    <Route exact path='/' element={<Homepage />}/>
    <Route exact path='/trending' element={<Trending />}/>
    <Route exact path='/show' element={<Show />}/>
    <Route exact path='/latest' element={<Latest />}/>
    <Route exact path='/showsearchedmovie' element={ <Landingpage />}/>
   </Routes>
   </>
  );
}

export default App;
