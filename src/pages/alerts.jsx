import React from "react"
import { useState } from "react"
import { HeroSection } from "../App"
import { motion } from "motion/react"
import { time } from "motion"

export default function Alerts()
{
    const [deviceName, setDeviceNAme] = useState("")
    const [deviceTag, setDevicetag] = useState("")
    const [alertType, setAlertType] = useState("")
    const [date, setDate] = useState("")
    const [triggerTime, setTriggerTime] = useState("")
    const [repeatAlert, setRepeatAlert] = useState(0)
    const [email,setEmail] = useState(0)
    const [phoneNumber, setPhoneNumber] = useState(0)

    function Heder()
    {
        return(
            <div className="w-[100%] flex flex-row justify-start mt-[40px] mb-[20px] px-[25px] lg:px-0 lg:pt-0 ">
                <img className="mr-[20px]" src="src/images/NavBarIcons/AlertsIcon.png"></img>
                <h1 className="text-[32px] font-bold " >ALERTS</h1>

            </div>
        )

    }


    function TopDiv()
    {
        return(
            <div className="flex flex-col justify-items-center  lg:mb-[20px] px-[25px]">
                
                <div className="my-[20px] text-center font-semibold text-[28px] lg:my-[10px] md:text-left"><h3>Create New Alert</h3></div>
                <div className="flex justify-items-center">
                    <form className="flex flex-col w-auto md:flex-row md:flex-wrap lg:flex-row lg:flex-wrap justify-items-center items-center">
                        <input className="bg-gray-300  rounded-[6px] my-[15px] px-[10px] py-[8px] mx-[10px] w-[250px]  lg:w-[300px]" placeholder="Device name" type="text" value={deviceName} onChange={(e)=>{setDeviceNAme(e.target.value)}}/>
                        <input className="bg-gray-300  rounded-[6px] my-[15px] px-[10px] py-[8px] mx-[10px] w-[250px] lg:w-[300px]" placeholder="Device tag" type="text" value={deviceTag} onChange={(e)=>{setDevicetag(e.target.value)}}/>
                        <input className="bg-gray-300  rounded-[6px] my-[15px] px-[10px] py-[8px] mx-[10px] w-[250px] lg:w-[300px]" placeholder="Alert type" type="text" value={alertType} onChange={(e)=>{setAlertType(e.target.value)}}/>
                        <input className="bg-gray-300  rounded-[6px] my-[15px] px-[10px] py-[8px] mx-[10px] w-[250px] lg:w-[300px]" placeholder="Date" type="text" value={date} onChange={(e)=>{setDate(e.target.value)}}/>
                        <input className="bg-gray-300  rounded-[6px] my-[15px] px-[10px] py-[8px] mx-[10px] w-[250px] lg:w-[300px]" placeholder="Trigger time" type="text" value={triggerTime} onChange={(e)=>{setTriggerTime(e.target.value)}}/>
                        <input className="bg-gray-300  rounded-[6px] my-[15px] px-[10px] py-[8px] mx-[10px] w-[250px] lg:w-[300px]" placeholder="Repeat alert" type="text" value={repeatAlert} onChange={(e)=>{setRepeatAlert(e.target.value)}}/>
                        <motion.button whileTap={{scale:0.95}} className="text-white bg-green-800/70 w-[100%] py-[8px] my-[15px] rounded-[6px] transition-colors duration-200 hover:bg-green-800/50">Add Alert</motion.button>    

                    </form>
                </div>
                <div className="w-[]">
                    
                </div>
            </div>
        )

    }

    function MiddleDiv()
    {
        return(
            <div className="flex flex-col justify-start px-[25px] ">
                <div className="font-semibold text-[28px] mb-[18px] "><h3>Contact Information</h3></div>
                <input className="rounded-[6px] bg-gray-300 px-[10px] py-[4px] mb-[16px] " type="email" placeholder="edge@email.com" />
                <input className="rounded-[6px]  bg-gray-300 px-[10px] py-[4px] mb-[16px] " type="email" placeholder="Email or phone no..." />
                <button></button>

            </div>
        )
        
    }

    function BottomDiv()
    {
        
    }


    return(
        <HeroSection>
            <div>
                <Heder/>
                <TopDiv/>
                <MiddleDiv/>
                <BottomDiv/>
            </div>
        </HeroSection>
    )
}