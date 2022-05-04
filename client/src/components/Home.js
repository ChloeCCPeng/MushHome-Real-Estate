// import React from 'react'
import React, { useEffect, useState } from 'react'
import Search from './Search'
import Filter from './Filter'
import Listing from './Listing'
import HouseMarketReport from './HouseMarketReport'
import HouseRenovationIdeas from './HouseRenovationIdeas'
import PreApproved from './PreApproved'
import PersonalInfo from './PersonalInfo'

function Home() {

  const [list, setList] = useState ([])
  const [personalInfo, setPersonalInfo] = useState ([])
  
  useEffect(() => {
    fetch("/houses")
    .then(res => res.json())
    .then(data => setList (data))
  }, [])

  useEffect(() => {
    fetch(`http;//localhost:3000/users/${user.id}`)
    .then(res => res.json())
    .then(data => setPersonalInfo (data))
  }, [])

  function onDelete(dHouse){
    const updatedList = list.filter(house =>house.id !== dHouse.id)
    console.log(updatedList)
    setList(updatedList)
  }

  return (
    <div>
        <h1>Home</h1>
        {/* <Search /> */}
        <PersonalInfo personalInfo={personalInfo}/>
        <Filter />
        <Listing list={list} onDelete={onDelete}/>
        <HouseRenovationIdeas />
        <HouseMarketReport />
        <PreApproved />
    </div>
  )
}

export default Home

