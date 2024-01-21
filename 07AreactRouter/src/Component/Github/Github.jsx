import React, { useEffect, useState } from 'react'
import { useLoaderData } from "react-router-dom";
function Github() {
    const data=useLoaderData()
    // const [data,setData] =useState([])
    // useEffect(() =>{
    //     fetch('https://api.github.com/users/vrajclerk')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
  return (
    <div classname='text-center m-4 bg-orange-600 text-white p-4 text-3xl'>Github Folowers:{data.followers}
    <img  src={data.avtar_url} alt="Git picture" width={300}/>
    </div>
  )
}

export default Github

export const githunInfoLoader =async() => {
   const response= await fetch('https://api.github.com/users/vrajclerk')
    return response.json()
}