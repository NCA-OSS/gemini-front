import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styles from './inputField.module.scss';

import { useState } from 'react';

export function InputFieldLogin({setData}) {

  const[userInput,setUserInput] = useState('');

  const [error, setError] = useState(null);

  function isValidEmail(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  }
  //  /\S+@\S+\.\S+/   OLD regex

  const handleChange = event => {
    setUserInput(event.target.value)
    if (!isValidEmail(event.target.value)) {
      setError('*Email is invalid, please enter a valid email.');
      setData(true);
      
    } 
    else {
      setError(null);
      setData(false);
    }
    
  };


    return (
      <Box component="form">
        <TextField type="email" className={styles.inputField_login} 
        value={userInput}
        onChange={handleChange}/>
        {error && <h2 className={styles.invalidPasswordText}>{error}</h2>}
      </Box>
    );
  }

  import IconButton from '@mui/material/IconButton';
  import OutlinedInput from '@mui/material/OutlinedInput';
  import InputAdornment from '@mui/material/InputAdornment';
  import FormControl from '@mui/material/FormControl';
  import Visibility from '@mui/icons-material/Visibility';
  import VisibilityOff from '@mui/icons-material/VisibilityOff';

  export function InputFieldLoginPassword(props) {
    //code obtained from Material UI: {mui.com/material-ui/react-text-field/} with minor adjustments made

    const [values, setValues] = React.useState({
      amount: '',
      password: '',
      weight: '',
      weightRange: '',
      showPassword: false,
    });

    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };


    const handleClickShowPassword = () => {
      setValues({
        ...values,
        showPassword: !values.showPassword,
      });
    };

    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    return(
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <div className={styles.inputField_login}>
        <FormControl sx={{width: '38ch' }} variant="outlined">
          {/* <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel> */}
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        
      </div>
    </Box>

    );
  }

  export function InputFieldStandard() {
    return (
      <TextField className={styles.inputField_standard} 
          multiline
          maxRows={4}
          variant="standard"
          label="Full Name"
        />
    );
  }

