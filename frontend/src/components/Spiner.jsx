import React, {useState, useEffect} from "react";
import {Bars} from 'react-loader-spinner';


export default function Spiner({message}) {
 return(
  <div className="flex flex-col justify-center items-center w-full h-full">
   <Bars 
     type="Circles"
     color="#00bfff"
     height={50}
     width={50}
     className="m-5"
   />
   <p className="text-lg text-center px-2">{message}</p>
  </div>
 )
}