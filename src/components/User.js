import React from 'react'
import { useUserContext } from "../context/userContext";
import "../App.css";
const User = () => {
const { user, logoutUser } = useUserContext();
console.log("");
  return (
    <div>
    <div className='logoutUser'>
      <h2>Name : {user.displayName}</h2>
      <h2>Email : {user.email}</h2>
    <button className="userBtn" onClick={logoutUser}>Log out</button>
    </div>
    </div>
  )
}

export default User
