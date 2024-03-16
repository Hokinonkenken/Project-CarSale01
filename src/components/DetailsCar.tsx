import React from "react";
import cars from "./data/cars.json";
import { useParams, useNavigate } from "react-router-dom";
const DetailsCar = (props) => {
  const { cid } = useParams();
  const navigate = useNavigate();
  for (const car of cars) {
    if (car.id == cid) {
      return (
        <>
          <h1>{car.name}</h1>
          <p>{car.brand}</p>
          <p>{car.year}</p>
          <a href="#" className="btn btn-primary" onClick={() => navigate(-1)}>
            <i class="bi bi-arrow-return-left" /> Back
          </a>
        </>
      );
    }
  }
};
export default DetailsCar;
