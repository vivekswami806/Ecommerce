import React from 'react'
import {NavLink} from "react-router-dom"


function Productcard({item}) {
    let {title,price,description, thumbnail,id} =item
    
  return (
   <>
     <div className='col-md-4  p-2 m-2 card text-center' style={{backgroundColor:"#e5d7d7", width:"200px"}}>
        <div>
          <NavLink to={`/singlepage/${id}`} > <img   src={thumbnail} alt="abc" 
          className='img-fluid'  style={{height:"215px", width:"250px" , borderRadius:"10px"}}/> </NavLink> 
        </div>
        <br />
        <div>
        <h6> Title : {title}</h6>
        <p> INR: { price}</p>
        </div>
       
     </div>
   </>
  )
}

export default Productcard