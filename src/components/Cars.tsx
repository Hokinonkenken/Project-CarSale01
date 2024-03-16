import React from "react";
import cars from "./data/cars.json";
const Cars = () => {
  return (
    <div className="row align-items-start">
      {cars &&
        cars.map(({ id, name, brand, year }) => (
          <div className="col" key={id}>
            <div className="card" style={{ width: "24rem" }}>
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">
                  {brand} {year}
                </p>
                <a href={`/c/${id}/`} className="btn btn-primary">
                  details
                </a>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Cars;
