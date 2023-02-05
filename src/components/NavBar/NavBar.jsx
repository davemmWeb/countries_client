import React,{useEffect} from 'react'
import styles from './NavBar.module.css'
import { useDispatch,useSelector } from 'react-redux'
import {filterForContinent,filteredForActivity,order_alfabetic,order_population} from "../../redux/actions"


export const NavBar = ({setPagina,setMostrar}) => {

  const dispatch = useDispatch() 
  // *****************************************************************************************
  const changeContinent = (event)=>{  
    event.preventDefault()
    dispatch(filterForContinent(event.target.value))       
    setPagina(1)
  }  
  const filteredContinents = useSelector((state)=> state.filterForContinent) 
  useEffect(()=>{
    setMostrar(filteredContinents)            
  },[filteredContinents])
  // *****************************************************************************************
  const changeActivity = (event)=>{  
    event.preventDefault()
    dispatch(filteredForActivity(event.target.value)) 
    setPagina(1)        
  }   
  const filteredActivities = useSelector((state)=> state.filterForActivity) 
  useEffect(()=>{
    setMostrar(filteredActivities)            
  },[filteredActivities])  
  // *****************************************************************************************
  const changeOrderAlfabetic = (event)=>{
    event.preventDefault()
    dispatch(order_alfabetic(event.target.value)) 
    setPagina(1)     
  }
  const orderAlfabetic = useSelector(state=>state.orderAlfabetic)
  useEffect(()=>{
    setMostrar(orderAlfabetic)
  },[orderAlfabetic])
  // *****************************************************************************************
  const changeOrderPopulation = (event)=>{
    event.preventDefault()
    dispatch(order_population(event.target.value))  
    setPagina(1)      
  }
  const orderPopulation = useSelector(state=>state.orderPopulation)
  useEffect(()=>{
    setMostrar(orderPopulation)
  },[orderPopulation])
  // *****************************************************************************************  
  const allCountries = useSelector(state=>state.allCountries)
  const mySet1 = new Set();
  allCountries.map(value=>value.activities.forEach(c=>mySet1.add(c.name)))
  const myArr = Array.from(mySet1)   
  
  
  return ( 
  
    <div className={styles.container}>  
          {/* Opcion de ordenamiento */}
          <label htmlFor="text">Orden for name</label>
          <select name='order' onChange={changeOrderAlfabetic}>
            <option value="all">Select order</option>
            <option value="Ascendente">A / Z</option>
            <option value="Descendente">Z / A</option>                       
          </select>

          <label htmlFor="text">Orden for population</label>
          <select name='order' onChange={changeOrderPopulation}>
          <option value="all">Select min / max</option>
            <option value="min_max">MIN / MAX</option>
            <option value="max_min">MAX / MIN</option>                       
          </select>

          {/* Opcion de filtrado por continentes */}
          <label htmlFor="text">Filter for Continent</label>          
          <select name='Continent'onChange={changeContinent} >
            <option value="all">Select continent</option>
            <option value="Asia">Asia</option>
            <option value="North America">North America</option>            
            <option value="Oceania">Oceania</option>            
            <option value="Africa">Africa</option>            
            <option value="Europe">Europe</option>            
            <option value="South America">South America</option>            
            <option value="Antarctica">Antarctica</option>            
          </select>

          {/* Opcion de filtrado por actividades */}
          <label htmlFor="text">Filter for Activity</label>
          <select name='Activity' onChange={changeActivity}>
            <option value="all">Select activity</option>
            {
              myArr.map((value,index)=>{
                return <option key={index} value={value}>{value}</option>
              })
              
            }
                                  
          </select>
    </div>
    
  )
}
