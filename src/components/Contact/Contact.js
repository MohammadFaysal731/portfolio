import React, { useRef } from 'react';
import './Contact.css';
import { SiMinutemailer } from 'react-icons/si'
import { BsMessenger, BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
const Contact = () => {
    const { text } = useTypewriter({
        words: ['Get In Touch'],
        loop: {}
    })
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2r22ass', 'template_l0i91px', form.current, 'pB-OjZw0SnNtzlaKV')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <section id='contact' className='section'>
            <h2>Contact Me</h2>
            <h5>{text}<Cursor></Cursor></h5>
            <div className="container contact-container">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='message-btn'>Send Message</button>
                </form>
                <div className="contact-options">
                    <article className='contact-option'>
                        <SiMinutemailer className='contact-option-icon'></SiMinutemailer>
                        <h4>Email</h4>
                        <h5>www.faysal731@gmail.com</h5>
                        <a href="mailto:www.faysal731@gmail.com" target="_blank">Send a message</a>
                    </article>
                    <article className='contact-option'>
                        <BsMessenger className='contact-option-icon'></BsMessenger>
                        <h4>Messenger</h4>
                        <h5>My Messenger</h5>
                        <a href="https://m.me/profile.php?id=100045990253742" target="_blank">Send a message</a>
                    </article>
                    <article className='contact-option'>
                        <BsWhatsapp className='contact-option-icon'></BsWhatsapp>
                        <h4>WhatsApp</h4>
                        <h5>My WhatsApp</h5>
                        <a href="https://api.whatsapp.com/send?phone=+88001753730986" target="_blank">Send a message</a>
                    </article>
                </div>

            </div>


        </section>




    );
};

export default Contact;