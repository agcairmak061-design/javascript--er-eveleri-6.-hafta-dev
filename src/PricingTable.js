import React from "react";
import PricingCard from "./PricingCard";
import "./Pricing.css";

function PricingTable() {
  return (
    <div className="pricing-container">

      <PricingCard
        title="Başlangıç"
        price="₺99 / ay"
        features={[
          "1 Proje",
          "5GB Depolama",
          "Email Destek"
        ]}
      />

      <PricingCard
        title="Profesyonel"
        price="₺199 / ay"
        highlight={true}
        features={[
          "10 Proje",
          "50GB Depolama",
          "Öncelikli Destek"
        ]}
      />

      <PricingCard
        title="Kurumsal"
        price="₺399 / ay"
        features={[
          "Sınırsız Proje",
          "200GB Depolama",
          "7/24 Destek"
        ]}
      />

    </div>
  );
}

export default PricingTable;