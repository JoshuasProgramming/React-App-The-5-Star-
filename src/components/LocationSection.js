import React from 'react';
import '../styles/LocationSection.css';
import MapContainer from './GoogleMapApi.js';

function LocationSection() {
  return (
    <section className="section-3" id="Location">
        <h1 className="location-header">Location</h1>
        <h3 className="location-text">1 Kinnerton St, London SW1X 8EA</h3>
        
        <div id="map" className="google-api">
            <MapContainer />
        </div>
        <h2 className="opening-time-header">Opening Times</h2>
        <h3 className="mon-fri"> Mon/Fri 08:00 - 16:00</h3>
        <h3 className="saturday"> Saturday 08:00 - 20:00</h3>
        <h3 className="sunday"> Sunday Closed</h3>
    </section>
  );

}

export default LocationSection;
