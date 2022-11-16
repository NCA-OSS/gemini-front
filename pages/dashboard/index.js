//React
import React, { useState, useEffect } from 'react';

//Component
import Navbar from '../../component/shared/navbar/navbar';
import { BasicTable } from '../../component/shared/dashboard/dashboard';
import Piechart from "../../component/shared/piechart/piechart";

//Style
import styles from './index.module.scss'


export default function Home() {
    return (
        <div className={styles.background}>
            <div className={styles.row}>

                <div className={styles.leftCol}>
                    <Navbar />
                </div>

                <div className={styles.rightCol}>
                    <div className={styles.centerText}><Piechart /></div>
                    <div className={styles.centerText}><BasicTable /></div>
                </div>
            </div>
        </div>
    )

};