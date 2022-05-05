import React from 'react'
import UserCard from './UserCard'
import MyListing from './MyListing'
import MyWatchList from './MyWatchList'

function Account({user}) {


  return (
    <div>
        <UserCard user={user}/>
        <MyListing />
        <MyWatchList />
    </div>
  )
}

export default Account