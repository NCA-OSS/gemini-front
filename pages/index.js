import Head from 'next/head'
import Image from 'next/image'
import LoginForm from '../component/login/loginFrom'
import {InputFieldLogin,InputFieldStandard} from '../component/shared/inputField'
import  {ButtonLogin,ButtonSubmit}  from '../component/shared/button'

import React, { useState, useEffect } from 'react';


import styles from './index.module.scss';

export default function Home() {

  const [count, setCount] = useState(0);


  return (
    <body className={styles.loginBackground}>
      <LoginForm/>

    </body>
  )
}
