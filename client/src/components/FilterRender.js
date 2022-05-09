import React from 'react'
import RenderHouse from './RenderHouse'

function FilterRender({selectedLocation, list}) {

    let listToDisplay = list;
    if (selectedLocation!=="All") {
        listToDisplay = listToDisplay.filter((house) => house.state===selectedLocation)
    }

    let listToRender = listToDisplay.map((houseToDisplay) => {
        return (
            <RenderHouse houseToDisplay={houseToDisplay} key={houseToDisplay.id}/>
        )}
    )

    

    // console.log(listToDisplay, listToRender)
  return (

    <div>{listToRender}</div>   
  )
}

export default FilterRender