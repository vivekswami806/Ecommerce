import React from 'react'
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
function AddToggletoCart({cartDecHandler,cartIncHandler,cartCount}) {
  return (
    <div>
        <button className='m-3 fs-3' style={{border:"none", backgroundColor:"white"}}
        onClick={cartDecHandler}>
            <AiOutlineMinusCircle/>
        </button>
        <span> {cartCount}</span>
        <button className='m-3 fs-3 'style={{border:"none", backgroundColor:"white"}} onClick={cartIncHandler}>
            <AiOutlinePlusCircle/>
        </button>
    </div>
  )
}

export default AddToggletoCart