import React, { useEffect, useMemo, useState } from "react";
import "./Product.css";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../../Config";
import { useMediaQuery } from "@mui/material";
import useDivInView, {
  RIGHT_VARIANTS,
  TRANSITION,
} from "../../hooks/useDivInView";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { getCartItems } from "../products/CartSlice";
import useNavigateParams from "../../utils/hookUseNavigateParam";

let data = [
  {
    src: "/assets/img/product/1.png",
    name: "Hair Vitamin with Biotin",
    rating: 4,
    massage:
      "100% make a type specimen book. It has survived not only centuries,",
    logo: "/assets/img/google-icon.webp",
  },
  {
    src: "/assets/img/product/2.png",
    name: "Gummies with Biotin",
    rating: 4,
    massage:
      "100% make a type specimen book. It has survived not only centuries,",
    logo: "/assets/img/google-icon.webp",
  },
  {
    src: "/assets/img/product/3.png",
    name: "Vitamin D",
    massage:
      "100% make a type specimen book. It has survived not only centuries,",
    rating: 4,
    logo: "/assets/img/google-icon.webp",
  },
  {
    src: "/assets/img/product/4.png",
    name: "Hair Shampoo",
    rating: 4,
    massage:
      "100% make a type specimen book. It has survived not only centuries,",
    logo: "/assets/img/google-icon.webp",
  },
];

const ProductCard = ({ product, index, cart, setCart }) => {
  const navigate = useNavigateParams();
  const [ref, control] = useDivInView();
  let disPercent = (
    (parseFloat(product?.discount || 0) / parseFloat(product?.price)) *
    100
  )?.toFixed(0);

  let storedUserData = JSON.parse(localStorage?.getItem("User343"));
  const dispatch = useDispatch();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */
    });
  };

  const handleAddToCart = async () => {
    let data = {
      item: product,
      quantity: 1,
    };
    if (!storedUserData?.logedInUser) {
      let c = cart;
      let f = c?.findIndex((w) => w?.item?._id == product?._id);
      if (f != -1) {
        c[f].quantity = c[f]?.quantity + 1;
      } else {
        c.push(data);
      }
      setCart(c);
      localStorage.setItem("cart", JSON.stringify(c));
      toast.success("product added to cart");
      return;
      // toast.error(`Please Login First`);
    }
    try {
      // setLoader(true);
      const response = await fetch(
        `${BASE_URL}/cart/add-cart?userId=${storedUserData.logedInUser.user._id}`,
        {
          method: "POST",
          headers: {
            Authorization: storedUserData?.logedInUser?.accessToken,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      // setLoader(false);
      if (response.ok) {
        const result = await response.json();
        dispatch(getCartItems(storedUserData.logedInUser.user._id));
        navigate("/cart");
        console.log("review created successfully:", result);
        // navigate("/cart");
      } else {
        console.error("Failed to create review:", response.statusText);
      }
    } catch (error) {
      // setLoader(false);
      console.error("Error:", error);
    }
  };

  return (
    <motion.div
      ref={ref}
      animate={control}
      initial="hidden"
      variants={RIGHT_VARIANTS}
      transition={{
        ...TRANSITION,
        delay: index * 0.2,
      }}
      style={{ cursor: "pointer", maxWidth: "320px", flex: "0 0 auto" }}
      className="col-12 col-md-3 "
    >
      <div
        className="product-card"
        style={{ height: "450px", justifyContent: "space-between" }}
      >
        <div>
          {disPercent && disPercent != "0" ? (
            <div style={{ position: "absolute", zIndex: 1 }}>
              <span class="tc nt_labels pa pe_none cw">
                <span class="onsale nt_label">
                  <span>-{disPercent + "%"}</span>
                </span>
              </span>
            </div>
          ) : (
            <></>
          )}{" "}
          <img
            loading="lazy"
            src={product.src?.[0]}
            alt={product.name}
            title={product.name}
            style={{ height: "200px" }}
            onClick={() => {
              scrollToTop();
              const slug = (product?.metaSlug ?? product?._id) ? String(product?.metaSlug ?? product?._id).toLowerCase() : '';
              navigate(`/product-detail/${encodeURIComponent(slug)}`, { id: product?._id });
            }}
          />
        </div>
        <div className="d-flex flex-column">
          <div
            style={{
              textAlign: "center",
              fontSize: "1rem",
              fontWeight: "500",
            }}
            onClick={() => {
                scrollToTop();
                const slug = (product?.metaSlug ?? product?._id) ? String(product?.metaSlug ?? product?._id).toLowerCase() : '';
                navigate(`/product-detail/${encodeURIComponent(slug)}`, { id: product?._id });
              }}
          >
            {product.name}
          </div>
          <div
            style={{
              display: "flex",
              textAlign: "center",
              fontSize: "1rem",
              fontWeight: "500",
              justifyContent: "center",
              gap: "10px",
            }}
                        onClick={() => {
              scrollToTop();
              const slug = (product?.metaSlug ?? product?._id) ? String(product?.metaSlug ?? product?._id).toLowerCase() : '';
              navigate(`/product-detail/${encodeURIComponent(slug)}`, { id: product?._id });
            }}
          >
            ₹{" "}
            {parseFloat(product?.price || 0) -
              parseFloat(product?.discount || 0)}
            {product?.discount ? (
              <div
                className="product-price-des"
                style={{
                  paddingLeft: "10px",
                  fontWeight: "600",
                }}
              >
                ₹{parseFloat(product.price)}
              </div>
            ) : (
              <></>
            )}
          </div>
          <ul
            style={{
              padding: 0,
              display: "flex",
              justifyContent: "center",
              margin: "0",
            }}
          >
            <div class="ltn__comment-item clearfix">
              <div class="ltn__commenter-comment">
                <div class="product-ratting">
                  {product?.review != "0" ? (
                    <ul className="horizontal-list">
                      <li>
                        <a href="#">
                          <i
                            class={
                              product?.review > 0
                                ? "fas fa-star star-review-1"
                                : "far fa-star star-review-1-inactive"
                            }
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i
                            class={
                              product?.review > 1
                                ? "fas fa-star star-review-1"
                                : "far fa-star star-review-1-inactive"
                            }
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i
                            class={
                              product?.review > 2
                                ? "fas fa-star star-review-1"
                                : "far fa-star star-review-1-inactive"
                            }
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i
                            class={
                              product?.review > 3
                                ? "fas fa-star star-review-1"
                                : "far fa-star star-review-1-inactive"
                            }
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i
                            class={
                              product?.review > 4
                                ? "fas fa-star star-review-1"
                                : "far fa-star star-review-1-inactive"
                            }
                          ></i>
                        </a>
                      </li>
                    </ul>
                  ) : (
                    <ul className="horizontal-list">
                      <li>
                        <a href="#">
                          <i class={"far fa-star star-review-1-inactive"}></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class={"far fa-star star-review-1-inactive"}></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class={"far fa-star star-review-1-inactive"}></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class={"far fa-star star-review-1-inactive"}></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class={"far fa-star star-review-1-inactive"}></i>
                        </a>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </ul>
          <div
            className="btn-container"
            style={{ margin: 0 }}
          >
            <button 
              className="btn primary" 
              onClick={(e) => {
                e.stopPropagation();
                handleAddToCart();
              }}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProductList = ({ products, cart, setCart, currentSlide }) => {
  return (
    <div className="col-12 row carousel-track" style={{ 
      display: 'flex',
      transition: 'transform 0.5s ease-in-out',
      transform: `translateX(-${currentSlide * 100}%)`
    }}>
      {products?.map((item, index) => (
        <ProductCard
          key={index}
          product={item}
          index={index}
          cart={cart}
          setCart={setCart}
        />
      ))}
    </div>
  );
};

const Pagination = ({ length, cur, setCur }) => {
  return (
    <ul className="slick-dots" role="tablist" style={{ marginTop: "30px" }}>
      {Array.from({ length }).map((e, ind) => {
        return (
          <li
            key={ind}
            className={cur === ind + 1 ? "slick-active" : ""}
            role="presentation"
            aria-selected={cur === ind + 1}
            onClick={() => setCur(ind + 1)}
          >
            <button type="button" data-role="none" role="button">
              {ind + 1}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

function Product(props) {
  const navigate = useNavigate();
  const handleViewAll = () => {
    navigate("/best-hair-care-products-hair-loss-scalp-health");
  };
  let { cart, setCart } = props;

  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("idle");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slide] = useState(3);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-slide effect
  useEffect(() => {
    if (products?.length > slide && !isHovered) {
      const maxSlide = Math.ceil(products?.length / slide) - 1;
      let timeout = setTimeout(
        () =>
          setCurrentSlide((prevSlide) =>
            prevSlide >= maxSlide ? 0 : prevSlide + 1
          ),
        3000 // Auto-slide every 3 seconds
      );

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [currentSlide, products, slide, isHovered]);

  useEffect(() => {
    const fetchProducts = async () => {
      setStatus("loading");
      try {
        const response = await fetch(`${BASE_URL}/admin/product?review=&lessPrice=0&morePrice=50000&type=0&filter=&display=1`);
        const data = await response.json();
        console.log("Products fetched:", data);
        setProducts([...data.message].slice(0, 9));
        setStatus("idle");
      } catch (error) {
        console.error("Error fetching products:", error);
        setStatus("error");
      }
    };

    fetchProducts();
  }, []);

  const isLargeScreen = useMediaQuery("(min-width:1200px)");
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Navigation handlers
  const goToNextSlide = () => {
    const maxSlide = Math.ceil(products?.length / slide) - 1;
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const goToPrevSlide = () => {
    const maxSlide = Math.ceil(products?.length / slide) - 1;
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Get all products grouped by slide
  const allProductSlides = useMemo(() => {
    const slides = [];
    for (let i = 0; i < products?.length; i += slide) {
      slides.push(products.slice(i, i + slide));
    }
    return slides;
  }, [products, slide]);

  return (
    <div>
      <h2
        className="product-title animate__animated animate__fadeIn"
        style={{ fontSize: "2rem", fontWeight: "700" }}
      >
        Our Products
      </h2>
      <div 
        className="product-carousel-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Navigation Arrows */}
        {products?.length > slide && (
          <>
            <button 
              className="carousel-arrow carousel-arrow-prev"
              onClick={goToPrevSlide}
              aria-label="Previous slide"
              disabled={currentSlide === 0}
              style={{ opacity: currentSlide === 0 ? 0.4 : 1, cursor: currentSlide === 0 ? 'not-allowed' : 'pointer' }}
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button 
              className="carousel-arrow carousel-arrow-next"
              onClick={goToNextSlide}
              aria-label="Next slide"
              disabled={currentSlide === Math.ceil(products?.length / slide) - 1}
              style={{ opacity: currentSlide === Math.ceil(products?.length / slide) - 1 ? 0.4 : 1, cursor: currentSlide === Math.ceil(products?.length / slide) - 1 ? 'not-allowed' : 'pointer' }}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </>
        )}
        
        {/* Carousel Track */}
        <div className="carousel-wrapper">
          <div className="product-container container" style={{ padding: 0 }}>
            <div 
              className="carousel-track row"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                transition: 'transform 0.5s ease-in-out',
                display: 'flex',
                flexWrap: 'nowrap',
                margin: 0
              }}
            >
              {allProductSlides.map((slideProducts, slideIndex) => (
                <div 
                  key={slideIndex}
                  className="carousel-slide"
                  style={{
                    minWidth: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1rem',
                    flexShrink: 0
                  }}
                >
                  {slideProducts.map((product, index) => (
                    <ProductCard
                      key={product._id || index}
                      product={product}
                      index={index}
                      cart={cart}
                      setCart={setCart}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Pagination Dots */}
        <Pagination
          length={Math.ceil(products?.length / slide)}
          cur={currentSlide + 1}
          setCur={(page) => goToSlide(page - 1)}
        />
      </div>
      <div
        className="view-all-product animate__animated animate__fadeInDown"
        style={{ animationDelay: "0.2s", textAlign: "center", display: "flex", justifyContent: "center", width: "100%" }}
      >
        <button
          onClick={handleViewAll}
          className="btn primary"
          style={{ background: "#4b555c", color: "white", margin: 0 }} 
        >
          VIEW ALL PRODUCTS
        </button>
      </div>
    </div>
  );
}

export default Product;
