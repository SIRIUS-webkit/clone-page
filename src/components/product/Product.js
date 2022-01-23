import React, { useEffect } from "react";
import Carousel from "./Carousel";
import { gsap, Power2 } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";

const Product = () => {
  const t1 = new gsap.timeline();

  useEffect(() => {
    t1.from(
      ".product-title",
      0.5,
      { y: 30, opacity: 0, ease: Power2.easeInOut },
      ".3"
    )
      .from(
        ".hide-title",
        0.5,
        { y: 30, opacity: 0, ease: Power2.easeInOut },
        ".3"
      )
      .from(
        ".app-store",
        0.5,
        { y: 30, opacity: 0, ease: Power2.easeInOut },
        ".7"
      )
      .from(
        ".product-details",
        0.5,
        { y: 30, opacity: 0, ease: Power2.easeInOut },
        ".9"
      )
      .from(
        ".key-title",
        0.5,
        { y: 30, opacity: 0, ease: Power2.easeInOut },
        "1"
      )
      .from(
        ".key-description",
        0.5,
        { y: 30, opacity: 0, ease: Power2.easeInOut },
        "1"
      )
      .from(
        ".big-circle",
        0.5,
        { scale: 0.5, opacity: 0, ease: Power2.easeInOut },
        "1"
      );
  }, []);

  return (
    <>
      <section className="product-section">
        <div className="container">
          <div className="hide-title">
            <h1>OCBC Pay Anyone</h1>
          </div>
          <div className="route-btn left">
            <img
              src="https://www.codigo.co/img/ui/arrow-left-white.svg"
              alt=""
            />
          </div>
          <div className="route-btn right">
            <img
              src="https://www.codigo.co/img/ui/arrow-left-white.svg"
              alt=""
            />
          </div>
          <div className="row">
            <div className="col-lg-5">
              <div className="product-title">
                <h1>OCBC Pay Anyone</h1>
              </div>
              <div className="app-store">
                <div className="apple-store">
                  <img
                    src="https://www.codigo.co/img/ui/ico-app_store@2x.png"
                    alt=""
                  />
                  <div>
                    <p>
                      AVAILABLE ON <br /> <span>App store</span>
                    </p>
                    {/* <p>App store</p> */}
                  </div>
                </div>
                <div className="google-store">
                  <img
                    src="https://www.codigo.co/img/ui/ico-google_play-store@2x.png"
                    alt=""
                  />
                  <div>
                    <p>
                      AVAILABLE ON <br /> <span>Google Play</span>
                    </p>
                    {/* <p>Google play</p> */}
                  </div>
                </div>
              </div>
              <div className="product-details">
                <p>
                  You can now pay kopitiam uncles, merchants, peers, and dears
                  with the OCBC Pay Anyone app, and you can even withdraw cash
                  by scanning the QR code at OCBC’s ATMs without your card!
                </p>
              </div>
              <div className="key-features d-flex justify-content-between align-items-center">
                <div className="key-title">
                  <p>Key Features</p>
                </div>
                <div className="key-description">
                  <p>Scan to pay </p>
                  <p>Transfer cash and request payment</p>
                  <p>ATM AR cash withdrawal</p>
                  <p>Access exclusive discounts and promotions</p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 order-first order-lg-last">
              <div className="big-circle">
                <Carousel>
                  <div>
                    <img
                      src="https://cdn.codigo.co/uploads/2021/04/PAO-1@2x.png"
                      alt=""
                    />
                  </div>

                  <div>
                    <img
                      src="https://cdn.codigo.co/uploads/2021/04/PAO-3@2x.png"
                      alt=""
                    />
                  </div>

                  <div>
                    <img
                      src="https://cdn.codigo.co/uploads/2021/04/PAO-5@2x.png"
                      alt=""
                    />
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
          <div className="mobile-btn mobile-left">
            <img
              src="https://www.codigo.co/img/ui/arrow-left-white.svg"
              alt=""
            />
          </div>
          <div className="mobile-btn mobile-right">
            <img
              src="https://www.codigo.co/img/ui/arrow-left-white.svg"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
