import {useEffect, useState} from 'react'
import logo from './logo.svg';
import React,{Component} from 'react'
import './App.css';
import  './style.css';
import {Button,Alert} from 'react-bootstrap'
import style from './custom.module.css'
import User from './components/User'
import Members from './components/Members'
import Login from './components/Login'
import Student from './components/Student'
import Profile from './components/Profile' 
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
*/
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
export default App;
