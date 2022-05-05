import React from 'react'
import ListingCard from './ListingCard'

function MyWatchList( {onWatchHouse, watchedHouse}) {

  const watchList = watchedHouse.map((house) => 
  <ListingCard key={house.id} house={house} onClick={onWatchHouse} />
  )

  return (
    <div className="card">{watchList}</div>
  )
}

export default MyWatchList