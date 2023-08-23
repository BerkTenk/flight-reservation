import React, { useEffect, useState } from 'react'
import axios from 'axios'
function FlightList() {
    const [flights, setFlights] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        axios("http://localhost:3000/GetFlights")
        .then((res)=>{
            setFlights(res.data);
        })
        .catch((error)=>{
            console.error("An error occurred during the API request:", error);
        })
        .finally(()=>{
            setLoading(false);
        })
    }, []);

    if(loading){
        return <p>Loading...</p>
    }
    if(!flights || flights.length===0){
        return <p>Uçuş bulunamadi.</p>
    }


  return (
        <ul>
            {flights.map((flight)=>(
                <li key ={flight.id}>
                    {flight.name}
                </li>
            )
            )}
        </ul>
  )
}

export default FlightList