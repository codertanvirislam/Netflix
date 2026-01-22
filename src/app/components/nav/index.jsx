import { FaSearch } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
function Nav() {
    return (
        <nav className="flex justify-between items-center">
            <div className="flex items-center">
                <a href="#" className=" block w-40">
                    <img className=""  src="data:image/png;base64,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" alt="" />
                </a>
                <div className='space-x-7 ml-12.5'>
                    <a href="#" className="text-gray-400 hover:underline" > New</a>
                    <a href="#" className="text-gray-400 hover:underline" > Movies</a>
                    <a href="#" className="text-gray-400 hover:underline" > Series</a>
                    <a href="#" className="text-gray-400 hover:underline" > Cartoon</a>
                </div>
            </div>
        <div className="text-gray-50 flex space-x-7">
            <span className="cursor-pointer">
                <FaSearch size={30} />
            </span>
            <span className="cursor-pointer">
                <IoMdNotifications size={30} />
            </span>
        </div>
        </nav>
    )
}
export default Nav