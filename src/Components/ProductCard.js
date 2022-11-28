import React from "react";
import { useParams } from "react-router-dom";

function ProductCard() {
  const { id } = useParams();

  return <h1> Product Card - {id}</h1>;
}
export default ProductCard;
