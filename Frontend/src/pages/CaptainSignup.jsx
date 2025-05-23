import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CaptainDataContext } from '../contexts/CaptainContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [vehicle, setVehicle] = useState({
    vehicleType: "",
    color: "",
    plate: "",
    capacity: ""
  });
  const [fullName, setFullName] = useState({ firstname: "", lastname: "" });
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {captain, setCaptain} = useContext(CaptainDataContext); 

  const submitHandler = async (e) => {
    e.preventDefault();

    const captainData={
      fullname: {
        firstname: fullName.firstname,
        lastname: fullName.lastname,
      },
      email,
      password,
      vehicle: vehicle
    };


    setCaptain(captainData);

    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/captains/register`, captainData);
   
   
    if (response.status === 201) {
      const data=response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate('/captain-home');
    } else {

      console.error("Registration failed", response.data);
    }

    setFullName({ firstname: "", lastname: "" });
    setEmail("");
    setPassword("");
    setVehicle({
      vehicleType: "",
      color: "",
      plate: "",
      capacity: ""
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-slate-100 to-slate-300 px-4 font-sans">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10">
        <form onSubmit={submitHandler}>
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img
              className="w-28"
              src="https://imgs.search.brave.com/mgXonTfaPK29khvaJFldwSpqli3jCxLcTnMecBQoe3c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWRzLnR1cmJvbG9n/by5jb20vdXBsb2Fk/cy9kZXNpZ24vcHJl/dmlld19pbWFnZS82/ODQ2NjA2Mi9wcmV2/aWV3X2ltYWdlMjAy/NDExMzAtMS1zMDNh/bTMucG5n"
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
              type='text'
              value={fullName.firstname}
              onChange={(e) =>
                setFullName({ ...fullName, firstname: e.target.value })
              }
              placeholder="First Name"
                autoComplete="First Name"
              className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
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
              autoComplete="current-password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

      
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Vehicle Details
            </label>
            
            
            <div className="mb-4">
              <select
                required
                value={vehicle.vehicleType}
                onChange={(e) => setVehicle({ ...vehicle, vehicleType: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option value="">Select Vehicle</option>
                <option value="car">Car</option>
                <option value="bike">Bike</option>
                <option value="auto">Auto</option>
              </select>
            </div>

            
            <div className="flex gap-3 mb-4">
              <input
                required
                type="text"
                value={vehicle.color}
                onChange={(e) => setVehicle({ ...vehicle, color: e.target.value })}
                placeholder="Vehicle Color"
                className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                required
                type="text"
                minLength={4}
                value={vehicle.plate}
                onChange={(e) => setVehicle({ ...vehicle, plate: e.target.value })}
                placeholder="Number Plate"
                className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Vehicle Capacity */}
            <div>
              <input
                required
                type="number"
                value={vehicle.capacity}
                onChange={(e) => setVehicle({ ...vehicle, capacity: e.target.value })}
                placeholder="Seating Capacity"
                min="1"
                max="8"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
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
              to="/captain-login"
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
          to="/signup"
          className="block w-full text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition duration-300"
        >
          Register as a User
        </Link>
      </div>
    </div>
  );
};

export default CaptainSignup;
