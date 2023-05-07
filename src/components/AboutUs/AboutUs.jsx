import React from "react";
import "./AboutUs.css";

import aboutUsElements from "../../assets/aboutUs.json";

const AboutUs = () => {
  return (
    <>
      <div className="aboutUs-conatiner">
        <div className="left-side-aboutUs">
          <h1>Here are some services that we provide:</h1>
          <p>
            We offer a wide range of IT services, including web development,
            UX/UI, software development, digital marketing, and more. Our team
            has extensive experience in these areas and is equipped to handle
            any project, no matter how big or small.
          </p>
          {aboutUsElements.map((element) => (
            <div key={element.id}>
              <h2>{element.title}</h2>
              <p>{element.Bigdescription}</p>
              <div className="about-us-cards">
                <div className="about-us-card-elements">
                  <img src={element.image} alt="logo" />
                  <div className="about-us-card">
                    <h3>{element.title}</h3>
                    <a href={element.link} className="gray-400">
                      Click me
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="right-side-aboutUs">
          <div>
            <h1>Meet the team that is behind all these services:</h1>
            <p>
              At the heart of our team is a commitment to excellence. We strive
              to be the best at what we do and to continuously improve our
              skills and services. Our team is constantly learning and growing,
              staying up-to-date with the latest trends and technologies in our
              field. We believe that teamwork is essential to our success. We
              work closely together, sharing ideas and supporting each other to
              achieve our common goals. Our team is dedicated to delivering the
              best possible results for our clients, and we take pride in the
              work that we do.
            </p>
          </div>
          <div>
            <img src="../../team.png" alt="Placeholder" className="big-image" />
          </div>
          <div className="px-14 py-8">
            <h1 className="text-4xl mb-16">Visit our blog site as well!</h1>
            <p>
              We believe that staying up-to-date with the latest trends and
              technologies in the IT industry is essential to providing the best
              possible services to our clients. That's why we've created a blog
              that is dedicated to providing valuable insights and information
              on a variety of topics related to IT.
            </p>
            <p>
              Our blog features articles on the latest tech news, software and
              hardware updates, cybersecurity, and more. We also provide helpful
              tips and tricks to help you make the most of your IT solutions, as
              well as in-depth tutorials to guide you through complex processes.
            </p>
            <p>
              Whether you're a business owner looking to stay ahead of the
              competition, an IT professional looking to expand your knowledge,
              or just someone who is interested in the world of technology, our
              blog has something for you. We're constantly updating our content,
              so be sure to check back often for the latest insights and
              information.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
