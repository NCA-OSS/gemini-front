import PropTypes from 'prop-types';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export function CommonDropdownField(props) {
    const { label, data, onChange, options, size, fullWidth } = props;

    return (
        <FormControl sx={{ mt: '16px', mb: '8px' }} size={size} fullWidth={fullWidth}>
            <InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>
            <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={data}
                label={label}
                onChange={onChange}
            >
                {options.map((item, key) => {
                    return (
                        <MenuItem value={10} key={key} > {item}</MenuItem>
                    )
                })}
            </Select>
        </FormControl>)
}

CommonDropdownField.propTypes = {
    label: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    size: PropTypes.oneOf(['small', 'large']),
    options: PropTypes.array,
    fullWidth: PropTypes.bool,
};