import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from "./Detail.module.css"
import { get_detail } from '../../redux/actions'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


export default function Detail(){  
  const {id} = useParams()
  const dispatch = useDispatch() 
  const getDetail = useSelector((state)=>state.getDetail)
  const getActivity = useSelector((state)=>state.getActivities)
  
  
  
  useEffect(() => {
    dispatch(get_detail(id))
    
  },[id])   

  return (
    <>
      <Link className={styles.back} to={'/home'}>⬅  Back</Link>
      <div className={styles.container}>
        <div className={styles.flag}>
          <h1>{getDetail.name}</h1>
          <img src={getDetail.imageFlag} alt={getDetail.name} />
        </div>
      <div className={styles.containerData}>       
          <table className={styles.table}>
          <h4 className={styles.titles}>Description Country</h4>
            <tr>
              <th>Continent</th>
              <th>Capital</th> 
              <th>Subregion</th>
              <th>Area</th>
              <th>Poblation</th>
            </tr>
            <tr>
              <td>{getDetail.continent}</td>
              <td>{getDetail.capital}</td>
              <td>{getDetail.subregion}</td>
              <td>{getDetail.area}</td>
              <td>{getDetail.poblation}</td>                            
            </tr>            
            </table> 

            <table className={styles.table}>
            <h4 className={styles.titles}>Activities</h4>
                  <tr>
                    <th>Name</th>
                    <th>Difficulty</th>
                    <th>Duration</th>
                    <th>Season</th>              
                  </tr>
            {getActivity.map((value,key)=>{
                return <>
                  <tr>
                    <td>{value.name}</td>        
                    <td>{value.difficulty}</td>        
                    <td>{value.duration}</td>        
                    <td>{value.season}</td>
                  </tr>
                </>
            })}                        
              
              </table>      
      </div>        
    </div>
    </>
    
  )
}


