import { useState } from "react";
import menuData from "../../data/menuData";
import MenuCard from "../OurMenu/MenuCard";
import menuButtonIcon from "../../assets/images/menu-bottom-arrow.svg";
import SearchBar from "../OurMenu/SearchBar";

function OurMenu() {
  const [userSelectedCategory, setUserSelectedCategory] = useState("all");
  const [userSearch , setUserSearch] = useState("");

  
  const filteredMenu = menuData.filter((menu) => {
    if (userSelectedCategory === "all") return true;

    return (
      menu.category.toLowerCase().trim() === userSelectedCategory.toLowerCase().trim()
    );
  });

  return (
    <>
      <div className="hidden md:block md:bg-[url('../../../public/menu-bg.webp')] w-full h-75 absolute top-0 "></div>

      <div className="container mt-60! md:mt-50!">
        <div className="menu-head relative text-center flex justify-center ">
          <div className="headings flex flex-col gap-4.5 absolute -bottom-8">
            <p className="text-[18px] text-[#b92e2d] font-bold!">
              Delicious Picks
            </p>
            <h1 className="text-[64px]">our Menu</h1>
          </div>
        </div>

   
        <div className="wraper hidden md:block">
          <div className="menu-tabs flex flex-wrap gap-16 justify-center items-center w-fit my-16! mx-auto!">

     
            <button
              onClick={() => setUserSelectedCategory("all")}
              className="luckiest-guy px-6! py-2! rounded-lg text-[24px] bg-[#b92e2d] text-white font-bold cursor-pointer flex justify-center relative"
            >
              All Menu
              {userSelectedCategory === "all" && (
                <img src={menuButtonIcon} className="menu-icon absolute top-full" loading="lazy"/>
              )}
            </button>

            <button
              onClick={() => setUserSelectedCategory("snacks")}
              className="luckiest-guy text-[24px] px-6! py-2! rounded-lg bg-[#b92e2d] text-white font-bold cursor-pointer flex justify-center relative"
            >
              Shanks
              {userSelectedCategory === "snacks" && (
                <img src={menuButtonIcon} className="menu-icon absolute top-full" loading="lazy"/>
              )}
            </button>

            <button
              onClick={() => setUserSelectedCategory("cakes")}
              className="luckiest-guy text-[24px] px-6! py-2! rounded-lg bg-[#b92e2d] text-white font-bold cursor-pointer flex justify-center relative"
            >
              Cake
              {userSelectedCategory === "cakes" && (
                <img src={menuButtonIcon} className="menu-icon absolute top-full" loading="lazy"/>
              )}
            </button>

            <button
              onClick={() => setUserSelectedCategory("drinks")}
              className="luckiest-guy text-[24px] px-6! py-2! rounded-lg bg-[#b92e2d] text-white font-bold cursor-pointer flex justify-center relative"
            >
              Drinks
              {userSelectedCategory === "drinks" && (
                <img src={menuButtonIcon} className="menu-icon absolute top-full" loading="lazy"/>
              )}
            </button>

            <button
              onClick={() => setUserSelectedCategory("food")}
              className="luckiest-guy text-[24px] px-6! py-2! rounded-lg bg-[#b92e2d] text-white font-bold cursor-pointer flex justify-center relative"
            >
              Food
              {userSelectedCategory === "food" && (
                <img src={menuButtonIcon} className="menu-icon absolute top-full" loading="lazy"/>
              )}
            </button>

          </div>
        </div>

        <div className="search-and-filter md:hidden">
          <SearchBar setSelect={setUserSelectedCategory} setUserSearch = {setUserSearch} />
        </div>

  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredMenu.filter((data) => data.name.toLowerCase().trim().includes(userSearch.trim().toLowerCase())).map((data) => (
            <MenuCard data={data} key={data.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default OurMenu;