import React from 'react';
import { Link } from 'react-router-dom';
import { useState,useContext } from 'react';
import { UserDataContext } from '../contexts/UserContexts';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const UserLogin = () => {
const{user,setUser}=useContext(UserDataContext);
const [email, setemail] = useState("");
const [password, setpassword] = useState("");
const [userData, setuserData] = useState({});
const navigate=useNavigate();
const submitHandler=async(e)=>{
  e.preventDefault();
 
  
  const response=await axios.post(`${import.meta.env.VITE_BACKEND_URL}/users/login`,{
    email:email,
    password:password
  });
  if(response.status===200){
    const data=response.data;
    setUser(data.user);
    localStorage.setItem('token',data.token);
    navigate('/home')
  }
  else{
    alert("Invalid credentials")
  }

  setemail("");
  setpassword("");
}

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-10 space-y-6">
        <form action="" onSubmit={(e)=>submitHandler(e)}>
          <div className="flex justify-center pb-14">
            <img
              className="w-28"
              src="https://freelogopng.com/images/all_img/1659761100uber-logo-png.png"
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
              onChange={(e)=> setemail(e.target.value)}
                required
                type="email"
                placeholder="example@email.com"
                autoComplete="example.email.com"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
              value={password}
              onChange={(e)=> setpassword(e.target.value)}
                required
                type="password"
                placeholder="Enter your password"
                autoComplete="old-password"
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
              to="/signup"
              className="text-blue-600 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </form>

        <Link
          to="/captain-login"
          className="block w-full text-center bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-lg transition-all duration-300"
        >
          Sign in as a Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
