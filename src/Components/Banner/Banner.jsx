import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="/src/assets/banner image.jpeg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-xl lg:text-5xl font-bold">
              Books to freshen up <br /> your bookshelf
            </h1>

            <Link to={"/listedBooks"}>
              <button className="btn bg-green-500 text-white mt-4">
                View The List
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
