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
            <InputLabel id="select›‹-label">Location</InputLabel>
                <Select
                    labelId="select-label"
                    id="select"
                    onChange={handleLocationChange}
                    value={selectedLocation}>
                    <MenuItem value="All">All</MenuItem>
                    <MenuItem value="GA">GA</MenuItem>
                </Select>
        </FormControl>
        {listToDisplay.map((houseToDisplay) => (

          <div class="py-6 px-4 sm:p-6 md:py-10 md:px-8">
            <div onClick={handleClick} class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1" >
              <h4>Lot Size: {houseToDisplay.lotSizeAcres}</h4>
              <h4>Bathroom: {houseToDisplay.bathroomsTotal}</h4>
              <h4>Bedroom: {houseToDisplay.bedroomsTotal}</h4>
              <h4>List Price: ${houseToDisplay.listPrice}</h4>
              <h4>Address: {houseToDisplay.street}</h4>
              <div class="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
                <image src={houseToDisplay.photo} class="w-full h-60 object-cover rounded-lg"></image>
              </div>
              {/* <button class="float-left outline-yellow-400 material-icons" onClick={()=>onWatch(houseToDisplay)} > favorite_border</button> */}
              <button class="float-left outline-yellow-400 material-icons" isWatched={false} onWatch={onWatch} onUnWatch={onUnWatch}> favorite_border</button>
        </div>
      </div>
      ))}
    </div>
  )
//   const botsRendering = botArmy.map((bot)=> {
//     return <BotCard key={bot.id} bot={bot} onAddBot={onAddBot} isArmy={false} onRemoveBot={onRemoveBot} onDeleteBot={onDeleteBot}/>
// })
}

export default Filter

// rails active_storage:uninstall