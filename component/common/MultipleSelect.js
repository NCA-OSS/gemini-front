import PropTypes from 'prop-types';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Chip from '@mui/material/Chip';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import React from 'react';

export function CommonMultipleSelectField(props) {
    const { label, options, size, fullWidth } = props;
    const theme = useTheme();
    const [data, onChange] = React.useState([]);
    const labelColor = getBackgroundColor();
  
    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      onChange(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };

    return (
        <FormControl sx={{ mt: '16px', mb: '8px' }} size={size} fullWidth={fullWidth}>
            <InputLabel id="demo-multiple-chip-label" sx={{ bgcolor: labelColor}}>{label}</InputLabel>
            <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={data}
                label={label}
                onChange={handleChange}
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
                {options.map((item, key) => {
                    return <MenuItem
                    key={key}
                    value={item}
                    style={getStyles(item, data, theme)}
                  >
                    {item}
                  </MenuItem>
                })}
            </Select>
        </FormControl>)
}

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

function getStyles(item, data, theme) {
    return {
      fontWeight:
        data.indexOf(item) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
};

function getBackgroundColor() {
  const matched = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if(matched)
    return "black"
  else
	 return "white"
};


CommonMultipleSelectField.propTypes = {
    label: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['small', 'large']),
    options: PropTypes.array,
    fullWidth: PropTypes.bool,
};