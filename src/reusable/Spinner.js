import React from 'react';
import Gif from './assets/spinner.gif';
import classes from './Spinner.module.css'

export default function Spinner() {
  return (
    <>
    <div className={classes.spinnerDiv}>
    <img src={Gif} alt="Loading..." className={classes.spinner}/>
    </div>
    </>
  )
}
