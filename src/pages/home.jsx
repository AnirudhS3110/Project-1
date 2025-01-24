import React from "react"
import { HeroSection } from "../App"

export default function Home()
{
    function Heder()
    {
        return(
            <div className="w-[100%] flex flex-row justify-start mb-[20px] ">
                <img className="mr-[20px]" src="src/images/NavBarIcons/HomeIcon.png"></img>
                <h1 className="text-[32px] font-bold " >HOME</h1>

            </div>
        )
    }

    function TopDiv()
    {
        <div className="w-[100%] ">

        </div>

    }
    
    function BottomDiv()
    {

    }

    return( 
    <HeroSection>
        <div>
            <Heder/>
            <TopDiv/>
            <BottomDiv/>

        </div>

    </HeroSection>)
}