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
import MyWatchList from './MyWatchList'

function Home() {

  const [list, setList] = useState ([])
  const [user, setUser] = useState ([])
  const [watchedHouse, setWatchedHouse] = useState([])
  
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

  function onWatch (house){
    if(!watchedHouse.includes(house)){
      setWatchedHouse([...watchedHouse, house])
    }
  }

  return (
    <div>
       <NavBar user ={user} setUser ={setUser}/>
        {/* <Search /> */}
        <Account user={user} onWatch={onWatch} watchedHouse={watchedHouse}/>
        <Filter />
        <Listing list={list} onDelete={onDelete}/>
        <HouseRenovationIdeas />
        <HouseMarketReport />
        <PreApproved />
    </div>
  )
}

export default Home

