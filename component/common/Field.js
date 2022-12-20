import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';



export function CommonInputField(props) {
    const { data, onChange, error, errorMsg, size, fullWidth } = props;

    return (
        <TextField
            error={error}
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            value={data}
            helperText={error ? errorMsg : ''}
            size={size}
            fullWidth={fullWidth} />
    )
}

CommonInputField.propTypes = {
    data: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    error: PropTypes.bool.isRequired,
    errorMsg: PropTypes.string,
    size: PropTypes.oneOf(['small', 'large']),
    fullWidth: PropTypes.bool,
};

