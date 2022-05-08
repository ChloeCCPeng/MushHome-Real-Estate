import React from 'react'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function Filter({selectedLocation, onLocationChange, listToDisplay, onWatch, onUnWatch, isWatched, house}) {

  function handleLocationChange(event) {
    onLocationChange(event.target.value)
  }

  function handleClick(){
    isWatched? onWatch(house): onUnWatch(house)
  }

  return (
    <div>
      <h1>Filter by </h1>
        <FormControl >
            <InputLabel id="select-label">Location</InputLabel>
                <Select
                    labelId="select-label"
                    id="select"
                    onChange={handleLocationChange}
                    value={selectedLocation}>
                    <MenuItem value="All">All</MenuItem>
                    <MenuItem value="AL">AL</MenuItem>
                    <MenuItem value="AK">AK</MenuItem>
                    <MenuItem value="AZ">AZ</MenuItem>
                    <MenuItem value="AR">AR</MenuItem>
                    <MenuItem value="AS">AS</MenuItem>
                    <MenuItem value="CA">CA</MenuItem>
                    <MenuItem value="CO">CO</MenuItem>
                    <MenuItem value="CT">CT</MenuItem>
                    <MenuItem value="DE">DE</MenuItem>
                    <MenuItem value="DC">DC</MenuItem>
                    <MenuItem value="FL">FL</MenuItem>
                    <MenuItem value="GA">GA</MenuItem>
                    <MenuItem value="GU">GU</MenuItem>
                    <MenuItem value="HI">HI</MenuItem>
                    <MenuItem value="ID">ID</MenuItem>
                    <MenuItem value="IL">IL</MenuItem>
                    <MenuItem value="IN">IN</MenuItem>
                    <MenuItem value="IA">IA</MenuItem>
                    <MenuItem value="KS">KS</MenuItem>
                    <MenuItem value="KY">KY</MenuItem>
                    <MenuItem value="LA">LA</MenuItem>
                    <MenuItem value="ME">ME</MenuItem>
                    <MenuItem value="MD">MD</MenuItem>
                    <MenuItem value="MA">MA</MenuItem>
                    <MenuItem value="MI">MI</MenuItem>
                    <MenuItem value="MN">MN</MenuItem>
                    <MenuItem value="MS">MS</MenuItem>
                    <MenuItem value="MO">MO</MenuItem>
                    <MenuItem value="MT">MT</MenuItem>
                    <MenuItem value="NE">NE</MenuItem>
                    <MenuItem value="NV">NV</MenuItem>
                    <MenuItem value="NH">NH</MenuItem>
                    <MenuItem value="NJ">NJ</MenuItem>
                    <MenuItem value="NM">NM</MenuItem>
                    <MenuItem value="NY">NY</MenuItem>
                    <MenuItem value="NC">NC</MenuItem>
                    <MenuItem value="ND">ND</MenuItem>
                    <MenuItem value="CM">CM</MenuItem>
                    <MenuItem value="OH">OH</MenuItem>
                    <MenuItem value="OK">OK</MenuItem>
                    <MenuItem value="OR">OR</MenuItem>
                    <MenuItem value="PA">PA</MenuItem>
                    <MenuItem value="PR">PR</MenuItem>
                    <MenuItem value="RI">RI</MenuItem>
                    <MenuItem value="SC">SC</MenuItem>
                    <MenuItem value="SD">SD</MenuItem>
                    <MenuItem value="TN">TN</MenuItem>
                    <MenuItem value="TX">TX</MenuItem>
                    <MenuItem value="TT">TT</MenuItem>
                    <MenuItem value="UT">UT</MenuItem>
                    <MenuItem value="VT">VT</MenuItem>
                    <MenuItem value="VA">VA</MenuItem>
                    <MenuItem value="VI">VI</MenuItem>
                    <MenuItem value="WA">WA</MenuItem>
                    <MenuItem value="WV">WV</MenuItem>
                    <MenuItem value="WI">WI</MenuItem>
                    <MenuItem value="WY">WI</MenuItem>
                </Select>
        </FormControl>
        {listToDisplay.map((houseToDisplay) => (

          <div class="py-6 px-4 sm:p-6 md:py-10 md:px-8">
            <div onClick={handleClick} class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1" >
              <h4>Lot Size: {houseToDisplay.lotSizeAcres}</h4>
              <h4>Bathroom: {houseToDisplay.bathroomsTotal}</h4>
              <h4>Bedroom: {houseToDisplay.bedroomsTotal}</h4>
              <h4>List Price: ${houseToDisplay.listPrice}</h4>
              <h1>{houseToDisplay.city} {houseToDisplay.state} {houseToDisplay.postcde}</h1>
              <h1>{houseToDisplay.street}</h1>
              <div class="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
                <img src="https://images.adsttc.com/media/images/5ecd/d4ac/b357/65c6/7300/009d/large_jpg/02C.jpg?1590547607" alt="house" class="w-full h-60 object-cover rounded-lg"></img>
              </div>
              {/* <button class="float-left outline-yellow-400 material-icons" onClick={()=>onWatch(houseToDisplay)} > favorite_border</button> */}
              <button class="float-left outline-yellow-400 material-icons" isWatched={false} onWatch={onWatch} onUnWatch={onUnWatch}> favorite_border</button>
        </div>
      </div>
      ))}
    </div>
  )
}

export default Filter
