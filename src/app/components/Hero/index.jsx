import { FaRegCirclePlay } from "react-icons/fa6";

function Hero() {
  return (
    <div className="relative">
        <img className="rounded-xl "   
       src="https://ntvb.tmsimg.com/assets/p22231126_b_h8_aa.jpg?w=960&h=540" loading="lazy" alt="" />
        <div className="absolute top-10 bottom-0 left-10" >
        <h1 className="text-5xl  font-bold text-white mb-2  ">Baymax 2.0</h1> 
        <button className="bg-red-500 flex items-center p-2 border-2 text-white font-bold cursor-pointer"><FaRegCirclePlay className="mr-1" />  Watch Now</button>    
        </div>  
    </div>
  )
}
export default Hero

 