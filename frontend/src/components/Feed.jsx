import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { client } from "../client";
import {searchQuery, feedQuery } from '../utils/data';
import MasonryLayout from './MasonryLayout'
import Spiner from './Spiner';

export default function Feed() {
 const [loading, setLoading] = useState(false);
 const [pins, setPins] = useState(null)
 const {categoryId} = useParams();

 useEffect(() => {
  setLoading(true);
  if(categoryId) {
   const query = searchQuery(categoryId);
   client.fetch(query).then((data) => {setPins(data); setLoading(false)})
  } else {
   client.fetch(feedQuery).then((data) => {setPins(data); setLoading(false)})
  }
 },[categoryId])

 if(loading) return <Spiner message="Welcome to Nha Trang bearch"/>
 return(
  <div>
   {pins && <MasonryLayout pins={pins}/>}
  </div>
 )
}