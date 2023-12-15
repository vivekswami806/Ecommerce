import React, { createContext, useContext, useEffect, useReducer } from 'react'
import reducer from '../reducer/FilterReducer'
import { useFetch } from './ProductContext'

let filterContextValue = createContext()


function FilterContext({children}) {
    let intialState={
        allData: [],
        filterData: [],
        sorting: "lowest",
       filter:{
        text:"", 
        category: "",
        company: "",
        maxprice: "",
        minprice: 0,
        price:""     
       }
    }
    let [state ,dispatch] = useReducer(reducer,intialState)

    let {data} =useFetch()
    function updateSort(e){
        let { value } = e.target
        dispatch({ type: "SET_SORTING_VALUE", payload: value})
    }

    function setFilterValue(e)
    {
       console.log(e.target.value,e.target.name);
        dispatch({type:"SET_FILTER_VALUE", payload:e})
    }
    function clearFilter()
    {
        dispatch({type: "CLEAR_ALL_FILTER"})
    }


    useEffect(()=>{
    
        dispatch({type: "SET_FILTER_DATA", payload: data})
    },[data]);
    useEffect(()=>{
        dispatch({type: "SET_SORTING" , payload:data})
    },[state.sorting]);

    useEffect(()=>{
     
        dispatch({type:"FILTERATION"})
    },[state.filter]);

  return (
 <>
  <filterContextValue.Provider value={{...state,updateSort,setFilterValue,clearFilter}}>
    {children}{" "}
  </filterContextValue.Provider>
 </>
  )
}
export const useFilter = ()=>{
    return useContext(filterContextValue)
}

export default FilterContext