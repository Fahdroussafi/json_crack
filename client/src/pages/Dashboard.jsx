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
      for (const key in data) {
        const li = document.createElement("li");
        li.innerHTML = key;
        if (typeof data[key] === "object") {
          li.appendChild(createTree(data[key]));
        } else {
          li.innerHTML += `: ${data[key]}`; // append value to key if not an object (leaf node)
        }
        ul.appendChild(li);
        li.style.color = typeof data[key] === "string" ? "red" : "white"; // change color if leaf node (string) or not (object)
        li.style.fontWeight =
          typeof data[key] === "string" ? "extrabold" : "bold";
        li.style.listStyleType =
          typeof data[key] === "string" ? "none" : "disc";
        li.style.marginLeft = typeof data[key] === "string" ? "0px" : "20px";
        li.style.marginBottom = typeof data[key] === "string" ? "0px" : "10px";
        li.style.fontSize = typeof data[key] === "string" ? "20px" : "16px";
        li.style.fontFamily =
          typeof data[key] === "string" ? "monospace" : "sans-serif";
        li.style.textAlign = typeof data[key] === "string" ? "left" : "center";
        li.style.padding = typeof data[key] === "string" ? "0px" : "5px";
        li.style.borderRadius = typeof data[key] === "string" ? "0px" : "10px";
        li.style.backgroundColor =
          typeof data[key] === "string" ? "transparent" : "";
        li.style.border =
          typeof data[key] === "string" ? "none" : "2px solid #e5e5e5";
      }
      return ul;
    };
  };
  // li.innerHTML = `<span class="caret">${key}</span>`;
  // if (typeof data[key] === "object") {
  //   // console.log(key);
  //   li.appendChild(createTree(data[key]));
  // } else {

  //   // li.innerHTML = `<span>${key}: ${data[key]}</span>`;
  //   // console.log(key, ":", data[key]);
  // }

  // ul.appendChild(li);

  const clearList = () => {
    const list = document.getElementById("list");
    list.innerHTML = "";
  };

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
