import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Users></Users>
        <Counter></Counter>
      </header>
    </div>
  );
}

function Counter(){
  const [count,setCount]=useState(10)
  const handleIncrease=()=> setCount(count+1);
  const handleDecrease=()=> setCount(count-1);
  return <div>
    <h1>Count:{count}</h1>
    <button onMouseMove={handleIncrease}>Increase</button>
    <button onMouseMove={handleDecrease}>Decrease</button>
  </div>
}

function Users(){
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data));
  },[])
  return <div>
    <h1>User:{users.length}</h1>
    <ul>
      {
        users.map(user=><li>{user.name}</li>)
      }
    </ul>
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
