import React,{ useState,useEffect} from 'react'
import styles from './Home.module.css'
import { NavBar } from '../NavBar/NavBar'
import Pagination from '../Pagination/Pagination'
import Card from '../Card/Card'
import { Search } from '../Search/Search'
import { useDispatch, useSelector } from 'react-redux'
import { addData } from '../../redux/actions'
import gifEart from '../../img/eart.gif'


export const Home = () => {   

  const dispatch = useDispatch() 
  
  const [mostrar, setMostrar] = useState([])
  
  const [pagina, setPagina] = useState(1)
  const [porPagina, setPorPagina] = useState(10)  
  const maximo = Math.ceil(mostrar.length / porPagina)
  
  
  useEffect(()=>{    
    dispatch(addData())    
  },[])  
  
  const allCountries = useSelector((state)=> state.allCountries)   
  
  useEffect(()=>{
    setMostrar(allCountries)
  },[allCountries])
  

   return (
    
      <div className={styles.container}> 
        <div>
          <Search setMostrar= {setMostrar}/>
        </div>       
        <div>
          <NavBar setPagina={setPagina}setMostrar= {setMostrar} allCountries={allCountries} />   
        </div>
          
        <div className={styles.containerPagination}>
            <Pagination pagina = {pagina} setPagina={setPagina} maximo={maximo} />
        </div>
        
        <div className={styles.containerCard}>
            { mostrar.length ? mostrar.slice(
                  (pagina -1) * porPagina,
                  (pagina -1) * porPagina + porPagina
              ).map((country,index)=>
                  <Card
                      key={index}
                      id={country.id}
                      name={country.name}
                      continent={country.continent}
                      image={country.imageFlag} 
                      poblation={country.poblation}               
                  />
              ): <div className={styles.containerGif}>
                    <img className={styles.gif} src={gifEart} alt="gifEart" />
                 </div> 
            }
        </div>
      </div>
    
    )
 }   
