import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>
        We’d love to hear from you! Whether you have a question about our services, need assistance with your project, or want to discuss a potential collaboration, feel free to reach out to us. 
      </p>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;

