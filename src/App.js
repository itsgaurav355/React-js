import { createRef, useEffect, useMemo, useRef, useState } from "react";
import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import "./style.css";
import { PureComponent } from "react";
import { Fragment } from "react";
import { Button, Alert ,Table} from "react-bootstrap";
import style from "./custom.module.css";
import User from "./components/User";
import Members from "./components/Members";
import Login from "./components/Login";
import Student from "./components/Student";
import Profile from "./components/Profile";


/*function App() {
  // let data= "Gaurav Prajapati"
  function myButton()
  {
    data = "Jay Uchgaonkar"
    alert("Kya hua Dar Gaye:) !!")
  }
  function updateData()
  {
    setData("Jay Uchgaonkar")
  }
  const [data,setData] = useState("Gaurav Prajapati")
  return (
    <div className="App">
    <h1>{data}</h1>
    <button onClick={updateData}>Update Data</button>
    <button onClick={updateData}>Press Here</button> 
    for calling directly  
    <button onClick={()=>alert("Kya hua Dar Gaye:) !!")}></button> 
    </div>
  );
}

class App extends Component{
  constructor()
  {
    super();
    this.state={
      // data:"Jay Uchgaonkar"
      data:1
    }
  }
  apple()
  {
    // this.setState({data:"Gaurav Prajapati"})
    this.setState({data:this.state.data+1})
  }
  render()
  {
    return(
      <div className = "App">
      <h1>{this.state.data}</h1>
      <button onClick={()=>this.apple()}>Update</button>
      </div>
    );
  }
}

function App(){
  const [name,setName] = useState("Anil")
  return(
    <div className="App">
      <h1>Prop in React</h1>
      <Student name="Gaurav"></Student>
      <Student name={name} email="prajapatigaurav355@gmail.com"></Student>
      <button onClick={()=>{setName("Gaurav")}}>Update Kar</button>
    </div>
  )
}

//Props Using Classes
class App extends React.Component{
  constructor()
  {
    super();
    this.state={
      name:"Jay Uchgaonkar"
      
    }
  }
  render()
  {
    return(
      <div className="App">
      <h1>Prop in React</h1>
      <Student name="Gaurav"></Student>
      <Student name={this.state.name} email="prajapatigaurav355@gmail.com"></Student>
      <button onClick={()=>{this.setState({name:"Gaurav"})}}>Update</button>
    </div>
    );
  }
}
//taking input from user and showing
function App(){
  const [data,setData] = useState(null)
  const [print,setPrint] = useState(false)
  function getData(val)
  {
    setData(val.target.value)
    console.log(val.target.value)
    setPrint(false)
  }
  return(
    <div className="App">
      <h1>Get Input box value !</h1>
      {
      print?
      <h2>{data}</h2>
      :null
      }
      <input type="text" onChange={getData}/>
      <button onClick={()=>setPrint(true)}>Print </button>
    </div>
  )
}

//Toggle button which hide and show 
function App(){
  const [status,setStatus] = React.useState(false)
  return(
    <div className="App">
      {
        status?<h1>Hello World</h1>:null
      }
      
      <button onClick={()=>setStatus(false)}>Hide </button>
       <button onClick={()=>setStatus(true)}>show</button>
      <button onClick={()=>setStatus(!status)}>Toggle</button>
    </div>
  )
}

//Form handling 
function App(){
  const[name,setName] =useState("");
  const[tnc,setTnc] = useState(false);
  const[intrest,setIntrest] = useState("")
  function getFormData(e)
  {
    console.log(name,tnc,intrest)
    e.preventDefault()
  }
  return(
    <div className="App">
      <h1>Form Handling in React</h1>
      <form action="" onSubmit={getFormData}>
        <input type="text" placeholder="Enter Your Name" onChange={(e)=>setName(e.target.value)} /> <br /><br />
        <select onChange={(e)=> setIntrest(e.target.value)}>
          <option value="">Select Option</option>
          <option value="">Marvel</option>
          <option value="">DC</option>
          <option value="">Bollywood</option>
        </select><br /><br />
        <input type="checkbox" onChange={(e)=> setTnc(e.target.checked)} /><span>Accept Terms and Condition</span>
      <br /><br />
      <button type= "submit">Submit</button>
      </form>
    </div>
  );
}

function App()
{
  return(
    <div className='App'>
      <h1>Conditional Rendering </h1>
      <Profile></Profile>
    </div>
  );
}

function App()
{
  //Creating function inside parent reduce the redundancy of the code 
  //We can call multiple elements or components and can reuse the method again
  //The function is sent as a props for another components 
  function getData(){
    alert("Working Bro");
  }
  return(
    <div className='App'>
      
    <User data={getData}></User>
    <div>
    <Members data={getData}></Members>
    </div>
    
      <h1>Form validation</h1>
      <Login></Login>
    </div>
  );
}

//Constructor Life Cycle 
class App extends React.Component{
  constructor()
  {
    super();
    this.state={
      name:"Gaurav"
    }
  }
  render()
  {
    return(
      <div className="App">
      <h1>Constructor Life Cycle {this.state.name}</h1>
      
    </div>
    );
  }
}

//Life cycle of the render method 

function App()
{
  const[name,setName] =React.useState("Gaurav");
  return(
    <div className='App'>
      <h1>Life cycle of the Render method  </h1>
      <User name={name}></User>
      <button onClick={()=>setName("Jay")}>Update Name</button>
    </div>
  );
}

//Component did mount demo
class App extends React.Component
{
  constructor()
  {
    super();
    this.state = {
      name:"gaurav"
    }
    console.log("Constructor");
  }
  componentDidMount()
  {
    //API's are called inside it
    console.log("componentDidMount");
  }
  render(){
    console.log("Render");
    return(
      <div className="App">
          <h1>componentDidMount Demonstration by {this.state.name}</h1>
          <button onClick={()=>{this.setState({name:"Jay"})}}>Update</button>
      </div>
      
    );
  }
}
// componentDidUpdate Demo
class App extends React.Component
{
  constructor()
  {
    super();
    this.state = {
      count : 0
    }
    console.log("Constructor");
  }
  componentDidUpdate(preProps,preState,snapShot)
  {
     //called after only the state or props are updated
    //NOTE: Do not update state or props inside this method otherwise it will lead 
    //to infinite forloop 
    if(preState.count === this.state.count){
      alert("Data is Same");
    }
    //preState=>Gives the last state value before update
   
    console.log("componentDidUpdate",preState)
  }
  render(){
    console.log("Render");
    return(
      <div className="App">
          <h1>Component Did Update Demonstration {this.state.count}</h1>
          <button onClick={()=>{this.setState({count:1})}}>Update</button>
      </div> 
    );
  }
}

//should Component Update Demo
class App extends React.Component
{
  constructor()
  {
    super();
    this.state = {
      count : 0
    }
    console.log("Constructor");
  }
  shouldComponentUpdate()
  {
    console.log("shouldComponentUpdate",this.state.count);
    if(this.state.count > 5 && this.state.count <10){
      return true;
    }
    
  }
 
  render(){
    
    return(
      <div className="App">
          <h1>Should Component Update Demonstration {this.state.count}</h1>
          <button onClick={()=>{this.setState({count:this.state.count+1})}}>Update</button>
      </div> 
    );
  }
}

//Component Unmount Method Demo
class App extends React.Component
{
  constructor()
  {
    super();
    this.state = {
      show:true
    }
    console.log("Constructor");
  }
 
  render(){
    
    return(
      <div className="App">
          <h1>Component Unmount Method Demonstration </h1>
          {
            this.state.show?<Student></Student>:<h1>Child Component Removed</h1>
          }
          
          <button onClick={()=> this.setState({show:!this.state.show})}>Toggle Child Component</button>
      </div> 
    );
  }
}

//Hooks in React
function App()
{
  //useState is treated as Hooks which gives the power to 
  //implement life cycle , state etc functions to the functions 
  //because for classes they are available but not directly for the 
  //function, All hooks starts from use and then many diff names
  const [data,setData] = useState("Gaurav")
  return(
    <div className='App'>
      <h1>Hello {data}</h1>
    </div>
  );
}

//useEffect Hooks demo
import {useEffect} from 'react'
function App()
{
  const [count,setCount] = useState(0)
  useEffect(()=>{
    console.log("useEffect");
  })
  return(
    <div className='App'>
      <h1>useEffect in React {count}</h1>
      <button onClick={()=>setCount(count+1)}>Update</button>
    </div>
  );
}

//useState for perticular variable or state
function App()
{
  const [data,setData] = useState(10);
  const [count, setCount] =useState(100);
  useEffect(()=>{
    console.log("Called useState with data state only");
  },[data]);
  useEffect(()=>{
    console.log("Called useState with count state only");
  },[count]);
  return(
    <div className="App">
      <h1>Count : {count}</h1>
      <h1>Data : {data}</h1>
      <button onClick={()=>setCount(count+1)}>Update Count</button>
      <button onClick={()=>setData(data+1)}>Update Data</button>
    </div>
  );
}

//Passing the props and using hooks on that
function App(props)
{
  const [data,setData] = useState(10);
  const [count, setCount] =useState(100);
 
  return(
    <div className="App">
    
      <User count={count} data={data}></User>
      <button onClick={()=>setCount(count+1)}>Update Count</button>
      <button onClick={()=>setData(data+1)}>Update Data</button>
    </div>
  );
}
//inline styling in React
function App(){
  return(
    <div className="App">
      <h1 className='primary'>Gaurav Learning React</h1>
      <h1 style={{color:"blue",backgroundColor:"black"}}>Aditi Learning React</h1>
      <h1 className={style.success}>Atharva Learning React</h1>
      
    </div>
  );
}

function App(){
  return(
    <div className="App">
      <h1>Installation of bootstrap and Demo</h1>
      <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
      {
        [
          'primary',
          'secondary',
          'success',
          'danger',
          'warning',
          'info',
          'light',
          'dark',
        ].map((variant) => (
          <Alert key={variant} variant={variant}>
            This is a {variant} alert—check it out!
          </Alert>
        ))
      }
    </div>
  );
}

//Table using Bootstrap
function App() {
  //list
  // const student = ['Gaurav','Yatin','Manisha','Nirali'];
  //Using objects
  const student = [
    { name: "Gaurav", email: "gaurav@gmail.com", contact: 748539 },
    { name: "Nirali", email: "nirali@gmail.com", contact: 463463 },
    { name: "Manisha", email: "manisha@gmail.com", contact: 634572 },
    { name: "Yatin", email: "yatin@gmail.com", contact: 235435 },
  ];
  //map looping
  // student.map((item)=>{
  //   console.log(item);
  // });
  // for(let i = 0;i<student.length ; i++)
  // {
  //   console.log("I am ",student[i]);
  // }
  //Basically we can not use forloop or while loop
  // inside the return function so we do not use it
  return (
    <div className="App">
      <h1>Mapping function and forloop</h1>
      <Table striped variant="dark">
        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Contact No</td>
          </tr>
          {student.map((data, i) => (
             data.email === 'gaurav@gmail.com'?
            <tr key={i}>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.contact}</td>
            </tr>:null
           
          )
          )}
        </tbody>
        </Table>
    </div>
  );
}

//Nested Table using Bootstrap 
function App()
{
  const users = [
    { name: "Gaurav", email: "gaurav@gmail.com", address: [
      {HN:"105",city:"Noida",country:"India"},
      {HN:"204",city:"Mumbai",country:"India"},
      {HN:"100",city:"Dehradun",country:"India"},
      {HN:"225",city:"Ahmdabad",country:"India"},
    ] },
    { name: "Nirali", email: "nirali@gmail.com", address: [
      {HN:"101",city:"Noida",country:"India"},
      {HN:"294",city:"New york",country:"US"},
      {HN:"310",city:"Dehradun",country:"India"},
      {HN:"275",city:"Mumbai",country:"India"},
    ] },
    { name: "Manisha", email: "manisha@gmail.com", address:[
      {HN:"109",city:"Noida",country:"India"},
      {HN:"254",city:"UP",country:"India"},
      {HN:"64",city:"Pune",country:"India"},
      {HN:"245",city:"Mumbai",country:"India"},
    ]},
    { name: "Yatin", email: "yatin@gmail.com", address: [
      {HN:"109",city:"Noida",country:"India"},
      {HN:"254",city:"UP",country:"India"},
      {HN:"64",city:"Pune",country:"India"},
      {HN:"245",city:"Mumbai",country:"India"},
    ] },
  ];
  return(
    <div className="App">
      <Table striped variant="dark">
          <tbody>
            <tr>
            <td>SrNo.</td>
              <td>Name</td>
              <td>Email</td>
              <td>Address</td>
              
            </tr>
          
          {
            users.map((item,i)=>
            <tr key={i}>
              <td>{i+1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <Table striped variant="dark">
                <tbody>{
                item.address.map((data,j)=>
                  <tr key={j}>
                    <td>{data.HN}</td>
                    <td>{data.city}</td>
                    <td>{data.country}</td>
                  </tr>
                )}</tbody>
                </Table>
                </td>
              </tr>
            )
          } 
             </tbody>   
      </Table>
    </div>
  );
}

function App() {
  const user = [
    { name: "Gaurav", email: "gaurav@gmail.com", contact: 748539 },
    { name: "Nirali", email: "nirali@gmail.com", contact: 463463 },
    { name: "Manisha", email: "manisha@gmail.com", contact: 634572 },
    { name: "Yatin", email: "yatin@gmail.com", contact: 235435 },
  ];
  return (
    <div className="App">
      <h1>Reusing Components with List</h1>
      {
        user.map((item,i)=>
       <User data={item}></User>
        )
      }
    </div>
  );
}
//React Fragements
function App()
{
  return(
    <Fragment>
      <h1>React Fragements Demo</h1>
      <h2>I am Ok </h2>
    </Fragment>
    //Also we can use it in <> </> in this way instead of writing fragment
    //It is helpful while writing tables etc because in a 
    //table data we can not use div so that we need to take help of Fragements there

  );
}

//Sending data from child coponent to parent component

function App()
{
  function parentAlert(data)
  {
    alert("I am back "+data.name);
    console.log(data);
  }
  return (
    <div className="App">
      <h1>Lifting state up Demo</h1>
      <User alert={parentAlert}></User>
    </div>
  );
}

//Pure Components are the components which first check the content with 
//the previous content if changes made then only it render again otherwise don't

class App extends PureComponent
{
  constructor()
  {
    super();
    console.log("App Component Created ");
    this.state={
      count:1
    }
  }
  render()
  {
    console.log("check re-rendering")
    return(
      <div className="App">
          <h1>Pure components in React {this.state.count}</h1>
          <User data={this.state.count}></User>
          <button onClick={()=>this.setState({count:this.state.count+1.
          
          })}>Update</button>
      </div>
    );
  }
}

//useMemo Demo
function App()
{
  const [count,setCount] = useState(0);
  const [item,setItem] = useState(10);

  const multiCountMemo = useMemo(
    function multiCount()
  {
    console.log("Function Called");
    return count*5;
  },[count]//the paramaters on which it need to check before runnning again
  )
  // function multiCount()
  // {
  //   //console.log("Function Called");
  //   return count*5;
  // }
  return(
    <div className="App">
      <h1>useMemo Demo(Same function as Pure Component)</h1>
      <h2>Count: {count}</h2>
      <h2>Item: {item}</h2>
      <h2>Value:  {multiCountMemo}</h2>
     
    <button onClick={()=>setCount(count+1)}> Update count</button>
    <button onClick={()=>setItem(item+10)}> Update item</button>
    </div>
  );
}

//Acc to official docs. use as less as possible to Ref
//Ref directly make changes in DOM of the webpage

class App extends Component
{
  constructor()
  {
    super();
    this.inputRef = createRef();
  }
  componentDidMount()
  {
    console.log(this.inputRef.current.value="Gaurav");
    //directly inputRef will give the whole DOM of the page 
  }
  getVal()
  {
    console.log(this.inputRef);
  }
  render()
  {
    return(
      <div className="App">
        <h1>Use of Ref</h1>
        <input type="text" ref={this.inputRef}/>
        <button onClick={()=>this.getVal()}>Check Ref</button>
      </div>
    );
  } 
}

function App()
{
  let inputRef = useRef(null)
  function handleInput()
  {
    // console.log("Working");
    // inputRef.current.value = "Gaurav";
    // inputRef.current.focus();
    // inputRef.current.style.color = "blue";
    inputRef.current.style.display = "none"
  }
  return(
    <div className="App">
      <h1>useRef hook for Ref operation using function</h1>
      <input type="text" ref = {inputRef} />
      <button onClick={handleInput}>Handle Input</button>
    </div>
  );
}


function App()
{
  //Controlled component are the components which are handled using
  //state in react js and which are handled by DOM are called as UnControlled component
  let [val,setVal] = useState("First Name")
  let [item,setItem] = useState("Last Name")
  return(
    <div className="App">
      <h1>Controlled Component in Raect</h1>
      <input type="text" value={val}  onChange={(e)=>setVal(e.target.value)}/>
      <input type="text" value={item}  onChange={(e)=>setItem(e.target.value)}/>
      <h3>Value : {val} , Item : {item}</h3>
    </div>
  );
}

function App()
{
  //Uncontrolled Components refers to the input fields or some components 
  //which should not use state and that are handled by only useRef(Hook) or JavaScript 
  let inputRef = useRef(null)
  let inputRef2 = useRef(null)
  function submitForm(e)
  {
    e.preventDefault();
    console.log("input field 1 value : ",inputRef.current.value)
    console.log("input field 1 value : ",inputRef2.current.value)
    let input3 = document.getElementById("input3").value
    console.log("Input field 3 value is : " , input3)
  }
  return(
    <div className="App">
      <h1>Uncontrolled Components</h1>
      <form action="" onSubmit={submitForm}>
      <br />
      <input type="text" ref ={inputRef} />
      <br /><br />
      <input type="text" ref ={inputRef2}/>
      <br /><br />
      <input type="text" id="input3" />
      <br /><br />
      <button>Submit</button>
      </form>
    </div>
  );
}

//HOC = High Order Component(The components which take input a component and itself 
//return a component which is just a customized version of the same component)

function App()
{
  return(
    <div className="App">
      <h1>High Order Component in React</h1>
      <HOCRed cmp={Counter}/>
      <HOCYellow cmp={Counter}/>
      <HOCGreen cmp={Counter}/>
    </div>
  );
}
function HOCRed(props)
{
  return(
    <h2 style={{backgroundColor:'red',width:100}}><props.cmp/>STOP</h2>
  );
}
function HOCYellow(props)
{
  return(
    <h2 style={{backgroundColor:'yellow',width:100}}><props.cmp/>BE READY</h2>
  );
}
function HOCGreen(props)
{
  return(
    <h2 style={{backgroundColor:'green',width:100}}><props.cmp/>GO</h2>
  );
}
function Counter()
{
  const [count,setCount] = useState(0)
  return(
  <div>
      <h3>{count}</h3>
      <button onClick={()=>setCount(count+1)}>Update</button>
    </div>
  );
}

//fetching api from server
function App() {
  const [users,setUser]=useState([])
  useEffect(()=>{
    //fetch returns a promise which we need to accept , to accept that we use .then method which gives result
    fetch("https://dummyjson.com/todos").then((result)=>{
      result.json().then((resp)=>{
        // console.warn(resp)
        setUser(resp)
      })
    })
  },[])
  console.warn(users)
  return (
    <div className="App">
      <h1>Get API Call </h1>
      <table border="1">
       <tbody>
       <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Email</td>
          <td>Mobile</td>
        </tr>
        {
          users.map((item,i)=>
            <tr key={i}>
            <td>{item.userId}</td>
          <td>{item.todo}</td>
          <td>{item.completed}</td>
            <td>{item.userId}</td>
          </tr>
          )
        }
       </tbody>
      </table>
    </div>
  );
}
*/
function App() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [mobile,setMobile]=useState("");
 function saveData()
 {
   let data={name,email,mobile}
 // console.warn(data);
   fetch("https://dummyjson.com/todos", {
     method: "POST",
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
     },
     body:JSON.stringify(data)
   }).then((resp)=>{
     // console.warn("resp",resp);;
     resp.json().then((result)=>{
       console.warn("result",result)
     })
   })
 }
   return (
     <div className="App">
       <h1>POST API Example </h1>  
       <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}  /> <br /> <br />
       <input type="text" name="email"  value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br /> <br />
       <input type="text" name="mobile"  value={mobile} onChange={(e)=>{setMobile(e.target.value)}}/> <br /> <br />
       <button type="button" onClick={saveData} >Save New User</button>
     </div>
   );
 }
 export default App;
 


