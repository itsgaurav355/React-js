import React, {useEffect,useState} from 'react';
// import {} from 'react';
/*class components
export default class User extends Component
{
    render()
    {
        return (
            <h1>Hello from User </h1>
        )
    }
}
//Passing function as a props
function User(props)
{
    
    return(
        <div >
            <h1>Hello User</h1>
            <button onClick={props.data}>Call Data Function</button>
        </div>
    );
}

//Life cycle of render
class User extends React.Component {
    constructor() {
        super();
        this.state = { email: "gaurav@gmail.com" };
    }
    //The render is refreshed when :
    //1. the page is loaded for the first time
    //2. When the States are updated
    //3. when the props are get updated 
    render() {
        console.log("render method ", this.state.email);
        return (
            <div>
                <h1>Hello from User</h1>
                <button onClick={() => this.setState({email:"aditi@gmmail.com"})}>
                    Update Email
                </button>
            </div>
        );
    }
}

function User()
{
    return(
        <h1>Hello World</h1>
    );
}
*/
function User(props)
{
  useEffect(()=>{
    console.log("Called useState with data state only");
  },[props.count,props.data]);
 
  return(
    <div className="App">
      <h1>Count : {props.count}</h1>
      <h1>Data : {props.data}</h1>
    </div>
  );
}
export default User;
