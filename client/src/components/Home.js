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
import { useNavigate } from "react-router-dom";

function Home() {

  const [list, setList] = useState ([])
  const [user, setUser] = useState ([])
  const [watchedHouse, setWatchedHouse] = useState([])
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading (true);
    fetch("/houses")
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
  
  console.log(list, "is it define?")
  return (
    <div>
       <NavBar user ={user} setUser ={setUser}/>
        {/* <Search /> */}
        <Account list={list} user={user} onWatch={onWatch} />
        <Filter />
        <Listing list={list} onDelete={onDelete}/>
        <HouseRenovationIdeas />
        <HouseMarketReport />
        <PreApproved />
    </div>
  )
}

export default Home

