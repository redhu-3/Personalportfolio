import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactSection.css";
import ScrollReveal from "./ScrollReveal";

// ✅ ICON IMPORTS
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vzm6zqy", // ✅ Your Service ID
        "template_5g8d6a9", // ✅ Your Template ID
        form.current,
        "RQ9u5kQvosvGPuZzE" // ✅ Your Public Key
      )
      .then(
        (result) => {
          alert("✅ Message sent successfully!");
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          alert("❌ Failed to send message. Please try again.");
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-body" id="contact">
      <ScrollReveal>
        <h1 className="contact-title">Get in Touch</h1>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <p className="contact-intro">
          I’m always open to new opportunities, collaborations, or even just a
          chat about tech! You can reach out to me through any of the platforms
          below or directly send me a message.
        </p>
      </ScrollReveal>

      <div className="contact-container">
        {/* LEFT SIDE: CONTACT INFO */}
        <ScrollReveal delay={0.2} className="reveal-flex-child">
          <div className="contact-info">
            <div className="info-item">
              <MdEmail className="icon" size={32} />
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:redhudarsini3@gmail.com">
                  redhudarsini3@gmail.com
                </a>
              </p>
            </div>

            <div className="info-item">
              <MdPhone className="icon" size={32} />
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:9342035795">+91 93420 35795</a>
              </p>
            </div>

            <div className="info-item">
              <FaLinkedin className="icon" size={32} />
              <p>
                <strong>LinkedIn:</strong>{" "}
                <a
                  href="https://www.linkedin.com/in/redhu-darsini-7385aa296"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/redhu-darsini
                </a>
              </p>
            </div>

            <div className="info-item">
              <FaGithub className="icon" size={32} />
              <p>
                <strong>GitHub:</strong>{" "}
                <a
                  href="https://github.com/redhu-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/redhu-3
                </a>
              </p>
            </div>

            <div className="info-item">
              <SiLeetcode className="icon" size={32} />
              <p>
                <strong>LeetCode:</strong>{" "}
                <a
                  href="https://leetcode.com/u/__redhu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  leetcode.com/u/__redhu/
                </a>
              </p>
            </div>

            <div className="info-item">
              <MdLocationOn className="icon" size={32} />
              <p>
                <strong>Location:</strong> Coimbatore, Tamil Nadu, India
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* RIGHT SIDE: MESSAGE FORM */}
        <ScrollReveal delay={0.3} className="reveal-flex-child">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <h2 className="form-title">Send Message</h2>

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
            <button type="submit" className="send-btn">
              Send Message
            </button>
          </form>
        </ScrollReveal>
      </div>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Redhu Darsini G | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default ContactSection;
