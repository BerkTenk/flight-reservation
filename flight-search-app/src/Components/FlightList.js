import React, { useEffect, useState } from 'react'
import axios from 'axios'
function FlightList({filters}) {
    const [flights, setFlights] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sort, setSort] = useState("");

    useEffect(()=>{
        axios("http://localhost:3000/GetFlights")
        .then((res)=>{
            let filteredFlights=res.data;
            if(filters.departureAirport){
                filteredFlights=filteredFlights.filter((flight)=>
                    flight.departure.toLowerCase().includes(filters.departureAirport.toLowerCase())
                )
            };
            if (filters.arrivalAirport) {
                filteredFlights = filteredFlights.filter((flight) =>
                    flight.arrival.toLowerCase().includes(filters.arrivalAirport.toLowerCase())
                );
            };
            if (filters.departureDate) {
                filteredFlights = filteredFlights.filter((flight) =>
                    flight.departureDate.toLowerCase().includes(filters.departureDate.toLowerCase())
                );
            };
            if (filters.arrivalDate) {
                filteredFlights = filteredFlights.filter((flight) =>
                    flight.arrivalDate.toLowerCase().includes(filters.arrivalDate.toLowerCase())
                );
            };
            if(sort==="price"){
                filteredFlights.sort((a,b)=>a.price- b.price);
            } else if(sort==="name"){
                filteredFlights.sort((a,b)=>a.name.localeCompare(b.name));
            }

            setFlights(filteredFlights);
        })
        .catch((error)=>{
            console.error("An error occurred during the API request:", error);
        })
        .finally(()=>{
            setLoading(false);
        })
    }, [filters, sort]);

    if(loading){
        return <p>Loading...</p>
    }
    if(!flights || flights.length===0){
        return <p>Flight not found.</p>
    }


  return (
    <div>
        <br/>
        <div className='bar'>
            <button onClick={() => setSort("price")}>Sort By Price</button>
            <button onClick={() => setSort("name")}>Sort By Name</button>
        </div>
        <ul className='list'>
            {flights.map((flight)=>(
                <li key ={flight.id}>
                Name:{flight.name}  <br/>
                Departure:{flight.departure} <br/>
                Arrival:{flight.arrival} <br/>
                Departure Date: {flight.departureDate} <br/>
                Arrival Date: {flight.arrivalDate} <br/>
                Price: {flight.price}₺ <hr/>
                
                </li>
            )
            )}
        </ul>
        </div>
  )
}

export default FlightList