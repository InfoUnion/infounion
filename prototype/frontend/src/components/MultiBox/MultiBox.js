import React from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

export default function MultiBox(props) {
  const { list, label, value, setValue, placeholder } = props
  const [inputValue, setInputValue] = React.useState('')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Autocomplete
      multiple
      value={value}
      getOptionLabel={(option) => (option ? option.name : [])}
      onChange={handleChange}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue)
      }}
      disablePortal
      id='combo-box'
      options={list}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          label={label}
          placeholder={placeholder}
        />)}
    />
  )
}
