import React, { useState } from 'react'
import './Contact.css'
import { CiLocationOn } from "react-icons/ci";
import { AiFillMessage } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import { AiTwotoneMail } from "react-icons/ai";

const Contact = () => {
  const [result, setResult] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "b2edc2df-ca0a-49de-ab7c-c225775f47f0");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      }).then((res) => res.json());

      if (res.success) {
        console.log("Message sent");
        setResult({ success: true, message: res.message });
        event.target.reset();
      } else {
        console.log("Error");
        setResult({ success: false, message: res.message });
      }
    } catch (error) {
      console.log("Error", error);
      setResult({ success: false, message: "An error occurred while sending the message." });
    }
  };

  return (
    <div className="contact">
      <div className="contact-left">
        <div className="cont-head">
          <h2>Send us a message</h2>
          <AiFillMessage size={40} />
        </div>

        <p>
          We will be happy to answer your questions. You can contact us by phone, email, or by filling out the form below. 
          Or you can visit our office. Feel free to contact us at any time.
        </p>

        <div className="options">
          <ul>
            <li>
              <AiTwotoneMail size={30} /> <span>mukhametzhan2006@gmail.com</span>
            </li>
            <li>
              <AiFillPhone size={30} /> <span>+7 707 707 77 77</span>
            </li>
            <li>
              <CiLocationOn size={30} /> <span>Kazakhstan, Almaty, 050000</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="right-contact">
        <h2>Leave a message</h2>
        <form onSubmit={onSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />

          <label htmlFor="subject">Subject</label>
          <input type="text" name="subject" required />

          <label htmlFor="message">Message</label>
          <textarea name="message" id="area" rows="5" required></textarea>

          <button className="sendbutton" type="submit">Send</button>
        </form>

        {/* Display the result message */}
        {result && (
          <div className={`form-result ${result.success ? 'success' : 'error'}`}>
            {result.message}
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
