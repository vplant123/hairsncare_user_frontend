import React, { useEffect, useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import "./Products.css";
import Product from "./ProductList";
import { FaArrowRight } from "react-icons/fa";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useMediaQuery } from '@mui/material';
import FilterProduct from "./FilterProduct";
import { LeftAnimatedDiv, RightAnimatedDiv, ZoomInDiv } from "../../componet/Animation";
import { motion } from 'framer-motion';
import useDivInView from "../../hooks/useDivInView";
import { HashLink } from 'react-router-hash-link';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const View1 = ({ navigate }) => {
  const [ref1, control1] = useDivInView();
  const [headingRef, headingControl] = useDivInView();
  const [heroButtonRef, heroButtonControl] = useDivInView();
  const [heroImageRef, heroImageControl] = useDivInView();
  return (
    <motion.div
      className={`hero-section active1`}
      ref={ref1}
      variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
      initial="hidden"
      animate={control1}
      transition={{ duration: 0.8 }}
    >
      <div className='wrapper'>
        <div className='hero-container container'>
          <div className='hero-content' style={{ height: "100%", paddingTop: "25px" }}>
            <motion.div
              className='hero-heading-11'
              style={{ width: "100%" }}
              ref={headingRef}
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              initial="hidden"
              animate={headingControl}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div style={{
                display: "flex", flexDirection: "column"
              }}>
                < span style={{
                  textAlign: "left",
                  width: "100%",
                }} className={`hero-title-1`}>{"Witness a remarkable."}</span>
                <h3 className={`hero-des-1`} style={{ textAlign: "left" }}>{"Hair Care Products"}</h3>
              </div>
              <motion.div
                ref={heroButtonRef}
                variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
                className="hero-btn"
                initial="hidden"
                animate={heroButtonControl}
                transition={{ duration: 1, delay: 1 }}
              >
                <button onClick={() => navigate('/take-hair-test')} className="btn-d sub-button-section-3-op">TAKE A HAIR TEST</button>
                <button className="btn-prod btn-d" style={{ border: "1px solid rgba(0, 160, 227, 1)" }}><HashLink smooth to='/contact-hair-experts/#section3' style={{
                  textDecoration: "none",
                  color: "black"
                }}> BOOK AN APPOINTMENT </HashLink></button>
              </motion.div>
            </motion.div>
            <div style={{ position: "relative" }}>
              <motion.div
                className="hero-image-wrapper"
                ref={heroImageRef}
                variants={{ hidden: { opacity: 0, x: 100 }, visible: { opacity: 1, x: 0 } }}
                initial="hidden"
                animate={heroImageControl}
                transition={{ duration: 1, delay: 1.5 }}
              >

                <img alt='Hair Care Products Image' className={`hero-image`} src={"https://res.cloudinary.com/drkpwvnun/image/upload/v1729447074/hair-assessment/qvrwjuzi8aeq176igwlx.png"}
                  style={{ maxWidth: "80%" }} title="Hair Care Products Image" />
              </motion.div>

              <motion.div
                className='prod-banner-text'
                ref={headingRef}
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                initial="hidden"
                animate={headingControl}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <h2 className={`hero-des-111`}>Result in<br />3 Months</h2>
              </motion.div>
            </div>

          </div>
        </div>
      </div >
    </motion.div >
  )
}


const Products = (props) => {
  const [minValue, set_minValue] = useState(0);
  const [maxValue, set_maxValue] = useState(50000);
  const [rating, setRating] = useState("");
  const [type, setType] = useState(0);
  const [filter, setFilter] = useState("");

  const navigate = useNavigate();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const isLargeScreen = useMediaQuery('(min-width:1200px)');
  const [dropDown, setDropDown] = useState(false);

  const handleMobileMenuToggle = () => {
    console.log("jojeojfer", showMobileMenu)
    setShowMobileMenu(!showMobileMenu);
  };

  const handleMobileDropDownToggle = () => {
    setDropDown(!dropDown);
  };
  let { cart,
    setCart } = props;

  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  const handlerFilter = (e) => {
    console.log("msorfojs", e?.target?.name)
    if (filter == e?.target?.name) setFilter(null)
    else setFilter(e?.target?.name?.toLowerCase())
  }



  return (
    <>
      <div className="barr" style={{ backgroundColor: "#005cad", marginBottom: 0 }}>
        <div className="container">
          <div
            className="d-flex"
            style={{
              fontSize: "18px",
              gap: "12px",
              color: "white",
              fontWeight: "500",
            }}
          >
            <div
              className="d-flex"
              style={{ margin: "10px 0 0 0", gap: "12px" }}
            >
              <span class="ltn__secondary-color">
                <i class="fas fa-home"></i>
              </span>
              <div onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
                Home
              </div>
            </div>
            <div style={{ margin: "10px 0 0 0" }}>{">"}</div>
            <div style={{ margin: "10px 0 0 0", cursor: "pointer" }}>Shop</div>
          </div>
        </div>
      </div>


      <div className='main-hero' style={{ marginBottom: "4rem" }}>
        <View1 navigate={navigate} />
      </div>


      <div className="container-Products container">
        <div className="col-12 col-md-3">
          {/* Content for the first column */}
          {/* {isLargeScreen && <h4 className="filter-price-heading">FILTER BY PRICE</h4>} */}
          <div className="row">

            <div className="filter-price-11 d-flex flex-column" style={{ gap: "10px" }}>
              <div className="d-flex" style={{ justifyContent: "space-between" }}>
                <div style={{ fontWeight: "600" }}>Hair Concern</div>
                {!isLargeScreen && <div onClick={() => handleMobileDropDownToggle(!dropDown)}>
                  {
                    dropDown ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />
                  }
                </div>}
              </div>

              {
                !isLargeScreen && dropDown || isLargeScreen ? <>  <div className="d-flex" style={{ gap: "15px", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    name="Hair Loss Treatment for men"
                    className="default-checkbox"
                    checked={filter == ("Hair Loss Treatment for men")?.toLowerCase()}
                    onChange={(e) => handlerFilter(e)}
                  />
                  <div>Hair Loss Treatment for men</div>
                </div>

                  <div className="d-flex" style={{ gap: "15px", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      name="Hair Loss Treatment for women"
                      className="default-checkbox"
                      checked={filter == ("Hair Loss Treatment for women")?.toLowerCase()}
                      onChange={(e) => handlerFilter(e)}

                    />
                    <div>Hair Loss Treatment for women</div>
                  </div>

                  <div className="d-flex" style={{ gap: "15px", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      name="Dandruff Treatment"
                      className="default-checkbox"
                      checked={filter == ("Dandruff Treatment")?.toLowerCase()}
                      onChange={(e) => handlerFilter(e)}

                    />
                    <div>Dandruff Treatment</div>
                  </div>

                  <div className="d-flex" style={{ gap: "15px", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      name="Gray Hair Care"
                      className="default-checkbox"
                      checked={filter == ("Gray Hair Care")?.toLowerCase()}
                      onChange={(e) => handlerFilter(e)}

                    />
                    <div>Gray Hair Care</div>
                  </div>

                  <div className="d-flex" style={{ gap: "15px", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      name="Damaged Hair"
                      className="default-checkbox"
                      checked={filter == ("Damaged Hair")?.toLowerCase()}
                      onChange={(e) => handlerFilter(e)}

                    />
                    <div>Damaged Hair</div>
                  </div>

                  <div className="d-flex" style={{ gap: "15px", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      name="Hair Supplements"
                      className="default-checkbox"
                      checked={filter == ("Hair Supplements")?.toLowerCase()}
                      // checked={scalp.includes('Oily Scalp'))?.toLowerCase()}
                      onChange={(e) => handlerFilter(e)}

                    />
                    <div>Hair Supplements</div>
                  </div>

                  <div className="d-flex" style={{ gap: "15px", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      name="Ayurvedic Products"
                      className="default-checkbox"
                      checked={filter == ("Ayurvedic Products")?.toLowerCase()}
                      onChange={(e) => handlerFilter(e)}

                    />
                    <div>Ayurvedic Products</div>
                  </div>

                  <div className="d-flex" style={{ gap: "15px", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      name="Color-Treated Hair"
                      className="default-checkbox"
                      checked={filter == ("Color-Treated Hair")?.toLowerCase()}
                      onChange={(e) => handlerFilter(e)}

                    />
                    <div>Color-Treated Hair</div>
                  </div>

                  <div className="d-flex" style={{ gap: "15px", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      name="Heat Damage Control"
                      className="default-checkbox"
                      checked={filter == ("Heat Damage Control")?.toLowerCase()}
                      onChange={(e) => handlerFilter(e)}

                    />
                    <div>Heat Damage Control</div>
                  </div>

                  <div className="d-flex" style={{ gap: "15px", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      name="Thyroid- Stress"
                      className="default-checkbox"
                      checked={filter == ("Thyroid- Stress")?.toLowerCase()}
                      onChange={(e) => handlerFilter(e)}

                    />
                    <div>Thyroid- Stress</div>
                  </div>

                  <div className="d-flex" style={{ gap: "15px", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      name="PCOS- Hormone"
                      className="default-checkbox"
                      checked={filter == ("PCOS- Hormone")?.toLowerCase()}
                      onChange={(e) => handlerFilter(e)}

                    />
                    <div>PCOS- Hormone</div>
                  </div>

                  <div className="d-flex" style={{ gap: "15px", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      name="Anemia"
                      className="default-checkbox"
                      checked={filter == ("Anemia")?.toLowerCase()}
                      onChange={(e) => handlerFilter(e)}

                    />
                    <div>Anemia</div>
                  </div>

                  <div className="d-flex" style={{ gap: "15px", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      name="Oily Scalp"
                      className="default-checkbox"
                      checked={filter == ("Oily Scalp")?.toLowerCase()}
                      onChange={(e) => handlerFilter(e)}

                    />
                    <div>Oily Scalp</div>
                  </div>

                  <div className="d-flex" style={{ gap: "15px", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      name="Dry Scalp"
                      className="default-checkbox"
                      checked={filter == ("Dry Scalpp")?.toLowerCase()}
                      onChange={(e) => handlerFilter(e)}

                    />
                    <div>Dry Scalp</div>
                  </div>

                  <div className="d-flex" style={{ gap: "15px", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      name="Sensitive Scalp"
                      className="default-checkbox"
                      checked={filter == ("Sensitive Scalp")?.toLowerCase()}
                      onChange={(e) => handlerFilter(e)}

                    />
                    <div>Sensitive Scalp</div>
                  </div>

                  <div className="d-flex" style={{ gap: "15px", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      name="Normal Scalp"
                      className="default-checkbox"
                      checked={filter == ("Normal Scalp")?.toLowerCase()}
                      onChange={(e) => handlerFilter(e)}

                    />
                    <div>Normal Scalp</div>
                  </div>


                  <div className="d-flex" style={{ gap: "15px", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      name="Straight Hair"
                      className="default-checkbox"
                      checked={filter == ("Straight Hair")?.toLowerCase()}
                      onChange={(e) => handlerFilter(e)}

                    />
                    <div>Straight Hair </div>
                  </div>


                  <div className="d-flex" style={{ gap: "15px", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      name="Wavy Hair"
                      className="default-checkbox"
                      checked={filter == ("Wavy Hair")?.toLowerCase()}
                      onChange={(e) => handlerFilter(e)}

                    />
                    <div>Wavy Hair</div>
                  </div>


                  <div className="d-flex" style={{ gap: "15px", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      name="Curly Hair"
                      className="default-checkbox"
                      checked={filter == ("Curly Hair")?.toLowerCase()}
                      onChange={(e) => handlerFilter(e)}

                    />
                    <div>Curly Hair</div>
                  </div>

                  <div className="d-flex" style={{ gap: "15px", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      name="Coily/Kinky Hair"
                      className="default-checkbox"
                      checked={filter == ("Coily/Kinky Hair")?.toLowerCase()}
                      onChange={(e) => handlerFilter(e)}

                    />
                    <div>Coily/Kinky Hair</div>
                  </div>

                  <div className="d-flex" style={{ gap: "15px", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      name="Dull Hair"
                      className="default-checkbox"
                      checked={filter == ("Dull Hair")?.toLowerCase()}
                      onChange={(e) => handlerFilter(e)}

                    />
                    <div>Dull Hair</div>
                  </div>

                  <div className="d-flex" style={{ gap: "15px", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      name="Frizzy Hair"
                      className="default-checkbox"
                      checked={filter == ("Frizzy Hair")?.toLowerCase()}
                      onChange={(e) => handlerFilter(e)}

                    />
                    <div>Frizzy Hair</div>
                  </div>

                  <div className="d-flex" style={{ gap: "15px", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      name="Split End"
                      className="default-checkbox"
                      checked={filter == ("Split End")?.toLowerCase()}
                      onChange={(e) => handlerFilter(e)}

                    />
                    <div>Split End</div>
                  </div></> : <></>
              }


            </div>
            {/* {isLargeScreen && <div className="filter-price col-12">
              <h4>PRICE</h4>
              <MultiRangeSlider
                min={0}
                max={50000}
                step={21}
                minValue={minValue}
                maxValue={maxValue}
                onInput={(e) => {
                  handleInput(e);
                }}
              />
              <h4>
                Rs {minValue} - Rs {maxValue}
              </h4>
            </div>}
            {isLargeScreen && <div className="fiter-rating col-12">
              <h4>FILTER BY RATING</h4>
              <label className="rating-lebel">
                <input
                  type="checkbox"
                  value="4plus"
                  checked={rating == 4}
                  onClick={() => {
                    if (rating == 4) setRating("");
                    else setRating(4);
                  }}
                />
                4 Stars and Above
              </label>
              <label className="rating-lebel">
                <input
                  type="checkbox"
                  value="below3"
                  checked={rating == 3}
                  onClick={() => {
                    if (rating == 3) setRating("");
                    else setRating(3);
                  }}
                />
                3 Stars and Above
              </label>
              <label className="rating-lebel">
                <input
                  type="checkbox"
                  value="below3"
                  checked={rating == 2}
                  onClick={() => {
                    if (rating == 3) setRating("");
                    else setRating(3);
                  }}
                />
                2 Stars and Above
              </label>
              <label className="rating-lebel lavel">
                <input
                  type="checkbox"
                  value="below3"
                  checked={rating == 1}
                  onClick={() => {
                    if (rating == 3) setRating("");
                    else setRating(3);
                  }}
                />
                1 Stars and Above
              </label>
            </div>} 
            <div className="col-12">
              <img
                alt="hair"
                src="/assets/img/banner-2.png"
                style={{ width: "100%" }}
              />
            </div>
            */}
          </div>
        </div>
        <div className="col-12 col-md-9 mainProduct">
          {isLargeScreen && <div className="sortBylist">
            {/* <ul className="nav-tabs" id="myTab" role="tablist">
              <li>
                <a href="#" className="text-uppercase">
                  Sort By:
                </a>
              </li> */}
            {/* <li className="nav-item" role="presentation">
                <a
                  className={`nav-link-1 ${type == 0 ? "active" : ""}`}
                  id="relevant-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#relevant"
                  href="#"
                  role="tab"
                  aria-controls="relevant"
                  aria-selected="true"
                  onClick={() => setType(0)}
                  style={{
                    padding: "5px 0 0 10px",
                  }}
                >
                  Relevant Products<span className="arrow-down"></span>
                </a>
              </li> */}
            {/* <li className="nav-item" role="presentation">
                <a
                  className={`nav-link-1 ${type == 1 ? "active" : ""}`}
                  id="popular-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#popular"
                  href="#"
                  role="tab"
                  aria-controls="popular"
                  aria-selected="false"
                  onClick={() => setType(1)}
                  style={{
                    padding: "5px 0 0 10px",
                  }}
                >
                  Popular Products{" "}
                  <span className="arrow-down arrow-down-one"></span>
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className={`nav-link-1 ${type == 2 ? "active" : ""}`}
                  id="latest-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#latest"
                  href="#"
                  role="tab"
                  aria-controls="latest"
                  aria-selected="false"
                  onClick={() => setType(2)}
                  style={{
                    padding: "5px 0 0 10px",
                  }}
                >
                  Latest Products
                  <span className="arrow-down arrow-down-two"></span>
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className={`nav-link-1 ${type == 3 ? "active" : ""}`}
                  id="kit-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#kit"
                  href="#"
                  role="tab"
                  aria-controls="kit"
                  aria-selected="false"
                  onClick={() => setType(3)}
                  style={{
                    padding: "5px 0 0 10px",
                  }}
                >
                  Kits <span className="arrow-down arrow-down-two"></span>
                </a>
              </li> */}
            {/* </ul> */}
          </div>}


          <div className="d-flex mt-1" style={{ justifyContent: "space-between", alignItems: "center", width: "100%", marginBottom: "20px" }}>
            <div className="custom-header" >Our Best Products</div>

            <button onClick={handleMobileMenuToggle} style={{ margin: "0", cursor: "pointer", color: "rgba(114, 114, 114, 1)", fontSize: "12px" }} className="btn-d btn-prod ">Sort by Relevance</button>

          </div>

          {/* <div
            className="sortBylistMenu"
            onClick={handleMobileMenuToggle}
            style={{
              margin: "20px 0 20px 0",
              textDecoration: "underline",
              color: "#04c9ff !important",
            }}
          >
            Filter By :
          </div> */}

          {showMobileMenu && (
            <FilterProduct
              isOpen={showMobileMenu}
              onClose={() => setShowMobileMenu(!showMobileMenu)}
              minValue={minValue}
              maxValue={maxValue}
              onInput={(e) => {
                handleInput(e);
              }}
              rating={rating}
              setRating={setRating}
              setType={setType}
              type={type}
            />
          )}


          <div></div>
          {/* Content for the second column */}

          <Product
            minValue={minValue}
            maxValue={maxValue}
            rating={rating}
            type={type}
            cart={cart}
            setCart={setCart}
            toggleCart={props?.toggleCart}
            filter={filter}
          />
        </div>
      </div>
    </>
  );
};

export default Products;
