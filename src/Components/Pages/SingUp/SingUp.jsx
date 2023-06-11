import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../SingIn/SocialLogin";

const SignUp = () => {
  // const navigate = useNavigate();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleSignUp = async (data) => {
    const { name, photoURL, email, password } = data;

    setError("");
    setSuccess("");

    if (!/(?=.*[A-Z])/.test(password)) {
      setError("Please include at least one uppercase letter.");
      return;
    } else if (!/(?=.*[!@#$&*])/.test(password)) {
      setError("Please include a special symbol.");
      return;
    } else if (!/(?=.*[0-9])/.test(password)) {
      setError("Please include at least one number.");
      return;
    } else if (password.length < 6) {
      setError("Please include at least six characters.");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

        updateUserProfile(name, photoURL)
          .then(() => {
            const saveUser = { name, email };
            fetch(`https://artistry-academy-server.vercel.app/users`, {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(saveUser),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  reset();
                  Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Sing Up Successfull",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                }
              });
          })
          .catch((error) => console.log(error.message));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
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
              Sign Up
            </label>
            <form onSubmit={handleSubmit(handleSignUp)} className="mt-10">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className={`mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 ${
                    errors.name ? "ring-2 ring-red-500" : ""
                  }`}
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <p className="text-red-600 text-sm">
                    Please enter your name.
                  </p>
                )}
              </div>
              <div className="mt-7">
                <input
                  type="url"
                  name="photoURL"
                  placeholder="PhotoURL"
                  className={`mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 ${
                    errors.photoURL ? "ring-2 ring-red-500" : ""
                  }`}
                  {...register("photoURL", { required: true })}
                />
                {errors.photoURL && (
                  <p className="text-red-600 text-sm">
                    Please enter a valid PhotoURL.
                  </p>
                )}
              </div>

              <div className="mt-7">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your email"
                  className={`mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 ${
                    errors.email ? "ring-2 ring-red-500" : ""
                  }`}
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className="text-red-600 text-sm">
                    Please enter a valid email.
                  </p>
                )}
              </div>

              <div className="mt-7">
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="Password"
                  className={`mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 ${
                    errors.password ? "ring-2 ring-red-500" : ""
                  }`}
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <p className="text-red-600 text-sm">
                    Please enter a password.
                  </p>
                )}
              </div>

              <div className="mt-7">
                <p className="text-red-600 text-sm">{error}</p>
                <p className="text-green-600 text-sm">{success}</p>
              </div>
              <button
                className={`mt-7 bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105`}
                type="submit"
              >
                Sign Up
              </button>

              <div className="flex mt-7 items-center text-center">
                <hr className="border-gray-300 border-1 w-full rounded-md" />
                <label className="block font-medium text-sm text-gray-600 w-full">
                  Or
                </label>
                <hr className="border-gray-300 border-1 w-full rounded-md" />
              </div>

              <SocialLogin></SocialLogin>

              <div className="mt-7">
                <div className="flex justify-center items-center">
                  <label className="mr-2">Already have an account?</label>
                  <Link
                    to="/sign-in"
                    className="text-blue-500 transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
                  >
                    Please Sign In
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
