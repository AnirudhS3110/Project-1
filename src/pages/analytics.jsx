
import HeroSection from "../layouts/heroSection"
import React from "react"
import {motion} from "motion/react"

const TopDiv = React.memo(()=>{
    return(
        <div className="w-[100%] mb-[100px] flex flex-row justify-between">
            <div className="flex flex-row">
                <motion.div whileHover={{scale:1.1, transition:{duration:0.15}}} className="max-w-[165px] max-h-[70px] font-semibold text-[16px] bg-gray-300 rounded-[6px] px-[8px] py-[4px] mx-[15px]">
                    <p>Active devices</p>
                    <p>5</p>
                </motion.div>
                <motion.div whileHover={{scale:1.1, transition:{duration:0.15}}} className="max-w-[165px] max-h-[70px] font-semibold text-[16px] bg-gray-300 rounded-[6px] px-[8px] py-[4px] mx-[15px]">
                    <p>Deactivated devices</p>
                    <p>5</p>
                </motion.div>
                <motion.div whileHover={{scale:1.1, transition:{duration:0.15}}} className="max-w-[165px] max-h-[70px] font-semibold text-[16px] bg-gray-300 rounded-[6px] px-[8px] py-[4px] mx-[15px]">
                    <p>Some devices</p>
                    <p>5</p>
                </motion.div> 
            </div>

            <motion.div  className="min-w-[200px]">
                <motion.button whileTap={{scale:0.95}} className="text-white bg-green-800/70 rounded-[6px] px-[10px] py-[4px] transition-all duration-200 hover:bg-green-800/65">Add Widget</motion.button>
            </motion.div>
            

        </div>
    )

})

const BottomDiv = React.memo(()=>{
    return(
        <div className="w-[100%] flex flex-row  max-w-[910px]">
                <img className="max-h-[300px] w-auto" src="src/images/DashboardImage1.png"></img>
                <img className="max-h-[300px] w-auto" src="src/images/DashboardImage2.png"></img>
        </div>
    )

})


export default function Analytics()
{
    return(
        <HeroSection>
            <div className="w-[100%] flex flex-col justify-start pt-[30px]">
                <TopDiv/>
                <BottomDiv/>
            </div>
        </HeroSection>
    )

    
}
