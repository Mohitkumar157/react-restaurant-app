import faqImg from "../../assets/images/faq-img.webp";
import faqGreen from "../../assets/images/faq-green.webp";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
const faqs = [
    {
        question: "How can I place an order?",
        answer: "You can place an order through our website or mobile app."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept credit card, debit card and UPI."
    },
    {
        question: "Can I schedule an order for later?",
        answer: "Yes, you can schedule your order while checkout."
    },
    {
        question : "Do you offer combo deals or discounts?",
        answer : "Yes, we offer combo deals and special discounts that you can check on our website or app."
    }
];

function Faq() {
    const [activeIndex, setActiveIndex] = useState(null);
    function handlerFaqs(index) {
        setActiveIndex((pre) => pre === index ? null : index)

    }
    return (
        <div className='faq pb-16!'>
            <div className="section-heading">
                <h4 className="text-center">FAQ</h4>
                <h2 className="text-[36px] text-center mt-6! mb-9!">frequently asked questions</h2>
            </div>
            <div className="container flex flex-col md:flex-row items-center gap-16">
                <div className="left relative md:w-[50%]">
                    <img src={faqImg} alt="cup" className="rounded-xl" />
                    <div className="green-wraper absolute max-w-30 -top-7.5 blur-[5px]">
                        <img src={faqGreen} alt="green-leaf" />
                    </div>
                </div>

                <div className="right md:w-[50%]">
                    {
                        faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={` overflow-hidden py-4! border-b border-[#ccc]`}

                            >
                                  <div
                                    className="head cursor-pointer flex justify-between"
                                    onClick={() => handlerFaqs(index)}
                                   >
                                    <h2 className="text-[18px] mb-2.5!">{faq.question}</h2>
                                    <p className="text-[24px]">{activeIndex === index ? <FaMinus /> : <FaPlus />}</p>
                                </div>
                                <div className={`overflow-hidden transition-all duration-500 ${activeIndex === index ? "max-h-12" : "max-h-0"}`}>
                                   <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Faq