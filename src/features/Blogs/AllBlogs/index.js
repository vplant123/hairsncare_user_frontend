import React, { useEffect, useState } from "react";
import Navbar from "../../../features/nav/Navbar";
import Products from "../../../features/products/Products";
import ShoppingFeature from "../../../features/shopping-feature/ShoppingFeature";
import SliderImage from "../../../features/video-slider/SliderImage";
import Footer from "../../../features/footer/Footer";
import { ToastContainer } from "react-toastify";
import MiniCart from "../../../pages/MiniCart";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./index.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import BASE_URL from "../../../Config";
import { motion } from "framer-motion";
import useDivInView from "../../../hooks/useDivInView";
import { HashLink } from "react-router-hash-link";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { Hourglass } from "react-loader-spinner";
import SEO from "../../../components/SEO";
import SEOLinkHub from "../../../components/SEOLinkHub";

const View1 = ({ navigate, category, content }) => {
  const [ref1, control1] = useDivInView();
  const [headingRef, headingControl] = useDivInView();
  const [heroButtonRef, heroButtonControl] = useDivInView();
  const [heroImageRef, heroImageControl] = useDivInView();

  return (
    <motion.div
      className={`hero-section active1`}
      ref={ref1}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={control1}
      transition={{ duration: 0.8 }}
    >
      <div className="wrapper-11">
        <div className="hero-container container">
          <div
            className="hero-content"
            style={{
              height: "100%",
              paddingTop: "25px",
              paddingBottom: "35px",
            }}
          >
            <motion.div
              className="hero-heading-11"
              ref={headingRef}
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              initial="hidden"
              animate={headingControl}
              transition={{ duration: 1, delay: 0.5 }}
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <h1>
                <span className="blog-header-text">
                  {category?.name || "Hair Care Blogs"}
                </span>
              </h1>
            </motion.div>
            <div style={{ position: "relative" }} className="blog-header-img-1">
              <motion.div
                className="hero-image-wrapper"
                ref={heroImageRef}
                variants={{
                  hidden: { opacity: 0, x: 100 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={heroImageControl}
                transition={{ duration: 1, delay: 1.5 }}
                style={{ height: "100%", position: "relative", zIndex: 1 }}
              >
                <img
                  loading="lazy"
                  alt='Man combing hair with white comb, focusing on hair care routine. Ideal for "Hair Care Blogs" top banner section. Hair care'
                  className={`hero-image`}
                  src={
                    category?.img ||
                    "https://res.cloudinary.com/drkpwvnun/image/upload/v1730141798/hair-assessment/wk4wn1f8sxtryaweraji.png"
                  }
                  style={{ maxWidth: "80%", height: "100%" }}
                  title="Hair Care Blogs"
                />
              </motion.div>
              <div
                style={{ height: "100%", background: "rgba(0, 160, 227, 1)" }}
                className="blog-header-img"
              ></div>
            </div>
          </div>
        </div>
        <div
          className="icon-abs11"
          style={{
            backgroundColor: "#FFFFFF",
            padding: "12px",
          }}
        >
          {content?.section1?.socialImg?.map((e, ind) => {
            let alt =
              ind == "0"
                ? "Facebook"
                : ind == 1
                ? "Whatsapp"
                : ind == 1
                ? "Youtube"
                : ind == 3
                ? "Instagram"
                : "X";
            let title =
              ind == "0"
                ? "Facebook logo"
                : ind == 1
                ? "Whatsapp logo"
                : ind == 1
                ? "Youtube logo"
                : ind == 3
                ? "Instagram logo"
                : "X logo";
            return (
              <div
                onClick={() => {
                  if (ind == 0) {
                    window.open(
                      "https://www.facebook.com/profile.php?id=61558302628092"
                    );
                  }
                  if (ind == 1) {
                    window.open("https://wa.link/pcousx");
                  }
                  if (ind == 2) {
                    window.open("https://www.youtube.com/@Hairsncares");
                  }
                  if (ind == 3) {
                    window.open("https://www.instagram.com/hairsncares/?hl=en");
                  }
                  if (ind == 4) {
                    window.open("https://x.com/hairsncare");
                  }
                }}
                style={{ cursor: "pointer" }}
              >
                <img
                  loading="lazy"
                  src={e}
                  style={{ width: "25px", height: "25px" }}
                  alt={alt}
                  title={title}
                />
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default function AllBlog(props) {
  let { cart, setCart, desc, setDesc } = props;
  const [blog, setBlog] = useState(null);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const content = useSelector((state) => state.content.home);

  useEffect(() => {
    // Redirect to external blog URL
    window.location.href = "https://blogs.hairsncares.com/";
  }, []);

  useEffect(() => {
    if (props?.setDesc) props?.setDesc(window.location.pathname);
    if (props?.setTitle) props?.setTitle(window.location.pathname);
    scrollToTop();
  }, []);
  const [searchParams, setSearchParams] = useSearchParams();

  const handlerFilter = (e) => {
    console.log("msorfojs", filter, e);
    if (filter == e) {
      navigate(`/hair-care-blogs`);
      window.location.reload();
      setFilter(null);
    } else {
      navigate(`/hair-care-blogs/${e}`);
      window.location.reload();
      setFilter(e);
    }
  };

  console.log("ksjofre", searchParams.get("filter"));

  const [minValue, set_minValue] = useState(0);
  const [maxValue, set_maxValue] = useState(50000);
  const [rating, setRating] = useState("");
  const [type, setType] = useState(0);
  let { id1 } = useParams();
  const [filter, setFilter] = useState(id1 || "");
  useEffect(() => {
    console.log("sfoerjore");
  }, [cart]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const navigate = useNavigate();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const isLargeScreen = useMediaQuery("(min-width:1200px)");
  const [dropDown, setDropDown] = useState(false);

  const handleMobileMenuToggle = () => {
    console.log("jojeojfer", showMobileMenu);
    setShowMobileMenu(!showMobileMenu);
  };

  const handleMobileDropDownToggle = () => {
    setDropDown(!dropDown);
  };

  const isMobile = useMediaQuery("(max-width: 768px)");

  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState();

  useEffect(() => {
    fetch(`${BASE_URL}/admin/allBlogCategory`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      //   body: JSON.stringify({ userId: storedUserData?.logedInUser?.user?._id }),
    })
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.data);
      })
      .catch((error) => console.error("Error fetching addresses:", error));
  }, []);

  const [allBlogs, setBlogs] = useState([]);
  const [loader, setLoader] = useState(false);

  const [blogCount, setBlogCount] = useState(0);

  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(6);
  useEffect(() => {
    let c = categories?.find((e) => e?.name == filter);
    if (c) {
      setCategory(c);
      if (props?.setDesc)
        setDesc(
          `Explore HairsnCares ${c?.name}  Blogs for expert hair care tips, hair loss solutions, and the latest in scalp health. Get insights on treatments, products, and personalized hair care advice.`
        );
      if (props?.setTitle) {
        props?.setTitle(
          `${c?.name} Tips, Hair Loss Solutions & Expert Advice Blogs | HairsnCares`
        );
      }
      console.log("nfmkdrjiojfer", c);
    }
    const fetchProducts = async () => {
      setLoader(true);
      try {
        const response = await fetch(`${BASE_URL}/admin/allBlog`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ filter: filter, offset, limit }),
        });
        const data = await response.json();
        setBlogs(data.data); // Adjust according to your API response structure
        setBlogCount(data.message);
        // setStatus('idle');
        setLoader(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        // setStatus('error');
        setLoader(false);
      }
    };

    fetchProducts();
  }, [filter, categories, offset]);

  const [news, setNews] = useState([]);
  const [newsInd, setNewsInd] = useState(0);

  useEffect(() => {
    fetch(`${BASE_URL}/admin/getNews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      //   body: JSON.stringify({ userId: storedUserData?.logedInUser?.user?._id }),
    })
      .then((response) => response.json())
      .then((data) => {
        setNews(data.data);
      })
      .catch((error) => console.error("Error fetching addresses:", error));
  }, []);

  const [feedItems, setFeedItems] = useState([]);

  useEffect(() => {
    // Fetch the RSS feed
    const fetchRSSFeed = async () => {
      try {
        const response = await fetch(`${BASE_URL}/admin/getNewsFeed`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ filter: filter, offset, limit }),
        });
        const data = await response.json();
        setFeedItems(data?.data);
        // setStatus('idle');
      } catch (error) {
        console.error("Error fetching products:", error);
        // setStatus('error');
      }
    };

    fetchRSSFeed();
  }, []);
  console.log("smeokef", feedItems);

  return (
    <>
      <SEO
        useRouteData={true}
        canonicalUrl="https://www.hairsncares.com/hair-care-blogs"
      />
      <div style={{ position: "relative" }}>
        <Navbar cart={cart} setCart={setCart}>
        <div className="main-hero" style={{ marginBottom: "4rem" }}>
          <View1 navigate={navigate} category={category} content={content} />
        </div>

        <div
          className="container-Products container blog-body"
          style={{ gap: "30px" }}
        >
          <div className="col-12 col-md-3">
            {/* Content for the first column */}
            {/* {isLargeScreen && <h4 className="filter-price-heading">FILTER BY PRICE</h4>} */}
            <div className="row blog-filter-xl" style={{ margin: 0 }}>
              <div
                className="filter-price-11 d-flex flex-column"
                style={{ gap: "10px" }}
              >
                <div
                  className="d-flex"
                  style={{ justifyContent: "space-between" }}
                >
                  <div style={{ fontWeight: "600" }}>Blogs</div>
                  {!isLargeScreen && (
                    <div onClick={() => handleMobileDropDownToggle(!dropDown)}>
                      {dropDown ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                    </div>
                  )}
                </div>

                {(!isLargeScreen && dropDown) || isLargeScreen ? (
                  <>
                    {" "}
                    {categories?.map((e, i) => {
                      return (
                        <div
                          className="d-flex"
                          style={{
                            gap: "15px",
                            alignItems: "center",
                            cursor: "pointer",
                          }}
                        >
                          <input
                            type="checkbox"
                            name={e?.name}
                            className="default-checkbox"
                            checked={filter == e?.name}
                            onChange={() => handlerFilter(e?.name)}
                          />
                          <div
                            onClick={() => {
                              if (props?.setDesc)
                                setDesc(
                                  "Explore HairsnCares [Category Name]  Blogs for expert hair care tips, hair loss solutions, and the latest in scalp health. Get insights on treatments, products, and personalized hair care advice."
                                );
                              if (props?.setTitle) {
                                props?.setTitle(
                                  `${e?.name} Tips, Hair Loss Solutions & Expert Advice Blogs | HairsnCares`
                                );
                              }
                              handlerFilter(e?.name);
                            }}
                          >
                            <h2 style={{ fontSize: "18px" }}>{e?.name}</h2>
                          </div>
                        </div>
                      );
                    })}
                    {/* <div
                      className="d-flex"
                      style={{ gap: "15px", alignItems: "center" }}
                    >
                      <input
                        type="checkbox"
                        name="hairloss"
                        className="default-checkbox"
                        checked={filter == "hairloss"}
                        onChange={(e) => handlerFilter(e)}
                      />
                      <div>HairLoss</div>
                    </div>
                    <div
                      className="d-flex"
                      style={{ gap: "15px", alignItems: "center" }}
                    >
                      <input
                        type="checkbox"
                        name="hairtransplant"
                        className="default-checkbox"
                        checked={filter == "hairtransplant"}
                        onChange={(e) => handlerFilter(e)}
                      />
                      <div>HairTransplant</div>
                    </div>
                    <div
                      className="d-flex"
                      style={{ gap: "15px", alignItems: "center" }}
                    >
                      <input
                        type="checkbox"
                        name="hairrocedures"
                        className="default-checkbox"
                        checked={filter == "hairrocedures"}
                        onChange={(e) => handlerFilter(e)}
                      />
                      <div>HairProcedures</div>
                    </div>
                    <div
                      className="d-flex"
                      style={{ gap: "15px", alignItems: "center" }}
                    >
                      <input
                        type="checkbox"
                        name="hairroducts"
                        className="default-checkbox"
                        checked={filter == "hairroducts"}
                        onChange={(e) => handlerFilter(e)}
                      />
                      <div>HairProducts</div>
                    </div>
                    <div
                      className="d-flex"
                      style={{ gap: "15px", alignItems: "center" }}
                    >
                      <input
                        type="checkbox"
                        name="hairinnovations"
                        className="default-checkbox"
                        checked={filter == "hairinnovations"}
                        // checked={scalp.includes('Oily Scalp')}
                        onChange={(e) => handlerFilter(e)}
                      />
                      <div>HairInnovations</div>
                    </div> */}
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>

            <div className="row" style={{ margin: "0" }}>
              <div
                className="filter-price-111 d-flex flex-column"
                style={{ gap: "10px" }}
              >
                <div
                  className="d-flex"
                  style={{ justifyContent: "space-between" }}
                >
                  <div style={{ fontWeight: "600" }}>In The News</div>
                  <div className="d-flex">
                    <div
                      className="circle-forward"
                      onClick={() => {
                        if (newsInd - 3 < 0) {
                          setNewsInd(0);
                        } else setNewsInd(newsInd - 3);
                      }}
                    >
                      <FaArrowRight size={"18"} color="white" />
                    </div>
                    <div
                      className="circle-forward"
                      onClick={() => {
                        if (newsInd + 3 > feedItems?.length) {
                          setNewsInd(0);
                        } else setNewsInd(newsInd + 3);
                      }}
                    >
                      <FaArrowLeft size={"18"} color="white" />
                    </div>
                  </div>
                </div>
                {feedItems?.slice(newsInd, newsInd + 3)?.map((e) => {
                  return (
                    <div className="d-flex" style={{ gap: "8%" }}>
                      {/* <div style={{width : "30%",height:"64px"}}>
                          <img loading="lazy" src={e?.img} style={{ width: "100%", height: "100%" }} />
                      </div> */}
                      <div
                        style={{ width: "100%", fontSize: "14px" }}
                        className="new-des"
                        dangerouslySetInnerHTML={{ __html: e?.description }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            <div
              className="row"
              style={{ margin: 0, cursor: "pointer" }}
              onClick={() => {
                if (category?.btnLink) {
                  window.open(category?.btnLink);
                } else navigate("/take-hair-test");
              }}
            >
              <div
                className="blog-take-hair-test-main d-flex flex-column"
                style={{ gap: "10px" }}
              >
                <div
                  className="d-flex blog-take-hair-test-btn"
                  style={{ justifyContent: "space-between" }}
                >
                  <div className="blog-take-hair-test-text">
                    {category?.btnName || "Take A Hair Test"}
                  </div>
                  <div className="circle-forward">
                    <FaArrowLeft size={"18"} color="white" />
                  </div>
                </div>
              </div>
            </div>

            <div
              className="row"
              style={{ margin: "0 0 10px 0", cursor: "pointer" }}
              onClick={() => {
                if (category?.img2Link) {
                  window.open(category?.img2Link);
                } else navigate("/take-hair-test");
              }}
            >
              <img
                loading="lazy"
                src={
                  category?.img2 ||
                  "https://res.cloudinary.com/drkpwvnun/image/upload/v1731315867/hair-assessment/yxu8ajeb2xumgjp1pcxp.png"
                }
                alt="Banner - Click Here"
                title="Banner - Click Here"
              />
            </div>

            <div
              className="row d-flex flex-column"
              style={{ margin: 0, gap: "10px", cursor: "pointer" }}
            >
              <div>
                <img
                  loading="lazy"
                  src="https://res.cloudinary.com/drkpwvnun/image/upload/v1730046710/hair-assessment/kuyizxppnaldktuzvlbc.png"
                  style={{ height: "100%", width: "100%" }}
                  alt="Professional portrait of Dr. Amit Agarkar, expert dermatologist and trichologist, specializing in skin and hair care"
                  title="Dr. Amit Agarkar - Hair Care Expert"
                />
              </div>
              <div>
                <img
                  loading="lazy"
                  src="https://res.cloudinary.com/drkpwvnun/image/upload/v1730046748/hair-assessment/n2q5d5ndjktz5keawba2.png"
                  style={{ height: "100%", width: "100%" }}
                  alt="dr amit agarkar logo icon"
                  title="dr amit agarkar logo icon"
                />
              </div>
              <div>
                I'm Dr. Amit Agarkar, a dermatologist and trichologist with over
                20 years of experience in helping people regain their hair and
                confidence. Let's dive into a topic that affects millions of
                women—hair loss. It's a common issue, but it doesn't have to be
                your forever reality. Today, I'm going to break down why women
                experience hair loss, what you can do about it, and the
                treatments that work best based on my own professional
                experience
              </div>
              <div
                className="blog-take-hair-test-main d-flex flex-column"
                style={{ gap: "10px" }}
              >
                <div
                  className="d-flex blog-take-hair-test-btn"
                  style={{ justifyContent: "space-between" }}
                >
                  <div className="blog-take-hair-test-text">
                    Consult Dr.Agarkar
                  </div>
                  <div className="circle-forward">
                    <FaArrowLeft size={"18"} color="white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-9 mainProduct">
            <div
              className="barr2"
              style={{ backgroundColor: "#005cad", marginBottom: 0 }}
            >
              <div
                className="container"
                style={{
                  paddingTop: "10px",
                  paddingBottom: "10px",
                }}
              >
                <div
                  className="d-flex"
                  style={{
                    fontSize: "18px",
                    gap: "12px",
                    color: "white",
                    fontWeight: "500",
                  }}
                >
                  <div className="d-flex texttt-center" style={{ gap: "12px" }}>
                    <span class="ltn__secondary-color">
                      <i class="fas fa-home"></i>
                    </span>
                    <div
                      onClick={() => {
                        setFilter("");
                        navigate("/hair-care-blogs");
                        window.location.reload();
                      }}
                      style={{ cursor: "pointer", fontSize: "14px" }}
                    >
                      <h2 style={{ fontSize: "18px", marginBottom: 0 }}>
                        Blogs
                      </h2>
                    </div>
                  </div>
                  {filter ? (
                    <div style={{ fontSize: "14px" }} className="texttt-center">
                      {">"}
                    </div>
                  ) : (
                    <></>
                  )}
                  {filter ? (
                    <div
                      style={{ cursor: "pointer", fontSize: "14px" }}
                      className="texttt-center"
                    >
                      <h2 style={{ fontSize: "18px", marginBottom: 0 }}>
                        {filter}
                      </h2>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>

            <div className="row blog-filter-sm" style={{ margin: 0 }}>
              <div
                className="filter-price-11 d-flex flex-column"
                style={{ gap: "10px", margin: 0 }}
              >
                <div
                  className="d-flex"
                  style={{ justifyContent: "space-between" }}
                >
                  <div style={{ fontWeight: "600" }}>Blogs</div>
                  {!isLargeScreen && (
                    <div onClick={() => handleMobileDropDownToggle(!dropDown)}>
                      {dropDown ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                    </div>
                  )}
                </div>

                {(!isLargeScreen && dropDown) || isLargeScreen ? (
                  <>
                    {" "}
                    {categories?.map((e, i) => {
                      return (
                        <div
                          className="d-flex"
                          style={{
                            gap: "15px",
                            alignItems: "center",
                            cursor: "pointer",
                          }}
                        >
                          <input
                            type="checkbox"
                            name={e?.name}
                            className="default-checkbox"
                            checked={filter == e?.name}
                            onChange={() => handlerFilter(e?.name)}
                          />
                          <div
                            onClick={() => {
                              if (props?.setDesc)
                                setDesc(
                                  "Explore HairsnCares [Category Name]  Blogs for expert hair care tips, hair loss solutions, and the latest in scalp health. Get insights on treatments, products, and personalized hair care advice."
                                );
                              if (props?.setTitle) {
                                props?.setTitle(
                                  `${e?.name} Tips, Hair Loss Solutions & Expert Advice Blogs | HairsnCares`
                                );
                              }
                              handlerFilter(e?.name);
                            }}
                          >
                            <h2 style={{ fontSize: "18px" }}>{e?.name}</h2>
                          </div>
                        </div>
                      );
                    })}
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>

            <div className="row">
              {loader ? (
                <div className="loader-in-page" style={{ height: "400px" }}>
                  <Hourglass
                    type="Puff"
                    color="#00BFFF"
                    height={50}
                    width={50}
                  />
                </div>
              ) : (
                <>
                  {allBlogs?.map((item) => {
                    return (
                      <div
                        className="col-12 col-md-6"
                        onClick={() => {
                          navigate(
                            `/hair-care-blogs/${item?.category}/${item?.slug}`
                          );
                        }}
                        style={{ padding: "35px" }}
                      >
                        <div className="d-flex flex-column page-blog-list">
                          <div className="blog-sub-img">
                            <img
                              loading="lazy"
                              src={item?.img}
                              style={{ width: "100%", height: "100%" }}
                              alt={item?.title}
                              title={item?.title}
                            />
                          </div>
                          <div className="blog-sub-img-text">
                            <h3 style={{ fontSize: "24px" }}>{item?.title}</h3>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </>
              )}
            </div>

            <div
              className="reactPagination"
              style={{ display: "flex", justifyContent: "end" }}
            >
              <ReactPaginate
                breakLabel="..."
                nextLabel=" >"
                onPageChange={(event) => {
                  console.log("emkrkor", event.selected);
                  setOffset(event.selected);
                }}
                pageCount={
                  blogCount % 6 === 0
                    ? blogCount / 6
                    : Math.floor(blogCount / 6) + 1
                }
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
          </div>
        </div>
        <SEOLinkHub 
          currentPage="/hair-care-blogs" 
          pageType="blogs"
        />
        <Footer />
        <ToastContainer position="bottom-right" />
      </Navbar>
    </div>
    </>
  );
}
