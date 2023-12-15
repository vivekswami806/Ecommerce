import React from "react";
import { useFilter } from "../context/FilterContext";

function SortingComp() {
  let {filterData, updateSort } = useFilter();

  return (
    
    <div className="row d-flex justify-content-around m-5">  
    <div>
      <p>
       <h4>Total Product:  {filterData.length}</h4>
      </p>
    </div>
      <div className="col-md-1">
        <select
          name=""
          onChange={(e) => {
            updateSort(e);
          }}
        >
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>
          <option value="A_Z">A_Z</option>
          <option value="Z_A">Z_A</option>
        </select>
      </div>
    </div>
  );
}

export default SortingComp;
