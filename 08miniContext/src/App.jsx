// Remove the unused import statement for 'React'
// import React from 'react'

import './App.css'
import UserContextProvider from './Context/USerContextProvider'
import Login from './Component/Login';
import Profile from './Component/Profile';

function App() {
   

  return (
    <UserContextProvider>
      <h1>Vraj Clerk</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
    