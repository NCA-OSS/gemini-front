//React
import React, { useState, useEffect } from 'react';

//Component
import Navbar from '../../component/shared/navbar/navbar';
import { SummaryTable } from '../../component/dashboard';
import Piechart from "../../component/shared/piechart/piechart";


//Style
import styles from './index.module.scss'


export default function Home() {
    return (
        <div className={styles.background}>

            <div className={styles.navbar}>
                <Navbar />
            </div>

            <div className={styles.main}>
                <h2 className={styles.centerText}>Dashboard</h2>
                <div className={styles.centerComponent}><Piechart /></div>
                <div className={styles.centerComponent}><SummaryTable /></div>
            </div>

        </div>
    )

};