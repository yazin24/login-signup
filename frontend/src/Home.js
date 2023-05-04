import React from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const Home = () => {

  const [_, setCookies] = useCookies(['access_token']);
  const navigate = useNavigate();

  const Logout = () => {
    setCookies('access_token', '');
    window.localStorage.removeItem('Name')
    alert('You Have Been Sign Out!');
    navigate('/');
  }

  return (
    <div>
    <div className="min-h-screen bg-blue-400 flex justify-center items-center">
<div className="absolute w-60 h-60 rounded-xl bg-blue-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block">
</div>
<div className="absolute w-48 h-48 rounded-xl bg-blue-300 -bottom-6 -right-10 transform rotate-12 hidden md:block">
</div>
<div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
  <div>
    <h1 className="text-2xl font-bold text-center mb-4 cursor-pointer">Welcome! You have been Sign In!</h1>
    
  </div>
  <div className="space-y-4">
   
  </div>
    <div className="text-center mt-6">
      <button className="py-1 w-64 text-xl text-white font-bold bg-blue-400 rounded-2xl" onClick={Logout}>Sign Out</button>
     
      
    </div>
  </div>
  <div className="w-40 h-40 absolute bg-blue-300 rounded-full top-0 right-12 hidden md:block"></div>
  <div
    className="w-20 h-40 absolute bg-blue-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block">
  </div>
</div>
  </div>
  )
}

export default Home