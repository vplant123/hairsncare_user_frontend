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
import HairAssessmentPrep from "./features/hair-assessment/HairAssessmentPrep";
import HairAssessmentFlow from "./features/hair-assessment/HairAssessmentFlow";
import ReportPage from "./pages/ReportPage";

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
            <Route path="/report" element={<ReportPage />} />

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
            <Route path="/hair-test-assessment" element={<HairAssessmentPrep />} />
            <Route path="/take-hair-test-premium" element={<HairAssessmentFlow />} />



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
