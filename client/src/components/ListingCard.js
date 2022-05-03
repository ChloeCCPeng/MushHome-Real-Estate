import React from 'react'

function ListingCard({house}) {
  return (
    <div class="py-6 px-4 sm:p-6 md:py-10 md:px-8">
      <div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
        <image src={house.photo}></image>;
        <h4>Address: {house.address}</h4>
        <h4>List Price: ${house.listPrice}</h4>
        <h4>Lot Size: {house.lotSizeAcres}</h4>
        <h4>Bedroom: {house.bedroomsTotal}</h4>
        <h4>Bathroom: {house.bathroomsTotal}</h4>
      </div>
    </div>
  )
}

export default ListingCard