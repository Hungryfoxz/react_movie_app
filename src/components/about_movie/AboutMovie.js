import React,{ useEffect,useState} from 'react';
import './about_movie.css';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function AboutMovie() {
 const navigate = useNavigate()

  let { id } = useParams();
  const [movie, setMovie] = useState([])

  const loadData = async () => {
    // const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=837712663d9d3fd685b2c5350d44d384&language=en-US&page=1`);
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=837712663d9d3fd685b2c5350d44d384&language=en-US`);
    const data = await response.json();
    console.log(data)
    setMovie(data);
  }

  useEffect(() => {
     loadData();
  },[])


  return (
    <>
    {movie?
    <motion.div className='movie-details' 
                initial={{ opacity: 0,y: -100 }} 
                animate={{ opacity: 1,y: 0 }} 
                transition={{ ease: "easeIn", duration: 2 }}>
      <div className="img-container">
      <motion.img src={'https://image.tmdb.org/t/p/original' + movie.backdrop_path} alt={movie.title}
                 initial={{ y: -100 }} 
                 animate={{ y: 0 }} 
                 transition={{ ease: "easeIn", duration: 2 }}/>
      </div>
        <div className="txt-container">
        <h1>
        {movie.title}</h1>
        <h5>{movie.tagline}</h5>
        <p className='overview'>{movie.overview}</p>
        <p>
          <span>Release date:</span>{movie.release_date}<br/>
          <span>Budget:</span>{movie.budget}<br/>
          <span>Rating:</span>{movie.vote_average}<br/>
          <span>Runtime:</span>{movie.runtime}mins<br/>
          <span>Original Language:</span>{movie.original_language}<br/>
        </p>
      </div>
    </motion.div>
    :
    <div className='loading'>loading</div>}
    <div className='abs-back-button'>
    <button onClick={()=>navigate(-1) } className="about-button"><i class="fa-solid fa-angle-left"></i>Back</button>
    </div>
    </>
  )
}
