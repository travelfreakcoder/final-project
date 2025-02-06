import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouter = () => {


  const isLoggedIn=useSelector((state)=>state.auth.isLoggedIn)
  console.log(isLoggedIn);
  

  return isLoggedIn?<Outlet/>:<Navigate to="/signin"/>
}

export default PrivateRouter