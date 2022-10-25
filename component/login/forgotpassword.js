import Image from 'next/image';

import styles from './loginForm.module.scss';

import {InputFieldLogin} from '../shared/inputField';
import {ButtonLogin}  from '../shared/button';
import LoginTitle from './loginTitle';



export default function ForgotPassword(){
    return (
        <div className={styles.loginRectangle}>
        <Image src="/assets/images/RMS.png" alt="logo" width={500} height={100}/>

        <div className={styles.centerTitle}> 
            <h2 className={styles.loginTitleHeading}>
                Forgot Password
            </h2>
        </div>

        <div className={styles.emailTitle}><h3>EMAIL</h3></div>
        <div className={styles.inputEmail}><InputFieldLogin/></div>


        <div className={styles.loginButton}><ButtonLogin/> </div>

        <div className={styles.noAccount}>Don't have an account ?</div>
        <div className={styles.downloadInstructions}>Download Instructions</div>

    </div>
    );
}