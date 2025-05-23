import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import UserSignup from './pages/UserSignup'
import UserLogin from './pages/UserLogin'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import Home from './pages/Home'
import Start from './pages/Start'
import UserProtectWrapper from './pages/UserProtectWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'

const App = () => {
  return (
    
    <Routes>
      <Route path="/" element={<Start/>} />
      <Route path="/login" element={<UserLogin/>} />
      <Route path="/signup" element={<UserSignup/>} />
      <Route path="/captain-login" element={<CaptainLogin/>} />
      <Route path="/captain-signup" element={<CaptainSignup/>} />
      <Route path="/home" element={<UserProtectWrapper>  <Home/>   </UserProtectWrapper>} />
      <Route path="/captain-home" element={<CaptainProtectWrapper><CaptainHome /></CaptainProtectWrapper>} />
      <Route path="/users/logout" element={<UserProtectWrapper> <UserLogout/>  </UserProtectWrapper>}/>

      <Route path="/*" element={<h1>404 Not Found</h1>} />
    </Routes>
    
    
  )
}

export default App
