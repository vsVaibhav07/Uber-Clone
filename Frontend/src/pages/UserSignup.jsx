import React, { useState,useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import {UserDataContext} from '../contexts/UserContexts';


const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState({ firstname: "", lastname: "" });
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const navigate= useNavigate();

  const {user,setUser}=useContext(UserDataContext);
  

  const submitHandler = async(e) => {
    e.preventDefault();
    const newUser={
      fullname: {
        firstname: fullName.firstname,
        lastname: fullName.lastname,
      },
      email,
      password,
    }

    const response=await axios.post(`${import.meta.env.VITE_BACKEND_URL}/users/register`,newUser);

    if(response.status===200){
      const data=response.data;
      setUser(data.user);
      localStorage.setItem('token',data.token);
      navigate('/home')
    }
   
   
    setFullName({ firstname: "", lastname: "" });
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-slate-100 to-slate-300 px-4 font-sans">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10">
        <form onSubmit={submitHandler}>
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img
              className="w-28"
              src="https://freelogopng.com/images/all_img/1659761100uber-logo-png.png"
              alt="Uber Logo"
            />
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Create Your Account
          </h2>

          {/* Name */}
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <div className="flex gap-3 mb-4">
            <input
              required
              type="text"
              value={fullName.firstname}
              onChange={(e) =>
                setFullName({ ...fullName, firstname: e.target.value })
              }
              placeholder="First Name"
                autoComplete="First Name"
              className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              required
              type="text"
              value={fullName.lastname}
              onChange={(e) =>
                setFullName({ ...fullName, lastname: e.target.value })
              }
              placeholder="Last Name"
                autoComplete="lastname"
              className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
                autoComplete="Email Address"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-black text-white font-semibold py-2 rounded-lg hover:bg-gray-800 transition duration-300"
          >
            Register
          </button>

          {/* Already have account */}
          <p className="text-center text-sm text-gray-600 mt-5">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 hover:underline font-medium"
            >
              Login
            </Link>
          </p>
        </form>

        {/* Divider */}
        <div className="my-6 border-t border-gray-200"></div>

        {/* Captain Signup */}
        <Link
          to="/captain-signup"
          className="block w-full text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition duration-300"
        >
          Register as a Captain
        </Link>
      </div>
    </div>
  );
};

export default UserSignup;
