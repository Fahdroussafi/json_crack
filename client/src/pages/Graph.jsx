// import Graph from "react-json-graph";
import React, { useEffect } from "react";
import ReactFlow, { removeElements, addEdge } from "react-flow-renderer";
import { useState } from "react";
import { BrowserRouter as Link } from "react-router-dom";

function Home() {
  // uploads a json file and console logs the result
  const UploadFile = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (e) => {
      const json = JSON.parse(e.target.result); // parse the json file into a js object
      // console.log(json);
      const objProp = (obj) => {
        for (let val in obj) {
          // for each key in the object
          // console.log(val);
          if (typeof obj[val] === "object") {
            console.log("nested object found", val);
            objProp(obj[val]);
          } else {
            console.log(val, ": ", obj[val]);
          }
        }
        document.getElementById("json").innerHTML = JSON.stringify(
          obj, // the object
          null,
          3 // the number of spaces to indent
        );
      };
      objProp(json);
    };
  };

  return (
    <>
      {/* <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold">Graph</h1>
          <p className="mt-3 text-2xl">Upload a JSON file to see the graph</p>
        </div>
      </div> */}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">JSON CRACK</h1>
            <p className="py-6">Please enter the JSON data to be cracked</p>
            <Link to="/login">
              <button className="btn btn-primary">Get Started</button>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center">
            <input type="file" onChange={UploadFile} />
          </div>
          <div className="flex flex-col items-center justify-center">
            <textarea
              rows={20}
              cols={50}
              id="json"
              className="w-full h-full"
              placeholder="Paste JSON data here"
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
