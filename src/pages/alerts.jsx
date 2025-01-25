import React from "react"
import { useState, memo } from "react"
import HeroSection from "../layouts/heroSection"
import { motion } from "motion/react"
import alertss from "../stores/alerts.json"
export default function Alerts()
{
    const [deviceName, setDeviceName] = useState("")
    const [deviceTag, setDevicetag] = useState("")
    const [alertType, setAlertType] = useState("")
    const [date, setDate] = useState("")
    const [triggerTime, setTriggerTime] = useState("")
    const [repeatAlert, setRepeatAlert] = useState(0)
    const [email,setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState(0)
    const [alerts,setAlerts] = useState(alertss);
    const [alertCount,setAlertCount] = useState(0);
    const [error,setError] = useState("")

    function addAlert()
    {
        if(deviceName=='' || deviceTag==''|| alertType=='' || triggerTime=='' || date == '' )
        {
            setError("Enter all the fields");
            return;
        }
            
        setAlertCount((alertCount)=>{alertCount+1});
        const newAlert = {
            alertNo: alertCount+1,
            deviceName: deviceName,
            deviceTag: deviceTag,
            alertType:alertType,
            date:date,
            triggerTime:triggerTime,
            repeatAlert:repeatAlert,
            status:true,
        }
        setAlerts((alerts)=>[...alerts,newAlert])


    }

    function deleteEntry(alertNo)
    {
        setAlertCount(alerts.filter((alert)=>{
            return alert.alertNo!==alertNo
        }));

    }

    function Heder()
    {
        return(
            <div className="w-[100%] flex flex-row justify-start mt-[40px] mb-[20px] px-[25px] lg:px-0 lg:pt-0 ">
                <img className="mr-[20px]" src="src/images/NavBarIcons/AlertsIcon.png"></img>
                <h1 className="text-[32px] font-bold " >ALERTS</h1>

            </div>
        )

    }


    return(
        <HeroSection>
            <div>
                
                <div className="flex flex-col justify-items-center  lg:mb-[20px] px-[25px]">
                
                <div className="my-[20px] text-center font-semibold text-[28px] lg:my-[10px] md:text-left"><h3>Create New Alert</h3></div>
                    <div className="flex justify-items-center">
                        <form onSubmit={(e)=>{e.preventDefault(); addAlert();}} className="flex flex-col w-auto md:flex-row md:flex-wrap lg:flex-row lg:flex-wrap justify-items-center items-center">
                            <input className="bg-gray-300 focus:outline-gray-300  rounded-[6px] my-[15px] px-[10px] py-[8px] mx-[10px] w-[250px]  lg:w-[300px]" placeholder="Device name" type="text" value={deviceName} onChange={(e)=>{setDeviceName(e.target.value)}}/>
                            <input className="bg-gray-300 focus:outline-gray-300  rounded-[6px] my-[15px] px-[10px] py-[8px] mx-[10px] w-[250px] lg:w-[300px]" placeholder="Device tag" type="text" value={deviceTag} onChange={(e)=>{setDevicetag(e.target.value)}}/>
                            <input className="bg-gray-300 focus:outline-gray-300  rounded-[6px] my-[15px] px-[10px] py-[8px] mx-[10px] w-[250px] lg:w-[300px]" placeholder="Alert type" type="text" value={alertType} onChange={(e)=>{setAlertType(e.target.value)}}/>
                            <input className="bg-gray-300 focus:outline-gray-300  rounded-[6px] my-[15px] px-[10px] py-[8px] mx-[10px] w-[250px] lg:w-[300px]" placeholder="Date" type="text" value={date} onChange={(e)=>{setDate(e.target.value)}}/>
                            <input className="bg-gray-300 focus:outline-gray-300  rounded-[6px] my-[15px] px-[10px] py-[8px] mx-[10px] w-[250px] lg:w-[300px]" placeholder="Trigger time" type="text" value={triggerTime} onChange={(e)=>{setTriggerTime(e.target.value)}}/>
                            <input className="bg-gray-300 focus:outline-gray-300  rounded-[6px] my-[15px] px-[10px] py-[8px] mx-[10px] w-[250px] lg:w-[300px]" placeholder="Repeat alert" type="text" value={repeatAlert} onChange={(e)=>{setRepeatAlert(e.target.value)}}/>
                            <motion.button whileTap={{scale:0.95}} type="submit" className="text-white bg-green-800/70 w-[100%] py-[8px] my-[15px] rounded-[6px] transition-colors duration-200 hover:bg-green-800/50">Add Alert</motion.button>    
                        </form>
                    </div>
                    <div className="w-[]">
                        
                    </div>
                </div>


                <div className="flex flex-col justify-start px-[25px] mb-[20px] ">
                    <div className="font-semibold text-[28px] mb-[18px] "><h3>Contact Information</h3></div>
                    <input className="rounded-[6px] bg-gray-300 px-[10px] py-[4px] mb-[16px] " type="email" placeholder="edge@email.com" value={email} onChange={e=>setEmail(e.target.value)} />
                    <input className="rounded-[6px]  bg-gray-300 px-[10px] py-[4px] mb-[16px] " type="email" placeholder="Email or phone no..." />
                    <button className="bg-green-800/78 rounded-[6px] text-white "> Add</button>
                </div>


                <div className="w-[100%]">
                <table className="w-[100%]  text-center bg-gray-300 rounded-[8px] mb-[30px]">
                    <thead className="">
                        <tr>
                            <th className="border-x border-l-white rounded-[8px] border-gray-600 py-[8px]">Alert No </th>
                            <th className="border-x border-gray-600 py-[8px]">Device Name</th>
                            <th className="border-x border-gray-600 py-[8px]">Device Tag</th>
                            <th className="border-x border-gray-600 py-[8px]">Contact information</th>
                            <th className="border-x  border-l-white border-gray-600 py-[8px]">Status</th>
                            <th className="border-x  border-r-white border-gray-600 py-[8px]">Remove</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {alerts.map((alert,index)=>{
                            return(
                                <tr className="transition-colors duration-200 hover:bg-white/70">
                                    <td className="border-gray-600  border-l-white py-[4px] border" >{alert.alertNo}</td>
                                    <td className="border-gray-600 py-[4px] border" >{alert.deviceName}</td>
                                    <td className="border-gray-600 py-[4px] border" >{alert.deviceTag}</td>
                                    <td className="border-gray-600 py-[4px] border" >NIL</td>
                                    <td className="border-gray-600 py-[4px] border" >{(alert.status)? "Active":"Deactivated"}</td>
                                    <td className="border-gray-600  border-r-white py-[4px] border" ><button className="bg-red-950/70 text-white rounded-[4px] font-normal px-[5px] py-[3px] hover:bg-red-950/60" onClick={()=>{deleteEntry(alert.alertNo)}} >Delete</button></td>
                                </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </HeroSection>
    )
}