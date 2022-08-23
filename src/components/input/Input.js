import React,{useState} from 'react';
import './input.css';
import { motion } from 'framer-motion';

export default function Input(props) {
const [search, setSearch] = useState('');
// const [out, setOut] = useState('')

  const handleClick = (e) => {
    e.preventDefault();
    props.onSubmit(search)
  }

  const onChange = (e) => {
    setSearch({[e.target.name]:e.target.value});
  }

  return (

    <>

    <motion.form className='search' onSubmit={handleClick} initial={{ opacity: 0, x:-10 }} 
                                             animate={{ opacity: 1, x:0}} 
                                             transition={{ ease: "easeIn", duration: 1.5 }}>
      <input type="text" name="search" onChange={onChange} placeholder="search your favourite"/>
      <button>Search</button>
    </motion.form>

    </>
  )
}

