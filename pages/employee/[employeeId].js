//React
import React, { useState, useEffect } from 'react';


//Component
import Navbar from '../../component/shared/navbar/Navbar';
import {EmployeeTable,BasicTable} from '../../component/shared/dashboard/dashboard';

import EmployeeProfile from '../../component/shared/employeeProfile/employeeProfile';

//Style
import styles from '../../pages/index.module.scss'


const specific = [
    {
        name: "Tan Hong Shen 1",
        email: "hong.shen.tan@accenture.com",
        end_contract: "30-11-2022",
        priority: "High",
        full_name:"",
        nick_name:"",
        job_title:"",
        role:"",
        contact:"",
        usertype:"",
        tribe:"",
        squads:"",
        skill_sets:""
    }
]


export default function EmployeeDetailPage() {
    return (
      <div className={styles.row}>
        <div className={styles.leftCol}>
          <Navbar />
        </div>

        <div className={styles.rightCol}>
          <EmployeeProfile/>
        </div>
        
      </div>
    )
  };
