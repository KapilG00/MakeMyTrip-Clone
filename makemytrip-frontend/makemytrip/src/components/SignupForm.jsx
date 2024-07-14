import { useState } from "react";

const url = "https://make-my-trip-api-three.vercel.app";
function SignupForm() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await fetch(url + "/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      const { success, message } = data;
      if (success === false) {
        setError(message);
        return;
      }
      setError(message);
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
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
          <label className="block text-sm mb-1 text-white" htmlFor="username">
            Username
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-700 rounded"
            type="text"
            id="username"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-1 text-white" htmlFor="contact">
            Contact
          </label>
          <input
            className="w-full px-3 py-2  border border-gray-700 rounded"
            type="text"
            id="contact"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-1 text-white" htmlFor="password">
            Password
          </label>
          <input
            className="w-full px-3 py-2  border-gray-700 rounded"
            type="password"
            id="password"
            onChange={handleChange}
          />
        </div>
        <button className="w-full py-2 bg-blue-500 hover:bg-blue-600 rounded uppercase text-white">
          Signup
        </button>
      </form>
      <div className="text-white">{error}</div>
    </>
  );
}

export default SignupForm;
