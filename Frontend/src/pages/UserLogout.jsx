import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const UserLogout = () => {

    const navigate=useNavigate();

    useEffect(() => {
        const token=localStorage.getItem('token')
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/users/logout`,{
            headers:{
            Authorization:`Bearer ${token}`
        }
        }).then((response)=>{

        if(response.status===200){
            localStorage.removeItem('token');
            navigate('/login')
        }
        }).catch((error)=>{console.log("Log out failed")})
     
    }, [navigate])
    
    

  return (
    <div>UserLogout</div>
  )
}

export default UserLogout