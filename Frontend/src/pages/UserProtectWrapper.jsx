import React, { useEffect ,useState,useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { UserDataContext } from '../contexts/UserContexts';



const UserProtectWrapper = ({children}) => {


  const token=localStorage.getItem('token');
  const navigate=useNavigate();
  const [loading, setLoading] =useState(true);
const {user, setUser} = useContext(UserDataContext);

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }

    axios.get(`${import.meta.env.VITE_BACKEND_URL}/users/profile`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      if (response.status === 200) {
        setLoading(false);
        setUser(response.data.user);
      } else {
        console.error("Failed to fetch user profile", response.data);
        navigate('/login');
      }
    }).catch((error) => {
      console.error("Error fetching user profile", error);
      localStorage.removeItem('token');
      navigate('/login');
    });
  }, [navigate, token, setUser]);

 


  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-10 space-y-6">
          <h1 className="text-center text-2xl font-bold">Loading...</h1>
        </div>
      </div>
    );
  }

  return (
    <>
    {children}
    </>
  )
}

export default UserProtectWrapper