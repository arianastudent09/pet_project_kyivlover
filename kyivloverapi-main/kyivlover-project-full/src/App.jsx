import './App.css';
import { Routes, Route } from 'react-router-dom';

import Mainpage from './components/Mainpage/Mainpage';
import Gallery from './components/Gallery/Gallery';
import About from './components/About/About';
import History from './components/History/History';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setFotosThunk } from './store/reducers/galleryReducer';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setFotosThunk())
  }, [])

  return (
    
    <div className="App">
      <Routes>
        <Route path = "/gallery" element = {<Gallery />} />
        <Route path = "/" element = {<Mainpage />} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/history/:linkID" element = {<History />} />
      </Routes>
    </div>  
  );
}

export default App;
