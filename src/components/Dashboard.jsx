import LaunchFacilities from "./LaunchFacilites";
import Previous from "./Previous"
import Upcoming from "./Upcoming"
import styles from '../cssModules/Dashboard.module.css'
import Starlink from "./Starlink";



function Dashboard(){

    return (
        <> 
        <div className={styles.bg}>
            
            <Upcoming/>
         

            <LaunchFacilities/>
            </div>
            <div className={styles.bg}>
            <Previous/>
            <Starlink/>
        
           
            </div>
        </>
    )
}



export default Dashboard;