import { useState } from 'react'

function ContactForm() {
    const [formInputs, setFormInputs] = useState({
        userName: "",
        email: "",
        phone: "",
        message: ""
    });
    const [error, setError] = useState({});


    function handleInput(e) {
        const { name, value } = e.target;
        setFormInputs((pre) => ({ ...pre, [name]: value }))
        setError((pre) => ({
            ...pre,
            name: ""
        }))
    }

    function validate() {
        const errorMessage = {};
        if (formInputs.userName.trim() == "") {
            errorMessage.name = "Name is required";
        };
        if (formInputs.userName.length === 1) {
            errorMessage.name = "Please enter valid name"
        }
        if (!formInputs.email.includes("@") || !formInputs.email.includes(".com")) errorMessage.email = "Please enter a valid email";
        if(formInputs.email.trim().length ===0) errorMessage.email = "Email is required";
        if (formInputs.phone.trim().length !== 10) errorMessage.phone = "Please enter a vaild Phone Number";
         if (formInputs.phone.trim().length == 0) errorMessage.phone = "Phone Number is required";
        return errorMessage;
    }

    function handleSubmit(e) {
        e.preventDefault();
        const errors = validate();
        if (Object.keys(errors).length > 0) {
            setError(errors);
            return;
        }
        localStorage.setItem("formInputs", JSON.stringify(formInputs));
        setFormInputs({
            userName: "",
            email: "",
            phone: "",
            message: ""
        });
    }


    return (
        <form action="" className="flex gap-4 flex-col" onSubmit={handleSubmit}>
            <div className="input mb-6!">
                <input
                    onChange={(e) => handleInput(e)}
                    name="userName"
                    value={formInputs.userName}
                    type="text" placeholder="Your Name" className="w-full border-b border-b-[#0029224d] py-4! outline-0 placeholder-black"

                />
                <p className='error-para text-[12px] text-[#b92c2d] font-light'>{error.name}</p>
            </div>

            <div className='mb-6!'>
                <input
                onChange={(e) => handleInput(e)}
                name="email"
                value={formInputs.email}
                type="email" placeholder="Your Email Address" className="w-full border-b border-b-[#0029224d] py-4! outline-0 placeholder-black"
            />
              <p className='error-para text-[12px] text-[#b92c2d] font-light'>{error.email}</p>
            </div>

            <div className="mb-6!">
                <input
                onChange={(e) => handleInput(e)}
                name="phone"
                value={formInputs.phone}
                type="text" placeholder="Phone No" className="w-full border-b border-b-[#0029224d] py-4! outline-0 placeholder-black"
            />
              <p className='error-para text-[12px] text-[#b92c2d] font-light'>{error.phone}</p>
            </div>

            <textarea
                onChange={(e) => handleInput(e)}
                value={formInputs.message}
                name="message" id="message" placeholder="Message" className="border-b border-b-[#0029224d] py-4! outline-0 placeholder-black">
            </textarea>

            <div className="send-btn flex flex-col-reverse items-start md:items-start gap-8">
                <button className='border border-[#b92c2d] text-[#b92c2d] tracking-wide rounded-lg luckiest-guy py-3! px-6!'>Send a message</button>
                <div className="radio-check flex gap-4" >
                    <input type="checkbox" className="w-6 h-6" />
                    <span>I agree to the terms and conditions</span>
                </div>
            </div>
        </form>
    )
}

export default ContactForm