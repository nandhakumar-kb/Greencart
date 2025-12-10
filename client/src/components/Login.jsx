import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const Login = () => {
  const { setShowUserLogin, setUser } = useAppContext();
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false); 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 

    setUser({
      name: mode === "register" ? form.name : "GreenCart",
      email: form.email,
    });

    setTimeout(() => { 
      setLoading(false);
      setShowUserLogin(false);
    }, 1000);
  };

  return (
    <div
      onClick={() => setShowUserLogin(false)}
      className="fixed inset-0 bg-gray-900/50 flex items-center justify-center z-50 transition-opacity duration-300"
      role="dialog"
      aria-modal="true"
    >
      <form
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
        className="bg-white p-8 py-12 rounded-lg shadow-xl w-80 sm:w-[352px] flex flex-col gap-4 border border-gray-200 transition-all duration-300"
      >
        <h2 className="text-2xl font-medium text-center">
          <span className="text-primary">User</span> {mode === "login" ? "Login" : "Sign Up"}
        </h2>

        {mode === "register" && (
          <div className="w-full">
            <label htmlFor="name" className="block mb-1">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full border border-primary rounded p-2 outline-primary"
              required
              autoComplete="name"
              aria-label="Your Name"
            />
          </div>
        )}

        <div className="w-full">
          <label htmlFor="email" className="block mb-1">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="example@gmail.com"
            className="w-full border border-primary rounded p-2 outline-primary"
            required
            autoComplete="email"
            aria-label="Your Email Address"
          />
        </div>

        <div className="w-full">
          <label htmlFor="password" className="block mb-1">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full border border-primary rounded p-2 outline-primary"
            required
            autoComplete={mode === "login" ? "current-password" : "new-password"}
            aria-label="Your Password"
          />
        </div>

        <p className="text-sm text-center">
          {mode === "login" ? "Create an account?" : "Already have an account?"}{" "}
          <button
            type="button"
            onClick={() => setMode(mode === "login" ? "register" : "login")}
            className="text-primary font-medium hover:underline"
          >
            Click here
          </button>
        </p>

        <button
          type="submit"
          className={`w-full bg-primary hover:bg-primary/90 transition text-white py-2 rounded-md font-medium ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
          disabled={loading} // Disable button during submission
        >
          {loading ? "Submitting..." : mode === "register" ? "Create Account" : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
