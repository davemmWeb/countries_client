import React from 'react'
import { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {filterForName} from '../../redux/actions'
import styles from './Search.module.css'



export const Search = ({setMostrar}) => {

    const dispatch = useDispatch()    

    const filteredForName = useSelector((state)=> state.filterForName)       
        
    
    useEffect(()=>{        
        setMostrar(filteredForName)            
    },[filteredForName])      
    
    const handleChange = (event)=>{
        event.preventDefault()
        dispatch(filterForName(event.target.value))
    }
    
  return (
    
    <div className={styles.container}>
        <input type="search" placeholder='Search Country'onChange={handleChange}/> 
        <Link className={styles.create}to={`/activity`}>⛷  Create Activity</Link>      
    </div>
        
    
  )
}



