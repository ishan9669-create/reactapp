import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Worksyte(){

    const [isScrolled, setIsScrolled] = useState(false);

    // Effect to track scroll position
    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        setIsScrolled(scrollY > 50); // Change header style if scrolled more than 50px
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    function anchorscroll(id){
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the element
      }
    }

    return (
        <div>
               <div id="home" >

               <div className={`flex items-center  justify-evenly transition-all duration-300 p-3 fixed z-20  ${
        isScrolled
          ? 'bg-gray-900 text-white shadow-lg'
          : 'bg-transparent '
      } top-0 w-full bg-blue-950`}
               
               >


<div className="flex items-center">
<span
    className="font-[900] flex gap-1  w-[250px] rounded-full text-white"
    >
        <span className="text-blue-600 text-4xl translate-x-16 tracking-widest">AIRPLAN</span>
    </span>
    <span className="font-bold text-gray-500 text-4xl flex items-center  h-[60px] -translate-y-1 ">|</span>

    <span className="text-3xl text-yellow-500 font-bold ">work<span className="text-blue-700">syte</span></span>

</div>
<div className="flex gap-4 items-center">
    <a onClick={()=>{
                anchorscroll('home')
          }}  className="cursor-pointer">HOME</a>
    <a   onClick={()=>{
                anchorscroll('about')
          }}  className="cursor-pointer">ABOUT</a>
    <a   onClick={()=>{
                anchorscroll('industries')
          }}  className="cursor-pointer">INDUSTRIES</a>
    <Link className="px-3 bg-yellow-400 rounded-full hover:opacity-[0.5] py-1"
    to={'/register'}
    >LOGIN</Link>
</div>

</div>


         <Topbar/>

   </div>
       
      <div id="about">
      <div className="flex  h-[450px] justify-center items-center gap-10 animate-movefirst relative "
           
         
           >
            <div className="flex flex-col gap-5">
                 <h1 className="text-4xl font-semibold -translate-x-6">Effortlessly Tag and Track</h1>
  
                 <div className="flex flex-col gap-3 text-xl font-bold text-gray-500">
                  <span>-Choose Text or Box label to tag object</span>
                  <span>-Assign attributes based on object and feature type</span>
                  <span>-Attach description</span>
                  <span>-Object is tracked as the video plays</span>
                 </div>
            </div>
  
  
            <div className="w-[40%]  h-[300px] ">
                  <img src="https://airpix.in/worksyte/img/Belmondo.jpg" className="w-[100%] h-[100%]" />
            </div>
  
           </div>
  
  
  
           <div className="flex  h-[450px] justify-center items-center gap-14 animate-movefirst mt-10 bg-slate-100"
             
           
           >
  
         <div className="w-[40%]  h-[300px] ">
                  <img src="https://airpix.in/worksyte/img/share.jpg" className="w-[100%] h-[100%]" />
            </div>
  
  
            <div className="flex flex-col gap-5">
                 <h1 className="text-4xl font-semibold -translate-x-6">Share and Collaborate faster</h1>
  
                 <div className="flex flex-col gap-3 text-xl font-bold text-gray-500">
                  <span>-Share workspace with team members or customers</span>
                  <span>-Assign access roles, edit efficiently as a team</span>
                  <span>-Effectively communicate ideas, decisions and tasks over the shared workspace</span>
                  <span>-Conveniently deliver information-rich video projects</span>
                 </div>
            </div>
  
  
              
            
  
           </div>
  
  
           <div className="flex  h-[450px] justify-center items-center gap-10 animate-movefirst "
             
           
           >
            <div className="flex flex-col gap-5  p-4 max-w-[500px]">
                 <h1 className="text-4xl font-semibold -translate-x-6">Locate stuff interactively</h1>
  
                 <div className="flex flex-col gap-3 text-xl font-bold text-gray-500">
                  <span>-Search by keyword or browse through list of tagged items</span>
                  <span>-Click an item and jump to its corresponding video section</span>
                  <span>-Navigate interactively through the video by clicking items</span>
                 
                 </div>
            </div>
  
  
            <div className="w-[40%]  h-[300px] ">
                  <img src="https://airpix.in/worksyte/img/navigate2.jpg" className="w-[100%] h-[100%]" />
            </div>
  
           </div>
  
  
      </div>

                 

        {/* lower industries part */}

        <div id="industries" className="bg-slate-100 flex flex-col gap-10">
          <div className="flex justify-center">
            <h1 className="mt-10 text-3xl text-center w-[750px]">Worksyte Video analytics helps increase efficiency and productivity across multiple sectors
            
            </h1>
          </div>
        

          <div className="flex mx-48 mt-10 gap-20 justify-center">

<div className="flex flex-col">
  <div className="flex items-center gap-10">
    <img src="https://airpix.in/worksyte/img/construct.png"  
    
    />
    <h1 className="text-4xl font-semibold">Construction</h1>
  </div>

  <p className="text-2xl translate-x-20 text-slate-500 w-[450px]">Share progress of your construction site with all stake holders. Leave no room for guessing by adding detailed insights for various elements in the video.</p>

</div>

<div className="flex flex-col">
  <div className="flex items-center gap-10">
    <img src="https://airpix.in/worksyte/img/industrial.png"  />
    <h1  className="text-4xl font-semibold">	
    Industrial Inspections</h1>
  </div>

  <p className="text-2xl translate-x-20 text-slate-500 w-[450px]">Save precious time while investigating inspection footage. The search and locate feature on our platform allows the user to click and navigate to objects.</p>

</div>

</div>


<div className="flex mx-48 gap-20 justify-center">

          <div className="flex flex-col">
            <div className="flex items-center gap-10">
              <img src="https://airpix.in/worksyte/img/real.png"  />
              <h1 className="text-4xl font-semibold">Real Estate</h1>
            </div>

            <p className="text-2xl translate-x-20 text-slate-500 w-[450px]">There is no better way of gaining trust of your buyers than showing them insightful videos of their project regularly and keeping them updated with their investments.</p>

          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-10">
              <img src="https://airpix.in/worksyte/img/insurance.png"  />
              <h1  className="text-4xl font-semibold">	
              	Insurance</h1>
            </div>

            <p className="text-2xl translate-x-20 text-slate-500 w-[450px]">Anazlyze videos of insured assets with annotations and descriptors of damages and claims. Increase accuracy and speed of claim settlement.</p>

          </div>

        </div>

        </div>

        <div  className="flex bg-blue-950 justify-center items-center h-[300px] flex-col mt-10">
          <h1 className="text-white text-4xl font-semibold -translate-y-10">Schedule a demo</h1>

          <button
          className="px-7 py-3 rounded-lg text-xl font-semibold hover:opacity-[0.5] transition-all duration-300 bg-yellow-500"
          >Demo</button>
        </div>


           <div className="flex p-5 bg-slate-100 justify-center items-center">
              <h1 className="text-blue-600 font-bold text-2xl flex items-center tracking-widest">AIRPLAN<span className="text-black text-sm font-normal tracking-normal ">&#169;All Rights Reserved</span></h1>
           </div>
     
        </div>
    )
}
export function Topbar(){
    return (
        <div className="flex justify-evenly">
 

             <div className="h-[900px] w-screen  relative">
                <img src="https://www.usatoday.com/gcdn/-mm-/7b781302449ed42e69a9387e2c12f49d89af3a35/c=0-184-1798-1200/local/-/media/2015/06/11/USATODAY/USATODAY/635696313186467996-LA01-VBL-3133-WEB.jpg?width=1798&height=1016&fit=crop&format=pjpg&auto=webp" className="w-screen h-[900px]"/>


             

            <h1 className="flex justify-center absolute bottom-[800px] left-[300px] font-bold top-[130px] text-4xl text-white">Video analytics for interactive Drone and Survey reports</h1>

            <p className=" absolute flex justify-center text-center w-[1100px] mx-[450px] top-[200px] -left-[230px]  bottom-[650px] text-3xl text-white">With worksyte our video analytics software, you can tag & track objects, insert data, collaborate, locate data interactively and share rich survey report.</p>


              <button className="text-xl px-9 py-5 hover:opacity-[0.5] rounded-lg bg-yellow-500 absolute bottom-[500px] left-[690px]">Schedule a Demo</button>
           


            <img src="https://airpix.in/worksyte/images/macbookx.png" className="absolute bottom-[10px] left-[400px]" />
             </div>
            
           
           
        </div>
    )
}