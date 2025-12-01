import React, { useState } from 'react'

const App = () => {

  const [username,setUsername] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Form Submitted by:', username);
    setUsername('')
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" 
        placeholder='Enter your name'
        value={username}
        onChange={(e)=>{
          setUsername(e.target.value);
        }}
        
        /> <br />
        <button>Submit</button>
        
      </form>
    </div>
  )
}

export default App
