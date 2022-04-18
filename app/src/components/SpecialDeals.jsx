import React from "react";
import ButtonPrimary from "./ButtonPrimary";
import "./SpecialDeals.scss";
export default function SpecialDeals() {
  return (
    <>
      <section className="special-deals">
        <div className="special-deals--deal-desc">
          <h1 className="heading-primary">
            <span className="heading-primary--top">Now Open On </span>
            <span className="heading-primary--bottom">Saturday</span>
          </h1>
          <p className="heading-secondary">
            We extended our opening hours! Come by our stores and check out our
            special saturday deals
          </p>
          <ButtonPrimary>Saturday Deals</ButtonPrimary>
        </div>
        <section className="store-hours">
          <p className="section-header">Hours</p>
          <ul>
            <li>monday - friday</li>
            <li>11.00 am - 8.00 pm</li>
            <li>Saturday</li>
            <li>12.00 noon - 7.00 pm</li>
          </ul>
        </section>
      </section>
    </>
  );
}
