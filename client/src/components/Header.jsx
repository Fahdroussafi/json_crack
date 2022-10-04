import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const logout = () => {
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("refreshToken");
    window.location.href = "/";
  };
  return (
    <>
      <div className="navbar lg:w-full lg:flex lg:justify-between gap-3 pr-10 shadow-xl z-0 h-7">
        <Link
          to="/"
          className="btn btn-ghost normal-case text-xl font-extrabold"
        >
          JSON_CRACK
        </Link>
        <div className="lg:flex gap-2">
          <button
            onClick={logout}
            className="font-bold btn btn-ghost normal-case text-xl bg-red-600 text-white"
          >
            Log out
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
