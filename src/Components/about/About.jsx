import React from "react";
import "./about.css";
import ImageContent from "./ImageContent";
// import { useState, useEffect } from "react";

function About() {
  //    console.log(products)
  return (
    <section className="container about">
      <div className="about--description">
        <h2 className = "aboutTitle">About the Samurai King Resting</h2>
        <h3 className="pets">Pets</h3>
        <div className="aboutDescription">
         <p> So how did the classical Latin become so incoherent? According to
          McClintock, a 15th century typesetter likely scrambled part of
          Cicero's De Finibus in order to provide placeholder text to mockup
          various fonts for a type specimen book.So how did the classical Latin
          become so incoherent? According to McClintock, a 15th century
          typesetter likely scrambled part of Cicero's De Finibus in order to
          provide placeholder
          </p><p>
          text to mockup various fonts for a type specimen
          book.So how did the classical Latin become so incoherent? According to
          McClintock.
          </p>
        </div>
      </div>
      <ImageContent />
    </section>
  );
}

export default About;
