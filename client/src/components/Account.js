import React from 'react'
import UserCard from './UserCard'
import MyListing from './MyListing'
import MyWatchList from './MyWatchList'

function Account({user, onWatch, watchedHouse}) {

  


  return (
    <div>
        <UserCard user={user}/>
        <MyListing />
        <MyWatchList onWatch={onWatch} watchedHouse={watchedHouse}/>
    </div>
  )
}

export default Account