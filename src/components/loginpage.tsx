import { useState } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import login from "../../src/assets/login.avif";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const API_BASE_URL = "https://nestjs-backend-4n6a.onrender.com";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = isSignup
      ? `${API_BASE_URL}/auth/signup`
      : `${API_BASE_URL}/auth/login`;

    const userData = isSignup
      ? { username, email, password }
      : { email, password };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Success:", data);
        alert(isSignup ? "Signup Successful!" : "Login Successful!");
      } else {
        console.error("Error:", data);
        alert("Error: " + data.message);
      }
    } catch (error) {
      console.error("Network Error:", error);
      alert("Network Error! Try again.");
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg flex max-w-4xl w-full">
        {/* Left Section - Form */}
        <div className="w-1/2 p-10">
          <h2 className="text-3xl font-bold text-center mb-4">
            {isSignup ? "Sign Up" : "Log In"}
          </h2>
          <p className="text-center text-gray-500 mb-6">
            {isSignup
              ? "Create a new account"
              : "Welcome back! Please enter your details"}
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col">
            {/* Show Username Field in Signup Mode */}
            {isSignup && (
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            )}
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {!isSignup && (
              <div className="text-right text-red-700 text-sm mb-4 cursor-pointer">
                Forgot password?
              </div>
            )}

            <button
              type="submit"
              className="w-1/2 mx-auto bg-black text-white py-2 rounded-lg transition"
            >
              {isSignup ? "Sign Up" : "Log In"}
            </button>
          </form>

          <div className="text-center my-4 text-gray-500">Or Continue With</div>
          <div className="flex justify-center gap-4">
            <button className="flex items-center gap-2 border px-4 py-2 rounded-lg text-yellow-600 hover:bg-gray-100">
              <FaGoogle /> Google
            </button>
            <button className="flex items-center gap-2 border px-4 py-2 rounded-lg text-yellow-600 hover:bg-gray-100">
              <FaFacebook /> Facebook
            </button>
          </div>

          {/* Toggle Between Login and Signup */}
          <p className="text-center text-gray-500 mt-4">
            {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
            <span
              className="text-yellow-600 cursor-pointer"
              onClick={() => setIsSignup(!isSignup)}
            >
              {isSignup ? "Log in" : "Sign up"}
            </span>
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="w-1/2 relative hidden md:block">
          <img
            src={login}
            alt="Fitness model"
            className="w-full h-full object-cover rounded-r-2xl"
          />
        </div>
      </div>
    </div>
  );
};
export default Login;
