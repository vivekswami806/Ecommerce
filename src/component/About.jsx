import React from "react";
import '../style/about.css'

function About() {
  return (
    <>
      <div className="d-flex aboutFirst">
        <div className="">
          <h1>Material Original</h1>
          <h5>For give us privicy to Shoping What you need and want </h5>
          <h6>
            Standard Quality Allways a better choice Try and belive letter
          </h6>
          <p>
            700+ Companies and brand we have <br />
            Super simple, 1 minute to choice ,select and order <br />
            You can theming and customization by your own and we provide You to
            your choice
            <br />
            MIT license - free for personal & commercial use
          </p>
        </div>
        <div className="d-flex justify-content-center gap-2">
          <img
            src="https://i.insider.com/4e9c33bcecad045332000001?width=400&format=jpeg&auto=webp"
            alt=" about"
            className="Aboutimg w-50"
          />
          <img
            src="https://grindsuccess.com/wp-content/uploads/2023/07/Store-Names.webp?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-1"
            alt=" about"
            className="Aboutimg w-50"
          />
        </div>
      </div>

      <div class="card bg-dark text-white">
        <img
          src="https://images.unsplash.com/photo-1511317559916-56d5ddb62563?q=80&w=1893&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          class="card-img "
          alt="Stony Beach"
        />
        <div class="card-img-overlay d-flex flex-column justify-content-center align-items-center text-Success">
          <h5 class="card-title">WelCome To Rameera Shoping Company</h5>
          <h2 class="card-text">
            this is how we delivery to your Your package is alwas safe & secure
            trust us
          </h2>
          <h2 class="card-text">
            {" "}
            We delivery your product only within TWO day safe and secure{" "}
          </h2>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      {/* <div class="card">
        <div class="card-body">
          <h5 class="card-title">C</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
        <img
          src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
          class="card-img-bottom"
          alt="Camera"
        />
      </div> */}
    </>
  );
}

export default About;
