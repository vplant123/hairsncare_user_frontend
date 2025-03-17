import React, { useEffect, useState } from "react";
import Navbar from "../../../features/nav/Navbar";
import Products from "../../../features/products/Products";
import ShoppingFeature from "../../../features/shopping-feature/ShoppingFeature";
import SliderImage from "../../../features/video-slider/SliderImage";
import Footer from "../../../features/footer/Footer";
import { ToastContainer } from "react-toastify";
import MiniCart from "../../../pages/MiniCart";
import { useNavigate, useParams } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./index.css";
import { FaArrowRight,FaArrowLeft } from "react-icons/fa";
import BASE_URL from "../../../Config";
import { motion } from 'framer-motion';
import useDivInView from "../../../hooks/useDivInView";
import { HashLink } from 'react-router-hash-link';
import moment from "moment";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";


const View1 = ({navigate,category,content}) => {
  const [ref1, control1] = useDivInView();
  const [headingRef, headingControl] = useDivInView();
  const [heroButtonRef, heroButtonControl] = useDivInView();
  const [heroImageRef, heroImageControl] = useDivInView();
  return(
    <motion.div
    className={`hero-section active1`}
    ref={ref1}
    variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
    initial="hidden"
    animate={control1}
    transition={{ duration: 0.8 }}
  >
    <div className='wrapper-11'>
      <div className='hero-container container'>
        <div className='hero-content' style={{ height: "100%" , paddingTop: "25px",paddingBottom : "35px"}}>
          <motion.div
            className='hero-heading-11'
            ref={headingRef}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            initial="hidden"
            animate={headingControl}
            transition={{ duration: 1, delay: 0.5 }}
            style={{
              display: "flex",
    justifyContent: "center"
            }}
          >
            <span className="blog-header-text">{category?.name || ("Hair Care Blogs")}</span>

          </motion.div>
          <div style={{position: "relative"}} className="blog-header-img-1">
          <motion.div
            className="hero-image-wrapper"
            ref={heroImageRef}
            variants={{ hidden: { opacity: 0, x: 100 }, visible: { opacity: 1, x: 0 } }}
            initial="hidden"
            animate={heroImageControl}
            transition={{ duration: 1, delay: 1.5 }}
            style={{height:"100%",position:"relative",zIndex:1}}
          >
            
            <img alt='hair' className={`hero-image`} src={"https://res.cloudinary.com/drkpwvnun/image/upload/v1730141798/hair-assessment/wk4wn1f8sxtryaweraji.png"} style={{ maxWidth: "80%",height : "100%" }} />
          </motion.div>
          <div style={{height : "100%",background : "rgba(0, 160, 227, 1)"}} className="blog-header-img">

          </div>

          </div>

        </div>
      </div>
      <div className='icon-abs11' style={{
            backgroundColor: "#FFFFFF",
            padding: "12px"
      }}>
        {content?.section1?.socialImg?.map((e, ind) => {
          return (
            <div onClick={() => {
              if (ind == 0) {
                window.open("https://www.facebook.com/profile.php?id=61558302628092")
              }
              if (ind == 1) {
                window.open("https://wa.link/pcousx")
              }
              if (ind == 2) {
                window.open("https://www.youtube.com/@Hairsncares")
              }
              if (ind == 3) {
                window.open("https://www.instagram.com/hairsncares/?hl=en")
              }
              if (ind == 4) {
                window.open("https://x.com/hairsncare")
              }
            }} style={{ cursor: "pointer" }}>
              <img src={e} style={{ width: "25px", height: "25px" }} />
            </div>
          )
        })}
      </div>
    </div>
  </motion.div>
  )
}


export default function Blog(props) {
  let { cart, setCart } = props;
  const [blog,setBlog] = useState(null)
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */
    });
  };
  useEffect(() => {
    if (props?.setTitle) props?.setTitle(window.location.pathname);
    if (props?.setDesc) props?.setDesc(window.location.pathname);
    scrollToTop();
  }, []);


  const handlerFilter = (e) => {
    console.log("msorfojs",filter,e);
    if (filter == e) {
      navigate(`/hair-care-blogs`)
      setFilter(null);
    }
    else {
      navigate(`/hair-care-blogs/${e}`)
      setFilter(e);
    }
  };
  const params = useParams();

  useEffect(() => {
    
    console.log("deowjo",params?.id)
    fetch(`${BASE_URL}/admin/getBlog`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({id : params?.id})
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("smkifnr",data?.data)
        setBlog(data.data);
        setFilter(data?.data?.category)
        if (props?.setTitle) props?.setTitle(data.data?.title);
        if (props?.setDesc) props?.setDesc(data.data?.seoMetaDesc);
        if (props?.setTitle && data?.data?.title) props?.setTitle(data?.data?.title)
        // fetchProducts(data?.data?.category)
      })
      .catch((error) => console.error("Error fetching addresses:", error));
  }, [params?.id]);

  const [news,setNews]= useState([])
  const [newsInd,setNewsInd] = useState(0)

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

  const [minValue, set_minValue] = useState(0);
  const [maxValue, set_maxValue] = useState(50000);
  const [rating, setRating] = useState("");
  const [type, setType] = useState(0);
  let {id1} = useParams()
  const [filter, setFilter] = useState(id1||"");
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
  
  const [allBlogs,setBlogs] = useState([])


  const [categories,setCategories]=useState([]);
  console.log("skjkfoijer",params?.id1)
  const [category,setCategory]=useState();

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

  const fetchProducts = async () => {
    // setStatus('loading');
    try {
      const response = await fetch(`${BASE_URL}/admin/allBlog`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body : JSON.stringify({id : params?.id,filter})
    });
      const data = await response.json();
      setBlogs(data.data); // Adjust according to your API response structure
      // setStatus('idle');
    } catch (error) {
      console.error('Error fetching products:', error);
      // setStatus('error');
    }
  };
  useEffect(() => {
    console.log("nfmkdrjiojferrfre",categories)

    let c = categories?.find((e) => e?.name == params?.id1);
    if(c){
      setCategory(c);
      console.log("nfmkdrjiojfer",c)
    }

    fetchProducts();
  }, [params?.id,filter,categories]);

  const formatHashLinks = (text) => {
    // Regular expression to find words that start with #
    const hashRegex = /#(\w+)/g;
    console.log("sojfojero",text)
    return text
      .replace(/\s*target="_blank"/g, '') // Remove target="_blank"
      .replace(/\s*rel="noopener noreferrer"/g, ''); // Remove rel="noopener noreferrer"    // Replace hashtags with links
    // return text.replace(hashRegex, '<a href="/tags/$1">#$1</a>');
  };

  const getFormattedContent = (text) => {
    console.log("sojkfoe",text)
    const rawContent = text;
    return  formatHashLinks(rawContent)
    // {
    //   __html: formatHashLinks(rawContent), // Set as HTML content
    // };
  };
  const content = useSelector((state) => state.content.home);
  const isMobile = useMediaQuery("(max-width: 768px)");

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
      });
        const data = await response.json();
        setFeedItems(data?.data)
        // setStatus('idle');
      } catch (error) {
        console.error('Error fetching products:', error);
        // setStatus('error');
      }
    };

    fetchRSSFeed();
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <Helmet>
        <link rel="canonical" href={`${window.location.origin}/${blog?.metaCanonical}`} />
      </Helmet>
      <Navbar cart={cart} setCart={setCart}>

      <div className='main-hero' style={{marginBottom : "4rem"}}>
        <View1 navigate ={navigate} category={category} content={content}/>
      </div>
        <div
          className="container-Products container blog-body"
          style={{ gap: "30px" }}
        >
          <div className="col-12 col-md-3">
            {/* Content for the first column */}
            {/* {isLargeScreen && <h4 className="filter-price-heading">FILTER BY PRICE</h4>} */}
            <div className="row" style={{ margin: 0 }}>
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

                    {
                      categories?.map((e,i) => {
                        return(
                          <div
                          className="d-flex"
                          style={{ gap: "15px", alignItems: "center",cursor : "pointer" }}
                        >
                          <input
                            type="checkbox"
                            name={e?.name}
                            className="default-checkbox"
                            checked={filter == e?.name}
                            onChange={() => handlerFilter(e?.name)}
                          />
                          <div>{e?.name}</div>
                        </div>
                        )
                      })
                    }
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
                    <div className="circle-forward" onClick={() => {
                      if(newsInd - 3 < 0){
                        setNewsInd(0) 
                      }
                      else setNewsInd(newsInd - 3) 
                    }}>
                        <FaArrowRight size={"18"} color="white"/>
                    </div>
                    <div className="circle-forward" onClick={() => {
                      if(newsInd + 3 > feedItems?.length){
                        setNewsInd(0) 
                      }
                      else setNewsInd(newsInd + 3) 
                    }}> 
                       <FaArrowLeft size={"18"} color="white"/>
                    </div>
                  </div>
                </div>
                {
                  feedItems?.slice(newsInd,newsInd+3)?.map((e) => {
                    return (
                      <div className="d-flex" style={{gap : "8%"}}>
                      {/* <div style={{width : "30%",height:"64px"}}>
                          <img src={e?.img} style={{ width: "100%", height: "100%" }} />
                      </div> */}
                      <div style={{width : "100%",fontSize : "14px"}} className="new-des"             dangerouslySetInnerHTML={{ __html: e?.description }}
                      
                      />
                  </div>
                    )
                  })
                }
 
              </div>

            </div>


            <div className="row" style={{ margin: 0,cursor : "pointer" }} onClick={() => {
              if(category?.btnLink){
                window.open(category?.btnLink);
              }
              else navigate("/take-hair-test")
            }}>
              <div
                className="blog-take-hair-test-main d-flex flex-column"
                style={{ gap: "10px" }}
              >
                <div className="d-flex blog-take-hair-test-btn" style={{justifyContent : "space-between"}}>
                    <div className="blog-take-hair-test-text">
                    {category?.btnName || "Take A Hair Test"}
                    </div>
                    <div className="circle-forward">
                       <FaArrowLeft size={"18"} color="white"/>
                    </div>
                </div>
              </div>

            </div>

            <div className="row" style={{margin : "0 0 10px 0",cursor : "pointer" }} onClick={() => {
              if(category?.img2Link){
                window.open(category?.img2Link);
              }
              else navigate("/take-hair-test")
            }}>
                <img src = {category?.img2 || "https://res.cloudinary.com/drkpwvnun/image/upload/v1731315867/hair-assessment/yxu8ajeb2xumgjp1pcxp.png"} />
                </div>

            <div className="row d-flex flex-column" style={{margin : 0,gap:"10px"}}>
                <div>
                <img
                  src="https://res.cloudinary.com/drkpwvnun/image/upload/v1730046710/hair-assessment/kuyizxppnaldktuzvlbc.png"
                  style={{ height: "100%", width: "100%" }}
                />
                </div>
                <div>
                    <img src = "https://res.cloudinary.com/drkpwvnun/image/upload/v1730046748/hair-assessment/n2q5d5ndjktz5keawba2.png"  style={{ height: "100%", width: "100%" }} />
                </div>
                <div>
                I’m Dr. Amit Agarkar, a dermatologist and trichologist with over 20 years of experience in helping people regain their hair and confidence. Let’s dive into a topic that affects millions of women—hair loss. It’s a common issue, but it doesn’t have to be your forever reality. Today, I’m going to break down why women experience hair loss, what you can do about it, and the treatments that work best based on my own professional experience
                </div>
                <div
                className="blog-take-hair-test-main d-flex flex-column"
                style={{ gap: "10px" }}
              >
                <div className="d-flex blog-take-hair-test-btn" style={{justifyContent : "space-between"}}>
                    <div className="blog-take-hair-test-text">
                    Consult Dr.Agarkar
                    </div>
                    <div className="circle-forward">
                       <FaArrowLeft size={"18"} color="white"/>
                    </div>
                </div>
              </div>
            </div>


            
          </div>
          <div className="col-12 col-md-9 mainProduct d-flex flex-column">
            {/* <div className="blog-head-1">
            <a onClick={() => {
              navigate("/hair-care-blogs")
            }} style={{cursor : "pointer"}}>Blogs</a>/<a onClick={() => {
              navigate(`/hair-care-blogs?filter=${category?.title}`)
            }} style={{cursor : "pointer"}}>{category?.title}</a>/<a>{blog?.slug}</a>
            </div> */}



            <div className="barr2" style={{ backgroundColor: "#005cad",marginBottom : 0 }}>
        <div className="container" style={{
              paddingTop: "10px",
              paddingBottom: "10px"
          
        }}>
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
              className="d-flex texttt-center"
              style={{  gap: "12px" }}
            >
              <span class="ltn__secondary-color">
                <i class="fas fa-home"></i>
              </span>
              <div onClick={() => navigate("/hair-care-blogs")} style={{ cursor: "pointer",fontSize : "14px" }}>
              Blogs
              </div>
            </div>
            <div style={{fontSize : "14px" }} className="texttt-center">{">"}</div>
            <div
              style={{  cursor: "pointer",fontSize : "14px" }}
              className="texttt-center"
              onClick={() => {
                navigate(`/hair-care-blogs/${category?.title}`)
              }}
            >
              {category?.title}
            </div>
            <div style={{ fontSize : "14px"}} className="texttt-center">{">"}</div>
            <div style={{  cursor: "pointer",fontSize : "14px" }} className="texttt-center">
              {isMobile ? (blog?.slug?.length> 15 ? blog?.slug.substring(0,15)+"..." : blog?.slug) : blog?.slug}
            </div>
          </div>
        </div>
      </div>



            <div className="blog-head-2">
              <h1>{blog?.title}</h1>
            </div>
            <div className="d-flex mt-3" style={{ gap: "2%",height: "100%" }}>
              <div className="blog-auth-img">
                <img
                  src=              {blog?.authorImg}

                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className="d-flex bloggg11 flex-column blog-auth-main">
                <div className="d-flex " style={{fontSize: "14px",alignItems : "center"}}>
                  <div>
                  Creator & Author:  &nbsp; 
                  </div>
                   <div 
            dangerouslySetInnerHTML={{ __html: blog?.authorName }}
            /></div>{" "}
                <div
            dangerouslySetInnerHTML={{ __html: blog?.authorDesignation }}/>
                <div>Published on : {moment(blog?.createdAt).format("DD-MM-YYYY")}</div>
                <div>LastUpdated on : {moment(blog?.updatedAt).format("DD-MM-YYYY")}</div>
              </div>
            </div>  
            
            {blog?.img && <div className="blog-img-main mt-3">

              <img
                src={blog?.img}
                style={{ width: "100%", height: "100%" }}
              />
            </div>}


            <div className="d-flex flex-column  mt-5 bloggg" style={{gap : "15px"}} >
                {
                  blog?.blogData?.map((e) => {
                    return(
                      <>
                        {                    
                           <div
                           dangerouslySetInnerHTML={{__html : e?.desc}}
                          />
                        }

                      </>
                    )
                  })
                }
              </div>
            {/* <div className="mt-5" 
            dangerouslySetInnerHTML={{ __html: blog?.desc }}
            >

            </div> */}
            <div className="d-flex mt-5" style={{ gap: "10px" }}>
              <div className="tag-text">Tags</div>
              {blog?.tags?.map((item) => {
                return(
                  <div>
                <button
                  onClick={() => navigate("/take-hair-test")}
                  className="btn sub-button-section-3-op"
                  style={{ marginTop: 0 }}
                >
                  {item}
                </button>
              </div>
                )
              })}
            </div>
            <div className="mt-3">
              <button
                onClick={() => navigate("/take-hair-test")}
                className="btn sub-button-section-5"
                style={{ marginTop: 0 }}
              >
                You May Also Like
              </button>
            </div>
            <div className="row">
            {allBlogs?.map((item) => {
              return(
                <div className="col-12 col-md-6 d-flex flex-column" onClick={() => {
                  scrollToTop()
                  navigate(`/hair-care-blogs/${item?.category}/${item?.slug}`)
                }}>
                <div className="blog-sub-img">
                    <img src = {item?.img} style={{ width: "100%", height: "100%" }}/>
                </div>
                <div className="blog-sub-img-text">
                {item?.title}
                </div>
            </div>
              )
            })}
            </div>


          </div>
        </div>

        <ShoppingFeature />
        <SliderImage />
        <Footer />
        <ToastContainer position="bottom-right" />
      </Navbar>
    </div>
  );
}
