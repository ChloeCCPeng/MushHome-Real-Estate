import React from 'react'
import PersonalInfo from './PersonalInfo'

function UserCard( {user}) {

// const personalComponent = user.map((u) => <PersonalInfo key={u.id} u={u}/>
// )

// function personalInfoDisplay (){
//     console.log ('hey')
//   }

return (
<div>
    <span class="material-icons">
    account_circle
    </span>
    {/* <div> {personalComponent}</div> */}
</div>
)
}


export default UserCard