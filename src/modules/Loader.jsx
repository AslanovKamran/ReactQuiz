import React from 'react';
import classes from './Loader.module.scss'

function Loader() {
  return (
    <div className={classes.loader}>
            <div className= {classes.loader__text}>
                <h2>
                    Loading Questions
                </h2>
                    <span className={classes.dot}></span>
                    <span className={classes.dot}></span>
                    <span className={classes.dot}></span>
                    
            </div>
        </div>
  )
}

export default Loader