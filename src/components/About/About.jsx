import React from 'react';
import Skills from './Skills';
import './About.css';

function About() {
  return (
    <section id="about-me" className="section-about">
      <div className="content-about">
        <div className="main-content-about">
          <h2 className="subtitle">Sobre mim</h2>
          <p className="about-me-text">
            Meu nome é Enzo, tenho 20 anos de idade e sou de Jundiaí, SP. Minha jornada no
            desenvolvimento web começou em setembro de 2022, onde assisti há um evento que me
            despertou interesse na área. Decidi fazer um curso, que começou em janeiro de 2023,
            com o objetivo de me tornar um desenvolvedor full-stack, desde então tenho me dedicado
            a aprender e aprimorar minha habilidades em diversas tecnologias, tais como:
          </p>
        </div>
        <Skills />
      </div>
    </section>
  );
}

export default About;
