import React, { useState } from 'react'
import HouseDetail from './HouseDetail'
import { useNavigate } from "react-router-dom";

function RenderHouse({houseToDisplay, onDelete}) {

    let navigate = useNavigate();
    // const history = useHistory();
    // const [ isDetail, setIsDetail ] = useState(false)

    // const HouseDetail = (houseToDisplay) => {
    //     const navigate = useNavigate();
    //     return (
    //         <div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1" onClick={() => navigate(`/houses/${houseToDisplay.id}`, {replace: true, state: {} })}></div>
    //     )
    // }


    function clickToRender(e) {
        // e.preventDefault();
        console.log('You clicked the house', houseToDisplay);
        // dynamically navigate to houseDetail
        <HouseDetail onDelete={onDelete} houseToDisplay={houseToDisplay}/>
        navigate(`/houses/${houseToDisplay.id}`, houseToDisplay);
        // navigate.push(`/houses/${houseToDisplay.id}`, {houseToDisplay});
    }

return (
    <div>
        <div class="py-6 px-4 sm:p-6 md:py-10 md:px-8">
            {/* <div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1" onClick={HouseDetail}> */}
            <div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1" onClick={() => clickToRender({houseToDisplay})}>
                <h4>Lot Size: {houseToDisplay.lotSizeAcres}</h4>
                <h4>Bathroom: {houseToDisplay.bathroomsTotal}</h4>
                <h4>Bedroom: {houseToDisplay.bedroomsTotal}</h4>
                <h4>List Price: ${houseToDisplay.listPrice}</h4>
                <h1>{houseToDisplay.city} {houseToDisplay.state} {houseToDisplay.postcode}</h1>
                <h1>{houseToDisplay.street}</h1>
                <div class="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
                <img src="https://images.adsttc.com/media/images/5ecd/d4ac/b357/65c6/7300/009d/large_jpg/02C.jpg?1590547607" alt="house" class="w-full h-60 object-cover rounded-lg"></img>
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