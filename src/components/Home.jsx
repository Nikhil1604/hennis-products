import React, { useEffect } from 'react'
import { useState } from 'react'
const Home = () => {
   
    const [data,setData]=useState("")
    async function getData (){
        const url = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=us&lang=en&currentpage=0&pagesize=30&categories=men_all&concepts=H%26M%20MAN';
        const options = {
	        method: 'GET',
	            headers: {
	            	'X-RapidAPI-Key': '06ba227d34mshf7b8ed3ef468cacp183958jsne2561aa23ed9',
	            	'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
	                }

        };
         
        const res= await fetch(url,options)
        const result= await res.json()
        setData(result.results[0])
        console.log(data)
    }

    useEffect (()=>{
        getData()
    },[])


    return (
    <div className='w-4/5  mx-auto bg-blue-900/60 h-screen p-5 text-xl text-center'>
        <h1>This is demo website tp display the items</h1>

        {
            data ? 
            <div className='w-1/3 h-2/4 bg-red-300 mt-5 pt-5 text-center' id='1'>
            <h1 className='py-2'>{data.name}</h1>
            <img src={data.galleryImages[0].baseUrl} className='w-4/5 mx-auto h-2/4' alt="" />
            <h1 className='py-2'>{data.price.formattedValue}</h1>
            <h1 className='py-2'>Category : {data.categoryName}</h1>
            <h1></h1>
        </div>
            :null
        }
        
    </div>
  )
}

export default Home

