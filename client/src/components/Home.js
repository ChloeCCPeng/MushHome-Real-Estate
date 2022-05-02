import React from 'react'
import Search from './Search'
import Listing from './Listing'
import HouseMarketReport from './HouseMarketReport'

function Home() {
  return (
    <div>
        <h1>Home</h1>
        {/* <Search /> */}
        <Listing />
        <HouseMarketReport />
    </div>
  )
}

export default Home