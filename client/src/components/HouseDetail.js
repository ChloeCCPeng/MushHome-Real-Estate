import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'

function HouseDetail({houseToDisplay, onDelete}) {


  function handleDelete(e){
    e.stopPropagation();
    fetch(`http;//localhost:3000/houses/${houseToDisplay.id}`,{
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(()=> console.log('you are deleting', houseToDisplay))
  }

  console.log(houseToDisplay)

  return (
    <div>
        <NavBar />
        <br/>
        <br/>
      <div className="HouseDetail">
        <br/>
          <div class="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
            <img src="https://images.adsttc.com/media/images/5ecd/d482/b357/65c6/7300/009c/medium_jpg/02B.jpg" class="w-full h-60 object-cover rounded-lg"></img>
            <img src="https://images.adsttc.com/media/images/5ecd/d399/b357/65c6/7300/0099/medium_jpg/01.jpg?1590547333" class="w-full h-60 object-cover rounded-lg"></img>
            <img src="https://images.adsttc.com/media/images/5ecd/d7d9/b357/65c6/7300/00b2/medium_jpg/14.jpg?1590548423" class="w-full h-60 object-cover rounded-lg"></img>
            <img src="https://images.adsttc.com/media/images/5ecd/d41d/b357/6516/5600/00e4/newsletter/02A.jpg?1590547473" class="w-full h-60 object-cover rounded-lg"></img>
            <img src="https://media.istockphoto.com/photos/beautiful-living-room-interior-with-hardwood-floors-and-and-view-of-picture-id1208205959?k=20&m=1208205959&s=612x612&w=0&h=bd4L_M7u2hPksL11njclcxgMWezFgSnKW1gBs9K-Xn0=" class="w-full h-60 object-cover rounded-lg"></img>
            <img src="https://images.adsttc.com/media/images/5ecd/d6e4/b357/65c6/7300/00aa/newsletter/09.jpg?1590548184" class="w-full h-60 object-cover rounded-lg"></img>
            <img src="https://www.mydomaine.com/thmb/2V-LxbLqkTsSyHSjqYSkS8WGtbk=/700x466/filters:no_upscale():max_bytes(150000):strip_icc()/cdn.cliqueinc.com__cache__posts__206499__how-to-make-your-kitchen-look-like-a-million-bucks-on-a-dime-1951044-1477342841.700x0c-bc7841edaac64ba68ad117e54975067f.jpg" class="w-full h-60 object-cover rounded-lg"></img>
            <img src="https://www.thespruce.com/thmb/0mCrVrlgAOLHm03zxtJxMd8RIwQ=/2048x1365/filters:fill(auto,1)/put-together-a-perfect-guest-room-1976987-hero-223e3e8f697e4b13b62ad4fe898d492d.jpg" class="w-full h-60 object-cover rounded-lg"></img>
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/8be0eb99678509.5ef85b0709ed5.jpg" class="w-full h-60 object-cover rounded-lg"></img>
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/bba26b73425995.5c1e270ebfcd7.jpg" class="w-full h-60 object-cover rounded-lg"></img>
            <img src="https://secure.img1-fg.wfcdn.com/im/32894216/resize-h445%5Ecompr-r85/1196/119637078/Elan+44-48%2522+W+x+74%2522+H++Single+Sliding+Frameless+Shower+Door+with+RollerDisk%25u2122+Technology.jpg" class="w-full h-60 object-cover rounded-lg"></img>
            <img src="https://secure.img1-fg.wfcdn.com/im/58954733/resize-h445%5Ecompr-r85/1577/157778824/Latavea+4+-+Light+Dimmable+LED+Chrome+Finishing-White+Light+Vanity+Light.jpg" class="w-full h-60 object-cover rounded-lg"></img>
            <img src="https://www.archi-living.com/wp-content/uploads/walk-in-closet-design_Ellipse_Francesco-Pasi_Italian-furniture-brands_Archi-living_G.jpg" class="w-full h-60 object-cover rounded-lg"></img>
            <img src="https://rockindeco.com/wp-content/uploads/2018/03/Modern-and-Contemporary-Front-Yard-Landscaping.jpg" class="w-full h-60 object-cover rounded-lg"></img>
            <img src="https://tedsgardens.com/wp-content/uploads/2019/04/modern-front-entry-planting-modern-planters-8.jpg" class="w-full h-60 object-cover rounded-lg"></img>
          </div> 
            <h1 class="text-xl pt-6">{houseToDisplay.street}</h1>
            <h1 class="text-xl pb-6">{houseToDisplay.city} {houseToDisplay.state} {houseToDisplay.postcde}</h1>
            <h4>List Price: ${houseToDisplay.listPrice}</h4> 
            <h4>Bedroom: {houseToDisplay.bedroomsTotal}</h4>
            <h4>Bathroom: {houseToDisplay.bathroomsTotal}</h4>
            <h4>Lot Size: {houseToDisplay.lotSizeAcres}</h4>
            <h4>Fireplaces: {houseToDisplay.fireplacesTotal}</h4>
            <h4>Year Built: {houseToDisplay.yearBuilt}</h4>
            <h4>Property Type: {houseToDisplay.propertySubType}</h4>
            <h4>Frontage Type: {houseToDisplay.frontageType}</h4>
            <h4>Lot Size: {houseToDisplay.lotSizeAcres}</h4>
            <h4>Description: {houseToDisplay.publicRemarks} </h4>
            {/* <button class="mt-6 bg-yellow-400 text-black text-sm leading-6 font-medium py-2 px-3 rounded-lg" onClick={onDelete} handleDelete={handleDelete}><i class="material-icons">
            highlight_off title="View More" onClick={<Home />}
            </i> View More </button>  */}
            {/* <button class="float-left text-yellow-400 material-icons" onClick={()=>onWatch(houseToDisplay)}> favorite_border</button> */}
        </div>
    </div>
  )
}

export default HouseDetail
