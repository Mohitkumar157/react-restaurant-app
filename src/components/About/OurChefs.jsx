import React from 'react'
import chef1 from "../../assets/images/team-01.webp";
import chef2 from "../../assets/images/team-02.webp";
import chef3 from "../../assets/images/team-03.webp";
import chef4 from "../../assets/images/team-04.webp";
function ChefCard({ image, chefName = "Mohit", designation }) {
  return (
    <div className="chef-card group p-3! overflow-hidden rounded-lg text-center bg-[#f8efd8] border border-[#b92e2d33] relative">
      <div className="red-bg absolute w-full h-0 top-0 left-0 transition-all duration-800  group-hover:bg-[#b92e2d] group-hover:w-full group-hover:h-full"></div>
      <div className="card flex flex-col gap-4 relative">
        <div className="img-wraper rounded-lg overflow-hidden">
          <img src={image} alt="" />
        </div>
        <div className="designation">
          <h2 className='text-[18px] transition-all duration-800 group-hover:text-[white]'>{chefName}</h2>
          <p className='transition-all duration-800 group-hover:text-[white]'>{designation}</p>
        </div>
      </div>
    </div>
  )
}




function OurChefs() {
  return (
    <div className='our-chefs pb-16!'>
      <div className="section-heading my-8! md:my-0!">
        <div className="container">
          <h4 className="text-center text-[24px]">Our Chefs</h4>
          <h2 className="text-[36px] text-center md:mt-6! md:mb-9!">Meet the Hands Behind <br className='hidden md:block'/> the Flavor</h2>
        </div>
      </div>
      <div className="container grid gap-3 lg:grid-cols-4 md:grid-cols-2 ">
        <ChefCard image={chef1} chefName="Scarlett Mitchell" designation="Executive Chef" />
        <ChefCard image={chef2} chefName="Maria Lopez" designation="Sous Chef" />
        <ChefCard image={chef3} chefName="Anthony Russo" designation="Grill Master" />
        <ChefCard image={chef4} chefName="Olivia Bennett" designation=" Pastry Chef" />
      </div>
    </div>
  )
}

export default OurChefs