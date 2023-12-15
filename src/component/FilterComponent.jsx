import React from "react";
import { useFilter } from "../context/FilterContext";

function FilterComponent() {
  let { allData, setFilterValue,filter:{maxPrice,price},clearFilter } = useFilter();
  
  let tempData = [...allData];
  function findData(arg) {
    let arr = tempData.map((item) => {
      return [item[arg]];
    });
  
    let uniqueArr = ["All", ...new Set(arr.flat())];
    return uniqueArr;
  }

  let category = findData("category");
  let company = findData("brand");
  return (
    <div className="m-4">
      <div>
        <input className="w-100"
          type="text"
          placeholder="search"
          name="text"
          onChange={(e) => {
            setFilterValue(e);
          }}
           />
         
      </div>
      <br />
      <br />
      <div>
        <h3>Category</h3>
      <select
          name="category"
          id=""
          onChange={(e) => {
            setFilterValue(e);
          }}
        >
          {category.map((item, i) => {
            return (
              <>              
                <option value={item} key={i}>              
                  {item}
                </option>            
              </>
            );
          })}
        </select>
     
      </div>
      <br />
      <div>
        <h3> Company</h3>
        <select
          name="company"
          id=""
          onClick={(e) => {
            setFilterValue(e);
          }}
        >
          {company.map((item, i) => {
            return (
              <>              
                <option value={item} key={i}>
                  {item}
                </option>
            
              </>
            );
          })}
        </select>

        <br />
        <h3>Price</h3>
        <input type="range" max={maxPrice} name="price" value={price} onChange={(e)=>{setFilterValue(e)}}/>
        <br />
        <button className="btn btn-danger" onClick={clearFilter}> Clear ALL</button>
      </div>
    </div>
  );
}

export default FilterComponent;
