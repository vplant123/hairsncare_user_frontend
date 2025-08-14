import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { FaSearch, FaShoppingCart, FaRegUser } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { toggleLogin } from "../login/LoginSlice";
import Login from "../login/Login";
import Signup from "../signup/SignUp";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { getCartItems } from '../products/CartSlice';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchProduct from "../SearchProduct";
import { useMediaQuery } from "@mui/material";

function Navbar({ children, cart, setCart }) {
  console.log("jofewjpoe", cart, setCart)
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const dispatch = useDispatch();
  const showLogin = useSelector((state) => state.login.showLogin);
  const cartItems = useSelector((state) => state.cart.items);
  const [showSearch, setShowSearch] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const [active, setActive] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleMobileMenuToggle = () => {
    console.log("jojeojfer", showMobileMenu)
    setShowMobileMenu(!showMobileMenu);
  };

  const handleLogout = () => {
    setShowLogout(false);
    localStorage.removeItem("User343");
    toast("Logout Successfully");
    dispatch(getCartItems());
    // setCart([])
    navigate('/');
    window.location.reload();
  };

  const goToDash = () => {
    navigate('/cart');
  };

  const handleLoginClick = () => {
    dispatch(toggleLogin());
  };

  const handleTestHair = () => {
    navigate('/take-hair-test')
  };

  const handleSignupClick = () => {
    setShowSignup(!showSignup);
  };

  let storedUserData = JSON.parse(localStorage.getItem("User343"));
  // console.log(storedUserData, "userData");

  useEffect(() => {
    console.log("ksorkjoer", cart?.length)
    if (storedUserData) {
      setShowLogout(true);
      dispatch(getCartItems(storedUserData.logedInUser.user._id));
    }
  }, [dispatch, cart?.length]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */
    });
  };

  const isLargeScreen = useMediaQuery('(min-width:1200px)');
  const isMobile = useMediaQuery('(max-width: 768px)');



  return (
    <>
      <div style={{ position: "fixed", zIndex: 100, top: 0, width: "100vw", background: "#FFFFFF" }} onClick={scrollToTop}>
        <div className="nav-container container"  >

          <div>
            <img
              alt="Hairsncares"
              className="nav-logo"
              src="/assets/img/logo.png"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
              title="Hairsncares Brand Logo"
            />
          </div>
          <div className={`nav-link ${showMobileMenu ? "show" : ""}`} style={{ zIndex: showMobileMenu ? 1 : "" }}>
            <a>
              <NavLink to="/" activeClassName="active">
                HOME
              </NavLink>
            </a>
            <a className="who-we-link">
              <NavLink to="/about-us-quality-hair-loss-scalp-care" activeClassName="active">
                WHO WE ARE+
              </NavLink>
              <div className="sub-link-2">
                <p onClick={() => navigate('/about-us-quality-hair-loss-scalp-care')}>About Us</p>
                <p onClick={() => navigate('/hair-loss-treatment-experts-dermatologists')} style={{ fontSize: "17px" }}>Our specialists</p>
              </div>

            </a>
            <a className="who-we-link-1">
              <NavLink activeClassName="active" onClick={() => setActive(!active)}>
                OUR EXPERTISE
              </NavLink>
              <div className="sub-link-3" style={{ display: active ? "block" : "none" }}>
                <p onClick={() => navigate('/effective-hair-loss-treatment-men')}>Hair Loss in Men</p>
                <p onClick={() => navigate('/hair-loss-women-causes-treatments-remedies')} style={{ fontSize: "17px" }}>Hair Loss in Women</p>
                <p onClick={() => navigate('/hair-transplants-fue-dhi-mhi-natural-restoration')} style={{ fontSize: "17px" }}>Hair Transplant</p>
                <p onClick={() => navigate('/advanced-hair-loss-solutions-prp-smp-cloning-systems')} style={{ fontSize: "17px" }}>Other Procedures</p>
              </div>
            </a>
            <a>
              <NavLink to="/best-hair-care-products-hair-loss-scalp-health" activeClassName="active">
                PRODUCTS
              </NavLink>
            </a>
            <a>
              <NavLink to="/contact-hair-experts" activeClassName="active">
                CONTACT US
              </NavLink>
            </a>

            {
              isMobile && <a>
                <NavLink to="/effective-hair-loss-treatment-men" activeClassName="active">
                  Hair Loss in Men
                </NavLink>
              </a>
            }

            {
              isMobile && <a>
                <NavLink to="/hair-loss-women-causes-treatments-remedies" activeClassName="active">
                  Hair Loss in Women
                </NavLink>
              </a>
            }

            {
              isMobile && <a>
                <NavLink to="/hair-transplants-fue-dhi-mhi-natural-restoration" activeClassName="active">
                  Hair Transplant
                </NavLink>
              </a>
            }

            {
              isMobile && <a>
                <NavLink to="/advanced-hair-loss-solutions-prp-smp-cloning-systems" activeClassName="active">
                  Other Procedures
                </NavLink>
              </a>
            }

            {
              isMobile && <a>
                <NavLink to="/online-hair-loss-test-diagnosis-treatment" activeClassName="active">
                  Hair Loss Test
                </NavLink>
              </a>
            }

            {
              isMobile && <a>
                <NavLink to="/dr-amit-agarkar-hair-restoration-expert" activeClassName="active">
                  Dermatologist
                </NavLink>
              </a>
            }

            {
              isMobile && <a>
                <NavLink to="/hair-care-blogs" activeClassName="active">
                  Blogs
                </NavLink>
              </a>
            }


            {
              isMobile && <a>
                <NavLink to="/policy" activeClassName="active">
                  Privacy Policy
                </NavLink>
              </a>
            }


            {
              isMobile && <a>
                <NavLink to="/termsOfService" activeClassName="active">
                  Terms of Service
                </NavLink>
              </a>
            }

          </div>
          <div className="nav-right">
            {!location.pathname.includes("/take-hair-test") && <button onClick={handleTestHair} className="btn-test">TAKE A HAIR TEST</button>}
            <div className="nav-icons">
              <div className="user-svg">
                {showSearch ? (
                  <SearchProduct isOpen={showSearch} onClose={() => setShowSearch(!showSearch)} cart={cart}
                    setCart={setCart} />
                ) : (
                  <FaSearch
                    onClick={() => setShowSearch(!showSearch)}
                    size={20}
                  />
                )}
              </div>
              <div className="cart-icon" onClick={goToDash}>
                <Badge color="secondary" badgeContent={cartItems?.length > 0 || cart?.length > 0 ? cartItems?.length || cart?.length : 0} max={99}>
                  <ShoppingCartIcon />
                </Badge>
                {/* <FaShoppingCart onClick={goToDash} size={20} /> */}
                {(cartItems?.length > 0 || cart?.length > 0) && <span className="cart-count">{cartItems?.length || cart?.length}</span>}
              </div>
              <div className="user-svg">
                <FaRegUser size={20} />
                <div className="sub-link" style={{ width: "135px", padding: "1rem" }}>
                  {showLogout ? (
                    <div>
                      <p style={{ fontSize: "17px" }} onClick={() => navigate('/user-profile')}>My Account</p>
                      <p onClick={handleLogout} style={{ textAlign: "center", fontSize: "17px" }}>Logout</p>
                    </div>
                  ) : (
                    <div>
                      <p onClick={handleLoginClick} style={{ textAlign: "center" }}>Login</p>
                      <p onClick={handleSignupClick} style={{ textAlign: "center" }}>Signup</p>
                    </div>
                  )}
                </div>
              </div>
              <div className="menubar" onClick={handleMobileMenuToggle}>
                <FiMenu />
              </div>
              {showLogin && <Login onClose={handleLoginClick} showSignup={showSignup} setShowSignup={setShowSignup} />}
              {showSignup && <Signup onClose={handleSignupClick} handleLoginClick={handleLoginClick} />}
            </div>
          </div>
        </div>
      </div>
      <div className="main">
        {children}
      </div>
    </>
  );
}

export default Navbar;
