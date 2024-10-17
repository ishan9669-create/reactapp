import { useNavigate } from "react-router-dom"
import { DropDownIndus, DropDownSolu } from "./dropdown";
import { useEffect, useState } from "react";

export default function Header(){
    const navigate = useNavigate();
    const [solution,setSolution] = useState('none')
    const [indus,setIndust] = useState('none')


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
    return (

        <header className={`flex items-center  justify-evenly transition-all duration-300 p-3 fixed z-20  ${
            isScrolled
              ? 'bg-yellow-400 text-white '
              : ' bg-white '
          } top-0 w-full shadow-xl `}
                   >
            <div className="p-3">
                <span
                className=" flex gap-1  w-[250px]   "
                >
                    <img src="https://cdn2.iconfinder.com/data/icons/mathematics-geometry/512/greek-alfa-a-letter-latin-alphabet-256.png" className="w-10 h-10 translate-x-1"  />
                    <img src="https://cdn0.iconfinder.com/data/icons/alphanumeric/16/letter-i-512.png" className="w-10 h-10 -translate-x-3" alt="" />
                    <img src="https://cdn0.iconfinder.com/data/icons/alphanumeric/16/letter-r-512.png" className="w-10 h-10 -translate-x-7" alt="" />
                    <img src="https://cdn0.iconfinder.com/data/icons/alphanumeric/16/letter-p-256.png" className="w-10 h-10 -translate-x-8" alt="" />
                    <img src="https://cdn0.iconfinder.com/data/icons/alphanumeric/16/letter-l-256.png" className="w-10 h-10 -translate-x-11" alt="" />
                    <img src="https://cdn2.iconfinder.com/data/icons/mathematics-geometry/512/greek-alfa-a-letter-latin-alphabet-256.png" className="w-10 h-10 -translate-x-[51px]" alt="" />
                    <img src="https://cdn0.iconfinder.com/data/icons/alphanumeric/16/letter-n-512.png" className="w-10 h-10 -translate-x-[58px]" alt="" />
                </span>
            </div>
            <div className="flex gap-4 text-[13.5px]  font-semibold items-center">
                <span className="hover:text-blue-500 cursor-pointer"
                onClick={()=>{
                    navigate('/home')
                }}
                >HOME</span>
                <span className=" cursor-pointer flex items-center relative">
                    <span
                    className="hover:text-blue-600"
                    onClick={()=>{
                        if(solution=='flex') setSolution('none');
                        else setSolution('flex');
                    }}
                  
                    >SOLUTIONS</span>
                    <img src="https://cdn3.iconfinder.com/data/icons/remixicon-system/24/arrow-drop-down-fill-256.png" className="w-7 h-7" />
                    <DropDownSolu visible={solution}/>
                    </span>
                <span className=" cursor-pointer flex items-center">
                    <span
                    className="hover:text-blue-500"
                    onClick={()=>{
                        if(indus=='flex') setIndust('none');
                        else setIndust('flex')
                    }}
                    >INDUSTRIES</span>
                    <img src="https://cdn3.iconfinder.com/data/icons/remixicon-system/24/arrow-drop-down-fill-256.png"  className="w-7 h-7 "/>
                    <DropDownIndus visible={indus}/>
                </span>
                <span className="hover:text-blue-500 cursor-pointer"
                onClick={()=>{
                    navigate('/product')
                }}
                >PRODUCT</span>
                <span className="hover:text-blue-500 cursor-pointer"
                onClick={()=>{
                    navigate('/worksyte')
                }}
                >WORKSYTE</span>
                <span
                onClick={()=>{
                    window.location.href='/pilot'
                }}
                className="hover:text-blue-500 cursor-pointer">PILOT</span>
                <span className="hover:text-blue-500 cursor-pointer"
                onClick={()=>{
                    navigate('/case')
                }}
                >CASE STUDIES</span>
                <span className="hover:text-blue-500 cursor-pointer"
                onClick={()=>{
                    navigate('/contactus')
                }}
                >CONTACT US</span> 
                <span
                onClick={()=>{
                    navigate('/faqs')
                }}
                className="hover:text-blue-500 cursor-pointer">FAQ</span>
                <span className="hover:text-blue-500 cursor-pointer" 
                onClick={()=>{
                    navigate('/login')
                }}
                >LOGIN</span>
            </div>
        </header>
    )
}