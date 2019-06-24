import React from 'react';

function Profile(props){
    let {
        handleClick
    }= props;
    return (
        <div>
            <button onClick={handleClick}>View Profile</button>
        </div>
    )
}

export default Profile