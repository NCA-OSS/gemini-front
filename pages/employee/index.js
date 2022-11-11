//React
import React, { useState, useEffect } from 'react';


//Component
import Navbar from '../../component/shared/navbar/Navbar';
import {EmployeeTable,BasicTable} from '../../component/shared/dashboard/dashboard';


//Style
import styles from '../../pages/index.module.scss'


export default function Home() {
    return (
      <div className={styles.row}>
        <div className={styles.leftCol}>
          <Navbar />
        </div>

        <div className={styles.rightCol}>
          <h2 className={styles.centerText}>Search for Employee</h2>
          <div className={styles.centerComponent}><EmployeeTable/></div>
        </div>
        
      </div>
    )
  };
