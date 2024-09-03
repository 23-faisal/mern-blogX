import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <main className=" max-w-6xl mx-auto ">
      <div className=" h-screen w-full  flex items-center justify-center ">
        <form className="border-2 w-[400px] border-slate-200 rounded-md flex flex-col items-center gap-4 py-10 px-6 shadow-sm shadow-teal-50">
          <h1 className="text-center font-semibold text-2xl mb-4">Login</h1>
          <input
            className="w-full  border py-2 px-3 rounded-md outline-none  "
            type="text"
            placeholder="Enter your username"
            required
          />
          <input
            className="w-full border py-2 px-3 rounded-md outline-none  "
            type="password"
            placeholder="Enter your password"
            required
          />
          <button className="px-3 py-2 rounded-md text-lg text-white font-semibold   w-full bg-blue-500 hover:bg-blue-600 transition ease-in duration-75 ">
            Login
          </button>
          <div className="flex items-center justify-between w-full ">
            <p>Don't have an account?</p>
            <Link className="text-blue-500" to="/sign-up">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default LoginPage;
