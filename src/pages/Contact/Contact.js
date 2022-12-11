import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_bx3qj0i', 'template_qseq80x', form.current, 'Kh_6_sh6a2mflLKGZ')
            .then((result) => {
                console.log(result.text);
                toast.success('Message Sent Successfully!');
                e.target.user_name.value = "";
                e.target.user_email.value = "";
                e.target.message.value = "";

            },
                (error) => {
                    console.log(error.text);
                });
    };

    return (
        <div className='p-20 bg-[#22252c]'>
            <h1 className="text-color text-5xl text-center font-bold">CONTACT ME</h1>

            <div className='py-14'>
                <form className='flex flex-col items-center gap-3 text-white' ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input className=" bg-transparent input input-bordered input-accent w-full max-w-xs" type="text" name="user_name" />
                    <label>Email</label>
                    <input className="bg-transparent input input-bordered input-accent w-full max-w-xs" type="email" name="user_email" />
                    <label>Message</label>
                    <textarea className="bg-transparent textarea textarea-accent w-full max-w-xs" name="message" />

                    <button type="submit" className="contact-btn mt-8 btn btn-outline btn-accent  w-full max-w-xs">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;