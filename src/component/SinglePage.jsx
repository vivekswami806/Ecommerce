import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../context/ProductContext";
import Loding from "./commonCom/Loding";
import Gallary from "./Gallary";
import AddToCart from "./AddtoCart";

function SinglePage() {
  let { id } = useParams();
  let { singleFetch, error, singleProduct, isSingleloading } = useFetch();
  let {
    title,
    rating,
    description,
    stock,
    price,
    brand,
    images,
    id: productID,
    discountPercentage,
  } = singleProduct;

  useEffect(() => {
    let url = `https://dummyjson.com/products/${id}`;
    singleFetch(url);
  }, []);
  if (singleProduct) {
    return (
      <>
        {isSingleloading && <Loding />}
        {/* {isSingleloading && <h1>something worng..</h1>} */}
        {!isSingleloading && !error && (
          <div className="container">
            <div className="row d-flex justify-content-around">
              <div className="col-md-5">
                {singleProduct ? <Gallary images={images} /> : null}
              </div>
              <div className="col-md-5">
                <h1 className="display-2">{title}</h1>
                <p> Rating: {rating}</p>
                <h3>MRP: {price}</h3>
                <p className="text-primary">
                 <strong>  Deal of the day:   {  price - (price * discountPercentage) / 100}</strong>
                </p>
                <p className="m-2"> <h4>Description:</h4> {description}</p>
                {/* <div style={{ height: "40px", width: "100%" }}>
                  <h1>logo i am brand</h1>
                </div> */}
                <hr />
                <p>
                  Available: <b> {stock > 0 ? "In Stock" : "Out of Stock"}</b>
                </p>
                <p>
                  Brand:  <b>{brand}</b>
                </p>
                <hr />
               
                {singleProduct.id   && (
                  <AddToCart singleProduct={singleProduct}/>
                )}
              
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
  else{
    return <Loding/>
  }
}

export default SinglePage;
