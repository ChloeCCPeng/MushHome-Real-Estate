import React from 'react'
import UserCard from './UserCard'
import MyListing from './MyListing'
import MyWatchList from './MyWatchList'

function Account() {
  return (
    <div>
        <h2>My Account</h2>
        <UserCard />
        <MyListing />
        <MyWatchList />
    </div>
  )
}

export default Account