//React
import React, { useState, useEffect } from 'react';

//Component
import UpdatePassword from '../../../component/login/updatepassword';
//Setup in project "component/login/updatepassword" importing component through component/

//Style
import styles from '../../index.module.scss'

export default function Home() {


  return (
    <div className={styles.loginBackground}>
      <UpdatePassword/>
    </div>
  )
}
