import React, { useEffect, useState } from "react";
import Industries from "../components/industries";
import Footer from "../components/footer";


// Define your images in an array

export const ImageSlider = () => {
    const images = [
        {
          url: "https://www.edinburghdronecompany.co.uk/wp-content/uploads/2021/02/P4RTK-Scene-Pic-3.jpg",
          text: "Drone Survey in India",
          additionaltext:'Perform fast and cost-effective drone survey and topographic land surveying'
        },
        {
          url: "https://www.flyability.com/hs-fs/hubfs/wind-turbine-inspection-flyability-2.jpg?width=1269&height=846&name=wind-turbine-inspection-flyability-2.jpg",
          text: "Wind turbine inspections and Monitoring",
          additionaltext:'Safe and fast inspection services and factual reporting of Wind Turbines'
        },
        {
          url: "https://kissflow.com/hubfs/best-project-management-software-1.jpg",
          text: "Project Monitoring Application",
          additionaltext:'Tag & track objects, insert data, locate data interactively and collaborate with teams for better project progress monitoring with drone data'
        },
        {
            url: "https://absolutesolar.com/wp-content/uploads/2021/02/solar-panel-inspection.jpeg",
            text: "Solar Panel Inspection",
            additionaltext:'Precautionary Measures Before Failure'
        },
        {
            url: "https://agfundernews.com/wp-content/uploads/2019/05/iStock-898449496-768x512.jpg",
            text: "Precision Agriculture",
            additionaltext:'Site Specific crop Management'
        },
      ];
      
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5000ms = 5 seconds
    return () => clearInterval(interval); // Clear interval when component unmounts
  }, []);

  // Function to handle the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to handle the previous image
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all  duration-500 ease-in-out "
        style={{ backgroundImage: `url(${images[currentIndex].url})` }}
      ></div>

      {/* Overlay to darken the background */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content and Text */}
      <div className="relative z-10 text-white text-center px-6 py-4">
        <h1 className="text-4xl font-bold mb-4">{images[currentIndex].text}</h1>
        <p className="text-lg">{images[currentIndex].additionaltext}</p>
      </div>

      {/* Buttons */}
      <div className="absolute left-4 z-10">
        <button
          onClick={prevImage}
          className="text-white bg-gray-700 hover:bg-gray-800 rounded-full p-3 focus:outline-none"
        >
          Prev
        </button>
      </div>
      <div className="absolute right-4 z-10">
        <button
          onClick={nextImage}
          className="text-white bg-gray-700 hover:bg-gray-800 rounded-full p-3 focus:outline-none"
        >
          Next
        </button>
      </div>
    </div>
  );
};



export function Card({Heading,data,image,jumpto}){
    return (
        <div 
         className="h-[300px] w-[350px] rounded-t-lg hover:shadow-2xl transition-all" style={{transitionDuration:'0.4s'}}>
           <img src={image} className="rounded-t-lg h-[200px] w-full"  />

           <div className="p-5 bg-white rounded-b-lg shadow-md">

            <h1 className="text-2xl text-blue-700 w-[330px] ">{Heading}</h1>

            <p>
            {data}
            </p>
            <div className="flex justify-center mt-4">
            <button 
            onClick={()=>{
              window.location.href = jumpto
            }}
            className="px-3 bg-blue-950 text-white py-1 rounded-md hover:bg-blue-600">Know More</button>
            </div>
           
           </div>
        </div>
    )
}


const testimonials = [
  {
    image:'https://upload.wikimedia.org/wikipedia/commons/e/e3/NDTV_logo_v2.png?20201121045520'
  },
  {
    image:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Apple_gray_logo.png/900px-Apple_gray_logo.png?20121106103121'
  },
  {
   image:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/408px-Google_2015_logo.svg.png?20160213081640'
  },
  {
    image:'https://seeklogo.com/images/C/chatgpt-logo-02AFA704B5-seeklogo.com.png'
  },
  {
    image:'https://seeklogo.com/images/W/windows-10-icon-logo-5BC5C69712-seeklogo.com.png'
  }
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change the testimonial every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5000ms = 5 seconds
    return () => clearInterval(interval); // Clear interval when component unmounts
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full p-6 ">
      <div className="relative w-full max-w-xl">
        {/* Testimonial Cards */}
        <div className="overflow-hidden">
          <div
            className="testimonial-wrapper flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full p-6 bg-white rounded-lg shadow-md flex justify-center"
              >
                <img src={testimonial.image}  className="h-[200px]"/>
                {/* <p className="text-lg italic text-gray-700">"{testimonial.feedback}"</p> */}
                {/* <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dots for navigation */}
      <div className="flex mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};



export default function Home(){
    return( 
        <div className="relative w-full h-[400px] bg-slate-400">
            
            {/* <img 
            className="w-[100%] h-[430px]"
            src="https://crucialservices.net/wp-content/uploads/2022/09/sunny-evening-view-from-drone-towards-breiddon-hill.jpg" />
            <span className="absolute top-[210px] left-[550px] font-semibold text-white text-5xl">Drone survey in India</span> */}
            <ImageSlider/>
            
  <div className="flex justify-center text-3xl font-semibold mt-10" >
    <h1>About Us</h1>
  </div>
        <div className=" text-gray-600 mt-24 mx-48">
            <p>
            AIRPIX is a team of engineers, drone pilots, GIS experts, and software developers that has delivered numerous drone solutions in India. We provide complete end to end solutions for our clients from drone data acquisition, drone data processing, analysis, and development or integration of web and mobile applications. With access to a fleet of drones and a network of drone pilots across India, we can mobilize teams and deliver projects in a short period. Our systems include both fixed-wing and multi-rotor UAVs carrying payloads such as high-resolution cameras, thermal cameras, NIR sensors, high zoom cameras, and multi-spectral sensors. Our drone services include drone survey and mapping, photogrammetry data processing, 3D model generation, drone inspection, GIS, and automated report generation. Our web-based drone data management platform helps you to host, view, share and collaborate over drone data such as orthophoto, contours, DEM, and drone videos thus helping companies and government bodies in infrastructure planning, project progress monitoring and critical asset management. We are one of the prime drone companies in india.
    
            </p>    
         </div>

          <div className="mt-10 bg-gray-200 h-[1050px]">
            <h1 className="flex justify-center text-2xl font-semibold">Our Services(Contour Survey)</h1>

            <div className="flex gap-5 mt-7 mx-48 justify-evenly">
                <Card 
                jumpto={'/'}
                Heading={"Surveying And Mapping"} data={'Drone surveyor using fixed-wing and multi-rotor drones to generate high resolution and accurate orthophoto, DTM, contour, NDVI for multiple industries and applications.'} image={"https://carrollengineering.com/wp-content/uploads/2019/06/Topographic_Map-618066732_size.jpg"}/>
                <Card Heading={"Inspection And Analysis"}
                data={'Drone inspection of critical assets such as wind turbines, solar panels, transmission towers & transmission lines, chimneys and flare stacks using high resolution RGB and themal cameras.'}
                image={'https://www.tekwellservices.com/wp-content/uploads/2021/11/overhead-crane-inspection-knoxville-atlanta.jpg'}/>
                <Card Heading={'Data Processing'}
                data={'We can assist and support you in drone data processing to generate outputs such as orthophoto, Digital Terrain Model (DTM), contour, 3D model, point cloud processing and GIS.'}
               image={'https://cdn.imago-images.com/bild/st/0708701529/m.jpg'} />
            </div>
            <div className=" flex mt-48 mx-48 justify-evenly">
                <Card 
                jumpto={'/aerialphoto'}
                Heading={'Aerial Photography'}
                data={'Professional aerial photography for your real estate, resort or any marketing promotion along with aerial 360 degree panorama, virtual tour and large hoarding size imagery .'} image={'https://www.photopilot.com/media/images/San_Diego_3A5RGcc.0ec3cdf0.fill-900x600.jpg'}
                />
                <Card Heading={'Project Monitoring'}
                data={'Project progress monitoring of large infrastructure projects such as railways, roads, highways, industrial corporation and more using drone survey and drone videos with volumetric calculations and geotagged videos .'} image={'https://airpix.in/assets/images/case-studies/topographic_survey.jpg'}
                />
                <Card
                Heading={'Drone Video'} data={'Periodic drone videos for project progress monitoring, reporting and collaboration to reduce project costs and improve project timelines. Professional drone video services for marketing your infrastructure or real estate projects.'} image={'https://cdn.thewirecutter.com/wp-content/media/2023/11/dronesforphotovideo-2048px-DSC4828.jpg?auto=webp&quality=75&crop=1.91:1&width=1200'}
                />
             </div>


          </div>

          <div>
            <div className="flex justify-center font-semibold text-2xl
            mt-5
            ">
                <h1>Associations and Partners</h1>


            </div>

            <div className="flex items-center justify-between mx-40">
                <img src="https://cdnbbsr.s3waas.gov.in/s312b1e42dc0746f22cf361267de07073f/uploads/2023/07/2023071196.jpg" className="h-[200px] "  />
                <img src="https://cdn1.vc4a.com/media/2018/11/AIRBUS.jpg" className="h-[200px]"/>
                
                <img src="data:image/jpeg;base64,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" className="h-[100px]" />

                <img src="https://unicorn-nest.com/wp-content/uploads/2021/11/Axilor-Ventures.jpg"  className="h-[110px] w-[230px] translate-x-5"/>
                <img src="https://lobbymap.org/site//data/001/361/1361973.png" className="h-[170px]" />
            </div>
          </div>
         
         <div className=" bg-gray-200">
            <div className="flex justify-center font-semibold text-3xl">
                <h1 className="mt-5">Our clients</h1>
            </div>

            <div>
                <TestimonialsCarousel/>
            </div>
         </div>


        <Industries/>

        <Footer/>

        

       </div>
    
    )
}