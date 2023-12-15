import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useFetch } from '../context/ProductContext';
import { useCart } from '../context/CartContext';
import AddtoggletoCart from "./AddToggletoCart"

function AddToCart() { 
  let  {singleProduct} = useFetch()
  let {stock} = singleProduct
  let {addCart} = useCart()
  let [cartCount , setCartCount]=useState(1);
  function cartDecHandler(){  
    cartCount < 1 ? setCartCount(1) : setCartCount(cartCount - 1);
  }
 function cartIncHandler(){
  stock <= cartCount? setCartCount(stock) : setCartCount(cartCount+1);
 }
 
  return (
    <div>
      <AddtoggletoCart
        cartDecHandler={cartDecHandler}
        cartIncHandler={cartIncHandler}
        cartCount={cartCount}
      />       
      <NavLink to="/cart">
        <button onClick={()=>{
          addCart({singleProduct,cartCount})
         
        }}  className="card-footer  btn btn-dark p-2"> add to cart </button>
      </NavLink>
    </div>
  )
}

export default AddToCart;