import React from "react";
import "./footer.css";
import scott__logo from "../assets/scott.svg";
import resume from "../assets/Scott_TDialo__Resume.pdf";

function Footer() {
  return (
    <div>
      <footer className="footer__wrapper">
        <div className="row footer__row">
          <a title="arrow" href="#" className="footer__anchor">
            <figure className="footer__logo">
              <img
                src={scott__logo}
                alt="Footer logo"
                className="footer__logo--img"
              />
            </figure>
            <span className="footer__logo--popper">
              Top
              <i className="fas fa-arrow-up"></i>
            </span>
          </a>
          <div className="footer__social--list">
            <a
              href="https://github.com/scottdialo"
              title="github"
              className="link__hover-effect link__hover-effect--white footer__social--link link__hover--effect link__hover-effect--white"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/scottdialo/"
              title="linkedin"
              className="link__hover-effect link__hover-effect--white footer__social--link link__hover--effect link__hover-effect--white"
              target="_blank"
            >
              Linkedin
            </a>
            {/* <a
              href="#"
              onClick={openModal}
              title="email"
              id="contact"
              className="footer__contact--btn link__hover-effect link__hover-effect--white footer__social--link link__hover--effect link__hover-effect--white"
            >
              Contact
            </a> */}
            <a
              href={resume}
              title="resume"
              className="link__hover-effect link__hover-effect--white footer__social--link link__hover--effect link__hover-effect--white"
              target="_blank"
            >
              Resume
            </a>
          </div>
          <div className="footer__copyright">
            Copyright &copy; 2024 Thierno Dialo
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
