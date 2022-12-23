//React
import React, { useState, useEffect } from 'react';


//Component
import Navbar from '../../component/shared/navbar/navbar';

//Style
import styles from './index.module.scss'
import AddEmployee from '../../component/addEmployee/addEmployee';
import AddEmployeeFormik from '../../component/addEmployee/addEmployeeFormik';

export default function AddEmployeePage() {

  return (
    <div className={styles.background}>
      <div className={styles.row}>

        {/* <div className={styles.navbar}>
          <Navbar />
        </div> */}

        {/* <div className={styles.main}> */}
        {/* <AddEmployee /> */}
        <AddEmployeeFormik />
        {/* </div> */}

      </div>
    </div>
  )
};
