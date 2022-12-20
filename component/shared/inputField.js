//React
import * as React from 'react';
import { useState } from 'react';
//Package
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
//Style
import styles from './inputField.module.scss';


export const EmailConditionChecker = (email) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

export function CommonInputField(props) {
  const { data, onChange, error } = props;

  return (
    <>
      <input value={data} onChange={onChange} className={styles.input} />
      {error && <div class={styles.errorMsg}>{error}</div>}
    </>
  )
}


// export function EmailField({ setData }) {

//   const [userInput, setUserInput] = useState('');
//   const [error, setError] = useState(null);

//   function isValidEmail(email) {
//     return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
//   }

//   const handleChange = event => {
//     setUserInput(event.target.value)
//     if (!isValidEmail(event.target.value)) {
//       setError('*Email is invalid, please enter a valid email.');
//       setData(true);

//     }
//     else {
//       setError(null);
//       setData(false);
//     }
//   };

//   return (
//     <>
//       <input value={userInput} onChange={handleChange} className={styles.input} />
//       {error && <div class={styles.errorMsg}>{error}</div>}
//     </>
//   );
// }



export function EmailFieldPassword(props) {
  const { data, onChange } = props;

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
    setTimeout(function () {
      setShowPassword(false);
    }, 3000);
  };

  return (
    <div className={styles.passwordContainer}>
      <input
        type={showPassword ? 'text' : 'password'}
        className={styles.input}
        value={data}
        onChange={onChange}
      />
      <IconButton
        size="small"
        aria-label="toggle password visibility"
        onClick={handleClickShowPassword}
        edge="end"
        className={styles.passwordEye}
      >
        {showPassword ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </div>

  );
}


