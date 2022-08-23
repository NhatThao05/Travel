import React from "react";
import { NavLink, Link } from "react-router-dom";
import {RiHomeFill} from 'react-icons/ri';
import {IoArrowForwardCircleOutline} from 'react-icons/io';
import Logo from '../assets/Logo.png';

export default function Navbar({user, closeToggle}) {
 const isNotActiveStyle = 'flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize';
 const isActiveStyle = 'flex items-center px-5 gap-3 font-extrabold border-r-2 border-black  transition-all duration-200 ease-in-out capitalize';

 const categories = [
  {name: 'Vehicles'},
  {name: 'Fishing'},
  {name: 'Entertainment'},
  {name: 'Seafood'},
  {name: 'Hotel'},
  {name: 'Others'}
 ]
 const handleCloseNavbar = () => {
  if(closeToggle) closeToggle(false) 
 }
 return(
  <div className="flex flex-col justify-between bg-white h-full overflow-y-scrikk min-w-20 hide-scrollbar">
   <div className="flex flex-col">
    <Link to="/" className="flex px-5 gap-2 my-6 pt-1 w-190 items-center" onClick={handleCloseNavbar}>
     <img src={Logo} alt="logo" className="w-12"/>
    </Link>
    <div className="flex flex-col gap-5">
     <NavLink
      to="/"
      className={({isActive}) => (isActive ? isActiveStyle : isNotActiveStyle)}
      onClick={handleCloseNavbar}
     >
       <RiHomeFill color="black"/>
       Home
     </NavLink>
     <h3 className="mt-2 px-5 text-base 2xl:text-xl">Discover destination</h3>
     {categories.slice(0, categories.length - 1).map((category) => (
      <NavLink to={`/category/${category.name}`}
        className={({isActive}) => (isActive ? isActiveStyle : isNotActiveStyle)}
        onClick={handleCloseNavbar} key={category.name}
      >
        {category.name}
      </NavLink>
     ))}
   </div>
   </div>
   {user && (
    <Link to={`user-profile/${user._id}`} 
      className="flex my-5 mb-3 gap-2 p-2 items-center bg-white rounded-lg shadow-lg mx-3"
      onClick={handleCloseNavbar}>
     <img src={user.image} className="w-10 h-10 rounded-full" alt="user-profile"/>
     <p>{user.userName}</p>
    </Link>
   )}
  </div>
 )
}