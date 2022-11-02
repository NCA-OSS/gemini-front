//React
import React,{useState} from 'react';

//Package
import Image from 'next/image';

//Component
import {InputFieldLoginPassword} from '../shared/inputField';
import {ButtonUpdatePassword}  from '../shared/button';
import LoginTitle from './loginTitle';

//Style
import styles from './loginForm.module.scss';


export default function UpdatePassword(){


    return (
        <div className={styles.loginRectangle}>
        <Image src="/assets/images/RMS.png" alt="logo" width={500} height={100}/>

        <div> <LoginTitle titleText="Forgot Password"/></div>

        <div className={styles.emailTitle}><h3>NEW PASSWORD</h3></div>
        <div className={styles.inputEmail}><InputFieldLoginPassword labelName="New Password"/></div>

        <div className={styles.emailTitle}><h3>CONFIRM PASSWORD</h3></div>
        <div className={styles.inputEmail}><InputFieldLoginPassword labelName="Confirm Password"/></div>


        <div className={styles.loginButton}> <ButtonUpdatePassword titleName="Update"/> </div>

    </div>
    );
}