import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full border-b ">
      <nav className="max-w-6xl mx-auto h-14 flex items-center justify-between px-2 md:px-0">
        <div>
          <Link className="text-2xl font-bold " to="/">
            BlogX
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link className="text-lg " to="/login">Login</Link>
          <Link className="text-lg " to="/sign-up">Sign Up</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
