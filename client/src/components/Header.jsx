import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [navbar, setNavbar] = useState(false);
  const [authState, setAuthState] = useState(false);

  const logout = () => {
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("refreshToken");
    window.location.href = "/";
  };
  return (
    <>
      <nav className="w-full sticky top-0 z-50 bg-black opacity-70 ">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link
              to="/dashboard"
              className="text-purple-600 btn btn-ghost normal-case text-xl font-extrabold"
            >
              JSON_CRACK
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <div className="mt-3 space-y-2 lg:hidden md:hidden">
                <button
                  onClick={logout}
                  className="btn btn-outline text-purple-600 font-bold hover:bg-transparent hover:text-white border-2 border-purple-600"
                >
                  LOGIN
                </button>
              </div>
            </div>
          </div>
          <div className="hidden space-x-2 md:inline-block ">
            <button
              onClick={logout}
              className="btn btn-outline text-purple-600 font-bold hover:bg-transparent hover:text-white border-2 border-purple-600"
            >
              LOGOUT
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
