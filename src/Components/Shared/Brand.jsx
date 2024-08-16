import React from "react";
import BootEx from "../../assets/BootEx.webp";
import codeCarn from "../../assets/codeCarn.webp";
import dev from "../../assets/dev.webp";
import has from "../../assets/has.webp";
export default function Brand() {
  return (
    <div className="brand-section">
      <div className="brand-imgs">
        <img src={BootEx} alt="" />
        <img src={codeCarn} alt="" />
        <img src={dev} alt="" />
        <img src={has} alt="" />
      </div>
    </div>
  );
}
