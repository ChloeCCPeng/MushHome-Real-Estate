import React from 'react'

function PersonalInfo( {u}) {


return (
  <div>User Account
      <h3>First Name: {u.firstName}</h3>
      <h3>Last Name: {u.lastName}</h3>
      <h3>Email: {u.email}</h3>
      <h3>Contact Number: {u.phoneNumber}</h3>
  </div>
)
}

export default PersonalInfo