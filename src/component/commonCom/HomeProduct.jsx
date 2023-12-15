import React from 'react'
import {NavLink, useParams} from "react-router-dom"



function HomeProduct({item}) {
    let {title,price,description, thumbnail,id} =item
  return (
   <>
     <div className='col-md-4 m-4 p-3 card text-center' style={{backgroundColor:"#e1d7d7", width:"230px"}}>
        <div style={{ height:"13rem"}}>
          <NavLink to={`/singlepage/${id}`} > <img   src={thumbnail} alt="abc" 
          className='img-fluid'  style={{height:"215px", width:"215px" , borderRadius:"10px"}}/> </NavLink> 
        </div>
        <br />
        <div style={{ height:"6rem"}}>
        <h6> Title : {title}</h6>
        <p> INR: { price}</p>
        </div>
      
     </div>
   </>
  )
}

export default HomeProduct