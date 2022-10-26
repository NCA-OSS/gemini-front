//React
import React, { useState, useEffect } from 'react';

//Component
import LoginForm from '../component/login/loginFrom'
import Navbar from '../component/shared/navbar/navBar';

//Style
import styles from './index.module.scss';

export default function Home() {


  return (
    <div className={styles.loginBackground}>
      <LoginForm />
      <Navbar />
    </div>
  )
};
