import React from 'react'

function ListingCard({house}) {
  return (
    <div className="ListingCard">
      <image src={house.photo}></image>;
      <h4>Address: {house.address}</h4>
      <h4>List Price: ${house.listPrice}</h4>
      <h4>Lot Size: {house.lotSizeAcres}</h4>
      <h4>Bedroom: {house.bedroomsTotal}</h4>
      <h4>Bathroom: {house.bathroomsTotal}</h4>
    </div>
  )
}

export default ListingCard