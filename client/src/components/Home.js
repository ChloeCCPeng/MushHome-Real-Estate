// import React from 'react'
import React, { useEffect, useState } from 'react'
import Search from './Search'
import Filter from './Filter'
import Listing from './Listing'
import HouseMarketReport from './HouseMarketReport'
import HouseRenovationIdeas from './HouseRenovationIdeas'
import PreApproved from './PreApproved'
import Account from './Account'
import NavBar from './NavBar'

function Home() {

  const [list, setList] = useState ([])
  const [user, setUser] = useState ([])
  
  useEffect(() => {
    fetch("/houses")
    .then(res => res.json())
    .then(data => setList (data))
  }, [])

  useEffect(() => {
    fetch("/me")
    // fetch(`http://localhost:3000/${user.id}`)
    .then(res => res.json())
    .then(user => setUser (user))
  }, [])
  console.log (user)

  function onDelete(dHouse){
    const updatedList = list.filter(house =>house.id !== dHouse.id)
    console.log(updatedList)
    setList(updatedList)
  }

  return (
    <div>
       <NavBar user ={user} setUser ={setUser}/>
        {/* <Search /> */}
        <Account user={user}/>
        <Filter />
        <Listing list={list} onDelete={onDelete}/>
        <HouseRenovationIdeas />
        <HouseMarketReport />
        <PreApproved />
    </div>
  )
}

export default Home

