import React, { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='container'>
      <h2>Welcome to Chat bot</h2>
      <form id='loginForm' action='your_login_endpoint' method='POST'>
        <div className='form-group'>
          <label htmlFor='username'>Username</label>
          <input type='text' id='username' name='username' required />
        </div>
        <div className='form-group'>
          <label htmlFor='room'>Room</label>
          <select id='room' name='room' className='form-group' required>
            <option value=''>Select a room</option>
            <option value='room1'>Room 1</option>
            <option value='room2'>Room 2</option>
            <option value='room3'>Room 3</option>
          </select>
        </div>
        <div className='form-group'>
          <button type='submit'>Login</button>
        </div>
      </form>
    </div>
  );
}

export default App;
