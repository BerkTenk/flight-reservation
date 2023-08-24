import React, { useState } from 'react'


function SearchForm({onFilterChange}) {
    const [departureAirport, setDepartureAirport] = useState("");
    const [arrivalAirport, setArrivalAirport] = useState("");
    const [departureDate, setDepartureDate] = useState("");
    const [arrivalDate, setArrivalDate] = useState("");
    const [oneWay, setOneWay] = useState(true);
    
    const handleFilterChange = () => {
        const filters = {
            departureAirport,
            arrivalAirport,
            departureDate,
            arrivalDate,
            oneWay,
        };
        onFilterChange(filters);
    };
    return (
        <div className='bar'>
            <input type="text" placeholder="Departure Airport" value={departureAirport} onChange={(e) => setDepartureAirport(e.target.value)} />
            <input type="text" placeholder="Arrival Airport" value={arrivalAirport} onChange={(e) => setArrivalAirport(e.target.value)} />
            <input type="date" placeholder="Departure Date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} />
            {!oneWay && <input type="date" placeholder="Arrival Date" value={arrivalDate} onChange={(e) => setArrivalDate(e.target.value)} />}
            <label>
                Tek Yönlü Uçuş
                <input type="checkbox" checked={oneWay} onChange={() => setOneWay(!oneWay)} />
            </label>
            <button onClick={handleFilterChange}>Filtrele</button>
        </div>
    )
}

export default SearchForm