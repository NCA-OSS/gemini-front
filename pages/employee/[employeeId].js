//React
import React, { useState, useEffect } from 'react';


//Component
import Navbar from '../../component/shared/navbar/navBar';
import { EmployeeTable, BasicTable } from '../../component/shared/dashboard/dashboard';

import EmployeeProfile from '../../component/shared/employeeProfile/employeeProfile';

import { ButtonSubmit } from '../../component/shared/button';

//Style
import styles from './employee.module.scss'

export default function EmployeeDetailPage() {
  return (
    <div className={styles.background}>
      <div className={styles.row}>
        <div className={styles.leftCol}>
          <Navbar />
        </div>

        <div className={styles.rightCol}>
          <EmployeeProfile />
        </div>
      </div>
    </div>
  )
};
