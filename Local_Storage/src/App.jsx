import React from 'react'

const App = () => {

  // localStorage.setItem('user','jasim');
  // localStorage.setItem('age','18');
  // const user = localStorage.getItem('user');
  // console.log(user);
  // const age = localStorage.getItem('age');
  // console.log(age);

  // localStorage.removeItem('user');
  // localStorage.removeItem('age');


  // const user = {
  //   username:'satya',
  //   age:20,
  //   city:'Patna'
  // }
  // localStorage.setItem('user',JSON.stringify(user));

  
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user);
  console.log(typeof(user));


  return (
    <div>
      App
    </div>
  )
}

export default App
