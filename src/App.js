import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
      </header>
    </div>
  );
}

function Counter(){
  const [count,setCount]=useState(10)
  const handleIncrease=()=>{
    const newCount=count+1;
    setCount(newCount)
  };
  return <div>
    <h1>Count:{count}</h1>
    <button onClick={handleIncrease}>Increase</button>
  </div>
}




// //create 
// function Com(props){
//   // return(<div style={{border:'2px solid green', margin:'3px'}}>
//   return(<div style={{border:'2px solid red',margin:'3px'}}>
//       <h1>{props.name} :this is component1</h1>
//       <h2>this is component2 {props.name}</h2>
//       <h3>this is component3</h3>
//       <h4>this is component4</h4>
//   </div>
//   )
// }

export default App;
