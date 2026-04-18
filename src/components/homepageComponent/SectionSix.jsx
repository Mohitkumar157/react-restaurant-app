import carvedLeaf from "../../assets/images/carved-leaf.webp";
import MenuCard from "../ui/MenuCard";
import cheeseBalls from "../../assets/images/fried-cheese-balls.webp";
import pasta from "../../assets/images/pasta.webp";
import strawBarryBalls from "../../assets/images/strawbarry-icecreame.webp";
import threeRating from "../../assets/images/rating-3.svg";
import fourRating from "../../assets/images/rating-4.svg";
import fiveRating from "../../assets/images/rating-5.svg";



import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
function SectionSix() {
  const ref = useRef();

  useGSAP(() => {
    const trigger = {
      scroller: "body",
      trigger: ref.current,
      start: "top 40%",
    }
    gsap.from(".our-special-menu  .section-head .heading", {
      y: 100,
      opacity: 0,
      rotateY: 180,
      duration: 1,
      scrollTrigger: trigger
    });
    gsap.from(".menu-card", {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: trigger

    });

    const handlerMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const xPercent = (e.clientX / innerWidth - 0.5) * 2;
      const yPercent = (e.clientY / innerHeight - 0.5) * 2;
      const xMove = xPercent * 20;
      const yMove = yPercent * 20;
      gsap.to(".carved-leaf", {
        x: xMove,
        y: yMove,
        duration: 2,
        ease: "power2.out"
      });

    }

    ref?.current.addEventListener("mousemove", handlerMove)
    return () =>{
      ref?.current.removeEventListener("mousemove" , handlerMove);
    }
 
  }, { scope: ref.current })





  const menuCardData = [
    {
      id: 1,
      menuImage: cheeseBalls,
      rating: [fiveRating, "5.0"],
      heading: "fried-cheese-balls",
      para: "Creamy penne pasta tossed in a rich savory sauce with fresh herbs and perfectly cooked ingredients, creating a warm, comforting, and satisfying dish full of flavor in every bite."
    },
    {
      id: 2,
      menuImage: pasta,
      rating: [fourRating, "4.0"],
      heading: "penne-pasta",
      para: "Smooth and creamy dessert blended with sweet strawberry swirls, offering a refreshing, rich, and perfectly balanced treat that melts gently and delights you with every spoonful."
    },
    {
      id: 3,
      menuImage: strawBarryBalls,
      rating: [threeRating, "3.0"],
      heading: "Strawberry Swirl",
      para: "A delightful dessert with smooth, creamy texture blended beautifully with sweet strawberry swirls for a refreshing and indulgent treat served chilled fresh."
    }
  ]
  return (
    <div ref={ref} className='our-special-menu md:pb-16!'>
      <div className="container flex flex-col md:gap-36">
        <div className="section-head relative">
          <div className="heading">
            <h4 className='text-center'>Our Special Menu</h4>
            <h2 className='text-[32px] md:text-[40px] text-[#002922] my-6! leading-[1.2] text-center'>Food & Drinks You Love, <br className="hidden md:block"/>Delivered Fast</h2>
          </div>
          <img src={carvedLeaf} alt="carvef-leaf" className="carved-leaf hidden md:block max-w-37.5 absolute top-5 blur-sm" loading="lazy"/>
        </div>
        <div className="menu-card grid  md:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            menuCardData.map((card) => {
              return (
                <MenuCard key={card.id} cardData={card} />
              )
            })
          }

        </div>
      </div>
    </div>
  )
}

export default SectionSix