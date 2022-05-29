import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox(props) {
  const { list, label, value, setValue, } = props;
  const [inputValue, setInputValue] = React.useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  return (
    <Autocomplete
      value={value}
      onChange={handleChange}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      disablePortal
      id="combo-box"
      options={list}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
}
