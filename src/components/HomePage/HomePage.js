import { useEffect, useRef, useState } from "react";
import Header from "../Header/Header";
import { FaStar } from "react-icons/fa";
import "./HomePage.css";

const Gallery = [
  "https://res.cloudinary.com/daqmgqiuf/image/upload/v1756628784/Link_Manuka_Honey_UMF_24___MGO_1122_j4rzsw.svg",
  "https://res.cloudinary.com/daqmgqiuf/image/upload/v1756629779/Label_Label_paints_ql5szd.svg",
  "https://res.cloudinary.com/daqmgqiuf/image/upload/v1756629798/Label_Label_paints_dlo4fo.svg",
  "https://res.cloudinary.com/daqmgqiuf/image/upload/v1756629816/Label_Label_paints_d4jlg4.svg",
];

export default function HomePage() {
  const [infoOpen, setInfoOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rate, setRate] = useState(0);
  const [quantitySelected, setQuantitySelected] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [segmented, setSegmented] = useState(null);
  // UMF Scale
  const umfOptions = [
    "UMF™ 10+",
    "UMF™ 15+",
    "UMF™ 20+",
    "UMF™ 24+",
    "UMF™ 26+",
    "UMF™ 28+",
    "UMF™ 30+",
  ];
  const [activeUmf, setActiveUmf] = useState("UMF™ 24+");
  // Taste profile state (0 -> left, 100 -> right)
  const [tasteValue, setTasteValue] = useState(40);
  const barRef = useRef(null);

  const handleDrag = (e) => {
    if (!barRef.current) return; // return the current value

    const barRect = barRef.current.getBoundingClientRect(); // gives size and postition of the bar relative to viewport
    const clientX = e.type.includes("touch") ? e.touches[0].clientX : e.clientX; // mouse events, touch events

    let newVal = ((clientX - barRect.left) / barRect.width) * 100; // it returns them i px
    newVal = Math.max(0, Math.min(100, newVal)); // ensures it stays between 0 to 100
    setTasteValue(newVal); // set it to the state
  };

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setInfoOpen(false);
    }
    if (infoOpen) {
      document.addEventListener("keydown", onKey);
      return () => document.removeEventListener("keydown", onKey);
    }
  }, [infoOpen]);

  const handleSelection = (value) => {
    setQuantitySelected(value);
  };

  const handleSegmented = (value) => {
    setSegmented(value);
  };

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <>
      <Header cartCount={0} />

      <div className="pdp__wrap">
        <div className="pdp-gallery">
          <button
            type="button"
            className="pdp-gallery__nav pdp-gallery__nav--left"
            aria-label="Previous image"
            onClick={() =>
              setCurrentIndex((i) => (i > 0 ? i - 1 : Gallery.length - 1))
            }
          >
            <img
              src="https://res.cloudinary.com/daqmgqiuf/image/upload/v1756628810/Button_-_Previous_slide_SVG_u4ozfo.svg"
              alt="previous"
            />
          </button>
          <img
            src={Gallery[currentIndex]}
            alt={`product-${currentIndex + 1}`}
            className="pdp-gallery__img"
          />
          <button
            type="button"
            className="pdp-gallery__nav pdp-gallery__nav--right"
            aria-label="Next image"
            onClick={() => setCurrentIndex((i) => (i + 1) % Gallery.length)}
          >
            <img
              src="https://res.cloudinary.com/daqmgqiuf/image/upload/v1756628823/Vector_hio9gj.svg"
              alt="next"
            />
          </button>
        </div>
        <div className="pdp-content">
          <h1 className="heading">
            Manuka Honey <br /> UMF <span className="small-text">TM</span> 24+{" "}
            <br /> MGO 1122+
          </h1>
          <div className="pdp-title_meta">
            <button
              className="chip"
              aria-expanded={infoOpen}
              aria-controls="umf-info"
              onClick={() => setInfoOpen((v) => !v)}
            >
              <img
                src="https://res.cloudinary.com/daqmgqiuf/image/upload/v1756636225/SVG_aeyemw.svg"
                alt="info"
              />{" "}
              What is UMF and MGO?
            </button>

            <div className="rating-container">
              {[...Array(5)].map((item, index) => {
                const givenRating = index + 1;
                return (
                  <label>
                    <input
                      className="radio"
                      key={index}
                      type="radio"
                      value={givenRating}
                      onClick={() => {
                        setRate(givenRating);
                      }}
                    />
                    <div className="rating">
                      <FaStar
                        color={
                          givenRating < rate || givenRating === rate
                            ? "#FFD700"
                            : "rgb(192,192,192)"
                        }
                      />
                    </div>
                  </label>
                );
              })}
            </div>
          </div>
          {/* INfo popover */}
          {infoOpen && (
            <div className="umf-backdrop" onClick={() => setInfoOpen(false)} />
          )}
          <div
            id="umf-info"
            className={`umf-popover ${infoOpen ? "open" : ""}`}
            role="dialog"
            aria-modal="false"
            aria-label="UMF and MGO information"
          >
            <div className="umf-popover__card">
              <div className="umf-popover__row">
                <img
                  src="https://res.cloudinary.com/daqmgqiuf/image/upload/v1756629745/Frame_1484578531_dcsi54.svg"
                  alt="UMF"
                />
              </div>
              <div className="umf-popover__row">
                <img
                  src="https://res.cloudinary.com/daqmgqiuf/image/upload/v1756629727/Frame_1484578529_rxazut.svg"
                  alt="MGO"
                />
              </div>
              <button
                className="btn btn--ghost umf-popover__close"
                onClick={() => setInfoOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
          <div className="pdp-title__lines">
            <p>The Optimiser</p>
            <p>
              For those times in life when quality comes first. This pure UMF™
              24+ Manuka Honey is powerfully active, sourced from wild and
              rugged locations around Aotearoa New Zealand and great for almost
              all uses. It has a full, delicious flavour and your body will love
              you for it.
            </p>
          </div>

          {/* Purchase options */}
          <div className="pdp-pay">
            <div className="segmented">
              <button
                className={
                  segmented === "one-time purchase"
                    ? "is-active"
                    : "segmented__btn"
                }
                onClick={() => handleSegmented("one-time purchase")}
              >
                One-time purchase
                <span className="segmented_price"> $55.88 USD </span>
              </button>
              <button
                className={
                  segmented === "Subscribe & Save 20%"
                    ? "is-active"
                    : "segmented__btn"
                }
                onClick={() => handleSegmented("Subscribe & Save 20%")}
              >
                Subscribe & Save 20%
                <span className="segmented__price">$44.70 USD</span>
              </button>

              <div className="sub">
                <img
                  className="load-img"
                  src="https://res.cloudinary.com/daqmgqiuf/image/upload/v1756643704/SVG_isuxpt.svg"
                  alt="load"
                />
                <p>What is a Subscription?</p>
              </div>
            </div>

            {/* Variants */}
            <div className="pdp-variant">
              <h3 className="pdp-head">SIZE (SELECT ONE)</h3>
              <div className="pill-group">
                <button
                  className={
                    quantitySelected === "250g" ? "is-selected" : "pill"
                  }
                  onClick={() => handleSelection("250g")}
                >
                  250g
                </button>
                <button
                  className={
                    quantitySelected === "500g" ? "is-selected" : "pill"
                  }
                  onClick={() => handleSelection("500g")}
                >
                  500g
                </button>
              </div>
            </div>

            {/* Qty + Add to Cart */}
            <div className="pdp-qty">
              <p className="select-qlt">SELECT QUANTITY</p>
              <div className="pdp-cart">
                <div className="qty">
                  <button
                    type="button"
                    onClick={decrement}
                    aria-label="Decrese quantity"
                  >
                    -
                  </button>
                  <output aria-label="quantity">{quantity}</output>
                  <button
                    type="button"
                    onClick={increment}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
                <button className="button btn--cta">ADD TO CART</button>
              </div>
            </div>

            {/* Bundle section */}
            <div className="pdp-bundle">
              <div>
                <h3 className="pdp-header">
                  <img
                    className="pay-btns"
                    src="https://res.cloudinary.com/daqmgqiuf/image/upload/v1756628810/Button_-_Previous_slide_SVG_u4ozfo.svg"
                    alt="after pay"
                  />
                  Beauty Bundle
                  <img
                    className="pay-btns"
                    src="https://res.cloudinary.com/daqmgqiuf/image/upload/v1756628823/Vector_hio9gj.svg"
                    alt="some"
                  />
                </h3>
              </div>
              <div className="pdp-bundle__row">
                <div className="bundle-item">
                  <img
                    className="bundle-image"
                    src="https://res.cloudinary.com/daqmgqiuf/image/upload/v1756645856/image_cobbxf.svg"
                    alt="20+"
                  />
                  <p className="item-name">UMF 20+</p>
                  <select id="20+" className="option">
                    <option value="250g">250g</option>
                  </select>
                </div>
                <div className="bundle-item">
                  <img
                    className="bundle-image"
                    src="https://res.cloudinary.com/daqmgqiuf/image/upload/v1756628784/Link_Manuka_Honey_UMF_24___MGO_1122_j4rzsw.svg"
                    alt="24+"
                  />
                  <p className="item-name">UMF 24+</p>
                  <select id="24+" className="option">
                    <option value="250g">250g</option>
                  </select>
                </div>
                <div className="bundle-item">
                  <img
                    className="bundle-image"
                    src="https://res.cloudinary.com/daqmgqiuf/image/upload/v1756645883/image_152_zy4ngh.svg"
                    alt="wooden spoon"
                  />
                  <p className="item-name">
                    Wooden <br />
                    Spoon
                  </p>
                </div>
                <div className="pricing-bundle">
                  <p className="pricing">
                    <span className="strike-through">$478.75 USD</span>$430.88
                    USD <span className="save">Save 10%</span>
                  </p>
                  <button className="button btn--cta">
                    ADD BUNDLE TO CART
                  </button>
                </div>
              </div>
            </div>

            {/* reward section */}
            <div className="pdp-reward">
              <p className="space"> </p>
              <p className="para">Colourclub members earn up to </p>
              <p className="num">56</p>
              <p className="para">
                reward points when buy this item. Sign up or log in{" "}
              </p>
            </div>
            {/* Delivery icons section */}
            <div className="pdp-delivery">
              <div className="delivery-row">
                <div>
                  <h5 className="delivery-title">🚚 DELIVERY</h5>
                  <h5 className="delivery-text">
                    FREE DELIVERY ON ORDERS OVER $30
                  </h5>
                </div>
                <div>
                  <h5 className="delivery-title">
                    ⏰ ESTIMATED DELIVERY DATE:
                  </h5>
                  <h5 className="delivery-text">Jun 9 - Jun 13 to</h5>
                </div>
              </div>

              <div className="afterpay">
                <h5 className="delivery-title">💳 AFTER PAY</h5>
                <p>
                  or 4 interest-free payments of $13.97 with
                  <img
                    src="https://res.cloudinary.com/daqmgqiuf/image/upload/v1756649185/Button_-_Afterpay_logo_-_Opens_a_dialog_SVG_hbncin.svg"
                    alt="Afterpay"
                    className="afterpay-logo"
                  />
                </p>
              </div>

              {/* UMF scale */}
              <div className="umf-scale">
                <h5 className="delivery-titile">UMF™ SCALE</h5>
                <div className="umf-scale__labels">
                  {umfOptions.map((umf) => (
                    <span
                      key={umf}
                      className={activeUmf === umf ? "active" : ""}
                      onClick={() => setActiveUmf(umf)}
                    >
                      {umf}
                    </span>
                  ))}
                </div>
              </div>

              {/* Taste */}
              <div className="taste-profile">
                <h5 className="delivery-title">TASTE PROFILE</h5>

                <div
                  ref={barRef}
                  className="taste-bar"
                  onMouseDown={handleDrag}
                  onMouseMove={(e) => e.buttons === 1 && handleDrag(e)}
                  onTouchStart={handleDrag}
                  onTouchMove={handleDrag}
                >
                  <div
                    className="taste-marker"
                    style={{ left: `${tasteValue}%` }}
                  ></div>
                </div>

                <div className="taste-row">
                  <p>Clean & Intense</p>
                  <p>Bold & Intense</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
