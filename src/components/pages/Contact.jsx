import addressLogo from "../../assets/images/timing-logo.svg";
import teleLogo from "../../assets/images/tele-logo.svg";
import locationLogo from "../../assets/images/location-logo.svg";
import leafImg from "../../assets/images/leaf.webp";
import ContactForm from "../contact/ContactForm";
function Address({ src, heading, children }) {
    return (
        <div className="address">
            <img src={src} alt="address-logo" loading="lazy" />
            <div className="content py-4!">
                <h2>{heading}</h2>
                <div className="py-4!">
                    {children}

                </div>
            </div>
        </div>
    )
}

function Contact() {
    return (
        <div className='contact-us py-16!'>
            <div className="container flex flex-col md:flex-row gap-25">
                <div className="timing md:w-[40%] bg-[#f8efd8] p-4! md:p-10.5! rounded-[10px] relative">
                    <div className="leaf-img absolute right-0 max-w-37.5 top-25 md:-right-15 -rotate-210 blur-xs">
                        <img src={leafImg} alt="leaf" />
                    </div>
                    <Address src={locationLogo} heading="Address">
                        <p>410 Sandtown, California </p>
                        <p>94001, USA</p>
                    </Address>

                    <Address src={addressLogo} heading="opening hours">
                        <p>Mon - Fri: (08:00 AM – 06:00 PM) </p>
                        <p>Sat - Sun: (10:00 AM – 08:00 PM)</p>
                    </Address>

                    <Address src={teleLogo} heading="call now">
                        <p>888 456 7890</p>
                    </Address>
                </div>

                <div className="formm md:w-[60%]">
                    <h1 className="text-[36px] mb-9!">Have a Question? Ask Us!</h1>
                    <ContactForm />

                </div>
            </div>
        </div>
    )
}

export default Contact