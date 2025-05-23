import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../contexts/CaptainContext';
import axios from 'axios';

const CaptainLogin = () => {

const [email, setemail] = useState("");
const [password, setpassword] = useState("");
const {captain, setCaptain} = useContext(CaptainDataContext);
const navigate = useNavigate();

const submitHandler=async(e)=>{
  e.preventDefault();
  const captain={
    email:email,
    password:password
  };

  const response =await axios.post(`${import.meta.env.VITE_BACKEND_URL}/captains/login`, captain);
  
  if (response.status === 200) {
    const data=response.data;
    setCaptain(data.captain);
    localStorage.setItem("token", data.token);
    navigate('/captain-home');
  }
  else {
    console.error("Login failed", response.data);
  }

  setemail("");
  setpassword("");
}

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-10 space-y-6">
        <form action="" onSubmit={(e)=>submitHandler(e)}>
          <div className="flex justify-center pb-6">
            <img
              className="w-48"
              src="https://imgs.search.brave.com/mgXonTfaPK29khvaJFldwSpqli3jCxLcTnMecBQoe3c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWRzLnR1cmJvbG9n/by5jb20vdXBsb2Fk/cy9kZXNpZ24vcHJl/dmlld19pbWFnZS82/ODQ2NjA2Mi9wcmV2/aWV3X2ltYWdlMjAy/NDExMzAtMS1zMDNh/bTMucG5n"
              alt="Uber Logo"
            />
          </div>

        

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
              value={email}
              autoComplete='username'
              onChange={(e)=> setemail(e.target.value)}
                required
                type="email"
                placeholder="example@email.com"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
              value={password}
              autoComplete='current-password'
              onChange={(e)=> setpassword(e.target.value)}
                required
                type="password"
                placeholder="Enter your password"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black transition-all duration-300 text-white font-semibold hover:bg-gray-800 py-2 rounded-lg"
            >
              Login
            </button>
          </div>

          <p className="text-center text-sm text-gray-500 mt-4">
            Don't have an account?{' '}
            <Link
              to="/captain-signup"
              className="text-blue-600 hover:underline"
            >
              Register as a Captain
            </Link>
          </p>
        </form>

        <Link
          to="/login"
          className="block w-full text-center bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-lg transition-all duration-300"
        >
          Sign in as a user
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
