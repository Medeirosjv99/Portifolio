import React from "react";
import { IonIcon } from "@ionic/react";
import {
  logoFacebook,
  logoLinkedin,
  logoInstagram,
  callOutline,
  mailOutline,
} from "ionicons/icons";

function Bio() {
  return (
    <aside id="bio-container">
      <section id="bio-left">
        <h2>João Vitor</h2>
        <img id="bio-image" src="img/1747954161608.jpg" alt="João Vitor" />
        <p>
          Olá, meu nome é João Vitor e sou{" "}
          <span className="highlight">Desenvolvedor FullStack</span>.
        </p>
        <p id="welcome-text">Seja bem-vindo!</p>
        <ul id="social-container">
          <li>
            <a href="#"><IonIcon icon={logoFacebook} /></a>
          </li>
          <li>
            <a href="#"><IonIcon icon={logoLinkedin} /></a>
          </li>
          <li>
            <a href="#"><IonIcon icon={logoInstagram} /></a>
          </li>
        </ul>
      </section>

      <section id="bio-right">
        <article className="skills-box">
          <h3 className="skills-title">Contato</h3>
          <ul className="skills-list">
            <li><IonIcon icon={callOutline} /><span>+55 43 9 8485-8677</span></li>
            <li><IonIcon icon={mailOutline} /><span>medeirosjv.963@gmail.com</span></li>
          </ul>
        </article>

        <article className="skills-box">
          <h3 className="skills-title">LinkedIn</h3>
          <ul className="skills-list">
            <li><IonIcon icon={logoLinkedin} /><span>linkedin.com/in/medeirosjv99</span></li>
          </ul>
        </article>

        <article className="skills-box">
          <h3 className="skills-title">Instagram</h3>
          <ul className="skills-list">
            <li><IonIcon icon={logoInstagram} /><span>@medeirosjv99</span></li>
          </ul>
        </article>
      </section>
    </aside>
  );
}

export default Bio;