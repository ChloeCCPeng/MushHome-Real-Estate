import React from 'react'
import RenderHouse from './RenderHouse'

function FilterRender({selectedLocation, list, onDelete}) {

    // let listToDisplay = list;
    if (selectedLocation!=="All") {
        list = list.filter((house) => house.state===selectedLocation)
    }

    let listToRender = list.map((houseToDisplay) => {
        return (
            <RenderHouse houseToDisplay={houseToDisplay} key={houseToDisplay.id} onDelete={onDelete} />
        )}
    )


  return (

    <div id="scroll" >{listToRender}</div>   
    // onClick={RenderHouse}
  )
}

export default FilterRender