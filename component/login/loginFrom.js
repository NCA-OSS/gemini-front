import Image from 'next/image';
import styles from './loginForm.module.scss';

import {InputFieldLogin} from '../shared/inputField';
import {ButtonLogin}  from '../shared/button';
import LoginTitle from './loginTitle';


export default function LoginForm() {
    return (
        
            <div className={styles.loginRectangle}>
                <Image src="/assets/images/RMS.png" alt="logo" width={500} height={100}/>

                <div> <LoginTitle/></div>

                <div className={styles.emailTitle}><h3>EMAIL</h3></div>
                <div className={styles.inputEmail}><InputFieldLogin/></div>

                <div className={styles.emailTitle}><h3>PASSWORD</h3></div>
                <div className={styles.inputPassword}><InputFieldLogin/>
                    {/* For show password icon */}
                    {/* <div>
                        <Image className={styles.showPassword} src="/assets/SVGFiles/Icons/Eye Close" alt="showpassword" width={20} height={20}/>
                    </div> */}
                </div>

                <div className={styles.loginButton}><ButtonLogin/> </div>

                <div className={styles.noAccount}>Don't have an account ?</div>
                <div className={styles.downloadInstructions}>Download Instructions</div>

            </div>

      
        

        
    );
}
