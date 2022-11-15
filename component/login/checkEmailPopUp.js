//React
import React from 'react'

//Package
import Image from 'next/image';

//Style
import styles from './loginForm.module.scss';

export default function CheckEmailPopUp() {
    
  return (
    <div className={styles.checkEmailPopUpRectangle}>
        <div className={styles.outlookPadding}>
        <Image src="/assets/SVGFiles/Icons/OutlookMail.svg" alt="Outlook email icon" width={100} height={100}/>
        </div>
        <div>
            <h1 className={styles.checkEmailFont}>
                Check your email !
            </h1>

            <h1 className={styles.checkEmailFontDesc}>
                If your email is present in the database, we have sent an email. Check your email and click on the link provided to reset your password.
            </h1>

            <h1 className={styles.closeTab}>
                You may close this tab now.
            </h1>
        </div>
    
    </div>
  );
}
