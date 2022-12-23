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

export function CommonMultipleSelect(props) {
  const { label, options, size, fullWidth, data, onChange, name } = props;
  const theme = useTheme();
  // const labelColor = window.matchMedia('(prefers-color-scheme: dark)').matches ? "black" : "white";
  const labelColor = "white";

  return (
    <FormControl sx={{ m: 1.2 }} size={size} fullWidth={fullWidth}>
      <InputLabel id="demo-multiple-chip-label" sx={{ bgcolor: labelColor }}>{label}</InputLabel>
      <Select
        name={name}
        multiple
        value={data}
        label={label}
        onChange={onChange}
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
    </FormControl >)
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

CommonMultipleSelect.propTypes = {
  data: PropTypes.array.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'large']),
  options: PropTypes.array,
  fullWidth: PropTypes.bool,
};