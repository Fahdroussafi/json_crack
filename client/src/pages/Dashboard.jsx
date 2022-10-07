import React from "react";

const Dashboard = () => {
  const uploadFile = (e) => {
    const file = e.target.files[0]; // get the file
    const reader = new FileReader(); // create a file reader
    reader.readAsText(file); // read file as text
    reader.onload = (e) => {
      // on load of file
      const data = JSON.parse(e.target.result); // parse file as JSON object
      const list = document.getElementById("list"); // get the list element
      list.innerHTML = ""; // clear the list
      list.appendChild(createTree(data)); // append parsed JSON to list as a tree
    };

    // function that creates a list
    const createTree = (data) => {
      const ul = document.createElement("ul");
      for (const obj in data) {
        const li = document.createElement("li");
        if (Array.isArray(data[obj])) {
          li.innerHTML = `${obj} (${data[obj].length})`;
        } else {
          li.innerHTML = obj;
        }
        // li.innerHTML = obj;
        if (typeof data[obj] === "object") {
          li.appendChild(createTree(data[obj]));
          console.log(obj, ":", data[obj]);
        } else {
          li.innerHTML += `: ${data[obj]}`; // add the value to the li
        }
        ul.appendChild(li); // append the list item to the list
        li.style.color =
          typeof data[obj] === "string"
            ? "red"
            : typeof data[obj] === "number"
            ? "red"
            : typeof data[obj] === "object"
            ? "white"
            : typeof data[obj] === "boolean"
            ? "red"
            : "red";

        // li.style.color = typeof data[obj] === "string" ? "red" : "white"; // change color if leaf node (string) or not (object)
        li.style.fontWeight =
          typeof data[obj] === "string" ? "extrabold" : "bold";

        li.style.listStyleType =
          typeof data[obj] === "string"
            ? "none"
            : typeof data[obj] === "number"
            ? "none"
            : typeof data[obj] === "object"
            ? "disc"
            : typeof data[obj] === "boolean"
            ? "none"
            : "disc";

        // li.style.listStyleType =
        //   typeof data[obj] === "string" ? "none" : "disc";

        li.style.marginLeft =
          typeof data[obj] === "string"
            ? "0px"
            : typeof data[obj] === "number"
            ? "0px"
            : typeof data[obj] === "object"
            ? "20px"
            : typeof data[obj] === "boolean"
            ? "0px"
            : "0px";

        li.style.marginBottom =
          typeof data[obj] === "string"
            ? "0px"
            : typeof data[obj] === "number"
            ? "0px"
            : typeof data[obj] === "object"
            ? "10px"
            : typeof data[obj] === "boolean"
            ? "0px"
            : "0px";

        // li.style.marginLeft = typeof data[obj] === "string" ? "0px" : "20px";
        // li.style.marginBottom = typeof data[obj] === "string" ? "0px" : "10px";

        li.style.fontSize = typeof data[obj] === "string" ? "20px" : "16px";

        li.style.textAlign =
          typeof data[obj] === "string"
            ? "left"
            : typeof data[obj] === "number"
            ? "left"
            : typeof data[obj] === "object"
            ? "center"
            : typeof data[obj] === "boolean"
            ? "left"
            : "center";
        // li.style.textAlign = typeof data[obj] === "string" ? "left" : "center";

        li.style.padding =
          typeof data[obj] === "string"
            ? "5px"
            : typeof data[obj] === "number"
            ? "5px"
            : typeof data[obj] === "object"
            ? "5px"
            : typeof data[obj] === "boolean"
            ? "5px"
            : "5px";

        // li.style.padding = typeof data[obj] === "string" ? "0px" : "5px";
        li.style.borderRadius = typeof data[obj] === "string" ? "0px" : "10px";

        li.style.backgroundColor =
          typeof data[obj] === "string" ? "transparent" : "";

        li.style.border =
          typeof data[obj] === "string"
            ? "none"
            : typeof data[obj] === "number"
            ? "none"
            : typeof data[obj] === "object"
            ? "1px solid white"
            : typeof data[obj] === "boolean"
            ? "none"
            : "none";

        // li.style.border =
        //   typeof data[obj] === "string" ? "none" : "2px solid #e5e5e5";
      }
      return ul;
    };
  };

  const clearList = () => {
    const list = document.getElementById("list");
    list.innerHTML = "";
  };

  // if the user tries to upload the same file again, alert them
  

  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl text-white font-extrabold">
              Upload a JSON file
            </h1>
            <p className="mb-5 text-lg font-bold text-white">
              This is a simple app that uploads a JSON file and displays the
              contents in a list
            </p>
            <div className="mb-5">
              <input
                className="btn btn-outline text-purple-600 font-bold hover:bg-transparent hover:text-white border-2 border-purple-600"
                type="file"
                id="file"
                onChange={uploadFile}
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
            <div className="mb-5">
              <ul id="list"></ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
