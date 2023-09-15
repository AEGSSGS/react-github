import React from "react";
import person from "../img/person.png"
import Btn from "./Btn";
export default function First_page() {
  return (
    <>
      <div className="hero" id="hero">
        <div className="container hero__container">
          <div className="hero__text-box">
            <h1 className="hero__title">
              Tabiiy davolash usullari yordamida kasalliklardan xalos bo’ling.
            </h1>

            <p className="hero__text">
              Hijoma, manual terapiya, zuluk va turli tabiiy giyohlar eng ko’p
              uchraydigan kasalliklarni yengishda yordam beradi. Sog’ligingizni
              o’z ishining professionallariga ishonib topshiring.
            </p>

            <div href="#honey" className=" hero__btn">
              <Btn>Qabulga yozilish</Btn>
            </div>
          </div>

          <div className="hero__img-box">
            <img className="hero__img" src={person} alt="Person" />
          </div>
        </div>
      </div>
    </>
  );
}
