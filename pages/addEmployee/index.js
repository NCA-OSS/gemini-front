//React
import React, { useState, useEffect } from 'react';


//Component
import Navbar from '../../component/shared/navbar/navbar';
import { EmployeeTable, SummaryTable } from '../../component/dashboard';

//Style
import styles from './index.module.scss'
import AddEmployee from '@/component/addEmployee/addEmployee';


export default function Home() {



  return (
    <div className={styles.background}>
      <div className={styles.row}>

        <div className={styles.navbar}>
          <Navbar />
        </div>

        <div className={styles.main}>
          <AddEmployee />

        </div>

      </div>
    </div>
  )
};
