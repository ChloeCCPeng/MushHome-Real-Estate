import React from 'react'
import UserCard from './UserCard'

function PersonalInfo( {personalInfo}) {

  const peronalConponent = personalInfo.map((user) => <UserCard key={user.id} user={user} onClick={showPersonalInfo} />
  )
  
  return (
    <div>
      <span class="material-icons">
        account_circle
      </span>
    </div>
  )
}

export default PersonalInfo