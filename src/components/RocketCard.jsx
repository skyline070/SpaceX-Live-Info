import React from 'react';
import styles from '../cssModules/Rockets.module.css'

function RocketCard({ rocket, onClick }) {
  return (
    <div className={styles.rocketcard} onClick={onClick}>
      <img src={rocket.flickr_images[0]} alt={rocket.rocket_name} />
      <h2>{rocket.rocket_name}</h2>
      <p>Status: {rocket.active ? 'Active' : 'Inactive'}</p>
    </div>
  );
}

export default RocketCard;