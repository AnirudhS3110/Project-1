import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import {motion} from "motion/react"

export default function TopNavBar()
{
  const [search, setSearch] = useState("")
  const location = useLocation();
  const nav = useNavigate();
  if(location.pathname==='/' || location.pathname==='/signin' || location.pathname==='/changePassword')
    return null
  else if(location.pathname==='/analytics' || location.pathname==='/dashboard' || location.pathname==='/reports' ||location.pathname==='/alerts' ||location.pathname==='/home' ||location.pathname==='/users')
  return(
    <div className='h-[100px] flex flex-row justify-start'>

        <div className="flex flex-row justify-start min-w-[600px]">
            <div className='py-[45px] pl-[30px] w-[280px] max-w-[280px]'>
            <button className=' lg:hidden'></button>
            <div className='font-semibold'>
                Logo and Name
            </div>
            <img></img>
            </div>

            <Heder/>
        </div>

        <div className="flex flex-row justify-around w-[100%]">
            <SearchBar val={search} setVal={setSearch} />
            
                <motion.button whileTap={{scale:0.95}} className='px-auto  py-auto border-[2px] mt-[6px] w-[80px] h-[80px] rounded-full transition-all duration-200   border-white hover:border-gray-300 hover:bg-gray-100' onClick={()=>{nav('/users')}}>
                    <img className='w-[70px] h-auto object-cover ' src='src/images/NavbarIcons/AccountIcon.png' ></img>
                </motion.button>
            
        </div>
    </div>
  )
  else
  return null
}

function Heder()
{
    const location = useLocation();
    const pathname = location.pathname;
    if(pathname === '/home')
        return <GetHeader src="src/images/NavBarIcons/HomeIcon.png" pageName="HOME"/> 
    else if( pathname === '/alerts')
        return <GetHeader src="src/images/NavBarIcons/AlertsIcon.png" pageName="ALERTS"/>
    else if( pathname === '/analytics')
        return <GetHeader src="src/images/NavBarIcons/AnalyticsIcon.png" pageName="ANALYTICS"/>
    else if( pathname === '/dashboard')
        return <GetHeader src="src/images/NavBarIcons/DashboardIcon.png" pageName="DASHBOARD"/>
    else if( pathname === '/users')
        return <GetHeader src="src/images/NavBarIcons/UsersIcon.png" pageName="USERS"/>
    else if( pathname === '/reports')
        return <GetHeader src="src/images/NavBarIcons/AnalyticsIcon.png" pageName="REPORTS"/>
}

function GetHeader({src,pageName})
{
    return(
        <div className="w-[100%] flex flex-row justify-start mt-[40px] mb-[20px] px-[25px] lg:px-0 lg:pt-0 lg:max-w-[200px] lg:my-auto ">
            <img className="mr-[20px]" src={src}></img>
            <h1 className="text-[32px] font-bold " >{pageName}</h1>

        </div>
    )

}

function SearchBar({search,setSearch})
{
    return(
        <div className='max-w-[600px] h-[100%] flex-flex-row mt-[29px]   '>
          <button className='border-[2px] py-[3px] my-auto  mr-[5px] rounded-[5px] border-white transition-colors duration-200 hover:border-gray-300 '>
            <img className='w-[20px] h-[20px] mx-[5px] ' src = 'src/images/NavBarIcons/searchIcon.png'/>
         </button>
          <input className='bg-gray-300 py-[6px]     w-[400px]  rounded-[4px] px-[8px] focus:outline-gray-300 ' type='text' value={search} onChange={e=>setSearch(e.target.value)} placeholder='Search..'>
          </input>
        </div>
    )
}