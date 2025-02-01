import React from 'react';
import styles from '../cssModules/Rockets.module.css'

function RocketDetails({ rocket, onClose }) {
  return (
    <div className={styles.rocketdetails}>
      <div className={styles.detailscontent}>
        
        <img src={rocket.flickr_images[0]} alt={rocket.rocket_name} />
        <h2>{rocket.rocket_name}</h2>
        <p>{rocket.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default RocketDetails;