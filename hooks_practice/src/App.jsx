import React, { useState } from 'react'

const App = () => {
  const [a,SetA] = useState(0);
  const [msg,setMsg] = useState("Please click on button");

  const Incr = () =>{
    SetA(a+1);
    setMsg("The value of a is increase");
  }

  const Decr = () =>{
    SetA(a-1);
    setMsg("The value of a is decrease");
  }

  const [info,setUser] = useState({user:'Jasim',age:20})
  const btnclicked = () =>{
    const newUser = {...info};
    newUser.user = 'Aman';
    newUser.age = '25';
    setUser(newUser);
  }

  return (
    <>
      {/* <div className='container'>
        <div><h1>Value of a is: {a}</h1></div>
        <h4>{msg}</h4>
        <div className='btn'>
          <button onClick={Incr}>Increase</button>
          <button onClick={Decr}>Decrease</button>
          <br />
        </div>
      </div><br /><br /> */}

      <div>
        <h2>The name of student is {info.user} and their age is {info.age}</h2>
        <button onClick={btnclicked}>Change</button>
      </div>
    </>
  )
}

export default App
