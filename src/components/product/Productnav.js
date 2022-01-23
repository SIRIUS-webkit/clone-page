import React, { useState, useEffect } from "react";
import { gsap, Power2 } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import { NavSocialData } from "../Data/navbardata";

const Productnav = () => {
  const [toggle, setToggle] = useState(true);
  const t1 = new gsap.timeline();
  const t2 = new gsap.timeline();

  useEffect(() => {
    t1.from(
      ".logo",
      0.5,
      { y: -30, opacity: 0, ease: Power2.easeInOut },
      ".5"
    ).from(
      ".nav-links",
      0.5,
      { y: -30, opacity: 0, ease: Power2.easeInOut },
      ".5"
    );
  }, []);

  function handlerChange() {
    // t1.kill();
    setToggle(!toggle);
    // t2.from(
    //   ".nav-links li ",
    //   0.8,
    //   { y: 10, opacity: 0, ease: Power2.easeInOut },
    //   ".3"
    // );
  }
  return (
    <>
      <section className="product-nav">
        <nav>
          <a className="logo" href="/">
            Back to Work
          </a>
          <button
            type="button"
            className={toggle ? "nav-toggler" : "nav-toggler toggle-active"}
            onClick={handlerChange}
          >
            <span></span>
          </button>
          <ul className={toggle ? "nav-links" : "nav-links active"}>
            <li>
              <button className="request-btn">Request a quote</button>
            </li>
            <li>
              <a href="#let" className="hidden-link">
                Let's chat
              </a>
            </li>
            <li>
              <div className="navbar-social-link">
                {NavSocialData.map((item) => {
                  return (
                    <a href={item.link} key={item.id}>
                      <img src={item.img} alt={item.name} />
                    </a>
                  );
                })}
              </div>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Productnav;
