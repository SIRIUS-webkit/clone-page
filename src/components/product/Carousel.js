import React, { useState, useEffect } from "react";
import { gsap, Power2 } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";

const Carousel = ({ children }) => {
  const [counter, setCounter] = useState(1);
  const [pause, setPause] = useState(false);
  const content = children;
  const t1 = new gsap.timeline();

  const handleNext = () => {
    if (counter !== content.length) {
      setCounter(counter + 1);
    } else {
      setCounter(1);
    }
  };

  const handlePage = (page) => {
    setCounter(page);
  };

  const handleMouse = () => {
    setPause(!pause);
  };

  useEffect(() => {
    let interval = setInterval(() => {
      if (!pause) {
        handleNext();
      } else {
        clearInterval(interval);
      }
      t1.from(
        ".image",
        0.5,
        { scale: 0.5, opacity: 0, ease: Power2.easeInOut },
        "1"
      );
    }, 4000);
    return () => clearInterval(interval);
  });

  return (
    <div className="carousel">
      <div
        className="slide"
        onMouseEnter={handleMouse}
        onMouseLeave={handleMouse}
      >
        {content.map((item, index) => (
          <div
            className={counter - 1 === index ? "show image" : "not-show"}
            key={index}
          >
            {item}
          </div>
        ))}
      </div>

      <div className="page">
        {content.map((item, index) => (
          <span
            key={index}
            className={counter - 1 === index ? "dot active" : "dot"}
            onClick={() => handlePage(index + 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
