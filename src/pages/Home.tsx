import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1>Welcome to Our Professional Web Development Services</h1>
      <p>
        At <strong>XYZ</strong>, we specialize in creating stunning and functional websites that elevate your online presence. Our team of experienced developers and designers work tirelessly to deliver customized solutions that meet your unique needs and drive your business forward.
      </p>
      <p>
        Our services range from custom web design to responsive development, ensuring that your site looks great on all devices. We also provide comprehensive e-commerce solutions and SEO optimization to help you reach a broader audience.
      </p>
      <p>
        Join us on a journey to create an impactful online presence. Whether you're starting from scratch or looking to revamp your existing site, we're here to help you every step of the way.
      </p>
      <a href="#about" className="cta-button">Learn More About Us</a>
    </div>
  );
};

export default Home;

