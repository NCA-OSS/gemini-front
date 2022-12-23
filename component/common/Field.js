import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';



export function CommonInputField(props) {
    const { label, data, onChange, error, errorMsg, size, fullWidth, name, type } = props;

    return (
        <TextField
            sx={{ m: 1.2 }}
            error={error}
            id="outlined-basic"
            label={label}
            variant="outlined"
            value={data}
            helperText={error ? errorMsg : ''}
            size={size}
            fullWidth={fullWidth}
            onChange={onChange}
            name={name}
            type={type} />
    )
}

CommonInputField.propTypes = {
    data: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.bool.isRequired,
    errorMsg: PropTypes.string,
    size: PropTypes.oneOf(['small', 'large']),
    fullWidth: PropTypes.bool,
    label: PropTypes.string.isRequired,
};

