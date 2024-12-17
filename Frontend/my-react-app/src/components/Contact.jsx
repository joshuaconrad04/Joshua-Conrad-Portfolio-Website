import React, { useRef } from "react";
import emailjs from "emailjs-com";
import styles from "../styles/Contact.module.css";

const ContactForm = () => {
  const form = useRef(null); // Initialize with null

  const sendEmail = (e) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(
          (result) => {
            alert("Message sent successfully!");
            console.log(result.text);
          },
          (error) => {
            alert("Failed to send message, please try again.");
            console.log(error.text);
          }
        );

      e.target.reset(); // Clear the form
    }
  };

  return (
    <div className={styles.container}>
    <section id="contact-me">
      <h2>Contact Me</h2>
      <p>Feel free to reach out! Just leave your name, email, and a message if you are interested details for services I offer as they pertain to website development, weather for a small business or a larger one, reach out!</p>

      <form ref={form} onSubmit={sendEmail}>
        <div>
          <label>Your Name:</label>
          <input type="text" name="user_name" placeholder="Enter your name " required />
        </div>

        <div>
          <label>Your Email:</label>
          <input type="email" name="user_email" placeholder="Enter your email " required />
        </div>

        <div>
          <label>Your Message:</label>
          <textarea name="message" rows="5" placeholder="Type your message here... " required />
        </div>

        <button type="submit">Send Message</button>
      </form>
    </section>
    </div>
  );
};

export default ContactForm;
