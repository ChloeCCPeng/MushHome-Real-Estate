import React, { useEffect } from 'react'

function UserCard( {user}) {

const [personalInfo, setPersonalInfo] = useState ([])

useEffect(() => {
    fetch(`http;//localhost:3000/users/${user.id}`)
    .then(res => res.json())
    .then(data => setPersonalInfo (data))
}, [])

  return (
    <div>User Account
        <h3>First Name: {user.firstName}</h3>
        <h3>Last Name: {user.lastName}</h3>
        <h3>Email: {user.email}</h3>
        <h3>Contact Number: {user.phoneNumber}</h3>
    </div>
  )
}

export default UserCard