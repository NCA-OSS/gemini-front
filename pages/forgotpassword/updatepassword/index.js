//React
import React, { useState, useEffect } from 'react';

//Package
import Head from 'next/head'
import Image from 'next/image'

//Component
import UpdatePassword from '../../../component/login/updatepassword';
//Setup in project "component/login/forgotpassword" importing component through component/


//Style
import styles from '../../index.module.scss'

export default function Home() {


  return (
    <div className={styles.loginBackground}>
      <UpdatePassword/>
    </div>
  )
}
