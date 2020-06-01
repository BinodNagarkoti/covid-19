import  React,{useState,useEffect}  from "react";
import {fetchDailyData} from '../../api'
import { Line, Bar } from 'react-chartjs-2'
import {Paper} from '@material-ui/core'
import styles from './Charts.module.css'
import {randomColor} from '../../randomColor'
 const Charts = ({data:{recovered,deaths,confirmed},country}) =>{
     const [dailyData, setDailyData] = useState([])
     const [color, setColor] = useState('')
     useEffect(()=>{
        const fetchAPI= async()=>{
            setDailyData(await fetchDailyData())
            setColor(randomColor())
        }
        fetchAPI();
     },[])

     const lineChart = (
        dailyData.length ?
        (<Line data={{
            labels:dailyData.map(({date})=> date),
            datasets:[{
                data:dailyData.map(({confirmed})=> confirmed),
                label:'Infected',
                borderColor:`${randomColor()}`,
                fill:true
            },{
                data:dailyData.map(({deaths})=> deaths),
                label:'Deaths',
                borderColor:`${randomColor()}`,
                backgroundColor:'rgba(255,0,0,0.5)',
                fill:true

            }],
        }}/>) :null


     );
     const barChart = (
         confirmed ?(
             <Bar
                data={{
                    labels:['infected',"recovered", 'deaths'],
                    datasets:[{
                        label:'People',
                        backgroundColor:[
                            'rgba(0,0,255,0.5)',
                            'rgba(0,255,0,0.5)',
                            'rgba(255,0,0,0.5)'],
                    data:[ confirmed.value,recovered.value, deaths.value]

                    }],
                }}
                options={{
                    legends:{ display:false},
                    title:{ display:true, text:`Current State in ${country}`}

                 }}
             />) : null

     )
     return (
         <div className={styles.container}>
            <Paper style={{width:'100vw'}}>
                { country ? barChart : lineChart }
             </Paper>
        </div>
     )
 }
 export default Charts