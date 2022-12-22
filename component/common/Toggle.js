import PropTypes from 'prop-types';
import Switch from '@mui/material/Switch';

export function CommonToggle(props) {
    const { onChange, size, disabled, color } = props;

    return (
        <Switch 
            onChange={onChange}
            disabled={disabled}
            color={color}
            size={size} />
    )
}

CommonToggle.propTypes = {
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    color: PropTypes.oneOf(['default','primary' ,'secondary' ,'success' ,'error', 'info', 'warning']),
    size: PropTypes.oneOf(['small', 'large', "medium"]),
};

