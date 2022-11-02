import Head from 'next/head'
import Image from 'next/image'
import LoginForm from '../component/login/loginFrom'

import React, { useState, useEffect } from 'react';


import styles from './index.module.scss';

export default function Home() {


  return (
    <div className={styles.loginBackground}>
      <LoginForm/>

    </div>
  )
}
