//React
import React from 'react'
import Link from '@mui/material/Link';
//Package
import Image from 'next/image';

//Component
import logo from '@/public/assets/images/RMS.png'

//Style
import styles from './loginForm.module.scss';

export default function PasswordResetSuccess() {

  return (
    <div className='animate__animated animate__zoomIn'>
      <Image src={logo} alt="logo" width={500} height={100} />
      <div className="title text-black">Password Reset Successfully</div>

      <div className={styles.resetSuccessAndTitlePadding}>
        <Image src="/assets/SVGFiles/Icons/ResetSuccess.svg" alt="Green check success icon"
          width={60} height={60} className={styles.resetSuccessCheckIcon} />
      </div>

      <div className={styles.resetSuccessCloseTab}>
        Back to <Link href="/user/login">Login Page</Link>.
      </div>
    </div >
  );
}
