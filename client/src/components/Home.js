import React, { useEffect, useState } from 'react'
import { Suspense, lazy } from 'react';
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
  const [watchedHouse, setWatchedHouse] = useState([])
  // const [loading, setLoading] = useState(false);
  const [loading, setLoading] = useState(true);
  //filter
  const [selectedLocation, setSelectedLocation] = useState("All")

  useEffect(() => {
    setTimeout(() => {
    fetch("/houses")
    .then(res => res.json())
    .then(data => setList(data))
    .finally(() => setLoading (false))
  }, 2000);
     }, [])

  function onDelete(dHouse){
    const updatedList = list.filter(house =>house.id !== dHouse.id)
    console.log(updatedList)
    setList(updatedList)
  }

  function onWatch (wHouse){
    if(!watchedHouse.includes(wHouse)){
      setWatchedHouse([...watchedHouse, wHouse])
      console.log(wHouse)
    }
  }

  function onUnWatch (uHouse){
    const updatedWatch = watchedHouse.filter(house => house.id !== uHouse.id)
    setWatchedHouse(updatedWatch)
    console.log(uHouse)
  }

  if (loading) {
    return <div class="ring">Loading<span class="ring-span"></span></div>
  }

  // filter function
  function onLocationChange(location) {
    setSelectedLocation(location)
  }

  let listToDisplay;
  if (list) {
    listToDisplay = list.filter(house => {
      return selectedLocation === "All" || house.state === selectedLocation;
    });
  }

  let userList;
  if (list) {
    userList = list.filter(house => {
      return selectedLocation === "All" || house.state === selectedLocation
    })
  }

  const houseRendering = list.map((house)=> {
    console.log(house, +1)
    return <Filter key={house.id} house={house} selectedLocation={selectedLocation} onLocationChange={onLocationChange} listToDisplay={listToDisplay} isWatched={true} onWatch={onWatch} onUnWatch={onUnWatch} />
})

  console.log(list, "is it define?")
  return (
    <div>
       <NavBar user ={user} setUser ={setUser}/>
       <div>{houseRendering}</div>
        {/* <Search /> */}
        {/* <Account list={list} user={user} onWatch={onWatch} /> */}
        {/* <Listing list={list} onDelete={onDelete}/> */}
        <HouseRenovationIdeas />
        <HouseMarketReport />
        <PreApproved />
    </div>
  )
}

export default Home