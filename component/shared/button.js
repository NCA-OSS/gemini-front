//React
import { useState, useEffect } from 'react';
import Image from 'next/image';
//Component
import CheckEmailPopUp from '../login/checkEmailPopUp'
import PasswordResetSuccess from '../login/passwordResetSuccess'
import loading from '@/public/assets/gif/loader.gif'
//Style
import styles from './button.module.scss';
import loadingGif from '/public/assets/gif/loader.gif';

export function BasicButtonWithLoader(props) {
  const { title, onClick, load, disable } = props
  return (
    <button className={styles.button_login} onClick={onClick} disabled={disable}>
      {title}
      {load ?
        <Image src={loadingGif} className={styles.loadingGif} width={30} height={30} alt="Loading.." />
        : null}
    </button>
  )
}



export function ButtonUpdatePassword(props) {
  // const {titleName} = props

  //Promps up "Please Check Your Email" page when button clicked
  const [isUpdatePasswordShown, setIsUpdatePasswordShown] = useState(false);

  const handleClick = event => {
    setIsUpdatePasswordShown(true);  //current => !current replace with true to come back to send email screen.
    //Later on in handleClick, check whether email present in database before allowing user to click send email.
  }

  return (
    <div>
      <button type="submit" className={styles.button_login} onClick={handleClick}>
        {props.titleName}
        {isUpdatePasswordShown && <PasswordResetSuccess />}
      </button>
    </div>
  );

}



export function ButtonSubmit(props) {
  return (
    <button type="submit" className={styles.button_submit}>{props.buttonText}</button>
  );
}


