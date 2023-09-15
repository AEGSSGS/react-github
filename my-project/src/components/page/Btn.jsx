import React from "react";

export default function Btn({children}) {
  return (
    <>
      <a href="#hero" className="btn ">
        {children}
      </a>
    </>
  );
}
