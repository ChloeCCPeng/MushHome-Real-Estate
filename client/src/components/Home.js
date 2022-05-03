import React from 'react'
import Search from './Search'
import Listing from './Listing'
import HouseMarketReport from './HouseMarketReport'
import HouseRenovationIdeas from './HouseRenovationIdeas'
import PreApproved from './PreApproved'

function Home() {
  return (
    <div>
        <h1>Home</h1>
        {/* <Search /> */}
        <Listing />
        <HouseRenovationIdeas />
        <HouseMarketReport />
        <PreApproved />
    </div>
  )
}

export default Home

