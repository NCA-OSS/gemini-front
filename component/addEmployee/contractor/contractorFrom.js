//React
import React, { useState } from 'react';
import { useRouter } from "next/router"
import { style } from '@mui/system';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { useTheme } from '@mui/material/styles';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';


export default function ContractorForm(props) {
    const router = useRouter()
    const [isContractor, setIsContractor] = useState(false);
    const [age, setAge] = React.useState('');
    const handleChange = (e) => {
        if (!e.target.checked) setIsContractor(true)
        if (e.target.checked) setIsContractor(false)

        // do whatever you want with isChecked value
    }

    const handleChangeDropdown = (e) => {
        setAge(e.target.value);
    };

    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

    const handleChangeMultiple = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const [value, setValue] = useState(dayjs('2014-08-18T21:11:54'));

    const handleChangeDate = (newValue) => {
        setValue(newValue);
    };


    return (
        <div>
            <TextField id="outlined-basic" label="Job Title" variant="outlined" fullWidth margin="normal" size="small" />
            <TextField id="outlined-basic" label="Agency Name" variant="outlined" fullWidth margin="normal" size="small" />
            <TextField id="outlined-basic" label="Residing Country" variant="outlined" fullWidth margin="normal" size="small" />

            <FormControl sx={{ mt: '16px', mb: '8px', width: '100%' }} size="small">
                <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={age}
                    label="Age"
                    onChange={handleChangeDropdown}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>


            <FormControl sx={{ mt: '16px', mb: '8px', width: '100%' }} size="small">
                <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <Stack spacing={3}>
                        <MobileDatePicker
                            label="Date mobile"
                            inputFormat="MM/DD/YYYY"
                            value={value}
                            onChange={handleChangeDate}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </Stack>
                </LocalizationProvider>
            </FormControl>

        </div>
    );
}