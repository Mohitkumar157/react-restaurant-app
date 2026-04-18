import React, { useRef, useState } from 'react'
import pauseIcon from "../../assets/images/pause.svg";
import playIcon from "../../assets/images/play-icon.svg";
import video from "../../assets/images/video.mp4";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
function SectionSeven() {
    const [play, setPlay] = useState(true);
    const videoRef = useRef(null);
    const sectionRef = useRef();
    function handlerPlay() {
        if (play) {
            setPlay(false);
            videoRef.current.pause();
        } else {
            setPlay(true);
            videoRef.current.play();
        }
    }

    useGSAP(() => {
        gsap.from(".video-section .video", {
            scale: .6,
            borderRadius: "16px",
            scrollTrigger: {
                trigger: sectionRef.current,
                scrub: 1,
                scroller: "body",
                start: "top 70%",
                end: "top 0%",
            }
        })
    }, { scope: sectionRef.current })
    return (
        <div ref={sectionRef} className='video-section relative flex justify-center items-center pb-16!'>

            <div className="video overflow-hidden">
                <video ref={videoRef} src={video} autoPlay loop muted playsInline className='w-full h-auto'></video>
            </div>


            <button className='p-9! rounded-[50px] bg-[#b92c2d] absolute' onClick={handlerPlay}>
                <img src={play ? pauseIcon : playIcon} alt="video-icon" className='w-5 h-5' loading="lazy"/>
            </button>
        </div>
    )
}

export default SectionSeven