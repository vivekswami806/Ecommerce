import React, { createContext, useContext, useEffect, useReducer } from 'react'
import axios from "axios"
import reducer from "../reducer/productReducer"
export let productContext =createContext();

function ProductContext({children}) {
    let intialvalue = {
        data: [],
        isLoding: false,
        error: "",
        singleProduct: {},
        isSingleLoading: false,
      };
      let [state, dispatch] = useReducer(reducer, intialvalue);

    async function fetchData(){
       
        dispatch({ type: "LODING" });
            try{
                const res = await axios.get("https://dummyjson.com/products")
                const data = await res.data.products;
                        // console.log(data);
                        dispatch({ type: "FETCH_DATA", payload: data });

            } catch(e){
                dispatch({ type: "FETCH_ERROR", payload: e });
            }
    }

    // single fetch 

            async function singleFetch (url){
                    dispatch({type:"SINGLE_LODING"})
                    try{
                        let res =await axios.get(url)
                        let data =await res.data
                        dispatch({type :"SINGLE_FETCH",payload:data})
                    }catch(e){
                        dispatch({type:"SINGLE_ERROR",payload:e})
                    }
            }



 useEffect(()=>{
    fetchData()
 },[])

  return (
   <productContext.Provider value={{...state,singleFetch}}>
    {children}
   </productContext.Provider>
  )
}
let useFetch =() =>{
    return useContext(productContext)
}
// console.log(useFetch);
export {useFetch}
export default ProductContext