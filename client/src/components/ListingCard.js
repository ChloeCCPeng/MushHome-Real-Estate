import React from 'react'

function ListingCard({house, onDelete, onWatch}) {

  function handleDelete(e){
    e.stopPropagation();
    fetch(`http;//localhost:3000/houses/${house.id}`,{
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(()=> onDelete(house))
  }

  
  return (
    <div class="py-6 px-4 sm:p-6 md:py-10 md:px-8">
      <div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1" >
        <button class="bg-yellow-400 text-black text-sm leading-6 font-medium py-2 px-3 rounded-lg" onDelete={handleDelete} ><i class="material-icons">
highlight_off 
</i> Sold! Delete from the Market </button> 

        <h4>Lot Size: {house.lotSizeAcres}</h4>
        <h4>Bathroom: {house.bathroomsTotal}</h4>
        <h4>Bedroom: {house.bedroomsTotal}</h4>
        <h4>List Price: ${house.listPrice}</h4>
        <h4>Address: {house.address}</h4>
        <div class="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
          <image src={house.photo} class="w-full h-60 object-cover rounded-lg"></image>
        </div>
        <button class="float-left outline-yellow-400 material-icons" onClick={()=>onWatch(house)}> favorite_border</button>
        {/* <button class="float-left outline-yellow-400" onClick={handleWatch}><span class="material-icons"> favorite_border </span></button> */}
      </div>
    </div>
  )
}

export default ListingCard

// onClick = {() => {alert.show("Congrates! You will delete the house from the market")}}
