//React
import React, { useState, useEffect } from 'react';


//Component
import Navbar from '../../component/shared/navbar/navbar';
import { EmployeeTable, SummaryTable } from '../../component/dashboard';

import EmployeeProfile from '../../component/employeeProfile/employeeProfile';

import { ButtonSubmit } from '../../component/shared/button';

//Style
import styles from './employee.module.scss'

export default function EmployeeDetailPage() {
  return (
    <div className={styles.background}>
      <div className={styles.row}>
        <div className={styles.navbar}>
          <Navbar />
        </div>

        <div className={styles.main}>
          <h2 className={styles.centerText}>Employee Details</h2>
          <div className={styles.centerComponent}><EmployeeProfile /></div>
        </div>

      </div>
    </div>
  )
};
