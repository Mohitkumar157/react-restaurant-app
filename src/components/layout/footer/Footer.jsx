import cheese from "../../../assets/images/chessess.svg";
import chilliSlice from "../../../assets/images/chilli-slice.webp";
import headingIcon from "../../../assets/images/heading-icon.svg";
import facebookWraper from "../../../assets/images/facebook.svg";
import bike from "../../../assets/images/bike.webp";
import headLight from "../../../assets/images/headLight.svg";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";
import Button from "../../ui/Button";
import FooterSlider from "../../swiper-Slider/FooterSlider";
import { Link } from "react-router-dom";



import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from "react";
function Footer() {
    const ref = useRef();
    useGSAP(() => {
        const trigger = {
            scroller: "body",
            trigger: ref.current,
            start: "top -30%",

        }
        gsap.to(".footer-heading .left-img", {
            x: 20,
            yoyo: true,
            duration: 2,
            repeat: -1,
            scrollTrigger: trigger
        });
        gsap.from(".second .bike", {
            x: "-500%",
            duration: 5,
            scrollTrigger: trigger
        });
        gsap.from(".icon", {
            x: 10,
            opacity: 0,
            delay: 1,
            duration: 1,
            stagger: 1,
            scrollTrigger: trigger
        })



        function handlerMove(e) {
            const { innerWidth, innerHeight } = window;
            const xPercent = (e.clientX / innerWidth - 0.5) * 2;
            const yPercent = (e.clientY / innerHeight - 0.5) * 2;
            const xMove = xPercent * 20;
            const yMove = yPercent * 20;
            gsap.to(".clilli-slice", {
                x: xMove,
                y: yMove,
                duration: 2,
                ease: "power2.out"
            });
        }
        ref.current.addEventListener("mousemove", handlerMove);
        return () => {
            ref.current.removeEventListener("mousemove", handlerMove);
        }
    }, { scope: ref.current })



    return (
        <div ref={ref} className="footer ">
            <FooterSlider />
            <div className=' bg-[#f8efd8] overflow-hidden'>
                <div className="container">
                    <div className="top-footer">

                        <div className="footer-heading relative py-22.5!">
                            <div className="left-img w-42.5 absolute -top-4.25"><img src={cheese} alt="cheese" /></div>
                            <div className="hidden md:block clilli-slice absolute right-0 bottom-3 w-25 blur-[10px]"><img src={chilliSlice} alt="chilli-slice" loading="lazy" /></div>
                            <h2 className='flex justify-center items-center relative w-fit mx-auto!'>
                                <svg className="w-75 md:w-135" viewBox="0 0 169 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M168.999 23.3501L160.61 24.4325L159.596 20.6105H155.74L154.894 24.4325L146.27 23.5869L153 1.06077L162.403 0.58725L168.999 23.3501ZM158.987 15.4356L157.702 9.55035L156.45 15.4356H158.987Z" fill="#002922" />
                                    <path d="M141.77 0.993164L139.91 24.0266L132.773 24.3987V1.46669L141.77 0.993164Z" fill="#002922" />
                                    <path d="M126.511 8.5357C126.511 9.62931 126.347 10.5989 126.02 11.4445C125.693 12.2901 125.242 13.0285 124.667 13.6599C124.103 14.2912 123.438 14.8268 122.672 15.2665C121.905 15.7062 121.082 16.067 120.203 16.3488C119.334 16.6194 118.432 16.8223 117.497 16.9576C116.561 17.0816 115.642 17.1493 114.74 17.1606V25.0413H106.859C106.859 22.4595 106.865 19.889 106.876 17.3297C106.888 14.7704 106.904 12.1886 106.927 9.58421C106.95 8.20874 106.955 6.83327 106.944 5.4578C106.933 4.08233 106.961 2.69559 107.028 1.29757C108.472 0.869148 109.915 0.54783 111.358 0.333617C112.801 0.119405 114.289 0.0122986 115.822 0.0122986C116.691 0.0122986 117.559 0.0855818 118.427 0.232148C119.295 0.36744 120.124 0.58729 120.913 0.891697C121.713 1.1961 122.452 1.57943 123.128 2.04168C123.816 2.49265 124.408 3.03382 124.904 3.66518C125.4 4.29655 125.789 5.0181 126.071 5.82986C126.364 6.63033 126.511 7.53228 126.511 8.5357ZM119.002 9.11069C119.002 8.37786 118.776 7.8085 118.325 7.40263C117.886 6.98548 117.311 6.7769 116.6 6.7769C116.364 6.7769 116.116 6.79945 115.856 6.84455C115.608 6.87837 115.371 6.92347 115.146 6.97984L114.943 11.918C115.101 11.9405 115.253 11.9518 115.4 11.9518C115.546 11.9518 115.698 11.9518 115.856 11.9518C116.262 11.9518 116.651 11.8842 117.023 11.7489C117.407 11.6136 117.745 11.4219 118.038 11.1739C118.331 10.9146 118.562 10.6158 118.731 10.2776C118.912 9.92808 119.002 9.53911 119.002 9.11069Z" fill="#002922" />
                                    <path d="M74.0818 0.621094L73.9127 7.79157L68.873 7.99451L67.5878 24.0266L60.4511 24.3987L60.4849 8.36656L55.4453 8.63715L55.6483 0.654917L74.0818 0.621094Z" fill="#002922" />
                                    <path d="M52.6509 23.3501L44.2628 24.4325L43.2481 20.6105H39.3923L38.5467 24.4325L29.9219 23.5869L36.6527 1.06077L46.0555 0.58725L52.6509 23.3501ZM42.6393 15.4356L41.3541 9.55035L40.1026 15.4356H42.6393Z" fill="#002922" />
                                    <path d="M25.3487 3.56372C25.4051 2.52648 25.4671 1.47797 25.5347 0.418182H9.94231L9.69141 11.7245C12.1383 13.0114 17.2143 17.3322 14.576 24.6845L23.9789 24.4663C24.0352 23.2374 24.0972 22.0142 24.1649 20.7965C24.2438 19.5676 24.3171 18.3331 24.3847 17.0929H21.4083H17.2143L17.3834 14.6238L22.4568 14.4547L22.8289 9.21217H17.7892L17.9584 7.08132L25.1288 6.70926C25.219 5.64947 25.2923 4.60096 25.3487 3.56372Z" fill="#002922" />
                                    <path d="M9.0897 25.1252C-0.608037 25.8179 -1.30058 13.003 1.29687 8.67365C2.45142 10.1168 5.775 12.3995 8.22406 13.8689C12.5535 16.4665 13.4192 20.7958 11.6875 25.1252C11.3989 23.9707 9.77645 21.8661 7.3582 19.9299C5.19521 18.1982 2.88623 15.312 2.59761 13.8689C2.30898 15.0234 3.02885 18.025 6.49233 20.7958C7.35804 21.6617 9.08951 23.7398 9.0897 25.1252Z" fill="#B92E2D" />
                                    <path d="M89.7764 0.0150146C91.4082 0.0151945 92.7051 1.64237 94.124 2.23083C95.595 2.84074 97.6569 2.6303 98.7656 3.73865C99.8743 4.84731 99.6635 6.9101 100.273 8.38123C100.862 9.80011 102.49 11.0969 102.49 12.7289C102.49 14.3607 100.862 15.6576 100.273 17.0765C99.6636 18.5476 99.8742 20.6095 98.7656 21.7181C97.657 22.8268 95.5951 22.616 94.124 23.226C92.7048 23.8144 91.4083 25.4427 89.7764 25.4427C88.1445 25.4427 86.8477 23.8145 85.4287 23.226C83.9576 22.616 81.8948 22.8268 80.7861 21.7181C79.6778 20.6094 79.8882 18.5475 79.2783 17.0765C78.6898 15.6574 77.0626 14.3607 77.0625 12.7289C77.0625 11.0971 78.6897 9.80009 79.2783 8.38123C79.8883 6.91011 79.6775 4.84751 80.7861 3.73865C81.8948 2.62998 83.9576 2.8408 85.4287 2.23083C86.8477 1.64218 88.1446 0.0150146 89.7764 0.0150146ZM90.5791 9.49158C88.7914 9.04685 86.981 10.1356 86.5361 11.9232C86.0914 13.7109 87.1802 15.5213 88.9678 15.9662C90.7555 16.4109 92.5659 15.3222 93.0107 13.5345C93.4555 11.7468 92.3668 9.93643 90.5791 9.49158Z" fill="#B92E2D" />
                                    <path d="M89.5577 3.18567L89.8039 4.19041M94.9902 18.52L95.9295 18.7773M91.9609 5.76456L91.1669 6.3605M94.2836 8.93397L94.5662 9.92768M85.0952 9.72272L84.8126 10.7164M86.8402 6.07135L87.6457 6.64966M95.3963 15.5562L96.3036 15.1902M83.6541 18.7027L84.5616 18.3368M90.3491 18.2312L90.9261 19.0659M88.7076 21.8646L89.084 20.9074M96.0659 6.11509L95.1014 6.00986M81.9059 11.6128L80.9414 11.5077M97.8414 10.6373L97.343 11.5285M83.767 6.25003L83.4233 5.27875M84.9548 14.2993L85.453 15.1902" stroke="white" strokeWidth="0.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <img src={headingIcon} alt="heading-icon" className="absolute max-w-12.5 left-[96%] bottom-[90%] rotate-90" loading="lazy"/>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="bottom-footer relative border-t border-b border-[#c9c1af]">
                    <div className="container">
                        <div className="row grid gap-7 md:gap-16 lg:grid-cols-3 md:grid-cols-3 py-4! md:py-12!">
                            <div className="flex flex-col-reverse md:flex-col gap-4! md:gap-12">
                                <div className="top">
                                    <h2 className="mt-4! md:mt-0! text-[24px] text-[#002922]">Thanks for shopping with us! See you again soon</h2>
                                    <p className="my-4! md:my-8!">We hope you enjoyed your meal with us. Your support means a lot, and we can’t wait to serve you more delicious food on your next visit. See you again soon!</p>
                                    <Button >Start order</Button>

                                </div>

                                <div className="social-links flex gap-4 ">
                                    <div className="icon relative w-fit flex justify-center items-center">
                                        <img src={facebookWraper} alt="wraper" loading="lazy"/>
                                        <FaFacebookF className="text-[white] absolute" />
                                    </div>

                                    <div className="icon relative w-fit flex justify-center items-center">
                                        <img src={facebookWraper} alt="wraper" loading="lazy"/>
                                        <FaInstagram className="text-[white] absolute" />
                                    </div>

                                    <div className="icon relative w-fit flex justify-center items-center">
                                        <img src={facebookWraper} alt="wraper" loading="lazy"/>
                                        <FiTwitter className="text-[white] absolute" />
                                    </div>
                                </div>
                            </div>



                            <div className="second flex md:justify-center">
                                <div className="wraper flex flex-col gap-4 md:gap-8">
                                    <h2 className="text-[24px] text-[#002922]">Quick Links</h2>
                                    <ul className="flex md:flex-col gap-3 luckiest-guy">
                                        <Link to={"/"}><li className="text-[18px] text-[#002922]">Home</li></Link>
                                        <Link to={"/about"}><li className="text-[18px] text-[#002922]">About us</li></Link>
                                        <Link to={"/contact"}><li className="text-[18px] text-[#002922]">contact</li></Link>
                                        <Link to={"/menu"}><li className="text-[18px] text-[#002922]">Menu</li></Link>
                                       <Link to={"/blog"}> <li className="text-[18px] text-[#002922]">Blog</li></Link>
                                    </ul>
                                </div>
                                <div className="hidden md:block bike absolute bottom-0 right-[34%] max-w-45">
                                    <div className="bike-wraper">
                                        <img src={bike} alt="bike" loading="lazy"/>
                                        <img src={headLight} alt="bike-light" className="bike-light absolute top-[22%] left-[80%]" loading="lazy"/>
                                    </div>
                                </div>
                            </div>



                            <div className="third flex flex-col gap-12">
                                <div className="opening-timing">
                                    <h2 className="text-[24px] mb-7! text-[#002922]">Opening time</h2>
                                    <p>Mon – Thu (10:00 AM – 08:00 PM)</p>
                                    <p>Fri – Sun (11:00 AM – 09:00 PM)</p>
                                </div>

                                <div className="contact">
                                    <h2 className="text-[24px] mb-7! text-[#002922]">contact us</h2>
                                    <p>Phone : 888 456 7890</p>
                                    <p>Email us : info@example.com</p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <div className="container">
                    <p className="py-4! lg:text-end sm:text-center">Designed by Radiant Templates, developed by Mohit Kumar</p>
                </div>
            </div>
        </div>
    )
}

export default Footer