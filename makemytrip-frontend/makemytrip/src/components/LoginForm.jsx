import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const api = "https://make-my-trip-api-three.vercel.app";

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }

  async function handleUserSubmit(e) {
    try {
      e.preventDefault();
      const res = await fetch(api + "/api/auth/userLogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      const { success, message, accessToken, userData } = data;
      if (success === false) {
        setError(message);
        return;
      }
      setError(message);
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("username", userData.username);

      navigate("/");

      window.location.reload();
    } catch (error) {
      setError(error.message);
    }
  }

  async function handleAdminSubmit(e) {
    try {
      e.preventDefault();
      const res = await fetch(api + "/api/auth/adminLogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      const { success, message, accessToken, userData } = data;
      if (success === false) {
        setError(message);
        return;
      }
      setError(message);
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("username", userData.username);
      navigate("/profile");
      window.location.reload();
    } catch (error) {
      setError(error.message);
    }
  }

  const handleCheckChange = (event) => {
    setIsChecked(event.target.checked);
  };

  console.log(isChecked, "state");

  return (
    <>
      <form
        onSubmit={isChecked ? handleAdminSubmit : handleUserSubmit}
        className="flex flex-col gap-1"
      >
        <div className="mb-4">
          <label className="block text-sm mb-1 text-white" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-3 py-2  border border-gray-700 rounded"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-1 text-white" htmlFor="password">
            Password
          </label>
          <input
            className="w-full px-3 py-2  border border-gray-700 rounded"
            type="password"
            id="password"
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center gap-1">
          <input
            type="checkbox"
            id="checkbox-id"
            name="checkbox-name"
            onChange={handleCheckChange}
            checked={isChecked}
          />
          <label className=" text-xs mb-1 text-white">admin</label>
        </div>
        <button className="w-full py-2 bg-blue-500 hover:bg-blue-600 rounded uppercase text-white">
          Login
        </button>
      </form>
      <div className="text-white">{error}</div>
    </>
  );
}

export default LoginForm;
