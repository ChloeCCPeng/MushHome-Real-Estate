import React from 'react'

function ListingCard({house}) {
  return (
    <div>
      <image src={house.photo}></image>;
      <h3>Address: {house.address}</h3>
      <h3>List Price: {house.listPrice}</h3>
      <h3>Lot Size: {house.lotSizeAcres}</h3>
      <h3>Bedroom: {house.bedroomsTotal}</h3>
      <h3>Bathroom: {house.bathroomsTotal}</h3>
    </div>
  )
}

export default ListingCard