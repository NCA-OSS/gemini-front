import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
// import loadingGif from '/assets/gif/loader.gif';

export function CommonButton(props) {
    const { data, size, fullWidth, disabled, color, href, variant, type, isLoading } = props;

    return (
        <Button
            sx={{ m: 1.2 }}
            variant={variant}
            size={size}
            fullWidth={fullWidth}
            disabled={disabled}
            color={color}
            href={href}
            type={type}
        >
            {data}
            {isLoading ?
                // eslint-disable-next-line @next/next/no-img-element
                <img src="/assets/gif/loader.gif" width={30} height={30} alt="Loading.." />
                : null}
        </Button>
    )
}

CommonButton.propTypes = {
    data: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    color: PropTypes.oneOf(['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning']),
    href: PropTypes.string,
    variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
    size: PropTypes.oneOf(['small', 'large']),
    fullWidth: PropTypes.bool,
    type: PropTypes.string,
    isLoading: PropTypes.bool,
};

