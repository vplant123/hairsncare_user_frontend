// import React,{useEffect} from 'react';
// import './productList.css';

// import { selectAllProducts,fetchAllProductAsync } from './productSlice';

// import {  useDispatch,useSelector } from 'react-redux';
// import {Hourglass} from 'react-loader-spinner';
// import { Link,Navigate, useNavigate } from 'react-router-dom';

// function ProductList() {
// const navigate=useNavigate()
//   const dispatch =useDispatch()
//   useEffect(() => {
//     dispatch(fetchAllProductAsync());
//   }, [dispatch]);
// const products=useSelector(selectAllProducts)
// const status = useSelector(state => state.product.status);
// console.log(products);
// return (
//   <div className="product-list-container">
//     {status === 'loading' ? (
//       <div className="loader"><Hourglass  type="Puff" color="#00BFFF" height={50} width={50} /></div>
//     ) : (
//       products?.map((product, index) => (
//         <div className="product-item" key={index}>
//           {/* <Link to={`/product-detail/${product.id}`} key={product.id}></Link> */}
//           <img loading="lazy" src={product.src} alt={product.name} />
//           <p>{product.name}</p>
//           <p>${product.price}</p>
//           <button onClick={()=>navigate(`/product-detail/${product.id}`)} className="btn primary prod-button">ADD TO CART</button>
//         </div>
//       ))
//     )}
//   </div>
// );
// }

// export default ProductList;
// import React, { useEffect, useState } from 'react';
// import './productList.css';
// import { Hourglass } from 'react-loader-spinner';
// import { useNavigate } from 'react-router-dom';

// import BASE_URL from '../../Config' // Replace with your actual base URL

// function ProductList() {
//   const navigate = useNavigate();
//   const [products, setProducts] = useState([]);
//   const [status, setStatus] = useState('idle');

//   useEffect(() => {
//     const fetchProducts = async () => {
//       setStatus('loading');
//       try {
//         const response = await fetch(`${BASE_URL}/admin/product`);
//         const data = await response.json();
//         setProducts(data.message); // Adjust according to your API response structure
//         setStatus('idle');
//       } catch (error) {
//         console.error('Error fetching products:', error);
//         setStatus('error');
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div className="product-list-container">
//       {status === 'loading' ? (
//         <div className="loader">
//           <Hourglass type="Puff" color="#00BFFF" height={50} width={50} />
//         </div>
//       ) : status === 'error' ? (
//         <div>Error loading products</div>
//       ) : (
//         products?.map((product, index) => (
//           <div className="product-item" key={index}>
//             <img loading="lazy" src={product.src} alt={product.name} />
//             <p>{product.name}</p>
//             <p>${product.price}</p>
//             <button
//               onClick={() => navigate(`/product-detail/${product.id}`)}
//               className="btn primary prod-button"
//             >
//               ADD TO CART
//             </button>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default ProductList;

import React, { useEffect, useState } from "react";
import "./productList.css";
import { Hourglass } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import BASE_URL from "../../Config"; // Replace with your actual base URL
import { addProductToCart, getCartItems } from "./CartSlice";
import Review from "../review-section/Review";
import ReactPaginate from "react-paginate";
import ReactImageMagnify from "react-image-magnify";
import { useMediaQuery } from "@mui/material";
import useNavigateParams from "../../utils/hookUseNavigateParam";

function ProductList(props) {
  let { cart, setCart } = props;

  console.log("smmfr", cart, setCart);

  useEffect(() => {
    console.log("sfoerjore");
  }, [cart]);

  const navigate = useNavigateParams();
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("idle");
  const [slide, setSlide] = useState(2);
  const isLargeScreen = useMediaQuery("(min-width:1200px)");
  const isMobile = useMediaQuery("(max-width: 768px)");
  useEffect(() => {
    if (isLargeScreen) {
      setSlide(9);
    } else {
      setSlide(10);
    }
  }, [isMobile, isLargeScreen]);

  const [loader, setLoader] = useState(false); // New state for discount
  let { minValue, maxValue, rating, type, filter } = props;
  let storedUserData = JSON.parse(localStorage.getItem("User343"));
  const userId = storedUserData?.logedInUser.user._id;
  const [cur, setCur] = useState(0);

  let pageCount =
    products?.length % slide === 0
      ? products?.length / slide
      : Math.floor(products?.length / slide) + 1;

  const handlePageClick = (event) => {
    setCur(event.selected);
    // console.log("sjiorjfre",event.selected)
    // setSelectedPage(event.selected)
  };
  console.log(storedUserData);
  useEffect(() => {
    const fetchProducts = async () => {
      setStatus("loading");
      try {
        const response = await fetch(
          `${BASE_URL}/admin/product?review=${rating}&lessPrice=${minValue}&morePrice=${maxValue}&type=${type}&filter=${filter}&display=1`
        );
        const data = await response.json();
        setProducts(data.message); // Adjust according to your API response structure
        setStatus("idle");
      } catch (error) {
        console.error("Error fetching products:", error);
        setStatus("error");
      }
    };

    fetchProducts();
  }, [minValue, maxValue, rating, type, filter]);
  console.log(products, "products");

  const handleAddToCart = async (product) => {
    let data = {
      item: product,
      quantity: 1,
    };
    try {
      if (!storedUserData?.logedInUser) {
        let c = cart.map((e) => ({ ...e }));
        let f = c?.findIndex((w) => w?.item?._id == product?._id);
        if ((f || f == "0") && f != -1) {
          c[f].quantity = c[f]?.quantity + 1;
        } else {
          c.push(data);
        }
        setCart(c);
        console.log("jreijf", f, c);
        localStorage.setItem("cart", JSON.stringify(c));
        toast.success("product added to cart");
        return;
        // toast.error(`Please Login First`);
      }

      setLoader(true);
      const response = await fetch(
        `${BASE_URL}/cart/add-cart?userId=${userId}`,
        {
          method: "POST",
          headers: {
            Authorization: storedUserData.logedInUser.accessToken,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      setLoader(false);
      if (response.ok) {
        const result = await response.json();
        dispatch(getCartItems(storedUserData.logedInUser.user._id));
        toast.success("product added to cart");
        console.log("review created successfully:", result);
        // navigate("/cart")
      } else {
        console.error("Failed to create review:", response.statusText);
      }
    } catch (error) {
      setLoader(false);
      console.error("Error:", error);
    }
  };

  return (
    <div className="product-list-container row">
      {status === "loading" ? (
        <div className="loader-in-page" style={{ height: "400px" }}>
          <Hourglass type="Puff" color="#00BFFF" height={50} width={50} />
        </div>
      ) : status === "error" ? (
        <div>Error loading products</div>
      ) : (
        <>
          {products
            ?.slice(cur * slide, (cur + 1) * slide)
            ?.map((product, index) => {
              let disPercent = (
                (parseFloat(product?.discount || 0) /
                  parseFloat(product?.price)) *
                100
              )?.toFixed(0);
              return (
                <div
                  className="product-item d-flex flex-column col-6 col-md-3"
                  key={index}
                  style={{
                    padding: "0 15px 0 15px",
                    justifyContent: "space-between",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  {disPercent && disPercent != "0" ? (
                    <div style={{ position: "absolute", zIndex: 1 }}>
                      <span class="tc nt_labels pa pe_none cw">
                        <span class="onsale nt_label">
                          <span>-{product?.discount + "%"}</span>
                        </span>
                      </span>
                    </div>
                  ) : (
                    <></>
                  )}{" "}
                  <div
                    style={
                      {
                        // padding: "40px",
                      }
                    }
                    onClick={() =>
                      navigate(
                        "/product-detail/" + product?.metaSlug ?? product._id,
                        { id: product?._id }
                      )
                    }
                    title={product?.name}
                    className="image-container-product-all"
                  >
                    {" "}
                    {/* <img loading="lazy"
                            src={product?.src[0]}
                            alt={product.name}
                            style={{
                              height: "100%",
                              transition: "all 3.5s ease 0s",
                            }}
                          /> */}
                    <ReactImageMagnify
                      smallImage={{
                        alt: `${product?.name} by HairsnCares. Effective solution for ${product?.description}`,
                        isFluidWidth: true,
                        src: product?.src[0], // Replace with your image URL
                        title: product?.name,
                      }}
                      largeImage={{
                        alt: `${product?.name} by HairsnCares. Effective solution for ${product?.description}.`,
                        src: product?.src[0], // Replace with high-res image URL
                        width: 500, // Smaller width reduces zoom level
                        height: 500,
                      }}
                      enlargedImagePosition="over" // "over", "beside", etc.
                      imageProps={{
                        title: "This is a beautiful scenery", // Add the title for magnified view
                      }}
                    />
                  </div>
                  <div
                    className="d-flex flex-column"
                    style={{ padding: "0px 3px 13px 5px" }}
                  >
                    <div
                      style={{ textAlign: "left", paddingBottom: "8px" }}
                      onClick={() =>
                        navigate(
                          "/product-detail/" + product?.metaSlug ?? product._id,
                          { id: product?._id }
                        )
                      }
                    >
                      {product.name}
                    </div>
                    <div className="d-flex" style={{ gap: "8px" }}>
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
                                      <i
                                        class={
                                          "far fa-star star-review-1-inactive"
                                        }
                                      ></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i
                                        class={
                                          "far fa-star star-review-1-inactive"
                                        }
                                      ></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i
                                        class={
                                          "far fa-star star-review-1-inactive"
                                        }
                                      ></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i
                                        class={
                                          "far fa-star star-review-1-inactive"
                                        }
                                      ></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i
                                        class={
                                          "far fa-star star-review-1-inactive"
                                        }
                                      ></i>
                                    </a>
                                  </li>
                                </ul>
                              )}
                            </div>
                          </div>
                        </div>
                      </ul>
                      <div>
                        {product?.reviews > 0
                          ? "(" + product?.reviews + ")"
                          : ""}
                      </div>
                    </div>

                    <div
                      style={{ textAlign: "left", paddingBottom: "8px" }}
                      className="d-flex"
                      onClick={() =>
                        navigate(
                          "/product-detail/" + product?.metaSlug ?? product._id,
                          { id: product?._id }
                        )
                      }
                    >
                      <div style={{ fontWeight: "600" }}>
                        ₹{" "}
                        {Math.round(
                          parseFloat(product.price) *
                            (1 - parseFloat(product.discount || 0) / 100)
                        )}
                      </div>
                      {product.discount ? (
                        <div
                          className="product-price-des"
                          style={{
                            paddingLeft: "10px",
                            fontWeight: "600",
                          }}
                        >
                          ₹{Math.max(0, Math.round(parseFloat(product.price)))}
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                    <button
                      onClick={() => {
                        props?.toggleCart();
                        handleAddToCart(product);
                      }}
                      className={`btn primary ${
                        product.stock === 0 ? "disabled" : "theme-btn-2"
                      }`}
                      disabled={product.stock === 0}
                    >
                      {loader
                        ? "Loading"
                        : product.stock === 0
                        ? "OUT OF STOCK"
                        : "ADD TO CART"}
                    </button>
                  </div>
                </div>
              );
            })}
          <div
            className="reactPagination"
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <ReactPaginate
              breakLabel="..."
              nextLabel=" >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={slide}
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
        </>
      )}
    </div>
  );
}

export default ProductList;
