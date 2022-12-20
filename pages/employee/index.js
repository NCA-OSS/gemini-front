//React
import React, { useState, useEffect } from 'react';


//Component
import Navbar from '../../component/shared/navbar/navbar';
import { EmployeeTable, SummaryTable } from '../../component/dashboard';



//Style
import styles from './employee.module.scss'


export default function Home() {
  return (
    <div className={styles.background}>
      <div className={styles.row}>

        <div className={styles.navbar}>
          <Navbar />
        </div>

        <div className={styles.main}>
          <h2 className={styles.centerText}>Search for Employee</h2>
          <div className={styles.centerComponent}><EmployeeTable /></div>
        </div>

      </div>
    </div>
  )
};
