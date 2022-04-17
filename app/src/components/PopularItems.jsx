import React from "react";
import "./PopularItems.scss";
import southwestComboPlate_img from "../assets/img/items/southwest-combo-plate.jpg";
import ButtonPrimary from "./ButtonPrimary";
export default function PopularItems() {
  return (
    <section className="popular-items">
      <h2 className="popular-items--title section-header">Popular Items</h2>
      <div className="popular-items--container">
        <div className="popular-items--container--item">
          <img src={southwestComboPlate_img} alt="southwest-combo-plate" />
          <div className="popular-items--container--item__desc">
            <h3>Southwest Combo Plate</h3>
            <p>
              Freshly grilled beef and vege stixs with crispy buttered fries and
              rice
            </p>
          </div>
          <p>
            <span>&#62;</span>
          </p>
        </div>
        <div className="popular-items--container--item">
          <img src={southwestComboPlate_img} alt="southwest-combo-plate" />
          <div className="popular-items--container--item__desc">
            <h3>Southwest Combo Plate</h3>
            <p>
              Freshly grilled beef and vege stixs with crispy buttered fries and
              rice
            </p>
          </div>
          <p>
            <span>&#62;</span>
          </p>
        </div>{" "}
        <div className="popular-items--container--item">
          <img src={southwestComboPlate_img} alt="southwest-combo-plate" />
          <div className="popular-items--container--item__desc">
            <h3>Southwest Combo Plate</h3>
            <p>
              Freshly grilled beef and vege stixs with crispy buttered fries and
              rice
            </p>
          </div>
          <p>
            <span>&#62;</span>
          </p>
        </div>{" "}
        <div className="popular-items--container--item">
          <img src={southwestComboPlate_img} alt="southwest-combo-plate" />
          <div className="popular-items--container--item__desc">
            <h3>Southwest Combo Plate</h3>
            <p>
              Freshly grilled beef and vege stixs with crispy buttered fries and
              rice
            </p>
          </div>
          <p>
            <span>&#62;</span>
          </p>
        </div>{" "}
        <div className="popular-items--container--item">
          <img src={southwestComboPlate_img} alt="southwest-combo-plate" />
          <div className="popular-items--container--item__desc">
            <h3>Southwest Combo Plate</h3>
            <p>
              Freshly grilled beef and vege stixs with crispy buttered fries and
              rice
            </p>
          </div>
          <p>
            <span>&#62;</span>
          </p>
        </div>{" "}
        <div className="popular-items--container--item">
          <img src={southwestComboPlate_img} alt="southwest-combo-plate" />
          <div className="popular-items--container--item__desc">
            <h3>Southwest Combo Plate</h3>
            <p>
              Freshly grilled beef and vege stixs with crispy buttered fries and
              rice
            </p>
          </div>
          <p>
            <span>&#62;</span>
          </p>
        </div>
      </div>
      <ButtonPrimary animated={false}>View Full Menu</ButtonPrimary>
    </section>
  );
}
