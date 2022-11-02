import React from 'react'
import styles from './loginForm.module.scss';
import Image from 'next/image';

export default function CheckEmailPopUp() {
    
  return (
    <div className={styles.checkEmailPopUpRectangle}>
        <div className={styles.outlookPadding}>
        <Image src="/assets/SVGFiles/Icons/OutlookMail.svg" alt="Outlook email icon" width={235} height={235}/>
        </div>
        <div>
            <h1 className={styles.checkEmailFont}>
                Check your email !
            </h1>

            <h1 className={styles.checkEmailFontDesc}>
                You’ve entered [email] as the email to reset password. Check your email and click on the link provided to reset your password.
            </h1>

            <h1 className={styles.closeTab}>
                You may close this tab now.
            </h1>
        </div>
    
    </div>
  );
}
