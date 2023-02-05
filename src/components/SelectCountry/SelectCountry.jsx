import React,{useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createActivity, filterForName } from '../../redux/actions'
import styles from './SelectCountry.module.css'


const SearchForm = ({activity,setActivity}) => {
    const dispatch = useDispatch()
    const [seeCountries, setSeeCountries] = useState([])
    const [idcountries, setIdCountries] = useState([])

    const allCountries = useSelector(state=>state.allCountries)

    // ****************************************************************************************
    const deleteCountry = (id) =>{
        const restCountries = seeCountries.filter(value=>value.id !== id)
        setSeeCountries([...restCountries])        
    }
    // ****************************************************************************************
    const handleChange = (event) =>{
        event.preventDefault()
        const value = event.target.value
        dispatch(filterForName(value)) 
    }    
    const getCountry = useSelector(state=>state.filterForName)    
    useEffect(()=>{
        setSeeCountries([...seeCountries,...getCountry])         
    },[getCountry])
    // ****************************************************************************************
    useEffect(()=>{
        const arrIds = []
        seeCountries.forEach(e=>{
            arrIds.push(e.id)
        })
        setActivity({
            ...activity,
            idCountries : arrIds
        })
    },[seeCountries])
    const handleSubmit = (event)=>{        
        if (![activity.name.length,
             activity.difficulty.length,
             activity.duration.length,
             activity.season.length,
             activity.idCountries.length].every(Boolean)){
             alert("Data missing")
             event.preventDefault()
        }else{
            dispatch(createActivity(activity))                  
        }                 
    }   
      
  return (
    <div>
        <select name="countries" onChange={handleChange}>
        <option value="">Select a country</option>
        {
            allCountries.map((value,index)=>{
                return <option key={index} value={value.name}>{value.name}</option>
            })
        }
        </select>
        <button type='submit' onClick={handleSubmit}>Save new activity</button>
        <div className={styles.container}> 
        {
            seeCountries.length? seeCountries.map((value,index)=>{
                return <>
                    <div  className={styles.containerImages}>
                        <button type='button' onClick={()=>deleteCountry(value.id)}>x</button>
                        <img  src={value.imageFlag} alt={value.name} />
                        <h5>{value.name}</h5>
                    </div>
                </>
            }):<p>Please select a country</p>
        }
        </div>
    </div>
  )
}

export default SearchForm