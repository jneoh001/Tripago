import React, { useState, useEffect, useCallback } from 'react'
import {useFetch} from '../hooks/useFetch'
//styles
import "./TripList.css"

export default function TripList() {
//   const [trips, setTrips] = useState([])
  const [url, setUrl] = useState('http://localhost:3000/trips')
  const {data: trips, isPending} = useFetch(url)
  

 
  

  return (
    <div className="trip-list">
        <h2>Trip List</h2>
        {isPending && <div>Loading trips....</div>}
        <ul>
            {trips && trips.map(trip => (
                <li key={trip.id}>
                    <h3>{trip.title}</h3>
                    <p>{trip.price}</p>
                </li>
            ))}
        </ul>

        <div className = "filters">
            <button onClick={ () => setUrl('http://localhost:3000/trips?loc=europe') }>
                European Trips
            </button>

            <button onClick={ () => setUrl('http://localhost:3000/trips')}>
                All Trips
            </button>
        </div>
    </div>
  )
}




// const fetchTrips = useCallback ( async() => {
//     const response = await fetch(url)
//     const json = await response.json()
//     setTrips(json);
//   }, [url] )

//   useEffect( () => {
//     // fetch(url)
//     // .then(response => response.json() )
//     // .then(json => setTrips(json))
//     fetchTrips()
//   }, [url, fetchTrips]); // <-- dependency array !! whenever things inside this array changes
//   // UseEffect() will run again.