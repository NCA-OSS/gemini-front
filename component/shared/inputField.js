import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import styles from './inputField.module.scss';

export function InputFieldLogin() {
    return (
      <Box component="form">
        <TextField className={styles.inputField_login} variant="outlined" label=""/>
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

