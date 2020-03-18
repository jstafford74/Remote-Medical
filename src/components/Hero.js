import React from "react";

import logo from "../assets/logo.svg";

const Hero = () => (
  <div className="text-center hero my-5">
    <img className="text-align-center" src={logo} alt="Melanoscan logo" />
    <h1 className="mb-4">Sheard & Drugge</h1>
    <h2 className="mb-4">TeleDermatology</h2>

    <p className="lead">
      This is a secure website constructed for transmission of images for
      purposes of remote diagnostics and treatment
    </p>
  </div>
);

export default Hero;
