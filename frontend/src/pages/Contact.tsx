import "../css/Contact.css";

const Contact = () =>{
 return (
    <div className="contact-container">
      <div className="contact-card">
        <h1 className="contact-title">Contact Us</h1>

        <p className="contact-subtext">
          Have questions or feedback? Reach out to us.
        </p>

        <form className="contact-form">
          <input
            type="text"
            placeholder="Your Name"
            className="input"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="input"
          />

          <textarea
            placeholder="Your Message"
            className="textarea"
            rows={5}
          ></textarea>

          <button className="btn-submit">Send Message</button>
        </form>

        <div className="contact-info">
          <p>Email: support@blog.com</p>
          <p>Phone: +91 9876543210</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;