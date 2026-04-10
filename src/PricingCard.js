import React from "react";

function PricingCard({ title, price, features, highlight }) {
  return (
    <div className={highlight ? "card highlight" : "card"}>
      <h2>{title}</h2>
      <h3>{price}</h3>

      <ul>
        {features.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <button>Satın Al</button>
    </div>
  );
}

export default PricingCard;