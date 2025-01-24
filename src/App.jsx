import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './index.css'
import { BrowserRouter, Router , Routes , Route } from 'react-router-dom' 
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
      <div className="flex flex-row">
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

export function HeroSection({children})
{
    return(
        <div className=" w-[100%] flex justify-center lg:justify-items-start lg:px-[30px]">
        {children}
        </div>
    )
}

function TopNavBar()
{
  const [search, setSearch] = useState("")

  return(
    <div className='h-[100px] flex flex-row justify-between'>


        <div className='py-[45px] px-[30px] max-w-[280px]'>
          <button className=' lg:hidden'></button>
          <div className='font-semibold'>
            Logo and Name
          </div>
          <img></img>
        </div>

        <div className='max-w-[600px] py-[35px] flex-flex-row '>
          <button className='border-[2px] py-[6px] mt-[px] mr-[5px] rounded-[5px] border-white transition-colors duration-200 hover:border-black '><img className='w-[20px] h-auto  mx-[10px]' src = 'src/images/NavBarIcons/searchIcon.png'/></button>
          <input className='bg-gray-300 py-[6px] w-[400px]  rounded-[4px] px-[8px] ' type='text' value={search} onChange={e=>setSearch(e.target.value)} placeholder='Search..'>
            
          </input>
        </div>

        <div className=' '>
        <button className='pr-[35px] py-[20px] border-[2px] rounded-[6px] border-white hover:border-black' onClick={()=>{nav('/users')}}>
          <img className='w-[60px] h-auto' src='src/images/NavbarIcons/AccountIcon.png' ></img>
        </button>
        </div>


    </div>
  )
}

function LeftNavBar()
{
  const nav = useNavigate();
  const location = useLocation();
  if(location.pathname === '/' || location.pathname === '/signin' || location.pathname === '/changePassword')
    return null


  function NavDiv({tonav,source,name})
  {
    return(
      <button className=' flex flex-row w-[100%]  justify-start px-[15px] font-semibold py-[10px] rounded-[6px] mr-[10px] transition-colors duration-200 hover:bg-white/40 ' onClick={()=>{nav(tonav)}}>
              <img className='w-[30px] py-[8px] h-auto' src = {source}></img>
              <div className='ml-[20px] pt-[8px] pb-[8px] text-left'>
                {name}
              </div>
    </button>
    )
    

  }

  return(
    <div className='hidden lg:block lg:max-w-[450px] lg:w-[350px] lg:h-[100vh]'>
      <div className='h-[100%] w-[100%] flex flex-col justify-center'>

        

        <div className='py-[20px] bg-gray-300 w-[100%] h-[100%] '>
          <NavDiv tonav='/users' source='src/images/NavBarIcons/usersIcon.png' name='Users'/>
          <NavDiv tonav='/Dashboard' source='src/images/NavBarIcons/DashboardIcon.png' name='Dashboard'/>
          <NavDiv tonav='/Analytics' source='src/images/NavBarIcons/AnalyticsIcon.png' name='Analytics'/>
          <NavDiv tonav='/Reports' source='src/images/NavBarIcons/ReportsIcon.png' name='Reports'/>
          <NavDiv tonav='/Alerts' source='src/images/NavBarIcons/AlertsIcon.png' name='Alerts'/>
          <NavDiv tonav='/Home' source='src/images/NavBarIcons/HomeIcon.png' name='Home'/>
        </div>

      </div>

    </div>
  )
}

export default App
