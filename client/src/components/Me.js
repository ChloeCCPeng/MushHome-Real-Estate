import React from 'react'
import PersonalInfo from './PersonalInfo'
import MyListing from './MyListing'
import MyWatchList from './MyWatchList'

function Me() {
  return (
    <div>
        <h2>My Account</h2>
        <PersonalInfo />
        <MyListing />
        <MyWatchList />
    </div>
  )
}

export default Me