import React from 'react'
import './UserList.css'

const UserList = ({users}) => {
    let isUserPresent = true;
    if(users === undefined || users.length == 0){
        isUserPresent = false
    }
    return (
        <div>
            {isUserPresent ? 
            (
            <div className="userListOuterContainer">
                <div className="topBar">Active Users</div>
                <div className="userListContainer">
                    {users.map((user,i) => <div key={i} className="userListItem">{user.name}</div>)}
                </div>
            </div>
            ) : null}
        </div>
    )
}

export default UserList
