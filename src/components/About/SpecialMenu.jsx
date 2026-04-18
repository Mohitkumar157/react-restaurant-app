import leftMenuImg from "../../assets/images/menu.webp";
import rightMenuImg from "../../assets/images/menu-v8.webp";
import rating4 from "../../assets/images/rating-4.svg";
import rating5 from "../../assets/images/rating-5.svg";
import Button from "../ui/Button";
function SpecialMenu() {
    return (
        <div className='special-menu md:pb-16!'>
            <div className="section-heading">
                <h4 className="text-center">Our Special Menu</h4>
                <h2 className="text-[36px] text-center mt-6! mb-9!">Food & Drinks You Love,<br /> Delivered Fast</h2>
            </div>
            <div className="container grid lg:grid-col-2 md:grid-cols-2 gap-9">

                <div className="left-card ">
                    <div className="top rounded-lg overflow-hidden relative group">
                        <img src={leftMenuImg} alt="chips" className="group-hover:scale-110 duration-700 ease-in-out"/>
                        <div className="gradient bg-[linear-gradient(#b92e2d00,#b92e2dcc)] absolute bottom-0 w-full h-full opacity-0 group-hover:opacity-100 duration-700 ease-in-out"></div>
                        <div className="price-label absolute bottom-25 bg-white flex justify-center items-center gap-3 py-3! px-6! rounded-r-md -translate-x-45 group-hover:translate-x-0 duration-700 ease-in-out">
                            <span className="price-text text-[#b92e2d]">Price</span> 
                            <span className="amount luckiest-guy text-[#b92e2d] text-[32px]">₹250</span>
                        </div>
                    </div>
                    <div className="bottom text-center mt-7!">
                        <div className="rating flex gap-4 justify-center">
                            <img src={rating4} alt="rating" />
                            <p className="luckiest-guy text-[18px]">4.0</p>
                        </div>
                        <h2 className="text-[32px] my-4!">Snack & Sip Bundles</h2>
                        <p className="mb-4!">Snack & Sip Bundles bring together tasty snacks and refreshing drinks in one perfect combo for a quick and satisfying treat.</p>
                        <Button>Start Order</Button>
                    </div>
                </div>

                <div className="right-card">
                    <div className="top rounded-lg overflow-hidden relative group">
                        <img src={rightMenuImg} alt="bread" className="group-hover:scale-110 duration-700 ease-in-out"/>
                         <div className="gradient bg-[linear-gradient(#b92e2d00,#b92e2dcc)] absolute bottom-0 w-full h-full opacity-0 group-hover:opacity-100 duration-700 ease-in-out"></div>
                        <div className="price-label absolute bottom-25 bg-white flex justify-center items-center gap-3 py-3! px-6! rounded-r-md -translate-x-45 group-hover:translate-x-0 duration-700 ease-in-out">
                            <span className="price-text text-[#b92e2d]">Price</span> 
                            <span className="amount luckiest-guy text-[#b92e2d] text-[32px]">₹200</span>
                        </div>
                    </div>
                    <div className="bottom text-center mt-7!">
                        <div className="rating flex gap-4 justify-center">
                            <img src={rating5} alt="rating" />
                            <p className="luckiest-guy text-[18px]">5.0</p>
                        </div>
                        <h2 className="text-[32px] my-4!">Weekend Party Packs</h2>
                        <p className="mb-4!">Weekend Party Packs are perfect combos of crowd-favorite snacks and drinks, made to make your weekends more fun and hassle-free.</p>
                        <Button>Start Order</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialMenu