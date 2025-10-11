import React, { useEffect, useState } from "react";
import "./nav.css";

function Nav() {
  const [toggleTheme, setToggleTheme] = useState(false);

  //Toggle close / open modal
  const openModal = () => {
    console.log("nav__contact--btn...");
    document
      .querySelector(".nav__contact--btn")
      .addEventListener("click", (event) => {
        document.querySelector("#modal").style.display = "flex";
        document.querySelector("#modal").style.opacity = "1";
        document.querySelector(".nav__wrapper").style.opacity = "0";
        document.querySelector(".header").style.opacity = "0";
      });
  };
  const closeModal = () => {
    document.querySelector(".modal__exit").addEventListener("click", () => {
      document.querySelector(".modal").style.opacity = "0";
      document.querySelector(".nav__wrapper").style.opacity = "1";
      document.querySelector(".header").style.opacity = "1";
    });
  };

  // Toggle contrast
  let contrastToggle = false;

  const toggleContrast = () => {
    contrastToggle = !contrastToggle;
    console.log(contrastToggle);

    console.log("contrast clicked");
    if (contrastToggle) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  };
  // useEffect(() => {
  //   if (!toggleTheme) {
  //     setToggleTheme(!toggleTheme);
  //   }
  // }, []);
  // console.log(toggleTheme);
  return (
    <div className="nav__container">
      <nav className="nav__wrapper">
        <div className="name__logo--wrapper">
          <a href="#" alt="Name logo" className="name__logo">
            Scott T Dialo
          </a>
        </div>
        <ul className="nav__link--list">
          <li className="nav__link">
            <a
              href="#"
              className="link__hover-effect nav__link--anchor link__hover--effect link__hover-effect--black"
            >
              About
            </a>
          </li>
          <li className="nav__link">
            {" "}
            <a
              href="#project"
              className="link__hover-effect nav__link--anchor link__hover--effect link__hover-effect--black"
            >
              Projects
            </a>
          </li>
          <li className="nav__link">
            {" "}
            <a
              onClick={openModal}
              href="#"
              className="nav__contact--btn link__hover-effect nav__link--anchor link__hover--effect link__hover-effect--black"
            >
              Contact
            </a>
          </li>

          {/* contrast icon link */}
          <li className="nav__link click">
            {" "}
            <a
              href="#"
              className="nav__link--anchor link__hover--effect link__hover-effect--black "
            >
              <i
                className="fa-solid fa-circle-half-stroke contrast__icon"
                onClick={toggleContrast}
              ></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
