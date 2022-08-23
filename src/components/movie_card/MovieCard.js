import React from 'react';
import './movieCard.css';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function MovieCard({movie}) {
  let navigate = useNavigate()

  const handleSubmit = (movie) => {
      console.log("clicked",movie.id);
      return navigate(`/about/${movie.id}`)
      // return navigate(`/about/${movie.id}/${movie.backdrop_path}`)
  }


  return (
    <>
        <motion.div className="movie-card"
        whileTap={{ scale: 0.8}}>
              {/* <Link to='/'> */}
                <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt={movie.title} onClick={()=>handleSubmit(movie)}/>
              {/* </Link> */}
              <div className='rating'>
                <div>
                <p>
                <i className="fa-solid fa-heart"></i>
                  {movie.vote_average}
                  </p>
                </div>
                <div>
                <h5>{movie.release_date}</h5>
                </div>
              </div>
          <div className="description">
              <h2>{movie.title}</h2>       
          </div>
      </motion.div>

    </>
  )
}
{/* <motion.button
  whileHover={{
    scale: 1.2,
    transition: { duration: 1 },
  }}
  whileTap={{ scale: 0.9 }}
/> */}
