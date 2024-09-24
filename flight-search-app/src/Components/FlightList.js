import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FlightList({ filters }) {
    const [flights, setFlights] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sort, setSort] = useState("");
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/api/flights")
            .then((res) => {
                // Eğer uçuş verileri "flights" alanı altında geliyorsa:
                let filteredFlights = res.data.flights || res.data;  // flights alanı varsa, yoksa tüm veri dizisi
                // Eğer flights bir array değilse diziye çevirmek gerekir.
                if (!Array.isArray(filteredFlights)) {
                    filteredFlights = Object.values(filteredFlights);
                }
    
                // Diğer filtreleme ve sıralama işlemleri...
                setFlights(filteredFlights);
            })
            .catch((error) => {
                console.error("An error occurred during the API request:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [filters, sort]);

    const [expandedFlightId, setExpandedFlightId] = useState(null);

    const handleReservation = (flightId) => {
        // Seçili uçuşu bul
        const selectedFlight = flights.find(flight => flight.id === flightId);
    
        // Eğer uçuş zaten rezervasyonlar arasında değilse, ekleyelim
        if (selectedFlight && !reservations.some(res => res.id === flightId)) {
            setReservations([...reservations, selectedFlight]);
        }
    };

    const toggleFlightDetails = (flightId) => {
        if (expandedFlightId === flightId) {
            setExpandedFlightId(null);
        } else {
            setExpandedFlightId(flightId);
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }
    if (!flights || flights.length === 0) {
        return <p>Flight not found.</p>;
    }

    return (
        <div>
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
                        Name: {flight.flightName}  <br />
                        Number: {flight.flightNumber}  <br />
                        Airline Code: {flight.airlineCode}  <br />
                        Destinations: {flight.route.destinations[0]} --- {flight.route.destinations[1]}   <br />
                        <button className='button-1' onClick={() => handleReservation(flight.id)}> Book Flight </button>
                        <button className='button-1' onClick={() => toggleFlightDetails(flight.id)}>
                            {expandedFlightId === flight.id ? 'Hide Details' : 'Show Details'}
                        </button>
                        {expandedFlightId === flight.id && (
                            <div>
                                Departure City / Country: {flight.departureCity} <br />
                                Arrival City / Country: {flight.arrivalCity} <br />
                                Departure Airport: {flight.departureAirport} <br />
                                Arrival Airport: {flight.arrivalAirport} <br />
                            </div>
                        )}
                    </li>
                ))}
            </ul>
             {/* Rezervasyonlarım Kısmı */}
        <h2>My Reservations</h2>
        {reservations.length === 0 ? (
            <p>No reservations yet.</p>
        ) : (
            <ul className='reservations'>
                {reservations.map((reservation) => (
                    <li key={reservation.id}>
                        Reservation: {reservation.flightName} <br />
                        Departure: {reservation.departureAirport} <br />
                        Arrival: {reservation.arrivalAirport} <br />
                    </li>
                ))}
            </ul>
        )}
        </div>
    );
}

export default FlightList;
