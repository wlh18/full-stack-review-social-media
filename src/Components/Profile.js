import React from 'react';

const Profile = (props) => {

    const logout = () => {
    //something goes here
    }

    return(
        <div>
            <p>{props.user.user_id}</p>
            <p>{props.user.user_email}</p>
            <button onClick={logout}>Log out</button>
        </div>
    )
}

export default Profile;