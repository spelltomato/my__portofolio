import "./landingPage.css";
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import semiCircle from "../assets/semiCircle.svg";
import circle from "../assets/circle.svg";
import squiggly from "../assets/squiggly.svg";
import triangle from "../assets/triangle.svg";
import resume from "../assets/Thierno_Dialo__Resume.pdf";

function LandingPage() {
  const [modal, setModal] = useState(false);
  // Email js setup for  contact page
  const form = useRef();

  //function to close the modal
  function closeSuccessModal() {
    console.log("X clicked");
    document.querySelector(".modal__exit").addEventListener("click", () => {
      document
        .querySelector(".modal__overlay--success")
        .classList.remove("modal__overlay--visible");
    });
  }

  useEffect(() => {
    closeSuccessModal(); //call this function when user click on X
  }, []);

  //Toggle close / open modal
  const openModal = () => {
    console.log("nav__contact--btn...");
    document.querySelector(".mail__btn").addEventListener("click", (event) => {
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

  const sendEmail = (e) => {
    e.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_USER_ID
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          // throw new Error("error");

          if (result.status !== 200) {
            // console.log(result);
            //if result is not successful show loading
            loading.classList.add("modal__overlay--visible");
          } else {
            loading.classList.add("modal__overlay--visible"); //even if successful still show loading for 3sec

            setTimeout(() => {
              loading.classList.remove("modal__overlay--visible"); // after 3sec remove loading
              success.classList.add("modal__overlay--visible"); //now show success page.

              form.current.reset();
            }, 1000);
          }
        },
        (error) => {
          console.error("Email sending failed:", error.text);
        }
      )
      .catch(() => {
        alert(
          "The email service is down, contact me directly at tsdialo6@gmail.com"
        );
      });
  };

  // Mouse move event / animation
  const scaleFactor = 1 / 5;
  const moveBackground = (event) => {
    const shape = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
    // console.log(x, y);
    for (let i = 0; i < shape.length; ++i) {
      const isOdd = i % 2 !== 0;
      const boolInt = isOdd ? -1 : 1;
      shape[i].style.transform = `translate(${x * boolInt}px, ${
        y * boolInt
      }px)`;
    }
  };

  return (
    <div>
      <section id="landingPage" onMouseMove={moveBackground}>
        <header className="header">
          <div className="header__content">
            <h1 className="title">Hey</h1>
            <h1 className="title title__secondary">
              <strong className="orange"> I'm Thierno.</strong>
            </h1>
            <p className="header__para">
              I'm a{" "}
              <strong className="orange"> Frontend Software Engineer</strong>{" "}
              with a strong passion for building web applications with great
              user experiences. <br></br> Here's a bit{" "}
              <strong className="orange"> about me.</strong>
            </p>
            <div className="social__list">
              <a
                title="linkedin profile"
                href="https://www.linkedin.com/in/thierno-dialo/"
                className="click social__link"
                target="_blank"
              >
                <i
                  className="fab fa-linkedin-in social__icon"
                  aria-hidden="true"
                ></i>
              </a>
              {/* <a
                href="https://github.com/scottdialo"
                title="github logo"
                className="click social__link"
              >
                <i
                  className="fab fa-github social__icon"
                  aria-hidden="true"
                ></i>
              </a> */}
              {/* <a
                title="email-envelope"
                href="mailto:spelltomato@gmail.com"
                className="click social__link"
              >
                <i
                  className="far fa-envelope social__icon click"
                  aria-hidden="true"
                ></i>
              </a> */}
              <a
                title="Resume"
                href={resume}
                target="_blank"
                className="social__link click"
              >
                <i
                  className="fas fa-file-pdf social__icon"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
          </div>
        </header>
        <a href="#">
          <button className="mail__btn click" onClick={openModal}>
            <i className="fa-solid fa-envelope"></i>
          </button>
        </a>
        <a href="#projects" className="scroll">
          <div className="scroll__icon click"></div>
        </a>
      </section>
      {/* ANIMATIONS ICONS SECTION  */}
      <img src={semiCircle} className="shape shape--0" />
      <img src={circle} className="shape shape--1" />
      <img src={squiggly} className="shape shape--2" />
      <img src={circle} className="shape shape--3" />
      <img src={triangle} className="shape shape--4" />
      <img src={circle} className="shape shape--5" />
      <img src={squiggly} className="shape shape--6" />
      <img src={circle} className="shape shape--7" />
      <img src={semiCircle} className="shape shape--8" />
      <div className="modal" id="modal">
        <div className="modal__half modal__about">
          <h3 className="modal__title modal__title--about">
            Here's a bit <span className="orange click"> about me.</span>
          </h3>
          <h4 className="modal__sub-title modal__sub-title--about">
            Frontend Software Engineer
          </h4>
          <p className="modal__para">
            {" "}
            I'm a{" "}
            <strong className="orange"> Frontend Software Engineer</strong> with
            a strong passion for building web applications with{" "}
            <strong className="orange"> great user experiences.</strong>{" "}
            <br></br> Here's a bit{" "}
            <strong className="orange"> about me.</strong>
            <br></br>I currently work on extremely difficult engineering
            problems and learn from a team consisting of some of the most
            <strong className="orange"> talented </strong>and{" "}
            <strong className="orange">experienced</strong> software engineers
            every day.
          </p>
          <div className="modal__languages">
            <figure className="modal__language">
              <img
                className="modal__language--img"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png"
                alt="HTML"
              />
              <span className="language__name">HTML</span>
            </figure>
            <figure className="modal__language">
              <img
                className="modal__language--img"
                src="https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png"
                alt="CSS"
              />
              <span className="language__name">CSS</span>
            </figure>
            <figure className="modal__language">
              <img
                className="modal__language--img"
                src="https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png"
                alt="Javascript"
              />
              <span className="language__name">JAVASCRIPT</span>
            </figure>
            <figure className="modal__language">
              <img
                className="modal__language--img"
                src="https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png"
                alt="Python3"
              />
              <span className="language__name">PYTHON</span>
            </figure>
            <figure className="modal__language">
              <img
                className="modal__language--img"
                src="https://cdn.iconscout.com/icon/free/png-512/free-node-js-logo-icon-download-in-svg-png-gif-file-formats--nodejs-wordmark-programming-language-pack-logos-icons-1174937.png"
                alt="NodeJs"
              />
              <span className="language__name">NODE JS</span>
            </figure>
            <figure className="modal__language">
              <img
                className="modal__language--img"
                src="https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png"
                alt="ReactJs"
              />
              <span className="language__name">REACT JS</span>
            </figure>
            {/* <figure className="modal__language">
              <img
                className="modal__language--img"
                src="https://cdn.iconscout.com/icon/free/png-256/typescript-3521774-2945272.png"
                alt="ReactJs"
              />
            </figure> */}
          </div>
        </div>
        {/* CONTACT FORM */}

        <div className="modal__half modal__contact">
          {" "}
          <i
            className="fas fa-times modal__exit click"
            onClick={closeModal}
          ></i>
          <h3 className="modal__title--contact modal__title">
            Let's have a chat!
          </h3>
          <h3 className="modal__sub-title modal__sub-title--contact">
            I'm currently open to new opportunities.
          </h3>
          <form ref={form} onSubmit={sendEmail} id="contact__form">
            <div className="form__item">
              <label htmlFor="name" className="form__item--label">
                Name
              </label>
              <input
                type="text"
                className="input"
                name="user_name"
                autoFocus={true}
                required={true}
              />
            </div>

            <div className="form__item">
              <label htmlFor="email" className="form__item--label">
                E-mail
              </label>
              <input
                type="email"
                className="input"
                name="user_email"
                required
              />
            </div>
            <div className="form__item">
              <label htmlFor="message" className="form__item--label">
                Message
              </label>
              <textarea
                type="text"
                className="textarea"
                name="user_message"
                rows={6}
                required
              />
            </div>
            <button
              type="submit"
              className="form__submit--btn form__submit"
              id="contact__submit"
            >
              Send it my way
            </button>
          </form>
          <div className="modal__overlay modal__overlay--loading">
            <i className="fas fa-spinner loading__spinner"></i>
          </div>
          <div className="modal__overlay modal__overlay--success">
            Thank you for the message! Looking forward to speaking to you soon.
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
