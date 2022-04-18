import React from "react";
import "./PromoteItem.scss";
import promoteItem__img from "../assets/img/vege_skewer.jpg";
import ButtonPrimary from "./ButtonPrimary";
export default function PromoteItem() {
  return (
    <section className="promote-item">
      <p className="promote-item--header section-header">
        Build your healthy delicious meal
      </p>
      <div>
        <img src={promoteItem__img} alt="promoted item"></img>
        <p className="promote-item--desc heading-secondary">
          Who can resist food on sticks? All stixs are made fresh to order. With
          select choices of meats, veggies, tofu and seafood.
        </p>
        <ButtonPrimary ur="/order">Order Now</ButtonPrimary>
      </div>
    </section>
  );
}
