//React
import React, { useState } from 'react'
import Link from '@mui/material/Link';
//Package
import Image from 'next/image';

//Style
import styles from './loginForm.module.scss';

export default function CheckEmailPopUp(props) {
    const { setStage } = props
    const [email, setEmail] = useState('[Your Email]')

    return (
        <div className='animate__animated animate__zoomIn'>
            <div className={styles.outlookPadding}>
                <Image src="/assets/SVGFiles/Icons/OutlookMail.svg" alt="Outlook email icon" width={100} height={100} />
            </div>
            <div>
                <h1 className={styles.checkEmailFont}>
                    Check your email !
                </h1>

                <div className={styles.checkEmailFontDesc}>
                    We have sent an email to <div>{email}.</div> Check your email and click on the link provided to reset your password.
                </div>

                <div className={styles.downloadInstructions} >
                    <div>Already have an account?</div>
                    <div><a onClick={() => setStage(0)} className="lined-link">Back to Login Page</a></div>
                </div>
            </div>

        </div>
    );
}
