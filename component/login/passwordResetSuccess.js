//React
import React from 'react'

//Package
import Image from 'next/image';

//Component
import LoginTitle from './loginTitle';

//Style
import styles from './loginForm.module.scss';

export default function PasswordResetSuccess() {
    
  return (
    <div className={styles.resetPasswordRectangle}>
      <div className={styles.logoPadding}>
        <Image src="/assets/images/RMS.png" alt="logo" width={500} height={100} />
      </div>
      
        <div className={styles.loginTitleHeading}> <LoginTitle titleText="Password Reset Successfully"/></div>

        <div className={styles.resetSuccessAndTitlePadding}>
        <Image src="/assets/SVGFiles/Icons/ResetSuccess.svg" alt="Green check success icon" 
        width={60} height={60} className={styles.resetSuccessCheckIcon}/>
        </div>

        <h1 className={styles.resetSuccessCloseTab}>  
        You may close this tab now.
        </h1>
    </div>
  );
}
