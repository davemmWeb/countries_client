import React from 'react'
import styles from './Card.module.css'
import { Link } from 'react-router-dom'

export default function Card(props){       
    
  return ( 
      <Link className={styles.container} to={`/detail/${props.id}`}>                 
          <p>{props.name}</p>      
          <p>{props.continent}</p>
          <img src={props.image} alt={props.name} />
          <p>N° {props.poblation}</p>       
      </Link> 
  )
}

