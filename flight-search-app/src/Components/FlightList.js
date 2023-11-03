import React, { useEffect, useState } from 'react'
import axios from 'axios'
function FlightList({ filters }) {
    const [flights, setFlights] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sort, setSort] = useState("");

    useEffect(() => {
        axios("http://localhost:3000/GetFlights")
            .then((res) => {
                let filteredFlights = res.data;
                if (filters.departureAirport) {
                    filteredFlights = filteredFlights.filter((flight) =>
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
                if (sort === "price") {
                    filteredFlights.sort((a, b) => a.price - b.price);
                } else if (sort === "name") {
                    filteredFlights.sort((a, b) => a.name.localeCompare(b.name));
                } else if (sort === "duration") {
                    filteredFlights.sort((a, b) => a.duration.localeCompare(b.duration));
                } else if (sort === "depTime") {
                    filteredFlights.sort((a, b) => a.departureTime.localeCompare(b.departureTime));
                } else if (sort === "arrTime") {
                    filteredFlights.sort((a, b) => a.arrivalTime.localeCompare(b.arrivalTime));
                }

                setFlights(filteredFlights);
            })
            .catch((error) => {
                console.error("An error occurred during the API request:", error);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [filters, sort]);


    const [expandedFlightId, setExpandedFlightId] = useState(null);

    const toggleFlightDetails = (flightId) => {
        if (expandedFlightId === flightId) {
            setExpandedFlightId(null);
        } else {
            setExpandedFlightId(flightId);
        }
    };

    if (loading) {
        return <p>Loading...</p>
    }
    if (!flights || flights.length === 0) {
        return <p>Flight not found.</p>
    }


    return (
        <div>
            <br />
            <div className='bar2'>
                <button className='button-1' onClick={() => setSort("price")}>Sort By Price</button>
                <button className='button-1' onClick={() => setSort("name")}>Sort By Name</button>
                <button className='button-1' onClick={() => setSort("duration")}>Sort By Duration</button>
                <button className='button-1' onClick={() => setSort("depTime")}>Sort By Departure Time</button>
                <button className='button-1' onClick={() => setSort("arrTime")}>Sort By Arrival Time</button>
            </div>
            <ul className='list'>
                {flights.map((flight) => (
                    <li key={flight.id}>
                        Name:{flight.name}  <br />
                        Departure:{flight.departure} <br />
                        Arrival:{flight.arrival} <br />
                        Departure Date: {flight.departureDate} <br />
                        Arrival Date: {flight.arrivalDate} <br />
                        Departure Time: {flight.departureTime} <br />
                        Arrival Time: {flight.arrivalTime} <br />
                        Duration : {flight.duration} <br />
                        Price: {flight.price}₺ <br />
                        <button className='button-1' onClick={() => toggleFlightDetails(flight.id)}>
                            {expandedFlightId === flight.id ? 'Hide Details' : 'Show Details'}
                        </button>
                        {expandedFlightId === flight.id && (
                            <div>
                                Departure City / Country: {flight.departureCity} <br />
                                Arrival City / Country: {flight.arrivalCity}  <br />
                                Departure Airport: {flight.departureAirport} <br />
                                Arrival Airport: {flight.arrivalAirport} <br />
                            </div>
                        )}
                        

                    </li>
                )
                )}
            </ul>
        </div>
    )
}

export default FlightList