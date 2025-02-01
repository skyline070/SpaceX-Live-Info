import React, { useEffect, useState } from 'react';
import styles from '../cssModules/cards.module.css'

const LaunchFacilities = () => {
  const [launchpads, setLaunchpads] = useState([]);

  useEffect(() => {
    async function getData(){
      const response = await fetch('https://api.spacexdata.com/v3/launchpads?limit=3');
      const res = await response.json();
      setLaunchpads(res)
    }
    getData();
  }, []);

  return (
    <div className={styles.launchfacilities}>
        <h1>Launch Facilities</h1>
      {launchpads.map((launchpad, index) => (
        <div 
          key={launchpad.id} 
          className="launch-facility" 
          style={{  display: 'flex',
            flexDirection: 'row',
            margin:'5px',
            alignContent:'center',
              borderRadius: '5px',
              justifycontent: 'space-around',
            
            
            backgroundImage: `url(${getBackgroundImage(index)})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <h6>{launchpad.location.name}</h6>
          <p>Region: {launchpad.location.region}</p>
          <p>Temperature: 25°C</p> {/* Placeholder for temperature */}
          <p>Weather: Clear</p> {/* Placeholder for weather */}
          <p>Wind: 2 m/s</p> {/* Placeholder for wind */}
        </div>
      ))}
      
    </div>
  );
};

const getBackgroundImage = (index) => {
  const images = [
    'https://live.staticflickr.com/65535/50137510881_3f675bb620_h.jpg',
    'https://live.staticflickr.com/982/42290930181_480260c49b_k.jpg',
    'https://live.staticflickr.com/65535/50906488116_c44db82fc1_k.jpg'
  ];
  return images[index % images.length];
};

export default LaunchFacilities;