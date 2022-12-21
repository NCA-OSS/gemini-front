import PropTypes from 'prop-types';
import Button from '@mui/material/Button';



export function CommonButton(props) {
    const { data, size, fullWidth, disabled, color, href, variant } = props;

    return (
        <Button 
            variant={variant}
            size={size}
            fullWidth={fullWidth}
            disabled={disabled}
            color={color}
            href={href} >{data}</Button>
    )
}

CommonButton.propTypes = {
    data: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    color: PropTypes.oneOf(['inherit','primary' ,'secondary' ,'success' ,'error', 'info', 'warning']),
    href: PropTypes.string,
    variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
    size: PropTypes.oneOf(['small', 'large']),
    fullWidth: PropTypes.bool,
};

