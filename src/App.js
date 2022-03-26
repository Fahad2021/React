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
       <Com name="lux"></Com>
       <Com name="lifeboy"></Com>
       <Com name="neem"></Com>
       <Com name="alkatra"></Com>
      </header>
    </div>
  );
}
//create 
function Com(props){
  // return(<div style={{border:'2px solid green', margin:'3px'}}>
  return(<div style={{border:'2px solid red',margin:'3px'}}>
      <h1>{props.name} :this is component1</h1>
      <h2>this is component2 {props.name}</h2>
      <h3>this is component3</h3>
      <h4>this is component4</h4>
  </div>
  )
}

export default App;
