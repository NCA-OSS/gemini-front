import styles from './button.module.scss';

export function ButtonLogin() {
    return (
        <button  type="submit" className={styles.button_login}>Login</button>
    );
  }

  export function ButtonSubmit(){
    return(
        <button type="submit" className={styles.button_submit}>SUBMIT</button>
    );
  }


