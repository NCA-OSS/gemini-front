//React
import React, { useState } from 'react';

//Package
import Image from 'next/image';

//Component
import { EmailFieldPassword } from '../shared/inputField';
import { ButtonUpdatePassword } from '../shared/button';
import LoginTitle from './loginTitle';
import { BasicButtonWithLoader } from '../shared/button';
//Style
import Link from '@mui/material/Link';
import styles from './loginForm.module.scss';
import logo from '@/public/assets/images/RMS.png'
import { useRouter } from "next/router"


export default function UpdatePassword(props) {
    const router = useRouter()
    const { setStage } = props;

    return (

        <div className='animate__animated animate__zoomIn'>
            <Image src={logo} alt="logo" width={500} height={100} />
            <div className="title text-black">Update Password</div>

            <div class="flex-row-space-between mt3">
                <div className="inputlabel">NEW PASSWORD</div>
            </div>
            <div><EmailFieldPassword labelName="Password" /></div>

            <div class="flex-row-space-between mt3">
                <div className="inputlabel">CONFIRM PASSWORD</div>
            </div>
            <div><EmailFieldPassword labelName="Password" /></div>

            {/* <div className={styles.loginButton}> <ButtonUpdatePassword titleName="Update" /> </div> */}
            <BasicButtonWithLoader title="Update Password" onClick={() => router.replace("/user/login?passwordResetSuccess=true")} />

            <div className={styles.downloadInstructions} >
                <div>Don't have an account ?</div>
                <div><a className="lined-link" href="/LoginInstructions.pdf" download="Instructions">Download Instructions
                </a></div>
            </div>

        </div >
    );
}