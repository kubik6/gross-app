import React, {} from 'react'
import '@/pages/about/about.scss'

const About: React.FC = () => {

    return (
        <div className="about-us">
      <section className="about-us__header">
        <h1 className="about-us__title">About Us</h1>
        <p className="about-us__subtitle">Learn more about our journey and mission</p>
      </section>

      <section className="about-us__content">
        <div className="about-us__block">
          <h2 className="about-us__block-title">Our Story</h2>
          <p className="about-us__block-text">
            Founded in 2020, we started with a simple idea: to make technology accessible and enjoyable for everyone.
            Our team of passionate creators and innovators work tirelessly to bring you high-quality solutions.
          </p>
        </div>

        <div className="about-us__block">
          <h2 className="about-us__block-title">Our Mission</h2>
          <p className="about-us__block-text">
            We aim to bridge the gap between people and technology through intuitive design and reliable performance.
            Our commitment is to deliver excellence with every product and service we offer.
          </p>
        </div>

        <div className="about-us__block">
          <h2 className="about-us__block-title">Our Team</h2>
          <p className="about-us__block-text">
            Our diverse team includes designers, developers, and strategists who are dedicated to creating impactful
            digital experiences.
          </p>
        </div>
      </section>

      <section className="about-us__footer">
        <p className="about-us__footer-text">Thank you for visiting us and being a part of our story.</p>
      </section>
    </div>
    )

}

export default About