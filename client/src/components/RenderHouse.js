import React, { useState, useEffect } from 'react'
import HouseDetail from './HouseDetail'
import { useNavigate, useParams } from "react-router-dom";


function RenderHouse({houseToDisplay, onDelete, setHouseToDisplay}) {

    const { id } = useParams();
    let navigate = useNavigate();


    useEffect(() => {
        fetch(`/houses/${houseToDisplay.id}`)
        .then(res => res.json())
        .then(data => setHouseToDisplay(data))
    }, [])

    function clickToRender() {
        // e.preventDefault();
        console.log('You clicked the house', houseToDisplay);
        // dynamically navigate to houseDetail
        setHouseToDisplay(houseToDisplay)
        navigate(`/houses/${houseToDisplay.id}`, houseToDisplay);
    }

    return (
    <div id="outer">
        <div id="container" class="w-80 relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
            <div id="card" 
            class=" relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1" 
            onClick={() => clickToRender()}>
                <h4>Lot Size: {houseToDisplay.lotSizeAcres}</h4>
                <h4>Bathroom: {houseToDisplay.bathroomsTotal}</h4>
                <h4>Bedroom: {houseToDisplay.bedroomsTotal}</h4>
                <h4>List Price: ${houseToDisplay.listPrice}</h4>
                <h1 class="font-semibold pb-2">{houseToDisplay.city} {houseToDisplay.state} {houseToDisplay.postcde}</h1>
                <h1 class="font-semibold pt-2">{houseToDisplay.street}</h1>
                <div class="">
                <img src="https://images.adsttc.com/media/images/5ecd/d4ac/b357/65c6/7300/009d/large_jpg/02C.jpg?1590547607" alt="house" 
                class="w-full h-60 object-cover rounded-lg "
                >
                </img>
                </div>
                {/* <button class="float-left outline-yellow-400 material-icons" onClick={()=>onWatch(houseToDisplay)} > favorite_border</button> */}
                <button class="float-left outline-yellow-400 material-icons"> favorite_border</button>
                <div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RenderHouse