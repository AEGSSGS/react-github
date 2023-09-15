import React from "react";
import obj from "./data";
export default function Car() {
  return (
    <>
      {obj.map((items) => {
        return (
          <div className="card" key={items.id}>
            <div className="card__img-box" >
              <img className="card__img" src={items.img} alt="Hijoma" />
            </div>

            <div className="card__text-box">
              <h3 className="card__title">{items.title}</h3>
              <p className="card__text">
                {items.text}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}
