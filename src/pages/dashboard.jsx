import React from "react"
import { motion } from "motion/react"
import HeroSection from "../layouts/heroSection"

const TopDiv = React.memo(()=>{
    return(
        <div className="w-[100%] flex flex-row justify-start max-h-[280px]">
            <div className="max-w-[820px] flex flex-row justify-start">
                <img  src="src/images/DashboardImage1.png"></img>
                <img  src="src/images/DashboardImage2.png"></img>
            </div>

            <div  className="min-w-[200px]">
                <motion.button whileTap={{scale:0.95}} className="text-white bg-green-800/70 rounded-[6px] px-[10px] py-[4px] transition-all duration-200 hover:bg-green-800/65">Add Widget</motion.button>
            </div>

        </div>
    )
})

const BottomDiv = React.memo(()=>{
    return(
        <div className="w-[100%] mt-[80px]">
                <table className="w-[100%]  text-center bg-gray-300 rounded-[8px] mb-[30px]">
                    <thead className="">
                        <tr>
                            {/* <th className="border-x border-l-white rounded-[8px] border-gray-600 py-[8px]">Alert No </th> */}
                            <th className="border-x border-l-white rounded-[8px] border-gray-600 py-[8px]">Device Name</th>
                            <th className="border-x border-gray-600 py-[8px]">Device Tag</th>
                            {/* <th className="border-x border-gray-600 py-[8px]">Contact information</th> */}
                            <th className="border-x  border-l-white border-gray-600 py-[8px]">Status</th>
                            <th className="border-x  border-r-white border-gray-600 py-[8px]">Remove</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {/* {alerts.map((alert,index)=>{
                            return(
                                <tr className="transition-colors duration-200 hover:bg-gray-300/60">
                                    <td className="border-gray-600  border-l-white py-[4px] border" >{alert.alertCount}</td>
                                    <td className="border-gray-600 py-[4px] border" >{alert.deviceName}</td>
                                    <td className="border-gray-600 py-[4px] border" >{alert.deviceTag}</td>
                                    <td className="border-gray-600 py-[4px] border" >NIL</td>
                                    <td className="border-gray-600 py-[4px] border" >{(alert.status)? "Active":"Deactivated"}</td>
                                    <td className="border-gray-600  border-r    -white py-[4px] border" ><button className="bg-red-950/70 text-white rounded-[4px] font-normal px-[5px] py-[3px] hover:bg-red-950/60" onClick={()=>{deleteEntry(alert.alertCount)}} >Delete</button></td>
                                </tr>
                                )
                            })} */}
                        </tbody>
                    </table>
                </div>
    )
})

export default function Dashboard()
{
    return( 
        <HeroSection>
            <div className="w-[100%] flex flex-col justify-items-start pt-[30px]">
                <TopDiv/>
                <BottomDiv/>
            </div>
        </HeroSection>
    )
}