import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Review from './pages/Review';
import Services from './pages/Services';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/services' element={<Services/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/reviews' element={<Review/>}/>
          <Route exact path='/contacts' element={<Contacts/>}/>
        </Routes>
    </div>
  );
}

export default App;
