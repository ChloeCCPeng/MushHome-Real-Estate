import React from 'react'
import ListingCard from './ListingCard'

function MyWatchList({onWatch, list}) {

  let watchListComponent;
  if (list) {
    watchListComponent = list.map((house) => {
      return <ListingCard key={house.id} house={house} onWatch={onWatch} />
    });
  }
 
  console.log(list, watchListComponent, "is it working?")

  return (
    <div className="card">My Watch List{watchListComponent}</div>

  )
}

export default MyWatchList