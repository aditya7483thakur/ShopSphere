import React from "react";
import "./About.css";
import AboutPage from "../../assets/AboutPage.jpg";
import dot from "../../assets/dot-bg.png";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { BiRecycle } from "react-icons/bi";

const About = () => {
  return (
    <>
      <section className="section__container choose__container" id="choose">
        <img className="choose__bg" src={dot} alt="bg" />
        <div className="choose__content">
          <h2 className="section__header">Why Choose Us</h2>
          <p className="section__subheader">
            Immerse yourself in a world of style, innovation, and elegance as
            you browse our curated collection of fashion, electronics, jewelry,
            and more
          </p>
          <div className="choose__grid">
            <div className="choose__card">
              <span>
                <CiDeliveryTruck />
              </span>
              <h4>Fast & Free Shipping</h4>
              <p>
                Shop now and enjoy the convenience of swift delivery for every
                purchase on our e-commerce platform
              </p>
            </div>
            <div className="choose__card">
              <span>
                <IoBagHandleOutline />
              </span>
              <h4>Easy to Shop</h4>
              <p>
                Explore a world where sophistication meets simplicity, and
                redefine your space with ease
              </p>
            </div>
            <div className="choose__card">
              <span>
                <TfiHeadphoneAlt />
              </span>
              <h4>24/7 Support</h4>
              <p>
                Experience peace of mind knowing that our dedicated team is
                available round the clock
              </p>
            </div>
            <div className="choose__card">
              <span>
                <BiRecycle />
              </span>
              <h4>Hassle Free Returns</h4>
              <p>
                We believe in the perfect match, and if it doesn't quite fit, we
                make returning items a breeze
              </p>
            </div>
          </div>
        </div>
        <div className="choose__image">
          <img src={AboutPage} alt="Image.." style={{ scale: "0.8" }} />
        </div>
      </section>
    </>
  );
};

export default About;
