import React from "react";
import "./Landing.scss";
import uberEats_img from "../assets/img/delivery/uberEats.png";
import doordash_img from "../assets/img/delivery/doordash.png";
import postmate_img from "../assets/img/delivery/postmate.png";
import grubhub_img from "../assets/img/delivery/grubhub.png";
import ButtonPrimary from "./ButtonPrimary";
export default function Landing() {
  return (
    <div className="landing-page">
      <header className="landing-page--heading">
        <div className="text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--top">Eat Simple</span>
            <span className="heading-primary--bottom">Eat Healthy</span>
          </h1>
          <p className="heading-secondary">
            We server simple healthy food that nutures your body and improves
            your mood
          </p>
          {/* <a href="#" className="btn-primary btn-animated">
            Order Online
          </a> */}
          <ButtonPrimary>Order Online</ButtonPrimary>
        </div>
      </header>
      <section className="landing-page--delivery">
        <p>We Deliver</p>
        <div className="landing-page--delivery--vendors">
          <img src={uberEats_img} alt="uberEats delivery" />
          <img src={doordash_img} alt="Doordash delivery" />
          <img src={postmate_img} alt="PostMate delivery" />
          <img src={grubhub_img} alt="GrubHub delivery" />
        </div>
      </section>
    </div>
  );
}
