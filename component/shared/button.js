//React
import {useState,useEffect} from 'react';

//Component
import CheckEmailPopUp from '../login/checkEmailPopUp'
import PasswordResetSuccess from '../login/passwordResetSuccess'

//Style
import styles from './button.module.scss';


export function ButtonLogin(props) {
    return (
        // <button  type="submit" className={styles.button_login} onClick={handleClick}>{buttonText}</button>
        <button  type="submit" className={styles.button_login} >{props.titleName}</button>
    );
  }

  export function ButtonSendEmail({data}) {
    //Promps up "Please Check Your Email" page when button clicked
    const [isCheckEmailShown, setIsCheckEmailShown] = useState(false);
  
  
    const handleClick = event => {
      setIsCheckEmailShown(true);  //current => !current replace with true to come back to send email screen.
      //Later on in handleClick, check whether email present in database before allowing user to click send email.
    }

      return (
          <div>
          <button  
          type="submit" 
          className={styles.button_login} 
          onClick={handleClick} 
          disabled={data}>
            Send Email
            {isCheckEmailShown && <CheckEmailPopUp />}
          </button>
          </div>
      );
      
    }

    export function ButtonUpdatePassword(props) {
      //Promps up "Please Check Your Email" page when button clicked
      const [isUpdatePasswordShown, setIsUpdatePasswordShown] = useState(false);
    
      const handleClick = event => {
        setIsUpdatePasswordShown(true);  //current => !current replace with true to come back to send email screen.
        //Later on in handleClick, check whether email present in database before allowing user to click send email.
      }
  
        return (
            <div>
              <button  type="submit" className={styles.button_login} onClick={handleClick}>
                {props.titleName}
                {isUpdatePasswordShown && <PasswordResetSuccess />}
              </button>
            </div>
        );
        
      }



  export function ButtonSubmit(){
    return(
        <button type="submit" className={styles.button_submit}>SUBMIT</button>
    );
  }


