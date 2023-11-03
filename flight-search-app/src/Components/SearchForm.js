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
        if((departureAirport.trim() === "" && arrivalAirport.trim() === "") && (departureDate.trim() === "" && arrivalDate.trim() === "") ){
            alert("Please enter any departure or arrival info to search.");
            setDepartureAirport("");
            setArrivalAirport("");
            setArrivalDate("");
            setDepartureDate("");
            onFilterChange("","","","");
        }  else{
            onFilterChange(filters);
        }
         
        
        
    };
    return (
        <div className='bar1'>
            <input type="text" className='inputs' placeholder="Departure " value={departureAirport} onChange={(e) => setDepartureAirport(e.target.value)} />
            <input type="text" className='inputs' placeholder="Arrival " value={arrivalAirport} onChange={(e) => setArrivalAirport(e.target.value)} />
            {oneWay?<label>Departure Date: </label>:<label>Departure Date and Arrival Date: </label>}
            
            <input type="date" className='inputs' placeholder="Departure Date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} />
            {!oneWay &&
             <input type="date" className='inputs' placeholder="Arrival Date" value={arrivalDate} onChange={(e) => setArrivalDate(e.target.value)} />}
            <label>
                One Way Flight
                <input type="checkbox" checked={oneWay} onChange={() => setOneWay(!oneWay)} />
            </label>
            <button className='button-2'onClick={handleFilterChange}>Search</button>
        </div>
    )
}

export default SearchForm