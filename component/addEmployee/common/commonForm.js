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
import styles from '../addEmployee.module.scss'

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export default function CommonForm(props) {
    const router = useRouter()
    const { setAddData, addData } = props;
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

            <div className={styles.formCol}>
                <FormControl sx={{ mt: '16px', mb: '8px', width: '100%' }} size="small">
                    <InputLabel id="demo-simple-select-helper-label">Status</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={addData.status}
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
                    <InputLabel id="demo-select-small">User Type</InputLabel>
                    <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={addData.userType}
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
            </div>

            <TextField id="outlined-basic" label="Full Name" variant="outlined" fullWidth margin="normal" size="small" value={addData.name} />
            <TextField id="outlined-basic" label="Nickname" variant="outlined" fullWidth margin="normal" size="small" value={addData.nickname} />
            <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth margin="normal" size="small" value={addData.email} />
            <TextField id="outlined-basic" label="Role" variant="outlined" fullWidth margin="normal" size="small" value={addData.role} />
            <TextField id="outlined-basic" label="Contact Number" variant="outlined" fullWidth margin="normal" size="small" value={addData.phoneNumber} />

            <div className={styles.formCol}>
                <FormControl sx={{ mt: '16px', mb: '8px', width: '100%' }} size="small">
                    <InputLabel id="demo-simple-select-helper-label">Tribe</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={addData.tribe}
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
                    <InputLabel id="demo-simple-select-helper-label">Squad</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={addData.squad}
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
            </div>

            <FormControl sx={{ mt: '16px', mb: '8px', width: '100%' }} size="small">
                <InputLabel id="demo-multiple-chip-label">Skillsets</InputLabel>
                <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={personName}
                    onChange={handleChangeMultiple}
                    input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                >
                    {names.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, personName, theme)}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>


        </div>
    );
}