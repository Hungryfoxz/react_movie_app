import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import AboutMovie from './components/about_movie/AboutMovie'


function App() {
  
  
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about/:id" element={<AboutMovie />} />
          </Routes>
    </>
  );
}

export default App;

