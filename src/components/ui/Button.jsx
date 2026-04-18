import { Link } from "react-router-dom"

function Button({ children }) {
    return (
        <Link to="/menu">
            <button className='cursor-pointer overflow-hidden group relative z-40 group-hover:text-white text-[#b92c2d] luckiest-guy text-[16px] px-6! py-3! border rounded-md tracking-[1px]'>
               <p className="luckiest-guy text-[16px] relative z-50 group-hover:text-white transition-colors duration-700"> {children}</p>
                <div className="bg bg-[#b92c2d] w-0 h-12.5 absolute top-0 left-0 group-hover:w-full transition-all duration-700 "></div>
            </button>
        </Link>
    )
}

export default Button