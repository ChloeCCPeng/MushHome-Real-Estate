import React from 'react'


function Footer() {
  return (
    <div class="rounded md:rounded-lg  ">
        <div class="flex justify-around mt-20 whitespace-nowrap "> 
          {/* <h1>Footer</h1>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/chloepeng-software-developer/" class="text-5xl" >LIKE THE IDEA? LET'S CONNECT </a>  */}

          <div class="text-white bg-yellow-400 border-none rounded-tl-full text-xs w-3/4 text-center pt-10 pb-5 whitespace-nowrap">
            <h1 class="text-black">Services </h1>
            <h1 class="text-black">Pre-Sale FAQs</h1>
            <h1 class="text-black">Legal Documents</h1>
          </div>
          <div class="text-white bg-yellow-400 border-none text-xs w-3/4 text-center pt-10 pb-5 whitespace-nowrap">
            <h1 class="text-black">About Us </h1>
            <h1 class="text-black">Contact U</h1>
            <h1 class="text-black">Legal Documents</h1>
          </div>

        </div>
        <div class="text-black bg-yellow-400 text-center text-xs pb-2">
        
            <h1 class="text-black">Web App Design: Chloe Peng   |   Logo Design: Jen Peng   |   © 2022 Chloe Peng.  All rights reserved.</h1>
          </div>

    </div>
  )
}

export default Footer