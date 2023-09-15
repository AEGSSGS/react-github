import React from 'react'
import Car from './Car'
import Btn from './Btn'
export default function Second_page() {
  return (
    <>
        <div className="services" id="services">
      <h2 className="services__title">Xizmatlar</h2>

      <div className="container services__container">
        
        <Car/>
       

        <div href="#contact" className=" services__btn">
                <Btn>Qabulga yozilish</Btn>
        </div>
      </div>
    </div>
    </>
  )
}
