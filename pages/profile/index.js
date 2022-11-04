//React
import React, { useState, useEffect } from 'react';


//Component
import Navbar from '../../component/shared/navbar/Navbar';
import Table from '../../component/shared/dashboard/dashboard';

//Style
import styles from '../../pages/index.module.scss'


export default function Home() {
    return (
      <div className={styles.loginBackground}>
        <Navbar />
        <Table/>
        <h1>This is profile page.</h1>
      </div>
    )
  };
