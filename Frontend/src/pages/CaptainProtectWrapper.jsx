import React, { useEffect ,useState,useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { CaptainDataContext } from '../contexts/CaptainContext';



const CaptainProtectWrapper = ({children}) => {


  const token=localStorage.getItem('token');
  const navigate=useNavigate();
  const [loading, setLoading] =useState(true);
const {captain,setCaptain} = useContext(CaptainDataContext);

  useEffect(() => {
    if (!token) {
      navigate('/captain-login');
    }
  }, [navigate]);

  axios.get(`${import.meta.env.VITE_BACKEND_URL}/captains/profile`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then((response) => {
    if (response.status === 200) {
      setLoading(false);
      setCaptain(response.data.captain);
    } else {
      console.error("Failed to fetch captain profile", response.data);
      navigate('/captain-login');
    }
  }).catch((error) => {
    console.error("Error fetching user profile", error);
    localStorage.removeItem('token');
    navigate('/captain-login');
  });


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

export default CaptainProtectWrapper