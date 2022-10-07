import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Background from "../assets/background.jpg";

function Register() {
  const initialValues = {
    username: "",
    password: "",
  };

  let history = useHistory();

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(3).max(15).required(),
    password: Yup.string().min(4).max(20).required(),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/auth/register", data).then(() => {
      console.log(data);
    });

    history.push("/login");
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <main
          className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white"
          style={{
            backgroundImage: `url(${Background})`,
          }}
        >
          <section className="flex w-[30rem] flex-col space-y-10">
            <div className="text-gray-50 animate-bounce text-center text-5xl font-extrabold tracking-widest">
              Sign Up
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
            <Form className="formContainer">
              <div className="mb-7 w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-purple-600">
                <ErrorMessage
                  className="text-red-600 p-5 font-bold"
                  name="username"
                  component="span"
                />
                <Field
                  className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none placeholder:text-white placeholder:font-semibold"
                  autoComplete="off"
                  id="inputCreatePost"
                  name="username"
                  placeholder="Username"
                />
              </div>

              <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-purple-600 ">
                <ErrorMessage
                  className="text-red-600 p-5 font-bold"
                  name="password"
                  component="span"
                />
                <Field
                  className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none placeholder:text-white placeholder:font-semibold"
                  autoComplete="off"
                  type="password"
                  id="inputCreatePost"
                  name="password"
                  placeholder="Password"
                />
              </div>
              <button className="mt-5 btn btn-outline text-purple-600 font-bold hover:bg-transparent hover:text-white border-2 border-purple-600">
                Sign Up
              </button>
            </Form>
          </section>
        </main>
      </Formik>
    </div>
  );
}

export default Register;
