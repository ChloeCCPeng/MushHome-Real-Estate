import React from 'react'

function Footer() {
  return (
    <div class="rounded md:rounded-lg  ">
      <div class="flex justify-around mt-20 whitespace-nowrap "> 
        {/* <h1>Footer</h1>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/chloepeng-software-developer/" class="text-5xl" >LIKE THE IDEA? LET'S CONNECT </a>  */}
        <div class="bg-yellow-400 border-none rounded-tl-full text-xs w-3/4 text-center pt-10 pb-5">
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/chloepeng-software-developer/"><h1 class="text-black">Services</h1> </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/chloepeng-software-developer/"><h1 class="text-black">Pre-Sale FAQs</h1> </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/chloepeng-software-developer/"><h1 class="text-black">Legal Documents</h1> </a>
        </div>
        <div class="text-white bg-yellow-400 border-none text-xs w-3/4 text-center pt-10 pb-5">
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/chloepeng-software-developer/"><h1 class="text-black">About Us</h1> </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/chloepeng-software-developer/"><h1 class="text-black">Contact Us</h1> </a>
        </div>
      </div>
      
      <div class="text-black bg-yellow-400 text-center text-xs">
        <div class="bg-yellow-400 inline-flex place-items-center">  
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/chloepeng-software-developer/">
            <img id="linkedIn" src="https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png" alt="linkedIn" width="40" height="40" class="pr-2"/>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/ChloeCCPeng">
            <img id="github" src="https://cdn.icon-icons.com/icons2/936/PNG/512/github-logo_icon-icons.com_73546.png" alt="github" width="40" height="40" class="pr-2" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/chloe.peng.77/">
            <img id="fb" src="https://cdn.icon-icons.com/icons2/2428/PNG/512/facebook_black_logo_icon_147136.png" alt="facebook" width="40" height="40" class="pr-2" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/chloepeng331/?hl=e">
            <img id="instagram" src="https://cdn.icon-icons.com/icons2/2428/PNG/512/instagram_black_logo_icon_147122.png" alt="instagram" width="40" height="40" class="pr-2" />
          </a>
        </div>
        <h1 class="text-black">Web App Creates By <a class="text-black font-bold" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/chloepeng-software-developer/">Chloe Peng</a> &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;Logo Created By <a class="text-black font-bold" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/sketchdoll/?hl=en">Jen Peng</a>  &nbsp;&nbsp;&nbsp; |  &nbsp;&nbsp;&nbsp; © 2022 Chloe Peng.  All rights reserved.</h1>
      </div>
    </div>
  )
}

export default Footer