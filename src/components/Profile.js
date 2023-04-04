import React,{useState} from 'react'

function Profile()
{
    const [loggedIn,setLoggedIn]=useState(true)
   //Use ternary operator for ifelse 
    return(
        <div>{loggedIn?
            <h1>Profile Page </h1>:
            <h2>Please try later you didn't LoggedIn yet</h2>
            }
            
        </div>
    );
}

export default Profile