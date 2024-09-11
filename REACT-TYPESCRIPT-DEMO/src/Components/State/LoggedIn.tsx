import React from 'react'
import { useState } from 'react'
export const LoggedIn = () => {
    const [isLoggedIn,setLoggedIn]=useState(false)
    const handleLogin = ()=>{}
    const handleLogout = ()=>{}
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User LoggedIn/loggedOut</div>
    </div>
  )
}


