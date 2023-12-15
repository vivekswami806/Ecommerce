import React from 'react'
import { useFetch } from '../context/ProductContext'
import Loding from "./commonCom/Loding"
import HomeProduct from './commonCom/HomeProduct';



function AllProduct() {

    let {isLoding,data,error} =useFetch()
  return (
    <>
    <div className="container">
        <div className="row d-flex justify-content-evenly  ">
         {isLoding && !error && <Loding/>}
         {!isLoding && !error && data.length==0 && <h1>somthing wrong...</h1>}
         {!isLoding && error && <h1>somthing wrong...</h1>}
         {!isLoding && !error &&  data.map((item,i)=>{
          return <HomeProduct key={i} item={item}/>
         }).slice(0,10) }           
        </div>
    </div>
    </>
  )
}

export default AllProduct