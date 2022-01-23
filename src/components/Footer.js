import React, { useState, useRef } from "react";
import { TimelineLite, TweenMax, Power3, Power2 } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";

const Footer = () => {
  const [move1, setMove1] = useState(false);
  const [move2, setMove2] = useState(false);
  const [move3, setMove3] = useState(false);
  const [move4, setMove4] = useState(false);
  let redarrow1 = useRef(null);
  let redarrow2 = useRef(null);
  let redarrow3 = useRef(null);
  let redarrow4 = useRef(null);
  let first = useRef(null);
  let second = useRef(null);
  let third = useRef(null);
  let fourth = useRef(null);
  const t1 = new TimelineLite();

  function domove1() {
    setMove1(true);
  }
  function goleave1() {
    setMove1(false);
  }
  function domove2() {
    setMove2(true);
  }
  function goleave2() {
    setMove2(false);
  }
  function domove3() {
    setMove3(true);
  }
  function goleave3() {
    setMove3(false);
  }
  function domove4() {
    setMove4(true);
  }
  function goleave4() {
    setMove4(false);
  }
  if (move1) {
    t1.to(first.current, 0.5, { x: 10, ease: Power2.easeInOut }, 0);
  } else {
    t1.to(first.current, 0.5, { x: 0, ease: Power2.easeInOut }, 0);
  }
  if (move2) {
    t1.to(second.current, 0.5, { x: 10, ease: Power2.easeInOut }, 0);
  } else {
    t1.to(second.current, 0.5, { x: 0, ease: Power2.easeInOut }, 0);
  }
  if (move3) {
    t1.to(third.current, 0.5, { x: 10, ease: Power2.easeInOut }, 0);
  } else {
    t1.to(third.current, 0.5, { x: 0, ease: Power2.easeInOut }, 0);
  }
  if (move4) {
    t1.to(fourth.current, 0.5, { x: 10, ease: Power2.easeInOut }, 0);
  } else {
    t1.to(fourth.current, 0.5, { x: 0, ease: Power2.easeInOut }, 0);
  }

  return (
    <>
      <section className="footer-section">
        <div className="container">
          <div className="row">
            <h1>Let's have a chat</h1>
          </div>
          <div className="row footer-wrapper">
            <div className="col-lg-3 left-line expand-right animate-foot">
              <h3 ef={redarrow1} onMouseOver={domove1} onMouseLeave={goleave1}>
                Build{" "}
                <img
                  ref={first}
                  src="https://www.codigo.co/img/icons/arrow-red.svg"
                  alt=""
                />
              </h3>
              <p>Help you build something</p>
            </div>
            <div className="col-lg-3 left-line expand-right animate-foot">
              <h3
                ref={redarrow2}
                onMouseOver={domove2}
                onMouseLeave={goleave2}
                className="move-left"
              >
                Co-incubate{" "}
                <img
                  ref={second}
                  src="https://www.codigo.co/img/icons/arrow-red.svg"
                  alt=""
                />
              </h3>
              <p className="move-left">Co-incubate an idea together</p>
            </div>
            <div className="col-lg-3 left-line expand-right right-line animate-foot">
              <h3 ref={redarrow3} onMouseOver={domove3} onMouseLeave={goleave3}>
                Customise{" "}
                <img
                  ref={third}
                  src="https://www.codigo.co/img/icons/arrow-red.svg"
                  alt=""
                />
              </h3>
              <p>Customise a solution for your business</p>
            </div>
            <div className="col-lg-3 expand-right animate-foot">
              <h3 ef={redarrow4} onMouseOver={domove4} onMouseLeave={goleave4}>
                Organise{" "}
                <img
                  ref={fourth}
                  src="https://www.codigo.co/img/icons/arrow-red.svg"
                  alt=""
                />
              </h3>
              <p>Organise learning sessions with us</p>
            </div>
          </div>
          <div className="row final-wrapper">
            <div className="social-link">
              <a href="#" target="_blank">
                <img
                  src="https://www.codigo.co/img/icons/social-facebook.svg"
                  alt=""
                />
              </a>
              <a href="" target="_blank">
                <img
                  src="https://www.codigo.co/img/icons/social-twitter.svg"
                  alt=""
                />
              </a>
              <a href="#" target="_blank">
                <img
                  src="https://www.codigo.co/img/icons/social-instagram.svg"
                  alt=""
                />
              </a>
              <a href="#" target="_blank">
                <img
                  src="https://www.codigo.co/img/icons/social-linkedIn.svg"
                  alt=""
                />
              </a>
            </div>
            <div className="copy-text">
              <p>Copyright © Codigo - Mobile App Developer Singapore</p>
            </div>
            <div className="address-text">
              <p>
                +65 6455 9790 • 24 Sin Ming Lane, Midview City #04-91 Singapore
                573970
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
