import React from "react";
import { useParams } from "react-router-dom";

const Param = (props) => {
  const { id } = useParams();
  return (
    <section>
      <h1> bem-vindo, Param {id}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </section>
  );
};

export default Param;
