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


// 837712663d9d3fd685b2c5350d44d384 api
/* export async function load({ fetch }){
  console.log(1)
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=837712663d9d3fd685b2c5350d44d384&language=en-US&page=1`);
  const data = await res.json();
  console.log(11)
  if(res.ok){
    return { popular: data.results };
  }
}
*/
