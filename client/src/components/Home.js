import React, { useEffect, useState } from 'react'
import Search from './Search'
import Filter from './Filter'
import Listing from './Listing'
import HouseMarketReport from './HouseMarketReport'
import HouseRenovationIdeas from './HouseRenovationIdeas'
import PreApproved from './PreApproved'
import Account from './Account'
import NavBar from './NavBar'
import FilterRender from './FilterRender'
import Footer from './Footer'

function Home({setHouseToDisplay}) {

  const [list, setList] = useState ([])
  const [user, setUser] = useState ([])
  const [watchedHouse, setWatchedHouse] = useState([])
  const [loading, setLoading] = useState(false)
  //filter
  const [selectedLocation, setSelectedLocation] = useState("All")
  const [isError, setIsError] = useState(false)
  
  useEffect(() => {
    setLoading (true)
    fetch("/houses")
    .then(res => res.json())
    .then(data => setList(data))
    // .then(data => console.log(data))
    .finally(() => setLoading (false))
  }, [])

  if (loading) {
    return <div class="ring">Loading<span class="ring-span"></span></div>
  }

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

  // filter function
  function onLocationChange(location) {
    setSelectedLocation(location)
  }

  console.log(list, "is it define?")
  return (
    <div>
      <NavBar user ={user} setUser ={setUser}/>
      {/* <div>{houseRendering}</div> */}
      <br/>
      <br/>
      <Filter setSelectedLocation={setSelectedLocation} onLocationChange={onLocationChange} isWatched={true} onWatch={onWatch} onUnWatch={onUnWatch} />
      <FilterRender selectedLocation={selectedLocation} list={list} onDelete={onDelete} setHouseToDisplay={setHouseToDisplay}/>
        {/* <Search /> */}
        {/* <Account list={list} user={user} onWatch={onWatch} /> */}
        {/* <Listing list={list} onDelete={onDelete}/> */}
        <HouseRenovationIdeas />
        {/* <HouseMarketReport />
        <PreApproved /> */}
        <Footer />
    </div>
  )
}

export default Home