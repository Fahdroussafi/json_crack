import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // uploads a json file and console logs the result
  const UploadFile = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (e) => {
      const json = JSON.parse(e.target.result); // parse the json file into a js object

      const objProp = (obj) => {
        // function to get the properties of the object
        for (let val in obj) {
          // for each key in the object
          // console.log(val);
          if (typeof obj[val] === "object") {
            // console.log("nested object found", val);
            objProp(obj[val]); // if the value is an object, call the function again
          } else {
            console.log(val, ": ", obj[val]);
            let node = document.createElement("li");
            // style the value of the key
            node.style.color = "red";
            node.style.fontSize = "20px";
            node.style.fontWeight = "bold";
            node.style.textAlign = "center";
            node.style.listStyle = "none";
            node.style.padding = "10px";
            node.style.margin = "10px";
            node.style.border = "1px solid black";
            node.style.borderRadius = "10px";
            node.style.backgroundColor = "white";
            node.style.boxShadow = "0 0 10px 0 rgba(0, 0, 0, 0.2)";
            node.style.width = "300px";
            node.style.height = "100px";
            node.style.display = "flex";
            node.style.justifyContent = "center";
            node.style.alignItems = "center";
            node.style.flexDirection = "column";
            node.style.textTransform = "uppercase";
            node.style.fontFamily = "sans-serif";
            node.style.letterSpacing = "1px";
            node.style.wordSpacing = "2px";

            // if a value is empty, display "empty"
            if (obj[val] === "") {
              node.innerHTML = `${val}: empty`;
            } else {
              node.innerHTML = `${val}: ${obj[val]}`;
            }

            // style each array of objects in the json file differently

            // const textnode = document.createTextNode(val + ": " + obj[val]);

            // const textnode = document.createTextNode(`${val}: ${obj[val]}`);

            // node.appendChild(textnode);
            document.getElementById("myDiv").appendChild(node);
          }
        }
      };
      objProp(json);
    };
    // function that clears the list each time a new file is uploaded
  };
  const clearList = () => {
    var list = document.getElementById("myDiv");
    while (list.hasChildNodes()) {
      list.removeChild(list.firstChild);
    }
  };

  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://img.freepik.com/free-photo/liquid-purple-art-painting-abstract-colorful-background-with-color-splash-paints-modern-art_1258-97771.jpg?w=2000")`,
        }}
      >
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl text-white font-extrabold">Upload a JSON file</h1>
            <p className="mb-5 text-lg font-bold text-white">
              This is a simple app that uploads a JSON file and displays the
              contents in a list
            </p>
            <div className="mb-5">
              <input
                className="btn btn-outline text-purple-600 font-bold hover:bg-transparent hover:text-white border-2 border-purple-600"
                type="file"
                id="file"
                onChange={UploadFile}
                accept=".json"
              />
            </div>
            <div className="mb-5">
              <button
                className="btn btn-outline text-purple-600 font-bold hover:bg-transparent hover:text-white border-2 border-purple-600"
                onClick={clearList}
              >
                Clear List
              </button>
            </div>
            <div
              id="myDiv"
              className="flex flex-col items-center justify-center "
            ></div>
            <div id="root"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
