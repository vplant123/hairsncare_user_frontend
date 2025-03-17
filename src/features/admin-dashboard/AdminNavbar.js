// import React from 'react'
// import { FaRegUser } from "react-icons/fa";
// import { NavLink } from "react-router-dom";
// import { FaChevronDown } from "react-icons/fa";
// import { FaChevronUp } from "react-icons/fa";

// export default function AdminNavbar({children}) {
//   return (
//     <>
//     <div className="nav-container container">
//       <div>
//         <img alt='hair'
//           alt="logo"
//           className="nav-logo"
//           src="https://hairsncares.com/assets/img/logo.png"
//         />
//       </div>

//       <div className="nav-right">
//         <div className="user-svg">
//           <FaRegUser size={20} />
//         </div>
//       </div>
//     </div>
//     <div className="container">
//     <div className="dashboard-container">
//       <div className="left-column">
//        {/* <NavLink to={'/admin-dashboard'}>Transactions</NavLink> */}
//        <NavLink to={'/admin-dashboard'}>Operational</NavLink>
//        <NavLink to={'/all-hair-test-result'}>All Hair Test Results</NavLink>
//        {/* <NavLink to={'/all-patient-list'}>Patient List</NavLink> */}
//        <NavLink to={'/all-patient-list'}>Order</NavLink>

//        {/* <NavLink to={'/add-doctor'}>Add Doctor</NavLink> */}
//        <NavLink to={'/add-doctor'}>Website</NavLink>

//        {/* <NavLink to={'/all-doctor'}>All Doctors List</NavLink> */}
//        <NavLink to={'/all-doctor'}>Ecommerce</NavLink>

       
//        {/* <NavLink to={'/assign-appointment'}>Assign Appointments</NavLink> */}
//       </div>
//       <div className="right-column">
//      {children}
//       </div>
//     </div>

//     </div>
//   </>
//   )
// }
import React, { useEffect, useState } from 'react';
import { FaRegUser, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useNavigate,useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { toggleLogin } from "../login/LoginSlice";
import { useDispatch, useSelector } from 'react-redux';
import Login from '../login/Login';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShopIcon from '@mui/icons-material/Shop';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import DiscountIcon from '@mui/icons-material/Discount';

export default function AdminNavbar({ children }) {
  const navigate = useNavigate();
  const location=useLocation()
  const dispatch = useDispatch();

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [orderDropdownVisible, setOrderDropdownVisible] = useState(false);
  const [websiteDropdownVisible, setWebsiteDropdownVisible] = useState(false);
  const [ecommerceDropdownVisible, setEcommerceDropdownVisible] = useState(false);
  const [couponDropdownVisible, setCouponDropdownVisible] = useState(false);


  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
    orderDropdownVisible&&setOrderDropdownVisible(false)
    websiteDropdownVisible&&setWebsiteDropdownVisible(false)
    ecommerceDropdownVisible&&setEcommerceDropdownVisible(false)
    couponDropdownVisible && setCouponDropdownVisible(false)
  };

  const toggleOrderDropdown = () => {
    setOrderDropdownVisible(!orderDropdownVisible);
    dropdownVisible&&setDropdownVisible(false)
    websiteDropdownVisible&&setWebsiteDropdownVisible(false)
    ecommerceDropdownVisible&&setEcommerceDropdownVisible(false)
    couponDropdownVisible && setCouponDropdownVisible(false)
  };

  const toggleWebsiteDropdown = () => {
    setWebsiteDropdownVisible(!websiteDropdownVisible);
    ecommerceDropdownVisible&&setEcommerceDropdownVisible(false)
    dropdownVisible&&setDropdownVisible(false)
    orderDropdownVisible&&setOrderDropdownVisible(false)
    couponDropdownVisible && setCouponDropdownVisible(false)


  };

  const toggleEcommerceDropdown = () => {
    setEcommerceDropdownVisible(!ecommerceDropdownVisible);
    dropdownVisible&&setDropdownVisible(false)
    orderDropdownVisible&&setOrderDropdownVisible(false)
    websiteDropdownVisible&&setWebsiteDropdownVisible(false)
    couponDropdownVisible && setCouponDropdownVisible(false)

  };

  const toggleCouponDropdown = () => {
    setCouponDropdownVisible(!couponDropdownVisible);
    dropdownVisible&&setDropdownVisible(false)
    orderDropdownVisible&&setOrderDropdownVisible(false)
    websiteDropdownVisible&&setWebsiteDropdownVisible(false)
    ecommerceDropdownVisible&&setEcommerceDropdownVisible(false)

  };


  const [showSignup, setShowSignup] = useState(false);


  const [showLogout, setShowLogout] = useState(false);
  const handleLogout = () => {
    setShowLogout(false);
    localStorage.removeItem("User343");
    navigate("/home")
    toast("Logout Successfully");
  };

  const handleLoginClick = () => {
    dispatch(toggleLogin());
  };

  const handleSignupClick = () => {
    setShowSignup(!showSignup);
  };
  let storedUserData = JSON.parse(localStorage.getItem("User343"));
 
  useEffect(() => {
    if (storedUserData) {
      setShowLogout(true);
    }
  }, [dispatch]);

  const showLogin = useSelector((state) => state.login.showLogin);


  return (
    <>
      <div className="nav-container container">
        <div onClick={() => navigate("/home")} style={{cursor : "pointer"}}>
          <img 
            alt="logo"
            className="nav-logo"
            src="/assets/img/logo.png"
          />
        </div>

        <div className="nav-right">
          <div className="user-svg">
            <FaRegUser size={20} />
            <div className="sub-link" style={{width: "135px",padding : "1rem",zIndex : 100}} >
                  {showLogout ? (
                    <div>
                      <p style={{ fontSize : "17px"}} onClick={() => navigate('/user-profile')}>My Account</p>
                      <p onClick={handleLogout} style={{textAlign : "center",fontSize : "17px"}}>Logout</p>
                    </div>
                  ) : (
                    <div>
                      <p onClick={handleLoginClick}  style={{textAlign : "center"}}>Login</p>
                      {/* <p onClick={handleSignupClick}  style={{textAlign : "center"}}>Signup</p> */}
                    </div>
                  )}
                </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="dashboard-container ">
          <div className="left-column-111" >
            <div className='tab-color d-flex left-column-111-parent-div' onClick={toggleDropdown}>
            <DashboardIcon/>
              <div>
              Operational
              </div>
              {dropdownVisible ? <FaChevronUp /> : <FaChevronDown />}
               </div>
            {dropdownVisible && (
              <>
                <div className={location.pathname.includes("/admin-dashboard")?'select left-column-111-child-div':'left-column-111-child-div'}  onClick={() => navigate('/admin-dashboard')}>All Hair Test Results</div>
                <div className={location.pathname.includes("/pending-appointments")?'select left-column-111-child-div':'left-column-111-child-div'}  onClick={() => navigate('/pending-appointments')}>Pending Test</div>
                <div onClick={() => navigate('/all-contact-us-form-result')} className={location.pathname.includes("/all-contact-us-form-result")?'select left-column-111-child-div':'left-column-111-child-div'}>All Contact Us</div>
                <div onClick={() => navigate('/all-patient-list')} className={location.pathname.includes("/all-patient-list")?'select left-column-111-child-div':'left-column-111-child-div'}>All Patient List</div>
                <div onClick={() => navigate('/add-doctor')} className={location.pathname.includes("/add-doctor")?'select left-column-111-child-div':'left-column-111-child-div'}>Add Doctor</div>
                <div onClick={() => navigate('/all-doctor')} className={location.pathname.includes("/all-doctor")?'select left-column-111-child-div':'left-column-111-child-div'}>All Doctor List</div>
                <div onClick={() => navigate('/reviews')} className={location.pathname.includes("/reviews")?'select left-column-111-child-div':'left-column-111-child-div'}>All Reviews</div>
                {/* <div onClick={() => navigate('/admins')} className={location.pathname.includes("/reviews")?'select left-column-111-child-div':'left-column-111-child-div'}>All Reviews</div> */}



                {/* Add more sublinks as needed */}
              </>
            )}
            <div className='tab-color left-column-111-parent-div d-flex' onClick={toggleOrderDropdown}>
              <ShopIcon />
              <div>Order</div> 
              {orderDropdownVisible ? <FaChevronUp /> : <FaChevronDown />}
              </div>
            {orderDropdownVisible && (
              <>
                <div className={location.pathname.includes("/manage-order")?'select left-column-111-child-div':'left-column-111-child-div'} onClick={() => navigate('/manage-order')}>All Orders</div>
                {/* Add more sublinks related to orders as needed */}
              </>
            )}
            <div className='tab-color left-column-111-parent-div d-flex' onClick={toggleWebsiteDropdown}>
              <WebAssetIcon />
              <div>Website</div>
              {websiteDropdownVisible ? <FaChevronUp /> : <FaChevronDown />}</div>
            {websiteDropdownVisible && (
              <>
                <div onClick={() => navigate('/manage-website')} className={location.pathname.includes("/manage-website")?'select left-column-111-child-div':'left-column-111-child-div'}>Manage Website</div>
                {/* Add more sublinks related to website as needed */}
              </>
            )}
            <div className='tab-color left-column-111-parent-div d-flex ' onClick={toggleEcommerceDropdown}>
              <Inventory2Icon />
              <div>Ecommerce</div> 
              {ecommerceDropdownVisible ? <FaChevronUp /> : <FaChevronDown />}</div>
            {ecommerceDropdownVisible && (
              <>
                <div className={location.pathname.includes("/add-product")?'select left-column-111-child-div':'left-column-111-child-div'} onClick={() => navigate('/add-product')}>Add Product</div>
                <div className={location.pathname.includes("/edit-delete-product")?'select left-column-111-child-div':'left-column-111-child-div'} onClick={() => navigate('/edit-delete-product')}>Edit and Delete Product</div>
                {/* Add more sublinks related to ecommerce as needed */}
              </>
            )}
                        <div className='tab-color left-column-111-parent-div d-flex' onClick={toggleCouponDropdown}>
                          <DiscountIcon />
                          <div>Coupons</div> 
                          {couponDropdownVisible ? <FaChevronUp /> : <FaChevronDown />}</div>
            {couponDropdownVisible && (
              <>
                <div className={location.pathname.includes("/all-coupons")?'select left-column-111-child-div':'left-column-111-child-div'} onClick={() => navigate('/all-coupons')}>All Coupons</div>
                {/* <div onClick={() => navigate('/edit-delete-coupon')}>Edit and Delete Coupons</div> */}
                {/* Add more sublinks related to ecommerce as needed */}
              </>
            )}
          </div>
          
          
          <div className="right-column" style={{    width: "100%"}}>{children}</div>
          {showLogin && <Login onClose={handleLoginClick} showSignup={showSignup} setShowSignup={setShowSignup} />}

        </div>
      </div>
    </>
  );
}
