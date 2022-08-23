import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { IoMdAddCircleOutline} from 'react-icons/io'
import {FiSearch} from 'react-icons/fi';
 
export default function Sidebar({searchTerm, setSearchTerm, user}) {
 const navigate = useNavigate();

 return(
  <div className="flex gap-2 md:gap-5 w-full mt-5 pd-7">
   <div className="flex justify-start items-center w-full px-2 rounded-md bg-white border-none outline-none focus-within:shadow-sm">
    <FiSearch fontSize={20} className="ml-1"/>
    <input 
      type="text"
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search"
      value={searchTerm}
      onFocus={() => navigate('/search')}
      className="p-2 w-full bg-white outline-none"
    />
   </div>
   <div className="flex gap-3">
     <Link to={`user-profile/${user?._id}`} className="hidden md:block">
      <img src="https://toppng.com/uploads/preview/travel-icons-travel-icon-free-1155345307059cfuzjxyz.png" alt="user" className="w-14 h-12 rounded-lg"/>
     </Link>
     <Link to="create-pin" className="bg-black text-white rounded-lg w-12 h-12 md:w-14 md:h-12 flex justify-center items-center">
      <IoMdAddCircleOutline fontSize={25}/>
     </Link>
   </div>
  </div>
 )
}