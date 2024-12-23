import React, { useState, useEffect } from 'react';

function App() {
    const [stations, setStations] = useState([]);

    useEffect(() => {
        fetch('https://kbcgk4o80i.execute-api.us-east-2.amazonaws.com/RadioStream_to_FrontEnd/stations') // Replace with your API Gateway URL
            .then((response) => response.json())
            .then((data) => setStations(data))
            .catch((error) => console.error("Error fetching stations:", error));
    }, []);

    return (
        <div className="App">
            <h1>Radio Stations</h1>
            <ul>
                {stations.map((station) => (
                    <li key={station.id}>
                        <h2>{station.name}</h2>
                        <p>Genre: {station.genre}</p>
                        <audio controls>
                            <source src={station.streaming_url} type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
