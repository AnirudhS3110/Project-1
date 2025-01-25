import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import HeroSection from './layouts/heroSection'
import './index.css'
import { BrowserRouter, Router , Routes , Route } from 'react-router-dom' 
import TopNavBar from './components/topNavBar'
import LeftNavBar from './components/leftNavBar'
import Signup from "./pages/signup"
import Signin from "./pages/signin"
import Changepassword from "./pages/changePassword"
import Home from "./pages/home"
import Dashboard from "./pages/dashboard"
import Analytics from "./pages/analytics"
import Alerts from "./pages/alerts"
import PageNotFound from "./pages/error404"

function App() {

  return (
    <BrowserRouter>
      <TopNavBar/>
      <div className="flex flex-row w-[100%]">
        <LeftNavBar/>
        <HeroSection>
          <Routes>

            <Route path="/" element={<Signup/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/changepassword" element={<Changepassword/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/analytics" element={<Analytics/>}/>
            <Route path="/alerts" element={<Alerts/>}/>
            <Route path="*" element={<PageNotFound/>}/>

        </Routes>
        </HeroSection>
      </div>
    </BrowserRouter>
  
  )
}






export default App
