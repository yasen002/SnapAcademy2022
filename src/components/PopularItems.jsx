import React from "react";
import { useSelector } from "react-redux";
import ButtonPrimary from "./ButtonPrimary";
import "./PopularItems.scss";

export default function PopularItems() {
  const items = useSelector((state) => state.popularItems);
  console.log(items);
  return (
    <section className="popular-items">
      <h2 className="popular-items--title section-header">Popular Items</h2>
      <div className="popular-items--container">
        {items &&
          items.map((item) => {
            return (
              <div key={item.id} className="popular-items--container--item">
                <img src={item.img} alt={item.title} />
                <div className="popular-items--container--item__desc">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
                <p>
                  <span>&#62;</span>
                </p>
              </div>
            );
          })}
      </div>
      <ButtonPrimary animated={false} ur="/menu">
        View Full Menu
      </ButtonPrimary>
    </section>
  );
}
