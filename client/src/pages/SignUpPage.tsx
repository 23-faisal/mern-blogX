import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <main className=" max-w-6xl mx-auto ">
      <div className=" h-screen w-full  flex items-center justify-center ">
        <form className="md:border-2 w-[400px] md:border-slate-200 md:rounded-md flex flex-col items-center gap-4 py-10 px-6 md:shadow-sm md:shadow-teal-50">
          <h1 className="text-center font-semibold text-2xl mb-4">Sign Up</h1>
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
            Sign Up
          </button>
          <div className="flex items-center justify-between w-full ">
            <p>Already have an account?</p>
            <Link className="text-green-500" to="/login">
              Login
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default SignUpPage;
