import React from 'react'
import { Link } from 'react-router-dom'
import landing from '../../src/Assert/landing.jpg';
import styles from './Landing.module.css';
function Landing() {
  return (
    <div>
       
        <div className={styles.landing__wrapper}>
            <div className={styles.landing__text}>
                <h1>Schedule Your Daily Tasks With <span className="primaryText">Us!</span></h1>
            <div className='btnWrapper position-absolute' style={{ left: '3cm' }}>
            <Link to="/register" className="primaryBtn rounded-50" style={{ borderRadius: '8px', marginLeft: '5.5cm marginTop-1cm' }}>Register</Link>
                <Link to="/login" className='secondaryBtn rounded-50' style={{ borderRadius: '8px', marginLeft: '0cm' }}>Login </Link>
            </div>
            </div>

            <div className={styles.landing__img}>
                <img src={landing} alt="landing" />
            </div>
      </div>
    </div>
  )
}

export default Landing