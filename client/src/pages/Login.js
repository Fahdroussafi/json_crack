import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Background from "../assets/background.jpg";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  const login = () => {
    const data = { username: username, password: password };
    axios.post("http://localhost:3001/auth/login", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        sessionStorage.setItem("accessToken", response.data);
        history.push("/dashboard");
      }
    });
  };
  return (
    <main
      className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <section className="flex w-[30rem] flex-col space-y-10">
        <div className="text-gray-50 animate-bounce text-center text-5xl font-extrabold tracking-widest">
          LOGIN
        </div>
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white absolute top-5 left-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </Link>
        <form>
          <div className="mb-7 w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-purple-600">
            <input
              type="text"
              placeholder="Username"
              className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none placeholder:text-white placeholder:font-semibold"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
          </div>
          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-purple-600 ">
            <input
              className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none placeholder:text-white placeholder:font-semibold"
              placeholder="Password"
              autoComplete="off"
              type="password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
        </form>
        <button
          className="btn btn-outline text-purple-600 font-bold hover:bg-transparent hover:text-white border-2 border-purple-600"
          onClick={login}
        >
          Login
        </button>
        <div className="text-center">
          Don't have an account?{"  "}
          <Link
            to="/register"
            className="text-purple-600 text-xl font-bold italic hover:text-white duration-300 underline"
          >
            Register
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Login;
