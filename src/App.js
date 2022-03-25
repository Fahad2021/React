import logo from './logo.svg';
import './App.css';

function App() {
  var style={
    color:'red',
    backgroundColor:'green'
  }
  var person={
     name:"fahad",
     lastname:"rahman"
  }
  var person2={
    name:"jonaki",
    lastName:"rahman"
  }
  return (
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> Hello my first react app
        </p>
        <h1>{2+3}</h1>
        <p  style={style}>my name is: {person.name+" "+person.lastname}</p>
        <p style={{backgroundColor:'cyan',color:'red'}}>my crush name is {person2.name+" "+person2.lastName}</p>
      </header>
    </div>
  );
}

export default App;
