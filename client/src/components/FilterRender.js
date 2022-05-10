import React from 'react'
import RenderHouse from './RenderHouse'

function FilterRender({selectedLocation, list, onDelete, setHouseToDisplay}) {

    // let listToDisplay = list;
    if (selectedLocation!=="All") {
        list = list.filter((house) => house.state===selectedLocation)
    }

    let listToRender = list.map((houseToDisplay) => {
        return (
            <RenderHouse houseToDisplay={houseToDisplay} key={houseToDisplay.id} onDelete={onDelete} setHouseToDisplay={setHouseToDisplay}/>
    )}
    )


  return (

    <div id="scroll" >{listToRender}</div>   
    // onClick={RenderHouse}
  )
}

export default FilterRender