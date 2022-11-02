//React
import React,{useState} from 'react';

//Package
import Image from 'next/image';

//Component
import {InputFieldLogin} from '../shared/inputField';
import {ButtonSendEmail}  from '../shared/button';
import LoginTitle from './loginTitle';

//Style
import styles from './loginForm.module.scss';

export default function ForgotPassword(){

    const [data, setData] = useState(true);

    //function to handle click (for cleaner code so will have 1 button for login)


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