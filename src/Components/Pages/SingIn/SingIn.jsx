import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Provider/AuthProvider";

const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const onSubmit = (data) => {
    const { email, password } = data;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess("Sign In Success");
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
        setSuccess("");
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess("Sign In with Google Success");
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
        setSuccess("");
      });
  };

  const from = location.state?.from?.pathname || "/";

  return (
    <>
      <div className="my-8">
        <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 py-8">
          <div className="relative sm:max-w-sm w-full">
            <div className="card bg-blue-400 shadow-lg w-full h-full rounded-3xl absolute transform -rotate-6"></div>
            <div className="card bg-red-400 shadow-lg w-full h-full rounded-3xl absolute transform rotate-6"></div>
            <div className="relative w-full rounded-3xl px-6 py-4 bg-gray-100 shadow-md">
              <label
                htmlFor=""
                className="block mt-3 text-sm text-gray-700 text-center font-semibold"
              >
                Sign In
              </label>
              <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
                <div className="">
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="Your email"
                    className={`mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 ${
                      errors.email ? "ring-2 ring-red-500" : ""
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-600">Email is required</p>
                  )}
                </div>

                <div className="mt-7">
                  <input
                    type="password"
                    {...register("password", { required: true })}
                    placeholder="Password"
                    className={`mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 ${
                      errors.password ? "ring-2 ring-red-500" : ""
                    }`}
                  />
                  {errors.password && (
                    <p className="text-red-600">Password is required</p>
                  )}
                </div>

                <div className="mt-7">
                  <p className="text-red-600">{error}</p>
                  <p className="text-green-600">{success}</p>
                </div>
                <div className="mt-7">
                  <input
                    className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
                    type="submit"
                    value=" Sign In"
                  />
                </div>

                <div className="flex mt-7 items-center text-center">
                  <hr className="border-gray-300 border-1 w-full rounded-md" />
                  <label className="block font-medium text-sm text-gray-600 w-full">
                    Or
                  </label>
                  <hr className="border-gray-300 border-1 w-full rounded-md" />
                </div>

                <div className="flex mt-7 justify-center w-full">
                  <button
                    onClick={handleGoogleSignIn}
                    className="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
                  >
                    Google
                  </button>
                </div>

                <div className="mt-7">
                  <div className="flex justify-center items-center">
                    <label className="mr-2">Create a new account?</label>
                    <Link
                      to="/sing-up"
                      className="text-blue-500 transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
                    >
                      Please Sign Up
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
