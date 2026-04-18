import { useRef, useState } from 'react'
import blogImg1 from "../../assets/images/blog-1.webp";
import blogImg2 from "../../assets/images/blog-2.webp";
import blogImg3 from "../../assets/images/blog-3.webp";
import blogImg4 from "../../assets/images/blog-4.webp";
import blogImg5 from "../../assets/images/blog-5.webp";
import blogImg6 from "../../assets/images/blog-6.webp";
import headingTopIcon from "../../assets/images/heading-icon.svg";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';









function Blog() {
    const [active, setActive] = useState(0);
    const ref = useRef()
    useGSAP(() => {
        gsap.from(".main-heading", {
            rotateY: 180,
            y: 50,
            opacity: 0,
            duration: 1

        });
        gsap.from(".heading-icon", {
            scale: 0,
            delay: .2,
            duration: 1
        })
    }, { scope: ref.current })

    return (
        <div ref={ref} className='blog-page py-16!'>
            <div className="container">
                <div className="section-head flex justify-center text-[64px]">
                    <div className="heading-group max-w-fit relative">
                        <h1 className='main-heading text-center leading-20 mb-8!'>Taste Talks – Our <br className='hidden md:block'/> Food Blog</h1>
                        <img src={headingTopIcon} alt="icon" className='hidden md:block heading-icon absolute rotate-90 -top-[15%] -right-[10%]' />

                    </div>
                </div>
            </div>
            <div className="container grid lg:grid-cols-2 md:grid-cols-1 gap-6!">
                <BlogCard
                    index={0}
                    active={active}
                    setActive={setActive}
                    img={blogImg1}
                    date="July 18, 2025"
                    heading="Celebrate with Our Limited-Edition Menu"
                >
                    Celebrate the moment with our limited-edition menu, crafted with special flavors available for a short time only.
                </BlogCard>

                <BlogCard
                    index={1}
                    setActive={setActive}
                    img={blogImg2}
                    date="July 17, 2025"
                    heading="Vegan Meals That Actually Taste Amazing"
                >
                    Enjoy delicious vegan meals made with fresh ingredients and bold flavors.
                    Healthy, satisfying, and crafted to prove that plant-based food can taste amazing.
                </BlogCard>


                <BlogCard
                    index={2}
                    setActive={setActive}
                    img={blogImg3}
                    date="July 25, 2025"
                    heading="Delicious Breakfast Ideas for Busy Mornings"
                >
                    Start your day with quick and delicious breakfast ideas perfect for busy mornings.
                    Simple, healthy, and satisfying meals to keep you energized throughout the day.
                </BlogCard>

                <BlogCard
                    index={3}
                    setActive={setActive}
                    img={blogImg4}
                    date="June 05, 2025"
                    heading="Tips to Order the Perfect Meal Online"
                >
                    Follow simple tips to choose the perfect meal when ordering online.
                    From checking reviews to exploring menu details, make every order satisfying and delicious.
                </BlogCard>

                <BlogCard
                    index={4}
                    setActive={setActive}
                    img={blogImg5}
                    date="dec 05, 2025"
                    heading="The Ultimate Guide to Pairing Food & Drinks"
                >
                    Discover the perfect combinations of food and drinks to elevate every meal.
                    The right pairing can enhance flavors and create a more enjoyable dining experience.
                </BlogCard>

                <BlogCard
                    index={5}
                    setActive={setActive}
                    img={blogImg6}
                    date="Jan 25, 2025"
                    heading="Why Fresh Ingredients Make All the Difference"
                >
                    Fresh ingredients enhance the natural taste and quality of every dish.
                    They make meals healthier, more flavorful, and truly satisfying.
                </BlogCard>
            </div>
        </div>
    )
}

export default Blog;


function BlogCard({ index, img, date, heading, active, setActive, children }) {

    return (
        <div
            onMouseEnter={() => setActive(index)}
            onMouseLeave={() => setActive(0)}
            className="blog-Card group rounded-xl relative overflow-hidden">

            <img src={img} alt="blog-img" />

            <div
                className={`hidden md:block related-content absolute ${active === index ? "translate-y-[0%]" : "translate-y-[150%]"} bottom-[6%] bg-[#f8efd8] max-w-[70%] mx-6! py-2.5! px-4! rounded-lg group-hover:translate-y-0 transition-all duration-800`}>
                <div className="date w-fit absolute -top-6.75 rounded-tl-lg rounded-tr-lg bg-inherit px-3! py-2! left-0">
                    <h4 className='font-light'>{date}</h4>
                </div>
                <h2 className='text-[24px] pb-2! border-b border-b-[#00292233]'>{heading}</h2>
                <p className='pt-2!'>{children}</p>
            </div>
        </div>
    )
}

