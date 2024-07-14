import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import Footer from "../components/Footer";
import { FaAngleDoubleDown } from "react-icons/fa";

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>
      <div className="flex items-center absolute inset-0 w-full justify-center -top-1/4 font-semibold z-0 flex-col">
        <div className="w-96 p-6 rounded-lg ">
          <div className="flex justify-between mb-6 text-white">
            <button
              onClick={toggleForm}
              className={`w-full py-2 ${isLogin ? "bg-blue-500" : "bg-gray-700"} rounded-l-lg`}
            >
              LOGIN
            </button>
            <button
              onClick={toggleForm}
              className={`w-full py-2 ${!isLogin ? "bg-blue-500" : "bg-gray-700"} rounded-r-lg`}
            >
              SIGNUP
            </button>
          </div>
          {isLogin ? <LoginForm /> : <SignupForm />}
        </div>
        <div className="absolute bottom-20 text-xl font-semibold uppercase flex gap-5">
          <FaAngleDoubleDown className="size-7 animate-bounce" />
          explore more
          <FaAngleDoubleDown className="size-7 animate-bounce" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
