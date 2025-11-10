import React, { useEffect, useState } from 'react';
import './Cart.css';
// import Sidebar from './Sidebar'
import Navbar from '../nav/Navbar';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import BASE_URL from '../../Config';
import { getCartItems } from '../products/CartSlice';
import { Login } from '@mui/icons-material';
import { toggleLogin } from '../login/LoginSlice';
import SignUp from '../signup/SignUp';
import { ToastContainer } from 'react-toastify';
import Footer from '../footer/Footer';
import useNavigateParams from '../../utils/hookUseNavigateParam';
import { max } from 'moment';

// Sample cart data for demonstration purposes
const sampleCart = [
  {
    id: 1,
    name: 'Aspirin',
    price: 10.00,
    quantity: 2,
    image: 'https://via.placeholder.com/80'
  },
  {
    id: 2,
    name: 'Vitamin C',
    price: 30.00,
    quantity: 1,
    image: 'https://via.placeholder.com/80'
  }
];

export default function Cart(props) {

  let { cart,
    setCart } = props;

  const [showLogin1, setShowLogin1] = useState(false)

  const [showSignup, setShowSignup] = useState(false);

  const showLogin = useSelector((state) => state.login.showLogin);

  useEffect(() => {
    if (props?.setTitle) props?.setTitle(window.location.pathname)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */
    });
  };
  useEffect(() => {

    if (props?.setTitle) props?.setTitle(window.location.pathname)
    scrollToTop()
  }, [])

  const handleSignupClick = () => {
    setShowSignup(!showSignup);
  };

  const handleLoginClick = () => {
    dispatch(toggleLogin());
  };


  const [cartItemsNew, setCartItemsNew] = useState(sampleCart);
  const cartItems = useSelector((state) => state.cart.items);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigateParams();
  let storedUserData = JSON.parse(localStorage?.getItem("User343"));
  const userId = storedUserData?.logedInUser?.user._id;
  const dispatch = useDispatch();

  let updateCart = async (values) => {
    try {
      // setLoader(true)
      const response = await fetch(`${BASE_URL}/cart/update-cart?userId=${userId}`, {
        method: 'POST',
        headers: {
          'Authorization': storedUserData.logedInUser.accessToken,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values),
      });
      // setLoader(false)
      if (response.ok) {
        const result = await response.json();
        dispatch(getCartItems(storedUserData?.logedInUser?.user?._id));
        // toast.success("review created successfully");
        console.log('review created successfully:', result);
        // navigate("/create-order")
      } else {
        console.error('Failed to create review:', response.statusText);
      }
    } catch (error) {
      // setLoader(false)
      console.error('Error:', error);
    }
  }

  useEffect(() => {
    if (!storedUserData?.logedInUser) {
      setCartItemsNew(cart)
    }
    else {
      let p = JSON.parse(localStorage.getItem("cart")) || [];
      if (p?.length > 0) {
        let tmp = cartItems?.map((e) => ({ ...e })) || []

        for (let index = 0; index < p?.length; index++) {
          const element = p[index];
          let f = tmp?.findIndex((e) => e?.item?._id == element?.item?._id)
          if (f != -1) tmp[f].quantity = Number(tmp[f]?.quantity) + Number(element?.quantity)
          else tmp.push({
            quantity: element?.quantity, item: element?.item
          })
          console.log("sjirfjp", tmp)
        }
        localStorage.setItem("cart", JSON.stringify([]));
        updateCart(tmp)
        // setCartItemsNew(tmp)
      }
      else setCartItemsNew(cartItems)
    }
  }, [cartItems, cart])
  const updateQuantity = (id, quantity) => {
    console.log("mikeworjrfe", id, quantity, cartItemsNew)
    setCartItemsNew(cartItemsNew.map(item =>
      item?._id == id || item?.item?._id == id ? { ...item, quantity: Math.max(1, quantity) } : item
    ));
    console.log("moemroj", cartItemsNew.map(item =>
      item?._id == id ? { ...item, quantity: Math.max(1, quantity) } : item
    ))
  };

  const removeFromCart = async (id, _id) => {
    console.log("srjfier", _id)
    if (!storedUserData?.logedInUser) {

      let c = cart?.map((item) => ({ ...item }));
      let f = c?.filter((w) => w?.item?._id != _id);
      console.log("jreijf", f, c, _id)

      setCart(f);
      setCartItemsNew(f)
      localStorage.setItem("cart", JSON.stringify(f));

      return;
      // toast.error(`Please Login First`);
    }

    try {
      setLoader(true)
      const response = await fetch(`${BASE_URL}/cart/delete-cart?userId=${userId}&id=${_id}`, {
        method: 'POST',
        headers: {
          'Authorization': storedUserData?.logedInUser?.accessToken,
          'Content-Type': 'application/json'
        },
      });
      setLoader(false)
      if (response.ok) {
        const result = await response.json();
        // toast.success("review created successfully");
        console.log('review created successfully:', result);
        dispatch(getCartItems(storedUserData?.logedInUser?.user?._id));
      } else {
        console.error('Failed to create review:', response.statusText);
      }
    } catch (error) {
      setLoader(false)
      console.error('Error:', error);
    }
    // setCartItemsNew(cartItemsNew.filter(item => item._id != id));
  };

  const getTotalAmount = () => {
    return cartItemsNew.reduce((total, item) => {
      const discountedPrice = Math.round(item?.item?.price *  (1 - Number(item?.item?.discount || 0) / 100));
      return Math.round(total + discountedPrice * (item?.quantity || 1));
    }, 0);
  };

  const handleAddToCart = async () => {
    let data = cartItemsNew?.map((e) => {
      return {
        item: e?.item,
        quantity: e?.quantity,
      };
    });
    if (!storedUserData?.logedInUser) {
      setShowLogin1(true)
      return
    }
    try {
      setLoader(true)
      const response = await fetch(`${BASE_URL}/cart/update-cart?userId=${userId}`, {
        method: 'POST',
        headers: {
          'Authorization': storedUserData.logedInUser.accessToken,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(cartItemsNew),
      });
      setLoader(false)
      if (response.ok) {
        const result = await response.json();
        // toast.success("review created successfully");
        console.log('review created successfully:', result);
        scrollToTop();
        navigate("/create-order")
      } else {
        console.error('Failed to create review:', response.statusText);
      }
    } catch (error) {
      setLoader(false)
      console.error('Error:', error);
    }
  };
  return (
    <Navbar cart={cart}
      setCart={setCart}>
    
        <div className="cart">
          {
            cartItemsNew?.length == 0 ? <div className='d-flex flex-column'>
              <div style={{ fontSize: "25px", fontWeight: "600" }}>Your Cart is Empty</div>
              <div style={{ fontSize: "18px", color: "#6ED6F4", cursor: "pointer" }} onClick={() => {
                navigate("/best-hair-care-products-hair-loss-scalp-health")
              }}>See all products</div>
            </div> :

              !showLogin1 ? <>
                <ul className="cart-items">
                  {cartItemsNew?.map(item => {
                    let q = item?.quantity;
                    return (
                      <li key={item?._id} className="cart-item">
                        <img loading="lazy" src={item?.item?.src?.[0]} alt={item?.item?.name} onClick={() => {
                          const slug = (item?.item?.metaSlug ?? item?.item?._id) ? String(item?.item?.metaSlug ?? item?.item?._id).toLowerCase() : '';
                          navigate(`/product-detail/${encodeURIComponent(slug)}`, { id: item?.item?._id })
                        }} style={{ cursor: "pointer" }} />
                        <div className="cart-item-details">
                         
                          <h3 onClick={() => {
                            const slug = (item?.item?.metaSlug ?? item?.item?._id) ? String(item?.item?.metaSlug ?? item?.item?._id).toLowerCase() : '';
                            navigate(`/product-detail/${encodeURIComponent(slug)}`, { id: item?.item?._id })
                          }} style={{ cursor: "pointer" }}>{item?.item?.name}</h3>
                      
                          <p>GST: {item?.item?.gst}%</p>
                          <p>Price:₹{Math.round(item?.item?.price - (item?.item?.price * Number(item?.item?.discount || 0) / 100))}</p>
                        </div>
                        <div className="cart-item-actions">
                          <input
                            type="number"
                            value={q}
                            min="1"
                            max="5"
                            onChange={(e) => {
                              const value = parseInt(e.target.value);
                              if (value > 5) {
                                updateQuantity(item?.item?._id, 5);
                              } else if (value < 1) {
                                updateQuantity(item?.item?._id, 1);
                              } else {
                                updateQuantity(item?.item?._id, value);
                              }
                            }}
                            onKeyPress={(e) => {
                              if (e.key === '-' || e.key === 'e') {
                                e.preventDefault();
                              }
                            }}
                            style={{
                              width: '60px',
                              padding: '5px',
                              textAlign: 'center',
                              border: '1px solid #ddd',
                              borderRadius: '4px'
                            }}
                          />
                          <button className="remove" onClick={() => removeFromCart(item?._id, item?.item?._id)}>{loader ? "Loading" : "Remove"}</button>
                        </div>
                      </li>
                    )
                  })}
                </ul>
                <div className="cart-summary">
                <p>Total Amount: ₹{Math.round(getTotalAmount())}</p>
                  <button onClick={() => {
                    handleAddToCart()
                  }}>Buy</button>
                </div></> : <div className='d-flex flex-column'>
                <div style={{ fontSize: "25px", fontWeight: "600" }}>Please Login/Sign Up First</div>
                <div style={{ fontSize: "18px", color: "#ebe977" }} onClick={() => {
                  navigate("/best-hair-care-products-hair-loss-scalp-health")
                }}>See all products</div>
                <div className="d-flex .shop-btn1">
                  <div className="d-flex shop-btn1 btn-222" style={{ cursor: "pointer" }} onClick={handleLoginClick}
                  >
                    <div
                      className=""
                      style={{ margin: "8px 0 0 17px" }}
                    >
                      Login
                    </div>
                  </div>

                  <div className="d-flex shop-btn1 btn-33" style={{ cursor: "pointer" }} onClick={handleSignupClick}
                  >
                    <div
                      className=""
                      style={{ margin: "8px 0 0 17px" }}
                    >
                      Sign up
                    </div>
                  </div>
                </div>
                {showLogin && <Login onClose={handleLoginClick} />}
                {showSignup && <SignUp onClose={handleSignupClick} />}
              </div>
          }


        </div>
        <ToastContainer position="bottom-right" />
      
      {/* <Footer/> */}
    </Navbar>
  );
}
