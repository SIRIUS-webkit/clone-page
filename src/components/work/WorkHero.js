import React, { useEffect } from "react";
import { data } from "../Data/data";
import { gsap, Power2 } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";

const WorkHero = () => {
  const firstArray = ["Transport & Logistics", "Co-incubation", "Telco"];
  const secondArray = [
    "Food & Beverage",
    "Backing & Finance",
    "Healthcare",
    "Others",
  ];
  const thirdArray = [
    "Media",
    "Lifestyle",
    "Retail & Entertainment",
    "Start-ups",
  ];
  const t1 = new gsap.timeline();

  useEffect(() => {
    t1.from(
      ".hero-title",
      0.5,
      { y: 30, opacity: 0, ease: Power2.easeInOut },
      ".4"
    ).from(
      ".main-grid",
      0.5,
      { y: 30, opacity: 0, ease: Power2.easeInOut },
      ".5"
    );
  }, []);
  return (
    <>
      <section className="work-hero-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero-title">
                <p className="first-title">Here’s 5% of</p>
                <p className="second-title">our published work.</p>
                <p className="third-title">See 100% of our power.</p>
              </div>
            </div>
          </div>
          <div className="row main-grid">
            <div className="col-lg-9">
              <div className="main-cover-grid d-flex justify-content-between align-items-center">
                <div className="first-grid">
                  <ul>
                    <li className="special">
                      <a href="#">
                        <span className="red-line">
                          &nbsp;&nbsp;&nbsp;&nbsp;All
                        </span>
                      </a>
                    </li>
                    {firstArray.map((item) => {
                      return (
                        <li key={item}>
                          <a href="#">{item}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="second-grid">
                  <ul>
                    {secondArray.map((item) => {
                      return (
                        <li key={item}>
                          <a href="#">{item}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="third-grid">
                  <ul>
                    {thirdArray.map((item) => {
                      return (
                        <li key={item}>
                          <a href="#">{item}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="wrapper-box">
                <p className="wrapper-box-title">legend</p>
                <div className="d-flex justify-content-between align-items-center small-wrapper-box">
                  <ul>
                    {data.map((item) => {
                      return (
                        <div key={item.id}>
                          {item.id < 3 && (
                            <li className="d-flex justify-content-between align-items-center">
                              <img src={item.img} alt={item.name} />
                              &nbsp;&nbsp;&nbsp;
                              <span>{item.name}</span>
                            </li>
                          )}
                        </div>
                      );
                    })}
                  </ul>
                  <ul>
                    {data.map((item) => {
                      return (
                        <div key={item.id}>
                          {item.id > 2 && (
                            <li className="d-flex justify-content-between align-items-center">
                              <img src={item.img} alt={item.name} />
                              &nbsp;&nbsp;&nbsp;
                              <span>{item.name}</span>
                            </li>
                          )}
                        </div>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkHero;
