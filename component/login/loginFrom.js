import Image from 'next/image';
import styles from './loginForm.module.scss';

import {InputFieldLogin,InputFieldLoginPassword} from '../shared/inputField';
import {ButtonLogin}  from '../shared/button';
import LoginTitle from './loginTitle';

import Link from '@mui/material/Link';


export default function LoginForm() {
    return (
        
            <div className={styles.loginRectangle}>
                <Image src="/assets/images/RMS.png" alt="logo" width={500} height={100}/>

                <div> <LoginTitle titleText="Log In to Resource Management System"/></div>

                <div className={styles.emailTitle}><h3>EMAIL</h3></div>
                <div className={styles.inputEmail}><InputFieldLogin labelName="Email address"/></div>

                <div className={styles.row}>
                    <div className={styles.columnLeft}>
                        <div className={styles.emailTitle}><h3>PASSWORD</h3></div>
                    </div>

                    <div className={styles.columnRight}>
                        <div className={styles.forgotPassRightAlign} ><Link href='forgotpassword'>Forgot password</Link></div>
                    </div>

                </div>


                <div className={styles.inputPassword}><InputFieldLoginPassword labelName="Password"/>
                    {/* For show password icon */}
                    {/* <div>
                        <Image className={styles.showPassword} src="/assets/SVGFiles/Icons/Eye Close" alt="showpassword" width={20} height={20}/>
                    </div> */}
                </div>

                <div className={styles.loginButton}><ButtonLogin titleName="Login"/> </div>


                <div className={styles.noAccount}>Don't have an account ?</div>
                <div className={styles.downloadInstructions} >
                    <a href="/LoginInstructions.pdf" download="Instructions">Download Instructions
                    </a>
                </div>

            </div>
    );
}
