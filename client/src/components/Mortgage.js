import React from 'react'
import MortgageCalculator from "mortgage-calculator-react";
import customStyle from "../styles/CustomStyle.css";
import NavBar from './NavBar'

function Mortgage() {
  return (
        <div>
            <NavBar />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <MortgageCalculator styles={customStyle}/>
        </div>
    );
}

export default Mortgage