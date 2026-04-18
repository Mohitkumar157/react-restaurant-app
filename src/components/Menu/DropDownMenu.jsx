import video from "../../assets/images/video.mp4";
import { HiArrowLongRight } from "react-icons/hi2";
import menuData from "../../data/menuData";
import { Link } from "react-router-dom";
const navMenuItems = menuData.slice(0, 9);

function MenuItems({ data }) {
    const { img, name } = data;
    return (
        <Link to={`/menu/${data.id}`}>
            <div className="menu group/item flex flex-col gap-3 cursor-pointer">
                <div
                    className="img-wraper group-hover/item:scale-110 transition-transform duration-500  max-w-18.75 rounded-md overflow-hidden">
                    <img src={img} alt={name} loading="lazy" />
                </div>
                <h4
                    className="text-[16px]! text-[#002922]! group-hover/item:text-[#b92e2d]! transition-colors duration-500">
                    {name}
                </h4>
            </div>
        </Link>
    )
}


function DropDownMenu() {
    return (
        <div className='dropDown bg-[#f8efd8] h-full pt-16!'>
            <div className="container flex justify-between">
                <div className="left grid lg:grid-cols-3 md:grid-cols-2 w-[70%] gap-4">
                    {
                        navMenuItems.map((menu) => (
                            <MenuItems data={menu} key={menu.id} />
                        ))
                    }
                </div>

                <div className="right w-[30%] rounded-lg overflow-hidden">
                    <video autoPlay loop muted className="w-full h-full object-cover">
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
            </div>
            <div className="all-menu text-center py-10! flex justify-center items-center">
                <div className="btn-wraper group/item w-fit flex items-center gap-3">
                    <Link to={'/menu'}
                    className="tracking-[.95px] cursor-pointer uppercase text-[#002922] text-[12px] font-normal luckiest-guy relative group-hover/item:text-[#b92e2d] transition-all duration-500">
                        View all menu
                        <div className="border-blk w-[140%] h-px bg-[#ccc]"></div>
                        <div className="border-redish w-0 h-px bg-[#b92e2d] absolute bottom-0 group-hover/item:w-[140%] transition-all duration-500"></div>
                    </Link>
                    <HiArrowLongRight size={20} className="group-hover/item:translate-x-1 group-hover/item:text-[#b92e2d] transition-all duration-500" />
                </div>
            </div>
        </div>
    )
}

export default DropDownMenu;