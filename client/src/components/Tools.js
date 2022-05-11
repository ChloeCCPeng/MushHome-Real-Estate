import React, { Component } from 'react'
import HouseMarketReport from './HouseMarketReport'
import PreApproved from './PreApproved'
import NavBar from './NavBar'
import Footer from './Footer'
import Mortgage from './Mortgage'

export class Tools extends Component {
  render() {
    return (
      <div>
      <NavBar />
        {/* <HouseMarketReport /> */}
        <PreApproved />
        <Mortgage />
        
        {/* <Footer /> */}
      </div>
    )
  }
}

export default Tools