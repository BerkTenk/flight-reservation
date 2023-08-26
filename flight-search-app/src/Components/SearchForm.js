import React, { useState } from 'react'


function SearchForm({onFilterChange}) {
    const [departureAirport, setDepartureAirport] = useState("");
    const [arrivalAirport, setArrivalAirport] = useState("");
    const [departureDate, setDepartureDate] = useState("");
    const [arrivalDate, setArrivalDate] = useState("");
    const [oneWay, setOneWay] = useState(false);
    
    const handleFilterChange = () => {
        const filters = {
            departureAirport,
            arrivalAirport,
            departureDate,
            arrivalDate,
            oneWay,
        };
        if(departureAirport.trim() === "" && arrivalAirport.trim() === ""){
            alert("Please enter departure or arrival airport.");
            setDepartureAirport("");
            setArrivalAirport("");
            onFilterChange(filters);
        } else if((departureAirport.trim() !== "" && arrivalAirport.trim() === "") ||
        (departureAirport.trim() === "" && arrivalAirport.trim() !== "")){
            onFilterChange(filters);
        }
         else {
            alert("Invalid search input");
        }
        
        
    };
    return (
        <div className='bar1'>
            <input type="text" placeholder="Departure " value={departureAirport} onChange={(e) => setDepartureAirport(e.target.value)} />
            <input type="text" placeholder="Arrival " value={arrivalAirport} onChange={(e) => setArrivalAirport(e.target.value)} />
            {oneWay?<label>Departure Date: </label>:<label>Departure Date and Arrival Date: </label>}
            
            <input type="date" placeholder="Departure Date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} />
            {!oneWay &&
             <input type="date" placeholder="Arrival Date" value={arrivalDate} onChange={(e) => setArrivalDate(e.target.value)} />}
            <label>
                One Way Flight
                <input type="checkbox" checked={oneWay} onChange={() => setOneWay(!oneWay)} />
            </label>
            <button onClick={handleFilterChange}>Search</button>
        </div>
    )
}

export default SearchForm