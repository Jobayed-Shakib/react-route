import React, { useState, useEffect } from 'react';
import Friend from '../Friend/Friend';
function App() {
  const [friend, setFriend] =useState([]);
  useEffect (()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setFriend(data))
  }, [])
  return (
    <div>
      <h1>Friend : {friend.length}</h1>
      {
        friend.map(friend=><Friend friend={friend}></Friend>)
      }
    </div>
  )
}

export default App;
