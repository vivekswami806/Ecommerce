import React from "react";
import ProductContext from "../context/ProductContext";
import AllProduct from "./AllProduct";
import '../style/home.css'

function Home() {
  return (
    <>
      <div>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-mdb-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://cdn.pixabay.com/photo/2016/11/22/19/08/hangers-1850082_1280.jpg"
                className="w-100  HomeImage"
                alt="Wild Landscape"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140603_1280.jpg"
                className="d-block w-100 HomeImage"
                alt="Camera"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://cdn.pixabay.com/photo/2021/08/22/08/10/hoi-an-6564496_1280.jpg"
                className="d-block w-100 HomeImage"
                alt="Exotic Fruits"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://cdn.pixabay.com/photo/2023/04/13/16/51/girls-7922980_1280.jpg"
                className="d-block w-100 HomeImage"
                alt="Exotic Fruits"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-mdb-target="#carouselExampleControls"
            data-mdb-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-mdb-target="#carouselExampleControls"
            data-mdb-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <br />
      <br />
      <div className=" d-flex flex-column">
        <div className="itemsHome">
          <AllProduct />
        </div>

        <div className="container ">
         
          
              Here We give you good Shoping eprience for how we sell the product
              and we give a good approchinity to invest in our app to inprove
              aur market here we have very good products.
              <br />
              Here We give you good Shoping eprience for how we sell the product
              and we give a good approchinity to invest in our app to inprove
              aur market here we have very good products.
              <br />Here We give you good Shoping eprience for how we sell the product
              and we give a good approchinity to invest in our app to inprove
              aur market here we have very good products.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eos recusandae doloremque
               tempore reiciendis possimus reprehenderit est, tempora corrupti velit voluptate saepe 
               ipsam optio maiores, ipsa vel eaque laboriosam nemo.
              <br />
              <br />
              <h1> WelCome To Rameera Shoping Company</h1>
              <button className=" btn btn-info visitCompanyHome">
                Visit Comapany
              </button>        
        </div>
        <br />
        <br />
        <div className="col-md m-4 d-flex justify-content-around imageHomelast">
            <img
              src="https://images.unsplash.com/photo-1533481405265-e9ce0c044abb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsbHxlbnwwfHwwfHx8MA%3D%3D"
              alt="alt"
              className="imageHome card"
            />
            <img src="https://media.architecturaldigest.com/photos/55e7658d302ba71f3016531d/master/w_1920%2Cc_limit/dam-images-architecture-2015-02-candy-shops-beautiful-candy-shops-01-dylans-candy-bar.jpg" alt="product img" className=' card imageHome' />
            <img src="https://cdn.pixabay.com/photo/2016/10/22/17/18/shopping-1761237_1280.jpg" alt="product img" className='imageHome card'/>
            <img src="https://www.jll.co.in/images/apac/australia/articles/jll-local-shops-get-a-lift-as-consumers-focus-on-daily-needs-teaser-800x600.jpg.rendition/desktop.jpg" alt="product img" className='imageHome card'/>
          </div>
      </div>
    </>
  );
}

export default Home;
