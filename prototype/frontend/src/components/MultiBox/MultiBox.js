import React from 'react'
import { TextField, Autocomplete, Checkbox, } from '@mui/material'

import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function MultiBox(props) {
  const { list, label, value, setValue, placeholder } = props
  // const [inputValue, setInputValue] = React.useState('')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Autocomplete
      id='combo-box'
      sx={{ width: 400}}
      multiple
      //defaultValue={value}

      options={list}
      getOptionLabel={(option) => option.name}
      onChange={handleChange}

      //disableCloseOnSelect

      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.name}
        </li>
      )}

      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          label={label}
          placeholder={placeholder}
          //style={{maxHeight: 50, overflowY: 'scroll'}}
        />)}
    />
  )
}
