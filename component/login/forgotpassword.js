import Image from 'next/image';

import styles from './loginForm.module.scss';

import {InputFieldLogin} from '../shared/inputField';
import {ButtonSendEmail}  from '../shared/button';

import React,{useEffect, useState} from 'react';

import LoginTitle from './loginTitle';

import Link from '@mui/material/Link';

export default function ForgotPassword(){

    const [data, setData] = useState(true);

    // const childToParent = (childData) => {
    //     setData(childData); //should be true until valid email 
    // }   

    // useEffect(()=>{
    //     console.log('Button disabled ?: ',data);
    // });
    

    return (
        <div className={styles.loginRectangle}>
        <Image src="/assets/images/RMS.png" alt="logo" width={500} height={100}/>

        <div> <LoginTitle titleText="Forgot Password"/></div>


        <div className={styles.emailTitle}><h3>EMAIL</h3></div>

        <div className={styles.inputEmail}>
            <InputFieldLogin setData={setData} />
        </div>

        <div className={styles.loginButton}>
            <ButtonSendEmail data={data}/> 
        </div>

        <div className={styles.noAccount}>Don't have an account ?</div>
        <div className={styles.downloadInstructions} >
            <a href="/LoginInstructions.pdf" download="Instructions">Download Instructions
            </a>
        </div>

    </div>
    );
}