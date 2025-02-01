import styles from '../cssModules/cards.module.css';


function Card({ rocket, history }) {
    return (
        <>
            <div className={styles.outerCard}>
                <h1 className={styles.upcomingheader}>{`${history} Launches`}</h1>
                <div className={styles.card}>
                    <div>
                        <p className={styles.bigFont}>Mission Name</p>
                        <span>{rocket.mission_name}</span>
                        <p className={styles.bigFont}>Rocket</p>
                        { <span>{rocket.rocket?.rocket_name}</span>  }
                        <p className={styles.bigFont}>Flight Number</p>
                        <span>{rocket.flight_number}</span>
                        <p className={styles.bigFont}>Time</p>
                        <span>{new Date(rocket.launch_date_utc).toLocaleString('en-US', { timeZone: 'UTC' })}</span>
                        
                        <div>
                            <p className={styles.bigFont}>Links </p>
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                        </div>
                    </div>
                    <div>
                        <p className={styles.bigFont}>Rocket Logo</p>
                        {rocket.links?.mission_patch_small && (
                            <img className={styles.logo} src={rocket.links.mission_patch_small} alt="Rocket Logo" />
                        )}
                        <p className={styles.bigFont}>LaunchPad</p>
                        { <p>{rocket.launch_site?.site_name_long}</p>}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
