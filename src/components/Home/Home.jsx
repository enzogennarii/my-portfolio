import React from 'react';
import Button from '../utils/Button';
import './Home.css';

function Home() {
  return (
    <section id="home" className="section-home">
      <div className="content-home">
        <div className="main-content">
          <h1 className="title-page">Olá! Eu sou 👋<br/>
            <span id="my-name">Enzo Gennari,</span><br/>
            Desenvolvedor Web FullStack em desenvolvimento.
          </h1>
          <img className="avatar" src="src/assets/avatar.jpeg" alt="Avatar de Enzo" />
        </div>
        <div className="social-medias">
          <Button
            socialMedia="Linkedin"
          />
          <Button
            socialMedia="GitHub"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
