import React, { useState } from "react";

function Gallary({ images }) {
  let [url, seturl] = useState(images);

  function imamgeHandler(url) {
    seturl(url);
  }
  return (
    <div className="row">
      <div className="col-md-4 m-0">
        {images
          ? images.map((data, i) => {
              return (
                <div className="m-3">
                  <img
                    src={data}
                    key={i}
                    alt={i}
                    className="img-fluid"
                    onClick={() => {
                      imamgeHandler(data);
                    }}
                  />
                </div>
              )
            })
          : null}
      </div>
      <div className="col-md-5 w-50 m-3 p-1">
        <div
          style={{ width: "150%", height: "80vh" }}
          className="d-flex">
          <img alt={url }
           src={url} className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default Gallary;
