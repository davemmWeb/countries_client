import React from 'react'
import { useState, useEffect } from 'react'
import { validationDifficulty,
     validationName,
     validationDuration,
     validationSeason } from './Validations'
import styles from './Form.module.css'
import { useDispatch } from 'react-redux'
import { addData } from '../../redux/actions'
import SelectCountrty from '../SelectCountry/SelectCountry'
import {Link} from 'react-router-dom'



const Form = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(addData())
    },[])
    
    const [activity, setActivity] = useState({
        name : '',
        difficulty : '',
        duration : '',
        season : '',
        idCountries : []                   
    })
    const [errors, setErrors] = useState({
        name : '',
        difficulty : '',
        duration : '',
        season : ''
    })
    const handleInputChange = (event)=>{
        event.preventDefault()
        const value = event.target.value
        const name = event.target.name
        setActivity({
            ...activity,
            [name] : value
        })             
    }
    useEffect(() => {
        validate()
    }, [activity])    

    const validate = ()=>{
        setErrors({
            ...errors,
            name : validationName(activity.name),
            difficulty : validationDifficulty(activity.difficulty),
            duration : validationDuration(activity.duration),
            season : validationSeason(activity.season)
        })
    } 
    const hours = [...Array(24).keys()].map(n => n + 1);
    
  return (
    <div className={styles.container}>
        <h1>Form create activities</h1>
        <Link className={styles.back}to={'/home'}>⬅ Back</Link>
        <form className={styles.form}>
            <label htmlFor="name">Name of activity : </label>
            <input 
                type="text" 
                placeholder='Insert name activity' 
                onChange={handleInputChange}
                name='name'
                value={activity.name}
                />
            <br />   
            {errors.name?<p className={styles.error}>{errors.name}</p>:<p className={styles.good}>OK ✔</p>}

            <label htmlFor="difficulty">Difficulty : </label>
            <select name='difficulty' onChange={handleInputChange}>
                <option value="">Selecciona un opcion</option>
                <option name='1' value="1">Nivel 1</option>
                <option name='2' value="2">Nivel 2</option>
                <option name='3' value="3">Nivel 3</option>            
                <option name='4' value="4">Nivel 4</option>            
                <option name='5' value="5">Nivel 5</option>                      
            </select>
            <br />
            {errors.difficulty?<p className={styles.error}>{errors.difficulty}</p>:<p className={styles.good}>OK ✔</p>}
            
            <label htmlFor="duration">Duration : </label>
            <select name='duration' onChange={handleInputChange}>
                <option value="">Selecciona un opcion</option>
                {   
                   hours.map((value,index)=>{
                    return <option key={index} value={value}>{value} hour</option>
                   })
                }                              
            </select>
            <br />
            {errors.duration?<p className={styles.error}>{errors.duration}</p>:<p className={styles.good}>OK ✔</p>}

            <label htmlFor="season">Season : </label>
            <select name='season' onChange={handleInputChange}>
                <option value="">Selecciona un opcion</option>
                <option name='Verano' value="Verano">Verano</option>
                <option name='Otoño' value="Otoño">Otoño</option>
                <option name='Invierno' value="Invierno">Invierno</option>            
                <option name='Primavera' value="Primavera">Primavera</option>             
            </select>
            <br />
            {errors.season?<p className={styles.error}>{errors.season}</p>:<p className={styles.good}>OK ✔</p>}  
        
            
            <SelectCountrty setActivity={setActivity} activity={activity}/>
        </form>
                      
    </div>
  )
}

export default Form