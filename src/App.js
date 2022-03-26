import logo from './logo.svg';
import './App.css';

function App() {
  // var style={
  //   color:'red',
  //   backgroundColor:'green'
  // }
  // var person={
  //    name:"fahad",
  //    lastname:"rahman"
  // }
  // var person2={
  //   name:"jonaki",
  //   lastName:"rahman"
  // }
  return (
    <div className="App">
      
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p> */}
          {/* Edit <code>src/App.js</code> Hello my first react app */}
        {/* </p> */}
        {/* <h1>{2+3}</h1> */}
        {/* <p  style={style}>my name is: {person.name+" "+person.lastname}</p> */}
        {/* <p style={{backgroundColor:'cyan',color:'red'}}>my crush name is {person2.name+" "+person2.lastName}</p> */}
        <Componet1 name="hi"></Componet1>
        <Componet1></Componet1>
        <Componet1></Componet1>
        <Componet1></Componet1>
      </header>
    </div>
  );
}
//create component
function Componet1(props){
  var cssStyle={
    border:'2px solid red', 
    margin:'3px',
    background:'cyan'
  }
  // return(<div style={{border:'2px solid green', margin:'3px'}}>
  return(<div style={cssStyle}>
    <h1>Name:Fahad</h1>
    <p>{props.name}</p>
    <h2>my crus is jonaki</h2>
    <p>she is also good girl</p>
  
  </div>
  )
}

export default App;
