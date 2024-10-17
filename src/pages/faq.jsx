import { useState } from "react";
import Footer from "../components/footer";
import Industries from "../components/industries";

export default function FAQs(){
    const [q1,setQ1] = useState(false);
    const [q2,setQ2] = useState(false);
    const [q3,setQ3] = useState(false);
    const [q4,setQ4] = useState(false);
    const [q5,setQ5] = useState(false);
    const [q6,setQ6] = useState(false);
    const [q7,setQ7] = useState(false);
    return (
        <div className="">
            <img 
            className="w-[100%] h-[430px]"
            src="https://airpix.in/assets/images/surveying_mapping/banner-1.jpg" />
            

            <div className="flex justify-center mt-10 text-3xl font-semibold">
                <h1>FAQ</h1>
            </div>

            <div className="bg-slate-200 mt-5"
          
            >
                <div
                  onClick={()=>{
                    if(q1==false) setQ1(true);
                    else setQ1(false)
                }}
                className="p-4 hover:bg-slate-400 hover:px-10  cursor-pointer" style={{transitionDuration:'0.4s'}}>
                    <span>Why drone survey?</span>
                    
                    <div style={{display:`${q1==true? "block":"none"}`}} className="mt-5 text-gray-700">
                    <div>
                    Drone Surveys allow you to collect detailed and accurate information from areas that are inaccessible to you. High-resolution orthomosaics & detailed Three Dimensional (3D) representations are provided by drones. Drone Surveys add vital essential data to facilitate well-informed decision-making during the preliminary stages of construction site mapping, surveying, or inspection of infrastructure.

                    </div>
                    <br />
                   <div>
                   It ensures that users sustain control and avoid failure to secure maximum goodwill of their assets. Wind Turbine Blades, highways, and transmission lines are frequently inspected through drone technology. When compared to traditional ‘at-height’ working, it decreases the major risk for the workers during an inspection.
                   </div>
                    </div>
                </div>
                <div 
                onClick={()=>{
                    if(q2==false) setQ2(true);
                    else setQ2(false)
                }}
                className="p-4 hover:bg-slate-400 hover:px-10 cursor-pointer" style={{transitionDuration:'0.4s'}}>
                    <span>How accurate Drone Survey results are?</span>

                    <div style={{display:`${q2==true? "block":"none"}`}} className="mt-5 text-gray-700">
                        <div>Drone surveys are quicker, more accurate, and also less cost-expensive approach to the study. Drones include high-resolution cameras and sensors that provides interactive three Dimensional (3D) representations of the earth surface</div>
                        <br />
                        <div>Drone Surveys provide vital information that empowers competent arrangements from building site mapping, surveying, and inspection to infrastructure design and maintenance. Drone surveys offer a consistent approach to transmission tower surveying and powerline surveying. They dramatically reduce risk and maximize safety results by eliminating regular 'at-height' function.</div>
                    </div>
                </div>
                <div
                onClick={()=>{
                    if(q3==false) setQ3(true);
                    else setQ3(false)
                }}
                className="p-4 hover:bg-slate-400 hover:px-10 cursor-pointer" style={{transitionDuration:'0.4s'}}>
                    <span>Which Drone technology do we use?</span>

                    <div style={{display:`${q3==true? "block":"none"}`}} className="mt-5 text-gray-700">
                        <div>
                        Since drones have distinct uses, they have become an integral part of numerous private and governmental organizations. We have made our position in a number of industries through fast, reliable and secure deliveries. Catering to Government projects and mapping agricultural land surveys, our technology can do it all. Using advanced survey drones, artificial intelligence, and a variety of advanced sensors such as thermal, RGB, Lidar, etc. we have broaden our drone technology to several.
                        </div>
                    </div>
                </div>
                <div 
                onClick={()=>{
                    if(q4==false) setQ4(true);
                    else setQ4(false)
                }}
                className="p-4 hover:bg-slate-400  hover:px-10 cursor-pointer" style={{transitionDuration:'0.4s'}}>
                    <span>What does "Drone photography" mean?</span>

                    <div style={{display:`${q4==true? "block":"none"}`}} className="mt-5 text-gray-700">
                        <div>
                        Drone photography is a technique that involves photographing/mapping the surface of the Earth. They are photographed by cameras mounted on the Drone. Aerial photography is a widespread technique used by advertising agencies. Aerial photography use film variations, focal lengths, overlaps, and other features to create many types of images at different heights.
                        </div>
                    </div>
                </div>
                <div 
                onClick={()=>{
                    if(q5==false) setQ5(true);
                    else setQ5(false)
                }}
                className="p-4 hover:bg-slate-400 hover:px-10 cursor-pointer" style={{transitionDuration:'0.4s'}}>
                    <span>What weather is suitable for flying Drones?</span>

                <div style={{display:`${q5==true? "block":"none"}`}} className="mt-5 text-gray-700">
                        <div>
                        Drones can easily capture high-quality photographs and videos at varying heights and in different climates. Most flying drones can operate in winds of up to 22 MPH. Few drones can chart the drizzle, the fog, and even the snow. Weather may make or break the quality of the aerial photograph taken. The climate in India is rarely a hindrance to our ventures. Drones can fly even in the cold; however, flying time also decreases. The motors supplied to most drones will work in light rain as long as the flight controller does not come into contact with the rain.
                        </div>
                    </div>
                </div>
                <div 
                onClick={()=>{
                    if(q6==false) setQ6(true);
                    else setQ6(false)
                }}
                className="p-4 hover:bg-slate-400 hover:px-10 cursor-pointer" style={{transitionDuration:'0.4s'}}>
                    <span>What type of data do we capture?</span>

                    <div style={{display:`${q6==true? "block":"none"}`}} className="mt-5 text-gray-700">
                        <div>
                        We provide quick, reliable and accurate drone data for various kinds of industry. Our company specializes in the capture of data from drone surveying/mapping, aerial inspection and analysis, creative atmospheric data and UAV data processing. Drone data collected through our materials can be reproduced in various forms such as orthomosaic maps, 3D Point Cloud, DEM, DTM, DSM, Contour maps etc.
                        </div>
                    </div>
                </div>
                <div 
                onClick={()=>{
                    if(q7==false) setQ7(true);
                    else setQ7(false)
                }}
                className="p-4 hover:bg-slate-400 hover:px-10 cursor-pointer" style={{transitionDuration:'0.4s'}}>
                    <span>What is Aerial LiDAR</span>

                    <div style={{display:`${q7==true? "block":"none"}`}} className="mt-5 text-gray-700">
                        <div>Aerial Lidar is an aerial mapping and Surveying technology that uses GPS-monitored aerial Drone/UAV equipped with on-board positional and sensors. After post-flight production processes, the acquired Lidar Map data is used to know the precise elevation and geospatial location of features on the earth’s surface.
                        </div>
                        <br />
                        <div>
                        Lidar data is an accurate and efficient tool for producing three-dimensional topographic aerial maps and highly accurate aerial surveys of both land and man-made components. We have developed a custom aerial Lidar Mapping and surveying production workflow which adheres to the specifications outlined in Base Specification Guidelines.</div>
                    </div>
                </div>
            </div>

            <Industries/>
            <Footer/>


        </div>
    )
}