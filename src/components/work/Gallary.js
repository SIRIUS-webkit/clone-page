import React, { useState, useEffect } from "react";
import datas from "../Data/data.json";
import { gsap, Power2 } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import { Link } from "react-router-dom";

const Gallary = () => {
  const images = { datas };
  let [typeGrid, setTypeGrid] = useState([
    "image-gallery1",
    "image-gallery2",
    "image-gallery3",
    "image-gallery4",
    "image-gallery6",
    "image-gallery7",
    "image-gallery8",
    "image-gallery5",
    "image-gallery9",
  ]);
  const t1 = new gsap.timeline();
  useEffect(() => {
    t1.from(
      ".grid-item",
      0.5,
      { scale: "0.5", opacity: 0, ease: Power2.easeInOut },
      "0.5"
    );
  }, []);
  return (
    <>
      <div className="gallery-section">
        <div className="">
          <div className="row">
            {typeGrid.map((gridname, index) => {
              return (
                <div key={gridname} className={gridname}>
                  {images.datas.data[index].items.map((item) => {
                    return (
                      <Link to="/product" key={item.id}>
                        <div className={`grid-item ${item.specialClass}`}>
                          <div className="overlay"></div>
                          <p className="gallery-sub">{item.subtitle}</p>
                          <p className="gallery-title">{item.title}</p>
                          <div className="link">
                            <div
                              className={!item.img1 ? "none" : "wrapper-link"}
                            >
                              <img src={item.img1} alt="app" />
                            </div>
                            <div
                              className={!item.img2 ? "none" : "wrapper-link"}
                            >
                              <img src={item.img2} alt="ui/ux" />
                            </div>
                            <div
                              className={!item.img3 ? "none" : "wrapper-link"}
                            >
                              <img src={item.img3} alt="ui/ux" />
                            </div>
                            <div
                              className={!item.img4 ? "none" : "wrapper-link"}
                            >
                              <img src={item.img4} alt="ui/ux" />
                            </div>
                          </div>
                          <img src={item.source} alt="" />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallary;
