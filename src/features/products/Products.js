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

                <img loading="lazy" alt='Hair Care Products Image' className={`hero-image`} src={"https://res.cloudinary.com/drkpwvnun/image/upload/v1729447074/hair-assessment/qvrwjuzi8aeq176igwlx.png"}
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
  const [filter, setFilter] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const isLargeScreen = useMediaQuery('(min-width:1200px)');
  const [dropDown, setDropDown] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

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
    const filterName = e?.target?.name?.toLowerCase();
    if (filter.includes(filterName)) {
      // Remove filter if already selected
      setFilter(filter.filter(f => f !== filterName));
    } else {
      // Add filter if not selected
      setFilter([...filter, filterName]);
    }
  }

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  }

  const toggleFilters = () => {
    setShowFilters(!showFilters);
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


      <div className='main-hero' style={{ marginBottom: "1rem" }}>
        <View1 navigate={navigate} />
      </div>


      <div className="container-Products container">
        <div className="col-12 mainProduct">
          {isLargeScreen && <div className="sortBylist">
            {/* Sorting options can be added here if needed */}
          </div>}

          <div className="d-flex mt-1" style={{ justifyContent: "space-between", alignItems: "center", width: "100%", marginBottom: "20px" }}>
            <div className="custom-header" >Our Best Products</div>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <button
                onClick={toggleFilters}
                className="btn-d btn-prod"
                style={{ margin: "0", cursor: "pointer", color: "rgba(114, 114, 114, 1)", fontSize: "12px", display: "flex", alignItems: "center", gap: "6px" }}
              >
                {showFilters ? "Hide Filters" : "Show Filters"}
                <span style={{ transform: showFilters ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease", marginLeft: "6px" }}>
                  ▼
                </span>
              </button>
              <button onClick={handleMobileMenuToggle} style={{ margin: "0", cursor: "pointer", color: "rgba(114, 114, 114, 1)", fontSize: "12px" }} className="btn-d btn-prod ">Sort by Relevance</button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="search-bar-container" style={{ marginBottom: "20px" }}>
            <input
              type="text"
              placeholder="Search products by name or price..."
              value={searchQuery}
              onChange={handleSearchChange}
              style={{
                width: "100%",
                padding: "12px 16px",
                border: "2px solid #e0e0e0",
                borderRadius: "8px",
                fontSize: "16px",
                backgroundColor: "#fff",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                outline: "none",
                transition: "all 0.3s ease",
                fontFamily: "inherit"
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#005cad";
                e.target.style.boxShadow = "0 2px 12px rgba(0,92,173,0.2)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#e0e0e0";
                e.target.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
              }}
            />
          </div>

          {/* Hair Concern Filters */}
          {showFilters && (
          <div className="filter-price-11 d-flex flex-column" style={{ gap: "10px", marginBottom: "20px", padding: "15px", backgroundColor: "#f8f9fa", borderRadius: "8px", animation: "slideDown 0.3s ease" }}>
            <div className="d-flex" style={{ justifyContent: "space-between" }}>
              <div style={{ fontWeight: "600", fontSize: "18px", color: "#333" }}>Hair Concern</div>
              {!isLargeScreen && <div onClick={() => handleMobileDropDownToggle(!dropDown)}>
                {
                  dropDown ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />
                }
              </div>}
            </div>

            {
              !isLargeScreen && dropDown || isLargeScreen ? (
                <div style={{ display: "grid", gridTemplateColumns: isLargeScreen ? "repeat(3, 1fr)" : "repeat(2, 1fr)", gap: "15px", marginTop: "10px" }}>
                  <div className="d-flex" style={{ gap: "10px", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      name="Hair Loss Treatment for men"
                      className="default-checkbox"
                      checked={filter.includes(("Hair Loss Treatment for men")?.toLowerCase())}
                      onChange={(e) => handlerFilter(e)}
                    />
                    <div style={{ fontSize: "14px" }}>Hair Loss Treatment for men</div>
                  </div>

                  <div className="d-flex" style={{ gap: "10px", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      name="Hair Loss Treatment for women"
                      className="default-checkbox"
                      checked={filter.includes(("Hair Loss Treatment for women")?.toLowerCase())}
                      onChange={(e) => handlerFilter(e)}
                    />
                    <div style={{ fontSize: "14px" }}>Hair Loss Treatment for women</div>
                  </div>

                  <div className="d-flex" style={{ gap: "10px", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      name="Dandruff Treatment"
                      className="default-checkbox"
                      checked={filter.includes(("Dandruff Treatment")?.toLowerCase())}
                      onChange={(e) => handlerFilter(e)}
                    />
                    <div style={{ fontSize: "14px" }}>Dandruff Treatment</div>
                  </div>

                  <div className="d-flex" style={{ gap: "10px", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      name="Gray Hair Care"
                      className="default-checkbox"
                      checked={filter.includes(("Gray Hair Care")?.toLowerCase())}
                      onChange={(e) => handlerFilter(e)}
                    />
                    <div style={{ fontSize: "14px" }}>Gray Hair Care</div>
                  </div>

                  <div className="d-flex" style={{ gap: "10px", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      name="Damaged Hair"
                      className="default-checkbox"
                      checked={filter.includes(("Damaged Hair")?.toLowerCase())}
                      onChange={(e) => handlerFilter(e)}
                    />
                    <div style={{ fontSize: "14px" }}>Damaged Hair</div>
                  </div>

                  <div className="d-flex" style={{ gap: "10px", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      name="Hair Supplements"
                      className="default-checkbox"
                      checked={filter.includes(("Hair Supplements")?.toLowerCase())}
                      onChange={(e) => handlerFilter(e)}
                    />
                    <div style={{ fontSize: "14px" }}>Hair Supplements</div>
                  </div>

                  <div className="d-flex" style={{ gap: "10px", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      name="Ayurvedic Products"
                      className="default-checkbox"
                      checked={filter.includes(("Ayurvedic Products")?.toLowerCase())}
                      onChange={(e) => handlerFilter(e)}
                    />
                    <div style={{ fontSize: "14px" }}>Ayurvedic Products</div>
                  </div>

                  <div className="d-flex" style={{ gap: "10px", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      name="Color-Treated Hair"
                      className="default-checkbox"
                      checked={filter.includes(("Color-Treated Hair")?.toLowerCase())}
                      onChange={(e) => handlerFilter(e)}
                    />
                    <div style={{ fontSize: "14px" }}>Color-Treated Hair</div>
                  </div>

                  <div className="d-flex" style={{ gap: "10px", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      name="Heat Damage Control"
                      className="default-checkbox"
                      checked={filter.includes(("Heat Damage Control")?.toLowerCase())}
                      onChange={(e) => handlerFilter(e)}
                    />
                    <div style={{ fontSize: "14px" }}>Heat Damage Control</div>
                  </div>

                  <div className="d-flex" style={{ gap: "10px", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      name="Thyroid- Stress"
                      className="default-checkbox"
                      checked={filter.includes(("Thyroid- Stress")?.toLowerCase())}
                      onChange={(e) => handlerFilter(e)}
                    />
                    <div style={{ fontSize: "14px" }}>Thyroid- Stress</div>
                  </div>

                  <div className="d-flex" style={{ gap: "10px", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      name="PCOS- Hormone"
                      className="default-checkbox"
                      checked={filter.includes(("PCOS- Hormone")?.toLowerCase())}
                      onChange={(e) => handlerFilter(e)}
                    />
                    <div style={{ fontSize: "14px" }}>PCOS- Hormone</div>
                  </div>

                  <div className="d-flex" style={{ gap: "10px", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      name="Anemia"
                      className="default-checkbox"
                      checked={filter.includes(("Anemia")?.toLowerCase())}
                      onChange={(e) => handlerFilter(e)}
                    />
                    <div style={{ fontSize: "14px" }}>Anemia</div>
                  </div>

                  <div className="d-flex" style={{ gap: "10px", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      name="Oily Scalp"
                      className="default-checkbox"
                      checked={filter.includes(("Oily Scalp")?.toLowerCase())}
                      onChange={(e) => handlerFilter(e)}
                    />
                    <div style={{ fontSize: "14px" }}>Oily Scalp</div>
                  </div>

                  <div className="d-flex" style={{ gap: "10px", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      name="Dry Scalp"
                      className="default-checkbox"
                      checked={filter.includes(("Dry Scalp")?.toLowerCase())}
                      onChange={(e) => handlerFilter(e)}
                    />
                    <div style={{ fontSize: "14px" }}>Dry Scalp</div>
                  </div>

                  <div className="d-flex" style={{ gap: "10px", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      name="Sensitive Scalp"
                      className="default-checkbox"
                      checked={filter.includes(("Sensitive Scalp")?.toLowerCase())}
                      onChange={(e) => handlerFilter(e)}
                    />
                    <div style={{ fontSize: "14px" }}>Sensitive Scalp</div>
                  </div>

                  <div className="d-flex" style={{ gap: "10px", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      name="Normal Scalp"
                      className="default-checkbox"
                      checked={filter.includes(("Normal Scalp")?.toLowerCase())}
                      onChange={(e) => handlerFilter(e)}
                    />
                    <div style={{ fontSize: "14px" }}>Normal Scalp</div>
                  </div>

                  <div className="d-flex" style={{ gap: "10px", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      name="Straight Hair"
                      className="default-checkbox"
                      checked={filter.includes(("Straight Hair")?.toLowerCase())}
                      onChange={(e) => handlerFilter(e)}
                    />
                    <div style={{ fontSize: "14px" }}>Straight Hair</div>
                  </div>

                  <div className="d-flex" style={{ gap: "10px", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      name="Wavy Hair"
                      className="default-checkbox"
                      checked={filter.includes(("Wavy Hair")?.toLowerCase())}
                      onChange={(e) => handlerFilter(e)}
                    />
                    <div style={{ fontSize: "14px" }}>Wavy Hair</div>
                  </div>

                  <div className="d-flex" style={{ gap: "10px", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      name="Curly Hair"
                      className="default-checkbox"
                      checked={filter.includes(("Curly Hair")?.toLowerCase())}
                      onChange={(e) => handlerFilter(e)}
                    />
                    <div style={{ fontSize: "14px" }}>Curly Hair</div>
                  </div>

                  <div className="d-flex" style={{ gap: "10px", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      name="Coily/Kinky Hair"
                      className="default-checkbox"
                      checked={filter.includes(("Coily/Kinky Hair")?.toLowerCase())}
                      onChange={(e) => handlerFilter(e)}
                    />
                    <div style={{ fontSize: "14px" }}>Coily/Kinky Hair</div>
                  </div>

                  <div className="d-flex" style={{ gap: "10px", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      name="Dull Hair"
                      className="default-checkbox"
                      checked={filter.includes(("Dull Hair")?.toLowerCase())}
                      onChange={(e) => handlerFilter(e)}
                    />
                    <div style={{ fontSize: "14px" }}>Dull Hair</div>
                  </div>

                  <div className="d-flex" style={{ gap: "10px", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      name="Frizzy Hair"
                      className="default-checkbox"
                      checked={filter.includes(("Frizzy Hair")?.toLowerCase())}
                      onChange={(e) => handlerFilter(e)}
                    />
                    <div style={{ fontSize: "14px" }}>Frizzy Hair</div>
                  </div>

                  <div className="d-flex" style={{ gap: "10px", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      name="Split End"
                      className="default-checkbox"
                      checked={filter.includes(("Split End")?.toLowerCase())}
                      onChange={(e) => handlerFilter(e)}
                    />
                    <div style={{ fontSize: "14px" }}>Split End</div>
                  </div>
                </div>
              ) : null
            }
          </div>
          )}

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
            searchQuery={searchQuery}
          />
        </div>
      </div>
    </>
  );
};

export default Products;
