import { useGSAP } from '@gsap/react';
import dileveryLogo from '../../assets/images/delivery.svg';
import packingIcon from '../../assets/images/packing.svg';
import securePayment from '../../assets/images/secure-payment.svg';
import Card from '../homepageComponent/Card'
import { useRef } from 'react';
import gsap from 'gsap';



function SecondSection() {
    const container = useRef();
    useGSAP(() => {
        gsap.from(".sec-card", {
            y: 80,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: container.current,
                start: "top 70%",
               

            }

        })

    },  {scope : container.current});

    return (
        <div className="container md:py-16!" ref={container}>
            <div className='grid gap-6 lg:grid-cols-3 md:gap-0 md:grid-cols-3 my-16!'>
                <Card  img={dileveryLogo} title="Fast Delivery" para="Quick delivery straight to your doorstep." className= "card text-[#002922]!" />

                <Card img={packingIcon} title="safe packing" para="Hygienic packing to keep food fresh." className={"card text-[#002922]!"}>
                    {<div className='w-full h-px top-0 line md:w-0.5 md:h-full absolute md:left-0 bg-[#ccc] md:after:content-[""] md:after:w-1.25 md:after:h-1.25 after:rounded-full after:absolute after:bg-[#ccc] after:-left-0.5! after:top-0'></div>}
                </Card>

                <Card img={securePayment} title="Secure Payments" para="Safe and trusted payment for every order." className={"card text-[#002922]!"}>
                    <div className='w-full h-px top-0 line md:w-0.5 md:h-full absolute md:left-0 bg-[#ccc] after:content-[""] after:absolute after:bottom-0 after:rounded-full after:-left-0.5! after:bg-[#ccc] md:after:w-1.25 md:after:h-1.25'></div>
                </Card>
            </div>
        </div>
    )
}

export default SecondSection