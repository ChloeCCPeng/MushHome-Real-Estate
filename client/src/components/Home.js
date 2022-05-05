// import React from 'react'
import React, { useEffect, useState } from 'react'
import Search from './Search'
import Filter from './Filter'
import Listing from './Listing'
import HouseMarketReport from './HouseMarketReport'
import HouseRenovationIdeas from './HouseRenovationIdeas'
import PreApproved from './PreApproved'
import Account from './Account'
import NavBar from './NavBar'

function Home() {

  const [list, setList] = useState ([])
  const [user, setUser] = useState ([])
  const [watchedHouse, setWatchedHouse] = useState([])
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading (true);
    fetch("/houses")
    .then(res => res.json())
    .then(data => setList (data))
    .finally(() => setLoading (false))
  }, [])

  // useEffect(() => {
  //   fetch("/houses")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setList(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  useEffect(() => {
    fetch("/me")
    // fetch(`http://localhost:3000/${user.id}`)
    .then(res => res.json())
    .then(user => setUser (user))
  }, [])
  console.log (user, 'user')

  function onDelete(dHouse){
    const updatedList = list.filter(house =>house.id !== dHouse.id)
    console.log(updatedList)
    setList(updatedList)
  }

  function onWatch (wHouse){
    if(!watchedHouse.includes(wHouse)){
      setWatchedHouse([...watchedHouse, wHouse])
      console.log('hey, youre watched')
    }
  }
  if (loading) {
    return <p class="fa-duotone fa-spinner">Data is loading...</p>;
  }
  
  console.log(list, onWatch, "is it define?")
  return (
    <div>
       <NavBar user ={user} setUser ={setUser}/>
        {/* <Search /> */}
        <Account list={list} user={user} onWatch={onWatch} />
        <Filter />
        <Listing list={list} onDelete={onDelete}/>
        <HouseRenovationIdeas />
        <HouseMarketReport />
        <PreApproved />
    </div>
  )
}

export default Home

