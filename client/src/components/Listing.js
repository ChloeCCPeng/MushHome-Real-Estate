import React from 'react'
import ListingCard from 'components/ListingCard'

function Listing({ houses }) { 
  const houseComponent = houses.map((house) => <ListingCard key={house.id} house={house})
  return (
    <div>
      <h2>House Listing</h2>
      <div>
        {houseComponent}
      </div>
    </div>
  )
}

export default Listing