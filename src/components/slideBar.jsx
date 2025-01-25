import React from "react";
import { useState } from "react";

export default function SlideBar()
{
    const [images,setimages] = useState([{src:"src/images/camera.png",name:"Device A"},{src:"src/images/solarPanel.png",name:"Device B"},{src:"src/images/camera.png",name:"Device C"},{src:"src/images/solarPanel.png",name:"Device D"},{src:"src/images/camera.png",name:"Device E"},{src:"src/images/solarPanel.png",name:"Device F"}])

    function slideCard()
    {
        const updatedList = [...images];
        const last = updatedList.shift();
        updatedList.push(last);
        setimages(updatedList);
    }

    


    return(
        <div className="w-[100%]  min-h-[140px] px-[30px]  ">

                <div>
                    <h3 className="text-[20px] font-semibold mb-[20px]">Device Analytics</h3>
                </div>
                
                <div className="flex flex-row justify-start">
                    <div className="flex flex-row justify-start overflow-hidden lg:max-w-[800px] h-[100%] min-h-[140px]  lg:overflow-hidden">
                        {images.map((image,index)=>{
                            return(
                                <div key={index} className="flex-shrink-0 mx-[15px] border-[2px] border-white rounded-[5px] transition-all duration-200 hover:border-gray-100 ">
                                    <img className="w-[130px] h-[130px] border-[2px]  rounded-full border-white transition-all duration-200 hover:border-blue-400" src={image.src}/>
                                    <div className="text-center">{image.name}</div>
                                </div>
                            )
                        })}
                    </div>
                    <button onClick={slideCard} className="w-[40px] h-[40px] my-auto ml-[25px]">
                            <img src= "src/images/SlideBarScroll.png"/>
                    </button>

                </div>
            </div>
    )

}