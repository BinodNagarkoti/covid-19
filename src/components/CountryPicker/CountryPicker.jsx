import  React, {useState , useEffect} from "react";
import {NativeSelect, FormControl,Paper} from '@material-ui/core'
import styles from './CountryPicker.module.css'
import {fetchCountries} from '../../api'
 const CountryPicker = ({handleCountryChange}) =>{
    const [fetchedCountries,setFetchedCountries]=useState([])

    useEffect(()=>{
         const fetchAPI = async ()=>{
             setFetchedCountries(await fetchCountries())
         }
         fetchAPI()
     },[setFetchedCountries])
    //  console.log(fetchedCountries)
    // if(!fetchedCountries.length){
    //     return <div></div>
    // }
     return (
         <FormControl className={styles.formControl}>
            <Paper>
                <NativeSelect defaultValue='' onChange={(e)=> handleCountryChange(e.target.value)}>
                     <option value=''> Global </option>
                    {fetchedCountries.map(
                        country=> <option key={country} value={country}> {country} </option>
                        )}
                </NativeSelect>
             </Paper>
          </FormControl>
     )
 }
 export default CountryPicker