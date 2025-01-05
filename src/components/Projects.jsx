import React from "react";
import "./projects.css";
import resumeGod from "../assets/resumeGod.png";
import movie from "../assets/movie.png";

function Projects() {
  return (
    <div>
      <section id="projects">
        <div className="container">
          <div className="row">
            <h1 className="section__title" id="section__title">
              Here are some of my <span className="orange">projects.</span>
            </h1>
            <ul className="project__list">
              <li className="project" id="project">
                <div className="project__wrapper">
                  <img
                    src={resumeGod}
                    alt="resume God mockup img"
                    className="project__img"
                  />
                  <div className="project__wrapper--background"></div>
                  <div
                    className="project__description"
                    id="project__description"
                  >
                    <h3 className="project__description--title">
                      Ai powered resume builder - Resume God
                    </h3>
                    <h4 className="project__description--sub-title">
                      Html, CSS, JavaScript, ReactJs, OpenAi api, Node and
                      Express
                    </h4>
                    <p className="project__description--para">
                      Land your dream job with Resume God. Our AI-powered resume
                      builder creates impactful resumes that highlight your
                      skills and experience.
                    </p>
                    <div className="projects__description--links">
                      <a
                        href="https://resumegodai-two.vercel.app/"
                        className="project__description--link"
                      >
                        <i
                          className="fas fa-link project__social--link"
                          aria-hidden="true"
                        ></i>
                      </a>
                      {/* <a
                        href="https://github.com/scottdialo"
                        className="project__description--link"
                      >
                        <i
                          className="fab fa-github project__social--link"
                          aria-hidden="true"
                        ></i>
                      </a> */}
                    </div>
                  </div>
                </div>
              </li>
              <li className="project">
                <div className="project__wrapper">
                  <img
                    src={movie}
                    alt="resume God mockup img"
                    className="project__img"
                  />
                  <div className="project__wrapper--background"></div>
                  <div className="project__description">
                    <h3 className="project__description--title">
                      Watch movies trailers
                    </h3>
                    <h4 className="project__description--sub-title">
                      Html, CSS, JavaScript, ReactJs, Node, firebase, Api and
                      Express
                    </h4>
                    <p className="project__description--para">
                      Your ultimate destination to watch all classics and modern
                      movies trailers for FREE.
                    </p>
                    <div className="projects__description--links">
                      <a
                        href="https://kahirde.com/"
                        className="project__description--link"
                      >
                        <i
                          className="fas fa-link project__social--link"
                          aria-hidden="true"
                        ></i>
                      </a>
                      {/* <a
                        href="https://github.com/scottdialo"
                        className="project__description--link"
                      >
                        <i
                          className="fab fa-github project__social--link"
                          aria-hidden="true"
                        ></i>
                      </a> */}
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
