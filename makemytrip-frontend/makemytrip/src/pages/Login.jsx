import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex items-center absolute inset-0 w-full justify-center -top-1/4 font-semibold z-0">
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
    </div>
  );
}

export default Login;
