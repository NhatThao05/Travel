import React, {useState, useEffect, useRef} from "react";
import {HiMenu} from 'react-icons/hi';
import {AiFillCloseCircle} from 'react-icons/ai';
import { Link, Route, Routes } from "react-router-dom";

import Navbar from "../components/Navbar";
import UserProfile from "../components/UserProfile";
import { client } from "../client";
import Logo from '../assets/Logo.png'
import Pins from "./Pins";
import { userQuery } from "../utils/data";
import { fetchUser } from "../utils/fetchUser";

export default function Home() {
 const [toggleNavbar, setToggleNavbar] = useState(false);
 const [user, setUser] = useState();
 const scrollRef = useRef(null);

 const userInfo = fetchUser()

 useEffect(() => {
  const query = userQuery(userInfo?.googleId);
  client.fetch(query).then((data) => {
   setUser(data[0])
  })
 }, [setUser, userInfo])

 useEffect(() => {
  scrollRef.current.scrollTo(0,0)
 }, [])
 return(
  <div className="flex bg-gray-50 md:flex-row flex-col h-screen transaction-height duration-75 ease-out">
   <div className="hidden md:flex h-screen flex-initial">
    <Navbar user={user && user} />
   </div>
   <div className="flex md:hidden flex-row">
    <div className="p-2 w-full flex flex-row justify-between items-center shadow-md">
     <HiMenu fontSize={40} className="cursor-pointer" onClick={() => setToggleNavbar(true)}/>
     <Link to="/">
       <img src={Logo} alt="logo" className="w-10"/>
     </Link>
     <Link to={`user-profile/${user?._id}`}>
       <img src="https://toppng.com/uploads/preview/travel-icons-travel-icon-free-1155345307059cfuzjxyz.png" alt="logo" className="w-10"/>
     </Link>
    </div>
    {toggleNavbar && (
     <div className="fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in">
      <div className="absolute w-full flex justify-end items-center p-2">
       <AiFillCloseCircle fontSize={30} className="cursor-pointer" onClick={() => setToggleNavbar(false)}/>
      </div>
      <Navbar user={user && user} closeToggle={setToggleNavbar}/>
     </div>
    )}
   </div>
   
   <div className="pb-2 flex-1 h-screen overflow-y-scroll" ref={scrollRef}>
     <Routes>
      <Route path="/user-profile/:userId" element={<UserProfile />} />
      <Route path="/*" element={<Pins user={user && user} />} />
     </Routes>
   </div>
  </div>
 )
}