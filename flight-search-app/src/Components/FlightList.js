import React from 'react'

function FlightList({flights, loading }) {
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
                    {flight.id}
                </li>
            )
            )}
        </ul>
  )
}

export default FlightList