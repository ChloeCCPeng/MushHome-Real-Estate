import React, { Component } from 'react'
import HouseMarketReport from './HouseMarketReport'
import PreApproved from './PreApproved'

export class Tools extends Component {
  render() {
    return (
      <div>Tools
        <HouseMarketReport />
        <PreApproved />
      </div>
    )
  }
}

export default Tools