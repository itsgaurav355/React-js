import React,{useState} from 'react'

function Members(props)
{
    
    return(
        <div >
            <h1>Hello Member</h1>
            <button onClick={props.data}>Call Data Function</button>
        </div>
    );
}
export default Members;