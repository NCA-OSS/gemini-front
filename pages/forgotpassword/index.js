import Head from 'next/head'
import Image from 'next/image'

import ForgotPassword from '../../component/login/forgotpassword';

import React, { useState, useEffect } from 'react';


import styles from '../index.module.scss';

export default function Home() {

  const [count, setCount] = useState(0);


  return (
    <body className={styles.loginBackground}>
      <ForgotPassword/>

    </body>
  )
}
