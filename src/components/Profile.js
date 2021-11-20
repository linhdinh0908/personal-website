import React from 'react'
import personalImage from '../assets/Linh.jpeg'

var style = {
    img: {
        width: 250,
        height: 250,
        border: "1px solid black",
        borderRadius: 1000,
    }
}

function Profile() {
    return (
        <div className = "profile-container">
            <img src={personalImage} alt = "me smiling at the camera against a brigh background" style={style.img}/>
        </div>
    )
}

export default Profile
