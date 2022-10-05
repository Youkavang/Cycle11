import React, { useState } from 'react';
import './App.css';
// import Component1 from './Components/component1';


// function App() {
//   return (
//     <div className="App">
//       <h1>Hello world</h1>
//       <Component1 name='Chad' name2='Youka'/>
//     </div>
//   );
// }

function App(){
  let [name, setName] = useState('');
  let [password, setPassword] = useState('');
  let [loggedIn, setLoggedIn] = useState(false);
  // let[validUsers, setValidUsers] = useState([{}]);
  let validUser = 'Youka'
  let validPassword = '123123'


  function handleClick(){
    if(name === '' || password === ''){
      alert('There is no username or no password');
    } else if(name === validUser && password === validPassword){
      setLoggedIn(true);
      alert('Good Job');
    } else {
      alert(`You're username or password is incorrect`);
    }
    // setLoggedIn(true);
    // console.log(loggedIn)
    // alert(`My name is ${name} and my password is ${password}, ${loggedIn}`);
  }

  function handleLogOut(){
    setLoggedIn(false);
    setName('');
    setPassword('');
  }

  function handleName(e){
    setName(e.target.value);
    console.log(name);
  }

  function handlePassword(e){
    setPassword(e.target.value)
  }

  if(loggedIn === false){
    return(
      <div className='App'>
        <h1>Hello World</h1>
        <input placeholder= 'Enter your username' onChange={handleName} />
        <input placeholder='Enter your password' onChange={handlePassword} type="password" pattern="[0-9]*" inputmode="numeric"/>
        <button onClick={handleClick}>Login</button>
        <h1>{name}</h1>
      </div>
    )
  } else {
    return(
      <div>
        <h1>My username is: {name}</h1>
        <h1>My password is: {password}</h1>
        <button onClick={handleLogOut}>Logout</button>
      </div>
    )
  }
  
}


export default App;