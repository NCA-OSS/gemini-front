//React
import React, { useState, useEffect } from 'react';
import LoginForm from '@/component/login/loginFrom';
import ForgotPassword from 'component/login/forgotpassword';
import CheckEmailPopUp from 'component/login/checkEmailPopUp';
import UpdatePassword from 'component/login/updatepassword';
import PasswordResetSuccess from 'component/login/passwordResetSuccess';
import styles from './login.module.scss'

export default function Home() {
    const [stage, setStage] = useState(0);

    useEffect(() => {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const passwordResetSuccess = urlSearchParams.get('passwordResetSuccess');
        if (passwordResetSuccess) {
            setStage(4);
        }
        const passwordReset = urlSearchParams.get('passwordReset');
        if (passwordReset) {
            setStage(3)
        }
    })

    return (
        <div class="m3 animate__animated animate__zoomIn">
            <div className={styles.card}>
                {stage === 0 ? <LoginForm setStage={setStage} /> :
                    stage === 1 ? <ForgotPassword setStage={setStage} /> :
                        stage === 2 ? <CheckEmailPopUp setStage={setStage} /> :
                            stage === 3 ? <UpdatePassword setStage={setStage} /> :
                                <PasswordResetSuccess setStage={setStage} />}
            </div>
        </div>


    )
};
