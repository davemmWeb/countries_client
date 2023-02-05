import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Main.module.css"

export const Main = () => { 
    
  return (

    <div className={styles.container}>
          <h2>Click HOME to start</h2>
        <Link to={"/home"}>
          <button className={styles.button}>HOME</button>           
        </Link>
    </div>
  )
}
