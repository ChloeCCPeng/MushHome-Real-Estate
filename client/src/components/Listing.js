import React from 'react'
import ListingCard from './ListingCard'

function Listing({ list }) { 
  const houseComponent = list.map((house) => <ListingCard key={house.id} house={house} />
  )
  return (
    <div>
      <h2>House Listing</h2>
      <div>
        {houseComponent}
      </div>
    </div>
  );
}

export default Listing