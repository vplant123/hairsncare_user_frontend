import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getUtilityContentData } from "./app/conteneDataSlice";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PaymentStatus from "./features/payment/paymentstatus";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "animate.css";
import "./App.css";

// Import routes configuration
import { routes } from "./config/routes";

// Important pages (no lazy loading)
import ProductPage from "./pages/ProductPage";
import HomePage from "./pages/HomePage";
import BookAppointmentPage from "./pages/BookAppointmentPage";
import ProductDetail from "./features/products/ProductDetail";
import Login from "./features/login/Login";
import ErrorPage from "./features/ErrorPage";
import AboutUsPage from "./pages/AboutUsPage";
import OurExpertisePage from "./pages/OurExpertisePage";
import OurSpecialistsPage from "./pages/OurSpecialistsPage";

// Previously lazy loaded pages (now direct imports)
import HairTestPage from "./pages/HairTestPage";
import DoctorDashboard from "./features/doctor-dashboard/DoctorDashboard";
import PatientList from "./features/doctor-dashboard/PatientList";
import AppointmentList from "./features/doctor-dashboard/AppointmentList";
import AdminDashboard from "./features/admin-dashboard/AdminDashboard";
import AllPatientList from "./features/admin-dashboard/AllPatientList";
import AssignAppointment from "./features/admin-dashboard/AssignAppointment";
import AddDoctor from "./features/admin-dashboard/AddDoctor";
import TestResults from "./features/admin-dashboard/TestResults";
import AllDoctorList from "./features/admin-dashboard/AllDoctorList";
import UserProfilePage from "./pages/UserProfilePage";
import AllHairTest from "./features/admin-dashboard/AllHairTest";
import ManageWebsite from "./features/admin-dashboard/MangeWebsite";
import AllContactUs from "./features/admin-dashboard/AllContactUs";
import AddProduct from "./features/admin-dashboard/AddProduct";
import EditDeleteProduct from "./features/products/EditDeleteProduct";
import ManageOrder from "./features/admin-dashboard/ManageOrder";
import PatientTestResult from "./features/doctor-dashboard/PatientTestResult";
import Success from "./features/payment/Success";
import Failure from "./features/payment/Failure";
import Status from "./features/payment/Status";
import RoleBasedRoutes from "./RoleBasedRoutes";
import Unauthorized from "./pages/Unuthorized";
import Analysis from "./features/doctor-dashboard/Analysis";
import Report from "./features/doctor-dashboard/Report";
import DoctorAnalyseReport from "./features/admin-dashboard/DoctorAnalyseReport";
import ManagementReport from "./features/admin-dashboard/ManagementReport";
import MyOrders from "./features/user-profile/MyOrders";
import Cart from "./features/user-profile/Cart";
import Address from "./features/user-profile/Adress";
import PendingDashboard from "./features/admin-dashboard/PendingDashboard";
import PendingTestResults from "./features/admin-dashboard/PendingTestResults";
import MyReportsPages from "./pages/MyReportsPage";
import CreateOrder from "./features/user-profile/CreateOrder";
import EditDoctor from "./features/admin-dashboard/manage-website/EditDoctor";
import Disclaimer from "./features/disclaimer";
import Policy from "./features/policy";
import ReturnPolicy from "./features/returnPolicy";
import TermsOfService from "./features/termsOfService";
import AllCoupons from "./features/admin-dashboard/AllCoupons";
import Coupons from "./features/user-profile/Coupons";
import AllReviews from "./features/admin-dashboard/AllReviews";
import MarketPop from "./features/MarketPop";
import HairTreatmentWomen from "./features/HairTreatmentWomen";
import HairTreatmentMen from "./features/HairTreatmentMen";
import HairTransplant from "./features/HairTransplant";
import OtherProcedure from "./features/OtherProcedure";
import OnlineHairTest from "./features/OnlineHairTest";
import Dermatologist from "./features/Dermatologist";
import InvoiceView from "./features/user-profile/InvoiceView";
import AllBlogs from "./features/Blogs/AllBlogs";
import Blog from "./features/Blogs/Blog";
import BangaloreHairTreatmentPage from "./pages/BangaloreHairTreatmentPage";
import DelhiHairTreatmentPage from "./pages/DelhiHairTreatmentPage";
import ChennaiHairTreatmentPage from "./pages/ChennaiHairTreatmentPage";
import HyderabadHairTreatmentPage from "./pages/HyderabadHairTreatmentPage";


let y =
  "Discover customized hair loss treatments and accurate diagnosis with Hairsncares. Our expert services and advanced hair tests provide personalized solutions for effective hair restoration. Start your journey to fuller, healthier hair today!";
let z = "HairsNcares";

function App() {
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUtilityContentData());
  }, []);

  useEffect(() => {
    const currentRoute = routes.find((route) =>
      route.exact
        ? route.path === window.location.pathname
        : window.location.pathname.startsWith(route.path)
    );

    document.title = currentRoute?.title || title || "hairsncares";

    // const metaDescription = document.querySelector("meta[name='description']");
    // if (metaDescription) {
    //   metaDescription.setAttribute("content", currentRoute?.desc || desc || y);
    // } else {
    //   const meta = document.createElement("meta");
    //   meta.name = "description";
    //   meta.content = currentRoute?.desc || desc || y;
    //   document.head.appendChild(meta);
    // }

    const metaDescription = document.querySelector("meta[name='description']");
    const descriptionContent = desc || currentRoute?.desc || y;

    if (metaDescription) {
      metaDescription.setAttribute("content", descriptionContent);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = descriptionContent;
      document.head.appendChild(meta);
    }


    const metaKeywords = document.querySelector("meta[name='keywords']");
    if (metaKeywords) {
      metaKeywords.setAttribute("content", currentRoute?.keywords || z);
    } else {
      const meta = document.createElement("meta");
      meta.name = "keywords";
      meta.content = currentRoute?.keywords || z;
      document.head.appendChild(meta);
    }

    const updateMetaTag = (property, content) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (meta) {
        meta.setAttribute("content", content);
      } else {
        meta = document.createElement("meta");
        meta.setAttribute("property", property);
        meta.setAttribute("content", content);
        document.head.appendChild(meta);
      }
    };

    const updateTwitterTag = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (meta) {
        meta.setAttribute("content", content);
      } else {
        meta = document.createElement("meta");
        meta.setAttribute("name", name);
        meta.setAttribute("content", content);
        document.head.appendChild(meta);
      }
    };

    updateMetaTag("og:title", currentRoute?.title || title || "HairsnCares");
    updateMetaTag("og:description", currentRoute?.desc || desc || y);
    updateMetaTag("og:url", window.location.href);

    updateTwitterTag(
      "twitter:title",
      currentRoute?.title || title || "HairsnCares"
    );
    updateTwitterTag("twitter:description", currentRoute?.desc || desc || y);
  }, [title, desc]);

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  return (
    <HelmetProvider>
      <div style={{ overflowX: "hidden" }} className="root-mobile">
        <Router>
          <Routes>

            {/* Main */}
            <Route path="/" element={<HomePage setTitle={setTitle} cart={cart} setCart={setCart} />} />
            <Route path="/status/:slug" element={<Status />} />
            <Route path="/payment-status/:slug" element={<PaymentStatus />} />
            <Route path="/success/:id" element={<Success />} />
            <Route path="/failure/:id" element={<Failure />} />
            <Route path="/login" element={<Login />} />

            {/* Non-duplicate static pages */}
            <Route path="/take-hair-test" element={<HairTestPage setTitle={setTitle} />} />
            <Route path="/about-us-quality-hair-loss-scalp-care" element={<AboutUsPage setTitle={setTitle} />} />
            <Route path="/terms-of-service" element={<TermsOfService setTitle={setTitle} />} />
            <Route path="/disclaimer" element={<Disclaimer setTitle={setTitle} />} />
            <Route path="/hair-loss-women-causes-treatments-remedies" element={<HairTreatmentWomen setTitle={setTitle} cart={cart} setCart={setCart} />} />
            <Route path="/return-policy" element={<ReturnPolicy setTitle={setTitle} />} />
            <Route path="/our-expertise" element={<OurExpertisePage setTitle={setTitle} />} />
            <Route path="/contact-hair-experts" element={<BookAppointmentPage setTitle={setTitle} />} />
            <Route path="/hair-loss-treatment-experts-dermatologists" element={<OurSpecialistsPage setTitle={setTitle} />} />
            <Route path="/dr-amit-agarkar-hair-restoration-expert" element={<Dermatologist setTitle={setTitle} cart={cart} setCart={setCart} />} />
            <Route path="/best-hair-care-products-hair-loss-scalp-health" element={<ProductPage setTitle={setTitle} cart={cart} setCart={setCart} />} />
            <Route path="/policy" element={<Policy setTitle={setTitle} />} />
            <Route path="effective-hair-loss-treatment-men" element={<HairTreatmentMen setTitle={setTitle} cart={cart} setcart={setCart} />} />
            <Route path="/hair-transplants-fue-dhi-mhi-natural-restoration" element={<HairTransplant setTitle={setTitle} cart={cart} setCart={setCart} />} />
            <Route path="/advanced-hair-loss-solutions-prp-smp-cloning-systems" element={<OtherProcedure setTitle={setTitle} cart={cart} setCart={setCart} />} />
            <Route path="/online-hair-loss-test-diagnosis-treatment" element={<OnlineHairTest setTitle={setTitle} cart={cart} setCart={setCart} />} />

            {/* Blogs */}
            <Route path="/hair-care-blogs" element={<AllBlogs setTitle={setTitle} cart={cart} setCart={setCart} desc={desc} setDesc={setDesc} />} />
            <Route path="/hair-care-blogs/:id1/:id" element={<Blog setTitle={setTitle} cart={cart} setCart={setCart} desc={desc} setDesc={setDesc} />} />
            <Route path="/hair-care-blogs/:id1" element={<AllBlogs setTitle={setTitle} cart={cart} setCart={setCart} desc={desc} setDesc={setDesc} />} />

            {/* Product Details */}
            <Route path="/product-detail/:id" element={<ProductDetail setTitle={setTitle} setDesc={setDesc} cart={cart} setCart={setCart} />} />

            {/* Checkout / User */}
            <Route path="/user-profile" element={<MyReportsPages setTitle={setTitle} />} />
            <Route path="/user-profile/:id" element={<UserProfilePage setTitle={setTitle} />} />
            <Route path="/unauthorized" element={<Unauthorized setTitle={setTitle} />} />
            <Route path="/doctor/report/:id" element={<Report setTitle={setTitle} />} />
            <Route path="/doctor-analyse-report/:id" element={<DoctorAnalyseReport setTitle={setTitle} />} />
            <Route path="/address" element={<Address setTitle={setTitle} />} />
            <Route path="/management-report/:id" element={<ManagementReport setTitle={setTitle} />} />
            <Route path="/my-orders" element={<MyOrders setTitle={setTitle} />} />
            <Route path="/create-order" element={<CreateOrder setTitle={setTitle} />} />
            <Route path="/cart" element={<Cart setTitle={setTitle} cart={cart} setCart={setCart} />} />
            <Route path="/coupon" element={<Coupons setTitle={setTitle} cart={cart} setCart={setCart} />} />
            <Route path="/invoiceView/:id" element={<InvoiceView />} />

            {/* Locations */}
            <Route path="/online-hair-loss-treatment-bangalore" element={<BangaloreHairTreatmentPage setTitle={setTitle} cart={cart} setCart={setCart} />} />
            <Route path="/online-hair-loss-treatment-delhi" element={<DelhiHairTreatmentPage setTitle={setTitle} cart={cart} setCart={setCart} />} />
            <Route path="/online-hair-loss-treatment-chennai" element={<ChennaiHairTreatmentPage setTitle={setTitle} cart={cart} setCart={setCart} />} /> 
            <Route path="/online-hair-loss-treatment-hyderabad" element={<HyderabadHairTreatmentPage setTitle={setTitle} cart={cart} setCart={setCart} />} />

            {/* Doctor routes */}
            <Route element={<RoleBasedRoutes allowedRoles={["doctor"]} />}>
              <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
              <Route path="/patient-list" element={<PatientList />} />
              <Route path="/appointment" element={<AppointmentList />} />
              <Route path="/patient-test-result/:id" element={<PatientTestResult />} />
              <Route path="/analysis/:id" element={<Analysis />} />
            </Route>

            {/* Admin routes */}
            <Route element={<RoleBasedRoutes allowedRoles={["admin"]} />}>
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
              <Route path="/pending-appointments" element={<PendingDashboard />} />
              <Route path="/all-patient-list" element={<AllPatientList />} />
              <Route path="/test-result/:id" element={<TestResults />} />
              <Route path="/pending-test-result/:id" element={<PendingTestResults />} />
              <Route path="/assign-appointment" element={<AssignAppointment />} />
              <Route path="/add-doctor" element={<AddDoctor />} />
              <Route path="/edit-doctor/:id" element={<EditDoctor />} />
              <Route path="/all-doctor" element={<AllDoctorList />} />
              <Route path="/all-hair-test-result" element={<AllHairTest />} />
              <Route path="/manage-website" element={<ManageWebsite />} />
              <Route path="/all-contact-us-form-result" element={<AllContactUs />} />
              <Route path="/reviews" element={<AllReviews />} />
              <Route path="/add-product" element={<AddProduct />} />
              <Route path="/edit-delete-product" element={<EditDeleteProduct />} />
              <Route path="/manage-order" element={<ManageOrder />} />
              <Route path="/all-coupons" element={<AllCoupons />} />
            </Route>

            {/* 404 */}
            <Route path="*" element={<ErrorPage />} />

          </Routes>
        </Router>
        {/* {market && <MarketPop setMarket={setMarket} />} */}
        <ToastContainer />
      </div>
    </HelmetProvider>
  );
}

export default App;








// const routes = [
//   {
//     path: "/",
//     title: "Best Personalized Hair loss Treatment & Diagnosis | Hairs n Cares",
//     exact: true,
//     desc: "Personalized hair loss treatment plans with expert diagnosis, hair care solutions, and effective hair growth management for lasting results.",
//     keywords:
//       "Take a Hair test, Hair Loss Treatment, Hair Care, Hair Treatments",
//   },
//   { path: "/login", title: "HairsNcares - Login" },
//   {
//     path: "/best-hair-care-products-hair-loss-scalp-health",
//     title: "Best Hair Care Products for Hair Loss & Scalp Health",
//     desc: "Discover top hair care products for hair loss, dandruff, and thinning. Expert solutions for men, women, and all hair types, including curly and color-treated.",
//   },
//   { path: "/book", title: "HairsNcares - Book" },
//   {
//     path: "/about-us-quality-hair-loss-scalp-care",
//     title: "About us - Hairsncares",
//     desc: "At Hairsncares, we provide expert hair loss solutions, personalized treatments, and hair care designed to help you regain confidence and healthy growth.",
//     keywords:
//       "hair care experts, about HairsnCares, hair treatments, hair solutions, healthy hair, hair care professionals, hair care advice",
//   },
//   { path: "/product-detail" },
//   {
//     path: "/hair-loss-treatment-experts-dermatologists",
//     title: "Find the Best Dermatologists in India | Skin & Hair Experts",
//     desc: "Find the best dermatologists in India offering expert hair care, personalized treatments, and advanced solutions for lasting results",
//   },
//   { path: "/our-expertise", title: "HairsNcares - Expertise" },
//   { path: "/user-profile", title: "HairsNcares - Profile" },
//   { path: "/user-profile/", title: "HairsNcares - Profile" },
//   {
//     path: "/take-hair-test",
//     title: "Hair Loss Test Online | Free Hair Diagnosis Test",
//     desc: "Take a quick hair loss test online to know your hair condition. Get accurate results and personalized treatment recommendations with Hairs n Cares.",
//   },
//   { path: "/doctor/report", title: "HairsNcares - Doctor Report" },
//   {
//     path: "/doctor-analyse-report",
//     title: "HairsNcares - Doctor Analyse Report",
//   },
//   { path: "/address", title: "HairsNcares - Address" },
//   { path: "/management-report/", title: "HairsNcares - Management Report" },
//   { path: "/my-orders", title: "HairsNcares - My Orders" },
//   { path: "/create-order", title: "HairsNcares - Create Order" },
//   { path: "/cart", title: "HairsNcares - My Cart" },
//   {
//     path: "/hair-care-blogs",
//     title: "Hair Care Blogs | Expert Hair Tips & Hair Care Solutions",
//     desc: "Hair Care Blogs with expert tips, personalized solutions, and hair growth advice for healthy, strong, and beautiful hair",
//     exact: true,
//   },
//   {
//     path: "/advanced-hair-loss-solutions-prp-smp-cloning-systems",
//     title: "PRP Hair Treatment | Hair Cloning & Advanced Solutions",
//     desc: "PRP hair treatment, advanced solutions, scalp micropigmentation, and hair cloning techniques for effective hair restoration",
//   },
//   {
//     path: "/hair-transplants-fue-dhi-mhi-natural-restoration",
//     title: "Hair Transplant Methods | Advanced Hair Transplant Care",
//     desc: "Best advanced hair transplant techniques and methods for natural hair growth, expert care, and personalized solutions to restore your confidence.",
//   },
//   {
//     path: "/online-hair-loss-test-diagnosis-treatment",
//     title: "Online Hair Loss Treatment & Diagnosis | Hairs n Cares",
//     desc: "Get expert hair loss diagnosis online. Take our test to identify causes and explore personalized online hair loss treatment options with Hairs n Cares.",
//   },
//   {
//     path: "/effective-hair-loss-treatment-men",
//     title: "Best Hair Loss Solutions for Men | Personalized & Advanced Care",
//     desc: "Best hair loss treatments for men with advanced care and customized hair care solutions to help you achieve stronger, healthier hair.",
//     keywords:
//       "hair loss treatment for men, male pattern baldness solutions, hair regrowth for men, Minoxidil for men, Finasteride hair loss, hair transplant options, laser therapy hair loss, causes of hair loss in men, scalp health, prevent hair loss men, online hair test, HairsnCares hair loss solutions",
//   },
//   {
//     path: "/hair-loss-women-causes-treatments-remedies",
//     title: "Women’s Hair Loss Treatment | Causes & Hair Care Solutions",
//     desc: "Hair loss treatments for women with expert diagnosis, natural care, and solutions designed to restore growth and improve hair health.",
//   },
//   {
//     path: "/dr-amit-agarkar-hair-restoration-expert",
//     title: "Dr. Amit Agarkar | Hair Transplant & Restoration Expert",
//     desc: "Meet Dr. Amit Agarkar, leading dermatologist and hair transplant surgeon in India. Renowned hair restoration expert offering advanced treatment solutions.",
//   },
//   {
//     path: "/contact-hair-experts",
//     title: "Contact Us | Best Hair Loss Treatment & Solutions",
//     desc: "Contact our experts for the best hair loss treatment, diagnosis, and growth solutions. We provide personalized care for your hair concerns.",
//     keywords:
//       "contact HairsnCares, hair care contact, hair loss expert contact, hair growth inquiries, hair treatment support, customer service, get in touch, contact for hair solutions, hair restoration queries",
//   },

//   //added new routes
//   {
//     path: "/disclaimer",
//     title: "Hairsncares Disclaimer - Legal & Usage Notice",
//     desc: "Read the Hairsncares Disclaimer for legal, accuracy, and usage guidelines. Understand your rights and responsibilities when using our hair care content and services.",
//   },
//   {
//     path: "/policy",
//     title: "Privacy Policy | Hair Treatment Policy & Data Safety",
//     desc: "Read our Privacy Policy for hair treatment services. Learn how we protect your data, ensure safety, and maintain transparency in our policy.",
//   },
//   {
//     path: "/terms-of-service",
//     title: "Terms of Service | Hair Treatment & Care Policies",
//     desc: "Read our Terms of Service for hair treatment. Learn about policies, customer care, and guidelines for safe and effective hair care services",
//   },
//   {
//     path: "/return-policy",
//     title: "Return & Refund Policy for Hair Treatment Products",
//     desc: "Read our return & refund policy for hair treatment products. Hassle-free process to ensure customer satisfaction with every purchase",
//   },
// ];
// {/* <Router>
//           <Routes>
//             <Route
//               path="/"
//               element={
//                 <HomePage setTitle={setTitle} cart={cart} setCart={setCart} />
//               }
//             />
//             <Route path="/status/:slug" element={<Status />} />
//             <Route path="/payment-status/:slug" element={<PaymentStatus />} />
//             <Route path="/success/:id" element={<Success />} />
//             <Route path="/failure/:id" element={<Failure />} />
//             <Route path="/login" element={<Login />} />

//             {/* These are changible orphan pages  */}
//             <Route
//               path="/take-hair-test"
//               element={<HairTestPage setTitle={setTitle} />}
//             />
//             <Route
//               path="/about-us-quality-hair-loss-scalp-care"
//               element={<AboutUsPage setTitle={setTitle} />}
//             />
//             <Route
//               path="/terms-of-service"
//               element={<TermsOfService setTitle={setTitle} />}
//             />
//             <Route
//               path="/disclaimer"
//               element={<Disclaimer setTitle={setTitle} />}
//             />
//             <Route
//               path="/hair-loss-women-causes-treatments-remedies"
//               element={
//                 <HairTreatmentWomen
//                   setTitle={setTitle}
//                   cart={cart}
//                   setCart={setCart}
//                 />
//               }
//             />
//             <Route
//               path="/return-policy"
//               element={<ReturnPolicy setTitle={setTitle} />}
//             />
//             <Route
//               path="/our-expertise"
//               element={<OurExpertisePage setTitle={setTitle} />}
//             />
//             <Route
//               path="/contact-hair-experts"
//               element={<BookAppointmentPage setTitle={setTitle} />}
//             />
//             <Route
//               path="/hair-loss-treatment-experts-dermatologists"
//               element={<OurSpecialistsPage setTitle={setTitle} />}
//             />
//             <Route
//               path="/dr-amit-agarkar-hair-restoration-expert"
//               element={
//                 <Dermatologist
//                   setTitle={setTitle}
//                   cart={cart}
//                   setCart={setCart}
//                 />
//               }
//             />
//             <Route
//               path="/best-hair-care-products-hair-loss-scalp-health"
//               element={
//                 <ProductPage
//                   setTitle={setTitle}
//                   cart={cart}
//                   setCart={setCart}
//                 />
//               }
//             />
//             <Route path="/policy" element={<Policy setTitle={setTitle} />} />
//             <Route
//               path="/hair-transplants-fue-dhi-mhi-natural-restoration"
//               element={
//                 <HairTransplant
//                   setTitle={setTitle}
//                   cart={cart}
//                   setCart={setCart}
//                 />
//               }
//             />
//             <Route
//               path="/advanced-hair-loss-solutions-prp-smp-cloning-systems"
//               element={
//                 <OtherProcedure
//                   setTitle={setTitle}
//                   cart={cart}
//                   setCart={setCart}
//                 />
//               }
//             />
//             <Route
//               path="/online-hair-loss-test-diagnosis-treatment"
//               element={
//                 <OnlineHairTest
//                   setTitle={setTitle}
//                   cart={cart}
//                   setCart={setCart}
//                 />
//               }
//             />
//             <Route
//               path="/hair-care-blogs"
//               element={
//                 <AllBlogs
//                   setTitle={setTitle}
//                   cart={cart}
//                   setCart={setCart}
//                   desc={desc}
//                   setDesc={setDesc}
//                 />
//               }
//             />
//             <Route
//               path="/hair-care-blogs/:id1/:id"
//               element={
//                 <Blog
//                   setTitle={setTitle}
//                   cart={cart}
//                   setCart={setCart}
//                   desc={desc}
//                   setDesc={setDesc}
//                 />
//               }
//             />
//             <Route
//               path="/hair-care-blogs/:id1"
//               element={
//                 <AllBlogs
//                   setTitle={setTitle}
//                   cart={cart}
//                   setCart={setCart}
//                   desc={desc}
//                   setDesc={setDesc}
//                 />
//               }
//             />
//             <Route path="/invoiceView/:id" element={<InvoiceView />} />

//             <Route
//               path="/disclaimer"
//               element={<Disclaimer />}
//               setTitle={setTitle}
//             />
//             <Route
//               path="/terms-of-service"
//               element={<TermsOfService />}
//               setTitle={setTitle}
//             />
//             <Route
//               path="/return-policy"
//               element={<ReturnPolicy />}
//               setTitle={setTitle}
//             />
//             <Route path="/policy" element={<Policy />} setTitle={setTitle} />

//             <Route
//               path="/best-hair-care-products-hair-loss-scalp-health"
//               element={
//                 <ProductPage
//                   setTitle={setTitle}
//                   cart={cart}
//                   setCart={setCart}
//                 />
//               }
//             />
//             <Route
//               path="/contact-hair-experts"
//               element={<BookAppointmentPage setTitle={setTitle} />}
//             />
//             <Route
//               path="/about-us-quality-hair-loss-scalp-care"
//               element={<AboutUsPage setTitle={setTitle} />}
//             />
//             <Route
//               path="/product-detail/:id"
//               element={
//                 <ProductDetail
//                   setTitle={setTitle}
//                   setDesc={setDesc}
//                   cart={cart}
//                   setCart={setCart}
//                 />
//               }
//             />
//             <Route
//               path="/hair-loss-treatment-experts-dermatologists"
//               element={<OurSpecialistsPage setTitle={setTitle} />}
//             />
//             <Route
//               path="/our-expertise"
//               element={<OurExpertisePage setTitle={setTitle} />}
//             />
//             <Route
//               path="/user-profile"
//               element={<MyReportsPages setTitle={setTitle} />}
//             />
//             <Route
//               path="/user-profile/:id"
//               element={<UserProfilePage setTitle={setTitle} />}
//             />
//             <Route
//               path="/unauthorized"
//               element={<Unauthorized setTitle={setTitle} />}
//             />
//             <Route
//               path="/take-hair-test"
//               element={<HairTestPage setTitle={setTitle} />}
//             />

//             <Route
//               path="/doctor/report/:id"
//               element={<Report setTitle={setTitle} />}
//             />
//             <Route
//               path="/doctor-analyse-report/:id"
//               element={<DoctorAnalyseReport setTitle={setTitle} />}
//             />
//             <Route path="/address" element={<Address setTitle={setTitle} />} />
//             <Route
//               path="management-report/:id"
//               element={<ManagementReport setTitle={setTitle} />}
//             />
//             <Route
//               path="my-orders"
//               element={<MyOrders setTitle={setTitle} />}
//             />
//             <Route
//               path="create-order"
//               element={<CreateOrder setTitle={setTitle} />}
//             />
//             <Route
//               path="cart"
//               element={
//                 <Cart setTitle={setTitle} cart={cart} setCart={setCart} />
//               }
//             />
//             <Route
//               path="coupon"
//               element={
//                 <Coupons setTitle={setTitle} cart={cart} setCart={setCart} />
//               }
//             />

//             <Route
//               path="hair-loss-women-causes-treatments-remedies"
//               element={
//                 <HairTreatmentWomen
//                   setTitle={setTitle}
//                   cart={cart}
//                   setCart={setCart}
//                 />
//               }
//             />
//             <Route
//               path="effective-hair-loss-treatment-men"
//               element={
//                 <HairTreatmentMen
//                   setTitle={setTitle}
//                   cart={cart}
//                   setCart={setCart}
//                 />
//               }
//             />
//             <Route
//               path="hair-transplants-fue-dhi-mhi-natural-restoration"
//               element={
//                 <HairTransplant
//                   setTitle={setTitle}
//                   cart={cart}
//                   setCart={setCart}
//                 />
//               }
//             />
//             <Route
//               path="advanced-hair-loss-solutions-prp-smp-cloning-systems"
//               element={
//                 <OtherProcedure
//                   setTitle={setTitle}
//                   cart={cart}
//                   setCart={setCart}
//                 />
//               }
//             />

//             <Route
//               path="online-hair-loss-test-diagnosis-treatment"
//               element={
//                 <OnlineHairTest
//                   setTitle={setTitle}
//                   cart={cart}
//                   setCart={setCart}
//                 />
//               }
//             />
//             <Route
//               path="dr-amit-agarkar-hair-restoration-expert"
//               element={
//                 <Dermatologist
//                   setTitle={setTitle}
//                   cart={cart}
//                   setCart={setCart}
//                 />
//               }
//             />
//             <Route
//               path="online-hair-loss-treatment-bangalore"
//               element={
//                 <BangaloreHairTreatmentPage
//                   setTitle={setTitle}
//                   cart={cart}
//                   setCart={setCart}
//                 />
//               }
//             />
//             <Route
//               path="online-hair-loss-treatment-delhi"
//               element={
//                 <DelhiHairTreatmentPage
//                   setTitle={setTitle}
//                   cart={cart}
//                   setCart={setCart}
//                 />
//               }
//             />
//             <Route
//               path="/hair-care-blogs"
//               element={
//                 <BangaloreHairTreatmentPage
//                   setTitle={setTitle}
//                   cart={cart}
//                   setCart={setCart}
//                 />
//               }
//             />
//             <Route
//               path="/hair-care-blogs"
//               element={
//                 <AllBlogs
//                   setTitle={setTitle}
//                   cart={cart}
//                   setCart={setCart}
//                   desc={desc}
//                   setDesc={setDesc}
//                 />
//               }
//             />
//             <Route
//               exact
//               path="/hair-care-blogs/:id1/:id"
//               element={
//                 <Blog
//                   setTitle={setTitle}
//                   cart={cart}
//                   setCart={setCart}
//                   desc={desc}
//                   setDesc={setDesc}
//                 />
//               }
//             />
//             <Route
//               exact
//               path="/hair-care-blogs/:id1"
//               element={
//                 <AllBlogs
//                   setTitle={setTitle}
//                   cart={cart}
//                   setCart={setCart}
//                   desc={desc}
//                   setDesc={setDesc}
//                 />
//               }
//             />

//             <Route path="/invoiceView/:id" element={<InvoiceView />} />

//             <Route element={<RoleBasedRoutes allowedRoles={["doctor"]} />}>
//               <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
//               <Route path="/patient-list" element={<PatientList />} />
//               <Route path="/appointment" element={<AppointmentList />} />
//               <Route
//                 path="/patient-test-result/:id"
//                 element={<PatientTestResult />}
//               />
//               <Route path="/analysis/:id" element={<Analysis />} />
//             </Route>

//             <Route element={<RoleBasedRoutes allowedRoles={["admin"]} />}>
//               <Route path="/admin-dashboard" element={<AdminDashboard />} />
//               <Route
//                 path="/pending-appointments"
//                 element={<PendingDashboard />}
//               />
//               <Route path="/all-patient-list" element={<AllPatientList />} />
//               <Route path="/test-result/:id" element={<TestResults />} />
//               <Route
//                 path="/pending-test-result/:id"
//                 element={<PendingTestResults />}
//               />

//               <Route
//                 path="/assign-appointment"
//                 element={<AssignAppointment />}
//               />
//               <Route path="/add-doctor" element={<AddDoctor />} />
//               <Route path="/edit-doctor/:id" element={<EditDoctor />} />
//               <Route path="/all-doctor" element={<AllDoctorList />} />
//               <Route path="/all-hair-test-result" element={<AllHairTest />} />
//               <Route path="/manage-website" element={<ManageWebsite />} />
//               <Route
//                 path="/all-contact-us-form-result"
//                 element={<AllContactUs />}
//               />
//               <Route path="/reviews" element={<AllReviews />} />

//               <Route path="/add-product" element={<AddProduct />} />
//               <Route
//                 path="/edit-delete-product"
//                 element={<EditDeleteProduct />}
//               />
//               <Route path="/manage-order" element={<ManageOrder />} />
//               <Route path="/all-coupons" element={<AllCoupons />} />
//             </Route>
//             <Route path="*" element={<ErrorPage />} />
//           </Routes>
//         </Router> */}
