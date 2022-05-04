import React from 'react'
import UserCard from './UserCard'
import MyListing from './MyListing'
import MyWatchList from './MyWatchList'

function Account({user}) {


  return (
    <div>
        <h2>My Account</h2>
        <UserCard user={user}/>
        <MyListing />
        <MyWatchList />
    </div>
  )
}

export default Account