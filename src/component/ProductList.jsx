import React from "react";
import Productcard from "./commonCom/productcard";
import { useFetch } from "../context/ProductContext";
import FilterComponent from "./FilterComponent";
import SortingComp from "./SortingComp";
import { useFilter } from "../context/FilterContext";

function ProductList() {
  let { filterData, allData } = useFilter();

  return (
    <>
      <div className="container d-flex ">
        <div>{allData.length > 0 && <FilterComponent />}</div>
        <div className="d-flex row justify-content-end">
          <div className="d-flex justify-content-end">
            <SortingComp />
          </div>
          <div className="">
           <div className=" d-flex flex-row flex-wrap">
           {filterData.length == 0 && <h1>no Match data </h1>}
            {filterData.length > 0 &&
              filterData.map((item) => {
                return <Productcard item={item} key={item.id} />;
              })}
           </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;
