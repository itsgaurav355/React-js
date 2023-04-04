import React,{useState} from 'react';
//Basic Form Validation
function Login()
{
    const [user,setUser] = useState("");
    const [ password,setPassword] = useState("");
    const [userErr , setUserErr] = useState(false)
    const [passErr , setPassErr] = useState(false)
    function loginHandle(e)
    {   
        if(user.length<3 || password.length<3){
            alert("Inavalid values");
        }else{
            alert("Working");
        }
        e.preventDefault()
    }
    function userHandler(e)
    {
        let item = e.target.value.length
        if (item<3){
            setUserErr(true)
            console.log("Invalid username");
        }else{
            setUserErr(false)
            console.log("Valid Username");
        }
        setUser(item);
    }
    function passHandler(e)
    {
        let item = e.target.value.length;
        if (item<3){
            setPassErr(true);
            console.log("Invalid username");
        }else{
            setPassErr(false);
            console.log("Valid Username");
        }
        setPassword(item);
}
    return(
        <div>
            <h1>Login</h1>
            <form action="" onSubmit={loginHandle}>
            <input type="text" placeholder='Enter username' onChange={userHandler} /> {userErr?<span>Username Not Valid</span>:""}
            <br /><br />
    
            <input type="password" placeholder='Enter password' onChange={passHandler} />{passErr?<span>Password Not Valid</span>:""}
            <br /> <br />
            <button type='submit'>Login</button>
            </form>
           
        </div>
    );
}

export default Login;