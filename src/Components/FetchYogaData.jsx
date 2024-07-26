import React from 'react'
import UseFetch from './UseFetch'
import './FetchData.css'


const FetchYogaData = () => {
    const [data]=UseFetch('https://api.npoint.io/9045c260b1565daa9e15');
    console.log(data)
    return (
        <>
            <ul className='list_data_main'>
                <h1 className='usefetch_heading'>Fetch Yoga Data</h1>
                {data && data.map ((e)=>(
                    <>
                    <li classname='list_data'>
                    <p><strong>Name:</strong>{e.name}</p>
                    <p><strong>Benefits:</strong>{e.benefits}</p>
                    <p><strong>Time Duration:</strong>{e.time_duration}</p>
                    </li>
                    </>
                
                
            ))}
            </ul>
        
        </>
    )
}
export default FetchYogaData