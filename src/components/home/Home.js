import React,{useState,useEffect} from 'react';
// import data from '../../store/Data';
import MovieCard from '../movie_card/MovieCard';
import Input from '../input/Input.js'
import './home.css';
import Spinner from '../../reusable/Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import { motion } from 'framer-motion';
import api_key from '../../Api';



console.log(process.env.REACT_APP_MOVIE_API)
export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(true);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('')


  const loadData = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=${page}`);
    const data = await response.json();
    setMovies(data.results);
    setTotalResults(data.total_results);
    setLoader(false);
  }

  useEffect(() => {
    loadData();
    setPage(page+1);
  },[])
  
  // if(loader){
  //   return <Spinner/>
  // }
  const fetchMoreData = async () => {
    console.log("Page is cuurent in :" + page)
    setPage(page+1);
    console.log("Page is 2nd in :" + page)
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=${page}`);
    const data = await response.json();
    setMovies([...movies,...data.results]);
    setTotalResults(data.total_results);
    setLoader(false);

  }
  
  const fetcfNewData = () => {
    setLoader(true);
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&page=1&query=spiderman`)
      .then((res) => res.json())
      .then((result) => setMovies(result.results))
      .catch((err) => console.log(err))
    setLoader(false)
  };

  const getData= (input) => {
    setSearch(()=>input.search);
    console.log(search)
    fetcfNewData();
  }
  // console.log("the searched term is :" + search)

  return (
    <>
    <h3 className='header-main'><i className="fa-solid fa-video"></i>Popular Movies</h3>

      <Input onSubmit={getData}/>
      {/* <Spinner/> */}
      <InfiniteScroll
        dataLength={movies.length}
        next={fetchMoreData}
        inverse={false}
        hasMore={totalResults>movies.length} 
        loader={<Spinner/>}
        targetDiv='popular-movies'
        useWindow={false}
      >
      {loader?<Spinner/>:
      <motion.div className="popular-movies" initial={{ opacity: 0 }} 
                                             animate={{ opacity: 1}} 
                                             transition={{ ease: "easeOut", duration: 2 }}> 

          {movies.map((movie,index)=>{
          return (<MovieCard movie={movie} key={index}/>)}
          )}
        </motion.div>
      }
      </InfiniteScroll>
  </>
  )
}
      


