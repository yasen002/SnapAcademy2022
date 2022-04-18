import React from "react";
import Layout from "./layout/Layout";
import "./About.scss";
import aboutUs_img from "../assets/img/aboutUs-min.jpg";
export default function About() {
  return (
    <Layout>
      <div className="about">
        <p className="section-header">About Us</p>
        <img src={aboutUs_img} alt="" />
        <div className="about--value">
          <p className="heading-secondary">
            Our purpose is to nourish people and the planet. We’re a
            purpose-driven company that aims to set the standards of excellence
            for food retailers. Quality is a state of mind at Whole Foods
            Market.--WholeFood market
          </p>
        </div>
      </div>
    </Layout>
  );
}
