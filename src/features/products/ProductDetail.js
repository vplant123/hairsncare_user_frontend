import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Navbar from "../nav/Navbar";
import ProductDetailSlider from "./ProductDetailSlider";
import "./ProductDetail.css";
import Product from "../product-list/Product";
import ShoppingFeature from "../shopping-feature/ShoppingFeature";
import Footer from "../footer/Footer";
import BASE_URL from "../../Config";
import FaqProducts from "./FaqProduct";
import { toast, ToastContainer } from "react-toastify";
import moment from "moment/moment";
import { useDispatch, useSelector } from "react-redux";
import { toggleLogin } from "../login/LoginSlice";
import { FaPlayCircle } from "react-icons/fa";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Button } from "reactstrap";
import { getCartItems } from "./CartSlice";
import ReactImageMagnify from "react-image-magnify";
// import zIndex from "@mui/material/styles/zIndex";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { useMediaQuery } from "@mui/material";
import ReactPaginate from "react-paginate";
import { generateProductSchema } from "../../utils/seoUtils";
import Breadcrumb from "../../components/Breadcrumb";
import SEO from "../../components/SEO";

const findNearestWhitespace = (str, index) => {
  let left = index;
  let right = index;

  while (left > 0 && str[left] !== " ") {
    left--;
  }

  while (right < str.length && str[right] !== " ") {
    right++;
  }

  // Choose the closer whitespace
  if (index - left < right - index) {
    return left;
  } else {
    return right;
  }
};

function ProductDetail(props) {
  // useEffect(() => {
  //   if(props?.setTitle) props?.setTitle(window.location.pathname)
  // },[])

  let { cart, setCart } = props;
  const isMobile = useMediaQuery("(max-width: 768px)");

  const content = useSelector((state) => state.content.customerVideos);
  const content1 = useSelector((state) => state.content.config);

  console.log("Content API Data:", content);
  console.log("Content Config Data:", content1);

  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.onscroll = () => {
        let currentScrollPos = window.pageYOffset - 700;
        let maxScroll = document.body.scrollHeight - window.innerHeight;
        console.log(
          "nmkmsen",
          document.body.scrollHeight,
          window.innerHeight,
          currentScrollPos
        );
        if (currentScrollPos > 0 && currentScrollPos < maxScroll) {
          setIsVisible(true);
          // console.log(currentScrollPos)
        } else {
          setIsVisible(false);
        }
      };
    }
  }, [window.pageYOffset]);

  const [select, setSelect] = useState("0");
  const targetDivRef = useRef(null);
  const scrollToDiv = () => {
    if (targetDivRef.current) {
      targetDivRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // useEffect(() => {
  //   let timeout;

  //   if(product){
  //     timeout =     setTimeout(
  //       () =>
  //         setSelect((prevIndex) =>
  //           prevIndex == (product?.src?.length-1) ? 0 : prevIndex + 1
  //         ),
  //       5000
  //     );
  //   }

  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, [select]);
  const [readMore, setReadMore] = useState(-1);
  const [product, setProduct] = useState(null);
  // const params = useParams();
  const query = useSearchParams()[0].get("id");
  const params = {
    id: query,
  };
  console.log("query", query);
  const [quantity, setQuantity] = useState(1);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    userName: "",
    rating: "",
    comment: "",
  });

  console.log("product", query);

  const [loader, setLoader] = useState(false); // New state for discount
  const [openReview, setOpenReview] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  let storedUserData = JSON.parse(localStorage?.getItem("User343"));
  const userId = storedUserData?.logedInUser?.user._id;
  console.log("nsjneifhiewh", storedUserData, userId);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [openSection, setOpenSection] = useState(null);

  const handleToggle = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const [openSection2, setOpenSection2] = useState(null);

  const handleToggle2 = (section) => {
    setOpenSection2(openSection2 === section ? null : section);
  };

  const [cur, setCur] = useState(0);

  // const [slide1,setSlide1] = useState(0)

  const fetchReview = async () => {
    try {
      const response = await fetch(`${BASE_URL}/users/get-review/${params.id}`);
      const data = await response.json();
      console.log("mkjeor", data);
      setReviews(data?.data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  let pageCount =
    reviews?.length % 5 == 0
      ? reviews?.length / 5
      : Math.floor(reviews?.length / 5) + 1;

  console.log("srjie", pageCount, reviews);

  const handleLoginClick = () => {
    dispatch(toggleLogin());
  };

  const handleTestHair = () => {
    storedUserData ? navigate("/take-hair-test") : handleLoginClick();
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${BASE_URL}/admin/product/${params.id}`);
        const data = await response.json();
        const productData = data.message[0];
        props.setTitle(productData?.metaTitle);
        props.setDesc(productData?.metaDesc);
        setProduct(productData);
        setSelect(0);
        // setReviews(productData.userReview);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
    fetchReview();
  }, [params.id]);

  const handleReviewInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({
      ...newReview,
      [name]: value,
    });
  };
  console.log("jkcoiejro", reviews?.length);
  const [cur1, setCur1] = useState(0);

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    // setReviews([...reviews, newReview]);
    // setNewReview({
    //   userName: '',
    //   rating: '',
    //   comment: ''
    // });
    if (!userId) {
      toast.error("login required");
      return false;
    }

    try {
      setLoader(true);
      let data1 = {
        rating: newReview?.rating,
        comment: newReview?.comment,
        name: newReview?.userName,
        productId: params.id,
      };
      const response = await fetch(`${BASE_URL}/users/add-review`, {
        method: "POST",
        headers: {
          Authorization: storedUserData.logedInUser.accessToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data1),
      });
      setLoader(false);
      if (response.ok) {
        const result = await response.json();
        toast.success("review created successfully");
        console.log("review created successfully:", result);
        // setReviews({
        //   userName: '',
        //   rating: '',
        //   comment: '',
        // })
        await fetchReview();
      } else {
        toast.error(`Failed to create review: ${response.statusText}`);
        console.error("Failed to create review:", response.statusText);
      }
    } catch (error) {
      setLoader(false);
      toast.error("Please logout and login again with valid credentials.");
      console.error("Error:", error);
    }
  };

  function setTransform(el, xpos, zpos, yAngle) {
    el.style.transform = `translateX(${xpos}px) translateZ(${zpos}px) rotateY(${yAngle}deg)`;
  }
  const ITEM_DISTANCE = 200;
  const ITEM_ANGLE = -45;
  const CENTER_ITEM_POP = 500;
  const CENTER_ITEM_DISTANCE = 80;
  const el = useRef(null);

  function target(index) {
    const items = el.current.children;

    for (let i = 0; i < items.length; i++) {
      const item = items[i];

      // Center item position and angle
      if (i === index) setTransform(item, 0, CENTER_ITEM_POP, 0);
      // Left items position and angle
      else if (i < index) {
        setTransform(
          item,
          (i - index) * ITEM_DISTANCE - CENTER_ITEM_DISTANCE,
          0,
          -ITEM_ANGLE
        );
      }
      // Right items position and angle
      else
        setTransform(
          item,
          (i - index) * ITEM_DISTANCE + CENTER_ITEM_DISTANCE,
          0,
          ITEM_ANGLE
        );
    }
  }
  const [yurl, setYurl] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  // Function to extract YouTube video ID and get thumbnail
  const getYouTubeThumbnail = (videoUrl) => {
    if (!videoUrl) return null;

    // Extract video ID from various YouTube URL formats
    const videoId = videoUrl.match(
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
    );

    if (videoId && videoId[1]) {
      return `https://img.youtube.com/vi/${videoId[1]}/maxresdefault.jpg`;
    }
    return null;
  };

  const handlePlay = (videoUrl) => {
    console.log("Playing video:", videoUrl);
    setYurl(videoUrl);
    setShowPopup(true);
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  console.log("momvoer", cur, cur + 4);

  const handleBuyNow = async () => {
    let data = {
      item: product,
      quantity: quantity,
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
      setLoader(true);
      const response = await fetch(
        `${BASE_URL}/cart/add-cart?userId=${userId}`,
        {
          method: "POST",
          headers: {
            Authorization: storedUserData?.logedInUser?.accessToken,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      setLoader(false);
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
      setLoader(false);
      console.error("Error:", error);
    }
  };

  const handleAddToCart = async () => {
    let data = {
      item: product,
      quantity: quantity,
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
      setLoader(true);
      const response = await fetch(
        `${BASE_URL}/cart/add-cart?userId=${userId}`,
        {
          method: "POST",
          headers: {
            Authorization: storedUserData?.logedInUser?.accessToken,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      setLoader(false);
      if (response.ok) {
        const result = await response.json();
        dispatch(getCartItems(storedUserData.logedInUser.user._id));
        navigate("/create-order");
        console.log("review created successfully:", result);
        // navigate("/cart");
      } else {
        console.error("Failed to create review:", response.statusText);
      }
    } catch (error) {
      setLoader(false);
      console.error("Error:", error);
    }
  };

  const handleMouseEnter = () => {
    setIsZoomed(true);
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
  };

  let disPercent = (
    (parseFloat(product?.discount || 0) / parseFloat(product?.price)) *
    100
  )?.toFixed(0);

  // Generate product schema
  const seoTitle =
    product?.metaTitle ||
    product?.name ||
    "Product Details | HairsnCares";
  const seoDescription =
    product?.metaDesc ||
    product?.shortDesc ||
    product?.description ||
    "Discover detailed information about HairsnCares hair care products, including benefits, ingredients, and usage.";
  const seoKeywords =
    product?.metaKeyword ||
    product?.keywords ||
    "hair care products, hairsncares products";
  const canonicalUrl = product?.metaCanonical
    ? product.metaCanonical.startsWith("http")
      ? product.metaCanonical
      : `https://www.hairsncares.com/${product.metaCanonical.replace(/^\/?/, "")}`
    : undefined;
  const productSchema = product
    ? generateProductSchema({
        name: product?.name,
        description: product?.metaDesc || product?.description,
        image:
          Array.isArray(product?.img) && product.img.length > 0
            ? product.img[0]
            : product?.image,
        price: product?.price || product?.sellingPrice || product?.mrp,
      })
    : null;

  return (
    <>
      <SEO
        useRouteData={false}
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        canonicalUrl={canonicalUrl}
        structuredData={productSchema || undefined}
        ogImage={
          Array.isArray(product?.img) && product.img.length > 0
            ? product.img[0]
            : product?.image
        }
      />
      <Navbar cart={cart} setCart={setCart} />

      <div className="container" style={{ marginTop: "20px" }}>
        <Breadcrumb />
      </div>

      <div className="container">
        <div className="product-section row">
          <div
            className="product-image col-12 col-md-6"
            style={{ position: "relative" }}
          >
            {/* <TransformWrapper
      defaultScale={1}
      defaultPositionX={100}
      defaultPositionY={100}
    >
      {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
        <React.Fragment>
                    <TransformComponent>
          <img loading="lazy" 
              style={{ maxWidth: "100%", height: "400px" }}
              src={product?.src[select]}
              alt={product?.name}
            />
          </TransformComponent> */}
            {/* <div className="tools" style={{    display: "flex",
    justifyContent: "end",gap: "17px"}}>
            <Button onClick={() => zoomIn()} style={{background: "white",
    color: "black",
    fontSize: "25px",padding: 0}}>+</Button>
            <Button onClick={() => zoomOut()} style={{background: "white",
    color: "black",
    fontSize: "25px",    padding: 0}}>-</Button>
          </div> */}
            {/* 
        </React.Fragment>
      )}
    </TransformWrapper> */}
            {/* <img loading="lazy" 
              style={{ maxWidth: "100%", height: "400px" }}
              src={product?.src[select]}
              alt={product?.name}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            /> */}

            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Wristwatch by Ted Baker London",
                  isFluidWidth: true,
                  src: product?.src[select],
                },
                largeImage: {
                  src: product?.src[select],
                  width: 1200,
                  height: 1200,
                },
              }}
              imageClassName="img-magnify"
              enlargedImageContainerStyle={{
                zIndex: 10,
                width: "100%",
                height: "100%",
              }}
              // imageStyle={{ maxWidth: "100%", height: "400px" }}
            />
            {disPercent && disPercent != "0" ? (
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  width: "71px",
                  height: "40px",
                }}
              >
                <span
                  class="tc nt_labels pa pe_none cw"
                  style={{
                    height: "100%",
                    display: "flex",
                  }}
                >
                  <span
                    class="onsale nt_label"
                    style={{ width: "100%", fontSize: "18px" }}
                  >
                    <span>-{product?.discount + "%"}</span>
                  </span>
                </span>
              </div>
            ) : (
              <></>
            )}

            <ul class="slick-dots" role="tablist" style={{ marginTop: "30px" }}>
              {product?.src?.map((e, ind) => {
                return (
                  <li
                    class={select == ind ? "slick-active" : ""}
                    aria-hidden="false"
                    role="presentation"
                    aria-selected={select == ind}
                    aria-controls={select}
                    id={select}
                    onClick={() => setSelect(ind)}
                  >
                    <button
                      type="button"
                      data-role="none"
                      role="button"
                      tabindex="0"
                    >
                      {ind}
                    </button>
                  </li>
                );
              })}
            </ul>
            <div style={{ display: "flex", alignItems: "center" }}>
              {product?.src.map((item, index) => (
                <img loading="lazy"
                  key={index}
                  onClick={() => setSelect(index)}
                  style={{
                    width: "50px",
                    height: "50px",
                    margin: "0 15px 0 0px",
                    opacity: select == index ? 1 : 0.5,
                  }}
                  src={item}
                  alt={`Product Image ${index}`}
                />
              ))}
            </div>
          </div>
          <div className="product-detail col-12 col-md-6">
            <h1>{product?.name}</h1>
            <p dangerouslySetInnerHTML={{ __html: product?.shortDes }}></p>
            <div className="d-flex" style={{ gap: "20px" }}>
              <ul style={{ padding: 0 }}>
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
                                    ? "fas fa-star star-review"
                                    : "far fa-star star-review-inactive"
                                }
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i
                                class={
                                  product?.review > 1
                                    ? "fas fa-star star-review"
                                    : "far fa-star star-review-inactive"
                                }
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i
                                class={
                                  product?.review > 2
                                    ? "fas fa-star star-review"
                                    : "far fa-star star-review-inactive"
                                }
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i
                                class={
                                  product?.review > 3
                                    ? "fas fa-star star-review"
                                    : "far fa-star star-review-inactive"
                                }
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i
                                class={
                                  product?.review > 4
                                    ? "fas fa-star star-review"
                                    : "far fa-star star-review-inactive"
                                }
                              ></i>
                            </a>
                          </li>
                        </ul>
                      ) : (
                        <ul className="horizontal-list">
                          <li>
                            <a href="#">
                              <i class={"far fa-star star-review-inactive"}></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class={"far fa-star star-review-inactive"}></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class={"far fa-star star-review-inactive"}></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class={"far fa-star star-review-inactive"}></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class={"far fa-star star-review-inactive"}></i>
                            </a>
                          </li>
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </ul>
              <div style={{ fontSize: "18px" }} className="d-flex">
                <div>{reviews?.length}</div>
                <div
                  style={{
                    margin: "0px 0 0 10px",
                    fontWeight: "700",
                    cursor: "pointer ",
                  }}
                  onClick={scrollToDiv}
                >
                  Reviews
                </div>
              </div>
            </div>

            <div className="quantity-input">
              <h2>
                Price ₹{" "}
                {(
                  parseFloat(product?.price || 0) -
                  parseFloat(product?.price || 0) *
                    (parseFloat(product?.discount || 0) / 100)
                )?.toFixed(0)}
              </h2>

              <div style={{ textDecoration: "line-through", fontSize: "20px" }}>
                ₹{parseFloat(product?.price || 0)?.toFixed(0)}
              </div>
              <div className="cout-cont">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {" "}
                  <div className="negative-sign" onClick={decrementQuantity}>
                    -
                  </div>
                  <div style={{ width: "2rem", height: "2rem" }}>
                    <input
                      type="text"
                      style={{ width: "100%", textAlign: "center" }}
                      value={quantity}
                      readOnly
                    />
                  </div>
                  <div className="plus-sign" onClick={incrementQuantity}>
                    +
                  </div>
                </div>
                {/* <div className="count-item" style={{ padding: "10px" }}>
                  <button onClick={incrementQuantity}>+</button>
                  <button onClick={decrementQuantity}>-</button>
                </div> */}
              </div>
            </div>
            <div className="d-flex .shop-btn1">
              <div
                className={`d-flex shop-btn1 btn-222 ${
                  product?.stock === 0 ? "disabled" : ""
                }`}
                style={{
                  cursor: product?.stock === 0 ? "not-allowed" : "pointer",
                  opacity: product?.stock === 0 ? 0.6 : 1,
                }}
                onClick={() => product?.stock > 0 && handleAddToCart()}
              >
                <img loading="lazy"
                  src="/assets/img/buy-icon.png"
                  style={{
                    width: "28px",
                    height: "28px",
                    margin: "5px 0 0 10px",
                  }}
                />
                <div className="" style={{ margin: "8px 0 0 17px" }}>
                  {product?.stock === 0 ? "Out of Stock" : "Buy Now"}
                </div>
              </div>

              <div
                className={`d-flex shop-btn1 btn-33 ${
                  product?.stock === 0 ? "disabled" : ""
                }`}
                style={{
                  cursor: product?.stock === 0 ? "not-allowed" : "pointer",
                  opacity: product?.stock === 0 ? 0.6 : 1,
                }}
                onClick={() => product?.stock > 0 && handleBuyNow()}
              >
                <img loading="lazy"
                  src="/assets/img/cart-icon.png"
                  style={{
                    width: "28px",
                    height: "28px",
                    margin: "5px 0 0 10px",
                  }}
                />
                <div className="" style={{ margin: "8px 0 0 17px" }}>
                  {product?.stock === 0 ? "Out of Stock" : "Add to cart"}
                </div>
              </div>
            </div>
            {(
              parseFloat(product?.price || 0) -
              parseFloat(product?.discount || 0)
            )?.toFixed(0) < content1?.deliveryAmt ? (
              <div
                className="d-flex"
                style={{ padding: "10px 0 10px 0", gap: "10px" }}
              >
                <LocalShippingIcon style={{ fontSize: "30px" }} />
                <strong style={{ fontSize: "18px" }}>Delivery Fee : </strong>
                <div style={{ fontSize: "18px" }}>
                  &nbsp;₹ {content1?.deliveryCharge}
                </div>
              </div>
            ) : (
              <div
                className="d-flex"
                style={{ padding: "10px 0 10px 0", gap: "10px" }}
              >
                <LocalShippingIcon style={{ fontSize: "30px" }} />

                <strong style={{ color: "green", fontSize: "18px" }}>
                  FREE Delivery&nbsp;&nbsp;{" "}
                </strong>
                <div
                  style={{ textDecoration: "line-through", fontSize: "18px" }}
                >
                  ₹ {content1?.deliveryCharge}
                </div>
              </div>
            )}
            <div className="d-flex flex-column">
              <div className="hilight">Highlights:</div>
              <div
                className="hilight2"
                dangerouslySetInnerHTML={{ __html: product?.highlights }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container detail-cont">
        <h2>Product Detail</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: product?.longDes
              ?.slice(
                0,
                findNearestWhitespace(
                  product?.longDes,
                  Math.floor(product?.longDes?.length / 2)
                )
              )
              ?.trim(),
          }}
        />
        <div style={{ textAlign: "center", margin: "2rem 0 2rem 0" }}>
          <img loading="lazy"
            style={{ width: "100%" }}
            src="/assets/img/banner/Product Page - Static Banner.png"
          />
        </div>
        <div
          style={{ margin: "0 0 35px 0" }}
          dangerouslySetInnerHTML={{
            __html: product?.longDes
              ?.slice(
                findNearestWhitespace(
                  product?.longDes,
                  Math.floor(product?.longDes?.length / 2)
                )
              )
              ?.trim(),
          }}
        />
        <div class="ingredient-section pt-60 pb-60">
          <div class="container">
            <div class="row" style={{ gap: 0 }}>
              <div class="col-lg-6 col-md-6">
                <h3 class="animated fadeIn">Ingredients</h3>
                <div
                  style={{ margin: "0 0 50px 0" }}
                  dangerouslySetInnerHTML={{ __html: product?.ingredientMain }}
                />
                <div class=" ingredient-section faq-section pb-60">
                  <div class="container">
                    <div class="row" style={{ padding: 0 }}>
                      <div class="col-lg-12 col-md-12">
                        <div class="benefit-accordian ingredient-accordian">
                          <div id="accordion_2">
                            {product?.ingredient?.map((e) => {
                              return (
                                <div class="card">
                                  <h6
                                    class="ltn__card-title collapsed"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#${e?._id}`}
                                    aria-expanded={openSection === e?._id}
                                    onClick={() => handleToggle(e?._id)}
                                  >
                                    {e?.title}
                                  </h6>
                                  <span></span>
                                  <div
                                    id={e?._id}
                                    className={`accordion-collapse collapse ${
                                      openSection === e?._id ? "show" : ""
                                    }`}
                                    data-bs-parent="#accordion_2"
                                    //
                                  >
                                    <div class="card-body">
                                      <div
                                        dangerouslySetInnerHTML={{
                                          __html: e?.desc,
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <img loading="lazy"
                  src="/assets/img/Ingredient-pic.jpg"
                  alt=""
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div class="row" style={{ gap: 0, padding: "2rem" }}>
          <div class="col-lg-2">
            <h3 class="animated fadeIn">Benefits</h3>
          </div>
          <div class="col-lg-10">
            {/* <div dangerouslySetInnerHTML={{ __html: product?.benefits }} /> */}
            <div
              style={{ margin: "0 0 50px 0" }}
              dangerouslySetInnerHTML={{ __html: product?.benefitsMain }}
            />

            <div class="benefit-accordian ingredient-accordian">
              <div id="accordion_2">
                {product?.benefits?.map((e) => {
                  return (
                    <div class="card">
                      <h6
                        class="ltn__card-title collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${e?._id}`}
                        aria-expanded={openSection2 === e?._id}
                        onClick={() => handleToggle2(e?._id)}
                      >
                        {e?.title}
                      </h6>
                      <span></span>
                      <div
                        id={e?._id}
                        className={`accordion-collapse collapse ${
                          openSection2 === e?._id ? "show" : ""
                        }`}
                        data-bs-parent="#accordion_2"
                        //
                      >
                        <div class="card-body">
                          <div dangerouslySetInnerHTML={{ __html: e?.desc }} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div
          style={{ margin: "50px 0 50px 0" }}
          // dangerouslySetInnerHTML={{ __html: product.longDes }}
        />
      </div>

      <div class="review pt-0">
        <div class="container">
          <div
            class="col-lg-12"
            style={{ margin: "0 0 50px 0" }}
            onClick={handleTestHair}
          >
            <img loading="lazy"
              src="/assets/img/product-details--banner-doctor-recommend.png"
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                overflow: "hidden",
              }}
            />
          </div>
          <div class="col-lg-12" ref={targetDivRef}>
            <div class="ltn__shop-details-tab-content-inner">
              <h3 class="mb-30 animated fadeIn">
                Customer Reviews{" "}
                <a
                  class="write"
                  onClick={() => setOpenReview(true)}
                  style={{ cursor: "pointer" }}
                >
                  write a review
                </a>
              </h3>
              <div class="ltn__comment-area mb-30">
                <div class="ltn__comment-inner">
                  <ul>
                    {reviews?.slice(cur, cur + 5)?.map((e, i) => {
                      return (
                        <li
                          className="ltn-main"
                          style={{ border: i == 0 ? "none" : "" }}
                        >
                          <div class="ltn__comment-item clearfix">
                            <div class="ltn__commenter-img">{e?.name[0]}</div>
                            <div class="ltn__commenter-comment">
                              <div class="product-ratting">
                                <ul className="horizontal-list">
                                  <li>
                                    <a href="#">
                                      <i
                                        style={{ color: "#FFB800" }}
                                        class={
                                          e?.rating > 0
                                            ? "fas fa-star"
                                            : "far fa-star"
                                        }
                                      ></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i
                                        style={{ color: "#FFB800" }}
                                        class={
                                          e?.rating > 1
                                            ? "fas fa-star"
                                            : "far fa-star"
                                        }
                                      ></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i
                                        style={{ color: "#FFB800" }}
                                        class={
                                          e?.rating > 2
                                            ? "fas fa-star"
                                            : "far fa-star"
                                        }
                                      ></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i
                                        style={{ color: "#FFB800" }}
                                        class={
                                          e?.rating > 3
                                            ? "fas fa-star"
                                            : "far fa-star"
                                        }
                                      ></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i
                                        style={{ color: "#FFB800" }}
                                        class={
                                          e?.rating > 4
                                            ? "fas fa-star"
                                            : "far fa-star"
                                        }
                                      ></i>
                                    </a>
                                  </li>
                                  <li style={{ marginLeft: "10px" }}>
                                    <span>
                                      {moment(e?.createdAt).format(
                                        "DD/MM/YYYY"
                                      )}
                                    </span>
                                  </li>
                                </ul>
                              </div>
                              <h6 style={{ fontSize: "1.2rem" }}>
                                <div href="#">{e?.name}</div>
                              </h6>
                            </div>
                          </div>
                          <div style={{ fontSize: "17px" }}>
                            {e?.comment?.length > 50 ? (
                              <div className="d-flex">
                                {readMore == i
                                  ? e?.comment
                                  : e?.comment?.substring(0, 50)}
                                <div onClick={() => setReadMore(i)}>
                                  &nbsp; &nbsp;...Read More
                                </div>
                              </div>
                            ) : (
                              e?.comment
                            )}
                          </div>
                        </li>
                      );
                    })}
                  </ul>

                  <ul
                    class="slick-dots"
                    role="tablist"
                    style={{ marginTop: "30px" }}
                  >
                    {/* {reviews
                      ?.slice(0, Math.ceil(reviews?.length / 4))
                      .map((e, ind) => {
                        return (
                          <li
                            class={cur / 4 == ind ? "slick-active" : ""}
                            aria-hidden="false"
                            role="presentation"
                            aria-selected={cur / 4 == ind}
                            aria-controls={cur}
                            id={cur}
                            onClick={() => setCur(ind * 4)}
                          >
                            <button
                              type="button"
                              data-role="none"
                              role="button"
                              tabindex="0"
                            >
                              {ind + 4}
                            </button>
                          </li>
                        );
                      })} */}

                    <div
                      className="reactPagination"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <ReactPaginate
                        breakLabel="..."
                        nextLabel=" >"
                        onPageChange={(event) => {
                          setCur(event.selected * 5);
                          // console.log("sjiorjfre",event.selected)
                          // setSelectedPage(event.selected)
                        }}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        // forcePage={selectedPage}
                        previousLabel="<"
                        renderOnZeroPageCount={null}
                        breakClassName={"page-item"}
                        breakLinkClassName={"page-link"}
                        containerClassName={"pagination"}
                        pageClassName={"page-item"}
                        pageLinkClassName={"page-link"}
                        previousClassName={"page-item"}
                        previousLinkClassName={"page-link"}
                        nextClassName={"page-item"}
                        nextLinkClassName={"page-link"}
                        activeClassName={"active"}
                      />
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {openReview ? (
        <div className="container review-section">
          <h3>Add a Review</h3>
          <form onSubmit={handleReviewSubmit} className="review-form">
            <div className="form-group">
              <label>Name: </label>
              <input
                type="text"
                name="userName"
                value={newReview.userName}
                onChange={handleReviewInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Rating: </label>
              <input
                type="number"
                name="rating"
                value={newReview.rating}
                onChange={handleReviewInputChange}
                min="1"
                max="5"
                required
              />
            </div>
            <div className="form-group">
              <label>Comment: </label>
              <textarea
                name="comment"
                value={newReview.comment}
                onChange={handleReviewInputChange}
                required
              />
            </div>
            <button
              type="submit"
              className="submit-review-btn"
              // disabled={userId ? false : true}
            >
              {loader ? "Loading" : "Submit Review"}
            </button>
          </form>
        </div>
      ) : (
        <></>
      )}
      {/* <div>
        <img loading="lazy"
          style={{
            height: "100%",
            width: "100%",
            padding: "2% 11%",
          }}
          src="/assets/img/banner/HappyCutomer.png"
          alt=""
        />
      </div> */}

      <div className="container">
        <div className="story-slider happy-customer">
          <div className="row">
            <div className="col-md-6 col-12">
              <h2>
                <span>Stories by our</span> Happy Customers
              </h2>
              {content?.section1?.[cur1] && (
                <>
                  <h4>{content.section1[cur1]?.name}</h4>
                  <p>{content.section1[cur1]?.title}</p>
                </>
              )}
            </div>
            <div className="col-md-6 col-12" style={{ position: "relative" }}>
              {content?.section1?.[cur1] && (
                <div
                  className="cust-video"
                  style={{
                    backgroundImage: `url(${
                      getYouTubeThumbnail(content.section1[cur1]?.videoUrl) ||
                      content.section1[cur1]?.url
                    })`,
                    position: "relative",
                    height: "300px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                  onClick={() => handlePlay(content.section1[cur1]?.videoUrl)}
                >
                  <div
                    className="play-button"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      color: "white",
                      cursor: "pointer",
                    }}
                  >
                    <FaPlayCircle size={50} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Video Popup */}
        {showPopup && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.8)",
              zIndex: 1000,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => setShowPopup(false)}
          >
            <div style={{ position: "relative" }}>
              <iframe
                title="YouTube Video"
                width="560"
                height="315"
                src={yurl}
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <button
                onClick={() => setShowPopup(false)}
                style={{
                  position: "absolute",
                  top: "-40px",
                  right: "0",
                  background: "white",
                  border: "none",
                  fontSize: "24px",
                  cursor: "pointer",
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                }}
              >
                ×
              </button>
            </div>
          </div>
        )}

        {/* Navigation Dots */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
            gap: "10px",
          }}
        >
          {content?.section1?.map((_, index) => (
            <button
              key={index}
              onClick={() => setCur1(index)}
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                border: "none",
                backgroundColor: cur1 === index ? "#ffa500" : "#ccc",
                cursor: "pointer",
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <div
        className="buyNow-main-div"
        ref={componentRef}
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        <div className="container">
          {isMobile ? (
            <div
              className="d-flex"
              style={{
                justifyContent: "end",
                margin: "12px 0 12px 0",
                gap: "10px",
              }}
            >
              <div className="cout-cont">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {" "}
                  <div className="negative-sign" onClick={decrementQuantity}>
                    -
                  </div>
                  <div style={{ width: "2rem", height: "2rem" }}>
                    <input
                      type="text"
                      style={{
                        width: "100%",
                        textAlign: "center",
                        height: "100%",
                      }}
                      value={quantity}
                      readOnly
                    />
                  </div>
                  <div className="plus-sign" onClick={incrementQuantity}>
                    +
                  </div>
                </div>
              </div>
              <div
                className={`d-flex shop-btn1 btn-33 ${
                  product?.stock === 0 ? "disabled" : ""
                }`}
                style={{
                  cursor: product?.stock === 0 ? "not-allowed" : "pointer",
                  marginTop: 0,
                  opacity: product?.stock === 0 ? 0.6 : 1,
                }}
                onClick={() => product?.stock > 0 && handleBuyNow()}
              >
                <img loading="lazy"
                  src="/assets/img/cart-icon.png"
                  style={{
                    width: "28px",
                    height: "28px",
                    margin: "5px 0 0 10px",
                  }}
                />
                <div className="" style={{ margin: "8px 0 0 17px" }}>
                  {product?.stock === 0 ? "Out of Stock" : "Add to cart"}
                </div>
              </div>
            </div>
          ) : (
            <div className="d-flex" style={{ justifyContent: "space-between" }}>
              <div className="d-flex" style={{ gap: "10px" }}>
                <img loading="lazy"
                  style={{ width: "70px", height: "70px" }}
                  src={product?.src?.[0]}
                />
                <div className="buyNow-product-name">{product?.name}</div>
              </div>
              <div className="d-flex" style={{ gap: "10px" }}>
                <div
                  style={{
                    textDecoration: "line-through",
                    fontSize: "20px",
                    color: "#aaa",
                  }}
                  className="buyNow-product-name"
                >
                  ₹ {parseFloat(product?.price || 0)?.toFixed(0)}
                </div>
                <div className="buyNow-product-name">
                  ₹{" "}
                  {(
                    parseFloat(product?.price || 0) -
                    (parseFloat(product?.price || 0) *
                      parseFloat(product?.discount || 0)) /
                      100
                  )?.toFixed(0)}
                </div>

                <div className="cout-cont">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    <div className="negative-sign" onClick={decrementQuantity}>
                      -
                    </div>
                    <div style={{ width: "2rem", height: "2rem" }}>
                      <input
                        type="text"
                        style={{
                          width: "100%",
                          textAlign: "center",
                          height: "100%",
                        }}
                        value={quantity}
                        readOnly
                      />
                    </div>
                    <div className="plus-sign" onClick={incrementQuantity}>
                      +
                    </div>
                  </div>
                </div>
                <div
                  className={`d-flex shop-btn1 btn-33 ${
                    product?.stock === 0 ? "disabled" : ""
                  }`}
                  style={{
                    cursor: product?.stock === 0 ? "not-allowed" : "pointer",
                    opacity: product?.stock === 0 ? 0.6 : 1,
                  }}
                  onClick={() => product?.stock > 0 && handleBuyNow()}
                >
                  <img loading="lazy"
                    src="/assets/img/cart-icon.png"
                    style={{
                      width: "28px",
                      height: "28px",
                      margin: "5px 0 0 10px",
                    }}
                  />
                  <div className="" style={{ margin: "8px 0 0 17px" }}>
                    {product?.stock === 0 ? "Out of Stock" : "Add to cart"}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Product cart={cart} setCart={setCart} />
      <ShoppingFeature />
      <FaqProducts product={product} />
      <Footer />
      <ToastContainer position="bottom-right" />
    </>
  );
}

export default ProductDetail;
