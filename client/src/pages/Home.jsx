import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl text-white font-extrabold animate-bounce tracking-widest">
              JSON
              <span className="italic font-extrabold text-purple-600  ">
                {"   "}
                _CRACK
              </span>
            </h1>
            <p className="py-6 text-lg font-bold text-white ">
              This is a simple app that uploads a JSON file and displays the
              contents in a list
            </p>
            <Link to="/login">
              <button className="btn btn-outline text-purple-600 font-bold hover:bg-transparent hover:text-white border-2 border-purple-600">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
