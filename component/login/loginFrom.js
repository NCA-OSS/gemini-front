//React
import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router"
//Package
import Image from 'next/image';
import Link from '@mui/material/Link';

//Component
import { EmailFieldPassword, CommonInputField, EmailConditionChecker } from '../shared/inputField';
import { BasicButtonWithLoader } from '../shared/button';
//Style
import styles from './loginForm.module.scss';
import logo from '@/public/assets/images/RMS.png'

export default function LoginForm(props) {
    const router = useRouter()
    const { setStage } = props
    const [loading, setLoading] = useState(false);
    const [buttonDisable, setButtonDisable] = useState(true)
    const [loginForm, setLoginForm] = useState({
        email: "",
        emailErrorMsg: null,
        password: "",
    })

    const handleLogin = () => {    
        setLoading(true);
        setButtonDisable(true)
        setTimeout(function () {
            router.push('/dashboard')
        }, 5000);
    }

    const checkEmailHandler = (value) => {
        const validateEmail = EmailConditionChecker(value)
        setLoginForm({
            ...loginForm,
            emailErrorMsg: validateEmail ? null : '*Email is invalid, please enter a valid email.',
            email: value
        })
    }

    const passwordHandler = (value) => {
        setLoginForm({ ...loginForm, password: value })
    }

    useEffect(() => {
        if (loginForm.email !== "" && loginForm.password !== "") setButtonDisable(false);
    }, [loginForm])

    return (

        <div className='animate__animated animate__fadeIn'>
            <Image src={logo} alt="logo" width={500} height={100} />
            <div className="title text-black">Log In</div>

            <div className="text-black flex-col-gap mt3">
                <div className="inputlabel">EMAIL</div>
                <div>
                    <CommonInputField
                        data={loginForm.email}
                        onChange={(e) => { checkEmailHandler(e.target.value) }}
                        error={loginForm.emailErrorMsg}
                    />
                </div>
                <br />
                <div className="flex-row-space-between">
                    <div className="inputlabel">PASSWORD</div>
                    <div><a onClick={() => setStage(1)} className="lined-link">Forgot password</a></div>
                </div>
                <div>
                    <EmailFieldPassword labelName="Password"
                        data={loginForm.password}
                        onChange={(e) => { passwordHandler(e.target.value) }}
                    />
                </div>
            </div>

            <BasicButtonWithLoader title="Login" onClick={handleLogin} load={loading} disable={buttonDisable} />

            <div className={styles.downloadInstructions} >
                <div>Don&apos;t have an account ?</div>
                <div><a className="lined-link" href="/LoginInstructions.pdf" download="Instructions">Download Instructions
                </a>

                </div>
            </div>

        </div >
    );
}
