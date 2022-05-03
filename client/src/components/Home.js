// import React from 'react'
import React, { useEffect, useState } from 'react'
import Search from './Search'
import Filter from './Filter'
import Listing from './Listing'
import HouseMarketReport from './HouseMarketReport'
import HouseRenovationIdeas from './HouseRenovationIdeas'
import PreApproved from './PreApproved'

function Home() {

  const [list, setList] = useState ([])
  
  useEffect(() => {
    fetch("/houses")
    .then(res => res.json())
    .then(data => setList (data))
  }, [])



  return (
    <div>
        <h1>Home</h1>
        {/* <Search /> */}
        <Filter />
        <Listing list={list}/>
        <HouseRenovationIdeas />
        <HouseMarketReport />
        <PreApproved />
    </div>
  )
}

export default Home

