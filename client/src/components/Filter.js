import React from 'react'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function Filter({selectedLocation, onLocationChange}) {

  function handleLocationChange(event) {
    onLocationChange(event.target.value)
}

  return (
    <div>
      <h1>Filter by </h1>
        <FormControl fullidth>
            <InputLabel id="select›‹-label">Location</InputLabel>
                <Select
                    labelId="selec t-label"
                    id="select"
                    onChange={handleLocationChange}
                    value={selectedLocation}>
                    <MenuItem value="All">All</MenuItem>
                    <MenuItem value="30737 Haley Shoals, Clevelandmouth, NH 50471-2867">NH</MenuItem>
                </Select>
        </FormControl>
    </div>
  )
}

export default Filter
