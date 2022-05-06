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
  const [watchedHouse, setWatchedHouse] = useState([])
  const [loading, setLoading] = useState(false);
  //filter
  const [selectedLocation, setSelectedLocation] = useState("All")
  // const [selectedPrice, setSelectedPrice] = useState("All")
  
  useEffect(() => {
    setLoading (true);
    fetch("/list")
    .then(res => res.json())
    .then(data => setList (data))
    .finally(() => setLoading (false))
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

  if (loading) {
    return <p class="fa-duotone fa-spinner">Data is loading...</p>;
  }

  // filter function
  function onLocationChange(location) {
    setSelectedLocation(location)
  }

  // function onPriceChange(price) {
  //   setSelectedPrice(price)
  // }

  // const listToDisplay = list
  // .filter(house => selectedLocation === "All" || house.location === selectedLocation)

  const listToDisplay = list
  
  .filter(house => selectedLocation === "All" || house.location === selectedLocation)


  // let listToDisplay;
  // if (list) {
  //   listToDisplay = list.map(house => {
  //     return selectedLocation === "All" || house.location === selectedLocation;
  //   });
  // }

  console.log(list)

  // let userList;
  // if (list) {
  //   userList = list.filter(house => {
  //     return selectedLocation === "All" || house.location === selectedLocation
  //   })
  // }
  // console.log(list)

  // const userList = list
  // .filter(house => user && house.user_id === user.id)
  // .filter(house => selectedLocation === "All" || house.location === selectedLocation)
  // .filter(house => selectedPrice === "All" || house.price === selectedPrice)

  console.log(list, "is it define?")
  return (
    <div>
       <NavBar user ={user} setUser ={setUser}/>
        {/* <Search /> */}
        <Account list={list} user={user} onWatch={onWatch} />
        <Filter selectedLocation={selectedLocation}/>
        <Listing list={list} onDelete={onDelete}/>
        <HouseRenovationIdeas />
        <HouseMarketReport />
        <PreApproved />
    </div>
  )
}

export default Home

