import React, { useState, useEffect } from "react";

const api = "http://localhost:8088"

export const Locations = () => {
    const [locations, setLocations] = useState([])

    useEffect(
        () => {
            fetch(`${api}/locations`)
                .then(res => res.json())
                .then((data) => {
                    setLocations(data)
                })
        },
        []
    )
    return (
        <>
        {locations.map((location) => {
            return <h2>{location.city} {location.state}</h2>
        })}
        </>
    )
}