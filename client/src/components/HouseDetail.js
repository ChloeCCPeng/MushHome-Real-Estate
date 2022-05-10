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
    <div className="HouseDetail">
      <NavBar />
      <h1>House Details</h1>
        <div class="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
          <img src="https://images.adsttc.com/media/images/5ecd/d482/b357/65c6/7300/009c/medium_jpg/02B.jpg?1590547569" class="w-full h-60 object-cover rounded-lg"></img>
          <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.archdaily.com%2F940445%2Fab-house-bwa&psig=AOvVaw3gqdw3Qja1KS-NIEMrQUNA&ust=1652287100022000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCOCxnKKv1fcCFQAAAAAdAAAAABAO" class="w-full h-60 object-cover rounded-lg"></img>
          <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.archdaily.com%2F940445%2Fab-house-bwa&psig=AOvVaw3gqdw3Qja1KS-NIEMrQUNA&ust=1652287100022000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCOCxnKKv1fcCFQAAAAAdAAAAABAY" class="w-full h-60 object-cover rounded-lg"></img>
          <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.archdaily.com%2F940445%2Fab-house-bwa&psig=AOvVaw3gqdw3Qja1KS-NIEMrQUNA&ust=1652287100022000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCOCxnKKv1fcCFQAAAAAdAAAAABAi" class="w-full h-60 object-cover rounded-lg"></img>
          <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.archdaily.com%2F940445%2Fab-house-bwa&psig=AOvVaw3gqdw3Qja1KS-NIEMrQUNA&ust=1652287100022000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCOCxnKKv1fcCFQAAAAAdAAAAABAn" class="w-full h-60 object-cover rounded-lg"></img>
          <img src="https://images.adsttc.com/media/images/5ecd/d6e4/b357/65c6/7300/00aa/newsletter/09.jpg?1590548184" class="w-full h-60 object-cover rounded-lg"></img>
          <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.archdaily.com%2F940445%2Fab-house-bwa&psig=AOvVaw3gqdw3Qja1KS-NIEMrQUNA&ust=1652287100022000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCOCxnKKv1fcCFQAAAAAdAAAAABAy" class="w-full h-60 object-cover rounded-lg"></img>
          <img src="https://www.archdaily.com/940445/ab-house-bwa/5ecdd41db3576516560000e4-ab-house-bwa-photo" class="w-full h-60 object-cover rounded-lg"></img>
          <img src="https://www.archdaily.com/940445/ab-house-bwa/5ecdd54db3576516560000ec-ab-house-bwa-ground-floor-plan" class="w-full h-60 object-cover rounded-lg"></img>
        </div> 
        <h1>{houseToDisplay.street}</h1>
        <h1>{houseToDisplay.city} {houseToDisplay.state} {houseToDisplay.postcode}</h1>
          <h4>List Price: ${houseToDisplay.listPrice}</h4> 
          <h4>Bedroom: {houseToDisplay.bedroomsTotal}</h4>
          <h4>Bathroom: {houseToDisplay.bathroomsTotal}</h4>
          <h4>Lot Size: {houseToDisplay.lotSizeAcres}</h4>
          <h4>Description: {houseToDisplay.publicRemarks} </h4>

         
          <button class="bg-yellow-400 text-black text-sm leading-6 font-medium py-2 px-3 rounded-lg" onClick={onDelete} handleDelete={handleDelete}><i class="material-icons">
          highlight_off 
          </i> Sold! Delete from the Market </button> 
          {/* <button class="float-left text-yellow-400 material-icons" onClick={()=>onWatch(houseToDisplay)}> favorite_border</button> */}
    </div>
  )
}

export default HouseDetail
