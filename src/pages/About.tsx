import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <p>
        At <strong>XYZ</strong>, we believe in the power of technology to transform businesses. Founded in [Year], our company has grown into a full-service web development agency dedicated to helping businesses of all sizes succeed online.
      </p>
      <p>
        Our team of passionate and skilled professionals brings years of experience and a deep understanding of the latest industry trends to each project. We pride ourselves on delivering high-quality, customized solutions that meet the unique needs of each client. Our approach is collaborative and client-focused, ensuring that we fully understand your goals and objectives before we begin.
      </p>
      <p>
        Whether you're looking to create a brand-new website, redesign your existing site, or enhance your online presence, we're here to help. Our mission is to empower businesses to achieve their digital goals through innovative and effective web solutions. We strive to build long-term relationships with our clients by delivering exceptional service and support at every stage of the development process.
      </p>
    </div>
  );
};

export default About;
