import React from "react";
import "./about.css";
import ImageContent from "./ImageContent";
// import { useState, useEffect } from "react";

function About() {
  //    console.log(products)
  return (
    <section className="about">
      <div className="about--description">
        <h2 className="aboutTitle">About the Samurai King Resting</h2>
        <span className="pets">Pets</span>
        <div className="aboutDescription">
          <p>
            {" "}
            So how did the classical Latin become so incoherent? According to
            McClintock, a 15th century typesetter likely scrambled part of
            Cicero's De Finibus in order to provide placeholder text to mockup
            various fonts for a type specimen book.So how did the classical
            Latin become so incoherent? According to McClintock, a 15th century
            typesetter likely scrambled part of Cicero's De Finibus in order to
            provide placeholder
          </p>
          <p>
            text to mockup various fonts for a type specimen book.So how did the
            classical Latin become so incoherent? According to McClintock.
          </p>
        </div>
      </div>
      <div className="about--soldItems">
        <h3 className="aboutThrid">People also buy</h3>
        <ImageContent />

        <div className="details">
          <h4 className="aboutForthTitle">Details</h4>
          <span className="details_size">Size: 1020 x 1020 pixel</span>
          <span className="details_size">Size: 1020 x 1020 pixel</span>
        </div>
      </div>
    </section>
  );
}

export default About;
