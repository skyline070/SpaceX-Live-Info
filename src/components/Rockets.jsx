import React, { useEffect, useState } from 'react';
import RocketCard from './RocketCard';
import RocketDetails from './RocketsDetails';
import styles from '../cssModules/Rockets.module.css'

function Rockets(){

   
        const [rockets, setRockets] = useState([]);
        const [selectedRocket, setSelectedRocket] = useState(null);
      
        useEffect(() => {
          async function getData(){
            const response = await fetch('https://api.spacexdata.com/v3/rockets?limit=3');
            const res = await response.json();
            setRockets(res);
          }
          getData();
        }, []);
      
        const handleCardClick = (rocket) => {
          setSelectedRocket(rocket);
        };
      
        const closeDetails = () => {
          setSelectedRocket(null);
        };
      
        return (
          <div className={styles.App}>
         <h1></h1>
            <div className={styles.rocketslist}>
              {rockets.map(rocket => (
                <RocketCard key={rocket.id} rocket={rocket} onClick={() => handleCardClick(rocket)} />
              ))}
            </div>
            {selectedRocket && (
              <RocketDetails rocket={selectedRocket} onClose={closeDetails} />
            )}
          </div>
        );
      }
      


export default Rockets;