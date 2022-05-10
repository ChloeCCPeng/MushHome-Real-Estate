import React from 'react'
import UserCard from './UserCard'
import MyListing from './MyListing'
import MyWatchList from './MyWatchList'
import NavBar from './NavBar'

function Account({user, onWatch, list}) {

  // console.log(list, onWatch, "is it working?")


  return (
    <div>
    <NavBar/>
        {/* <UserCard user={user}/> */}
        <MyListing />
        <MyWatchList list={list} onWatch={onWatch}/>
    </div>
  )
}

export default Account