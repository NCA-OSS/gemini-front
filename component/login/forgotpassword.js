//React
import React, { useState, useEffect } from 'react';
import Link from '@mui/material/Link';
import { useRouter } from "next/router"
//Package
import Image from 'next/image';

//Component
import { CommonInputField, EmailConditionChecker } from '../shared/inputField';
import { ButtonSendEmail } from '../shared/button';
import LoginTitle from './loginTitle';
import logo from '@/public/assets/images/RMS.png'
import { BasicButtonWithLoader } from '../shared/button';
//Style
import styles from './loginForm.module.scss';

export default function ForgotPassword(props) {
    const router = useRouter()
    const { changeState, setStage } = props;
    const [loading, setLoading] = useState(false);
    const [buttonDisable, setButtonDisable] = useState(true)
    const [loginForm, setLoginForm] = useState({
        email: "",
        emailErrorMsg: null,
    })

    const checkEmailHandler = (value) => {
        const validateEmail = EmailConditionChecker(value)
        setLoginForm({
            ...loginForm,
            emailErrorMsg: validateEmail ? null : '*Email is invalid, please enter a valid email.',
            email: value
        })
    }

    const handleSendEmail = () => {
        //set timeout to test loading animation
        setLoading(true);
        setButtonDisable(true);
        setTimeout(function () {
            setStage(2)
        }, 5000);
    }

    useEffect(() => {
        if (loginForm.email !== "") setButtonDisable(false);
    }, [loginForm])

    return (

        <div className='animate__animated animate__fadeIn'>
            <Image src={logo} alt="logo" width={500} height={100} />
            <div className="title text-black">Forgot Password</div>

            <div className="text-black flex-col-gap mt3">
                <div className="inputlabel">EMAIL</div>
                <div><CommonInputField
                    data={loginForm.email}
                    onChange={(e) => { checkEmailHandler(e.target.value) }}
                    error={loginForm.emailErrorMsg}
                /></div>
            </div>

            <BasicButtonWithLoader title="Send Email" onClick={handleSendEmail} load={loading} disable={buttonDisable} />

            <div className={styles.downloadInstructions} >
                <div>Already have an account?</div>
                <div><a onClick={() => setStage(0)} className="lined-link">Back to Login Page</a></div>
            </div>

        </div >
    );
}