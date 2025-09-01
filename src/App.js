import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUtilityContentData } from "./app/conteneDataSlice";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PaymentStatus from "./features/payment/paymentstatus";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "animate.css";
import "./App.css";
import { Suspense, lazy } from "react";
const HomePage = lazy(() => import("./pages/HomePage"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const BookAppointmentPage = lazy(() => import("./pages/BookAppointmentPage"));
const OurExpertisePage = lazy(() => import("./pages/OurExpertisePage"));
const ProductDetail = lazy(() => import("./features/products/ProductDetail"));
const AboutUsPage = lazy(() => import("./pages/AboutUsPage"));
const OurSpecialistsPage = lazy(() => import("./pages/OurSpecialistsPage"));
const HairTestPage = lazy(() => import("./pages/HairTestPage"));
const DoctorDashboard = lazy(() =>
  import("./features/doctor-dashboard/DoctorDashboard")
);
const PatientList = lazy(() =>
  import("./features/doctor-dashboard/PatientList")
);
const AppointmentList = lazy(() =>
  import("./features/doctor-dashboard/AppointmentList")
);
const AdminDashboard = lazy(() =>
  import("./features/admin-dashboard/AdminDashboard")
);
const AllPatientList = lazy(() =>
  import("./features/admin-dashboard/AllPatientList")
);
const AssignAppointment = lazy(() =>
  import("./features/admin-dashboard/AssignAppointment")
);
const AddDoctor = lazy(() => import("./features/admin-dashboard/AddDoctor"));
const TestResults = lazy(() =>
  import("./features/admin-dashboard/TestResults")
);
const AllDoctorList = lazy(() =>
  import("./features/admin-dashboard/AllDoctorList")
);
const UserProfilePage = lazy(() => import("./pages/UserProfilePage"));
const AllHairTest = lazy(() =>
  import("./features/admin-dashboard/AllHairTest")
);
const ManageWebsite = lazy(() =>
  import("./features/admin-dashboard/MangeWebsite")
);
const AllContactUs = lazy(() =>
  import("./features/admin-dashboard/AllContactUs")
);
const AddProduct = lazy(() => import("./features/admin-dashboard/AddProduct"));
const EditDeleteProduct = lazy(() =>
  import("./features/products/EditDeleteProduct")
);
const ManageOrder = lazy(() =>
  import("./features/admin-dashboard/ManageOrder")
);
const PatientTestResult = lazy(() =>
  import("./features/doctor-dashboard/PatientTestResult")
);

const Success = lazy(() => import("./features/payment/Success"));
const Failure = lazy(() => import("./features/payment/Failure"));
const Status = lazy(() => import("./features/payment/Status"));

const RoleBasedRoutes = lazy(() => import("./RoleBasedRoutes"));
const Unauthorized = lazy(() => import("./pages/Unuthorized"));
const Login = lazy(() => import("./features/login/Login"));
const Analysis = lazy(() => import("./features/doctor-dashboard/Analysis"));
const Report = lazy(() => import("./features/doctor-dashboard/Report"));
const DoctorAnalyseReport = lazy(() =>
  import("./features/admin-dashboard/DoctorAnalyseReport")
);
const ManagementReport = lazy(() =>
  import("./features/admin-dashboard/ManagementReport")
);
const MyOrders = lazy(() => import("./features/user-profile/MyOrders"));
const Cart = lazy(() => import("./features/user-profile/Cart"));
const Address = lazy(() => import("./features/user-profile/Adress"));
const PendingDashboard = lazy(() =>
  import("./features/admin-dashboard/PendingDashboard")
);
const PendingTestResults = lazy(() =>
  import("./features/admin-dashboard/PendingTestResults")
);
const MyReportsPages = lazy(() => import("./pages/MyReportsPage"));
const CreateOrder = lazy(() => import("./features/user-profile/CreateOrder"));
const EditDoctor = lazy(() =>
  import("./features/admin-dashboard/manage-website/EditDoctor")
);
const ErrorPage = lazy(() => import("./features/ErrorPage"));
const Disclaimer = lazy(() => import("./features/disclaimer"));
const Policy = lazy(() => import("./features/policy"));
const ReturnPolicy = lazy(() => import("./features/returnPolicy"));
const TermsOfService = lazy(() => import("./features/termsOfService"));
const AllCoupons = lazy(() => import("./features/admin-dashboard/AllCoupons"));
const Coupons = lazy(() => import("./features/user-profile/Coupons"));
const AllReviews = lazy(() => import("./features/admin-dashboard/AllReviews"));
const MarketPop = lazy(() => import("./features/MarketPop"));
const HairTreatmentWomen = lazy(() => import("./features/HairTreatmentWomen"));
const HairTreatmentMen = lazy(() => import("./features/HairTreatmentMen"));
const HairTransplant = lazy(() => import("./features/HairTransplant"));
const OtherProcedure = lazy(() => import("./features/OtherProcedure"));
const OnlineHairTest = lazy(() => import("./features/OnlineHairTest"));
const Dermatologist = lazy(() => import("./features/Dermatologist"));
const InvoiceView = lazy(() => import("./features/user-profile/InvoiceView"));
const AllBlogs = lazy(() => import("./features/Blogs/AllBlogs"));
const Blog = lazy(() => import("./features/Blogs/Blog"));

const routes = [
  {
    path: "/",
    title: "Get Personalized Hair Loss Treatment & Diagnosis, Hairsncares",
    exact: true,
    desc: "Stop hair loss with HairsnCares. Get expert treatments, personalized plans, and a hair test delivered to your door. Dermatology & Nutrition solutions.",
    keywords:
      "Take a Hair test, Hair Loss Treatment, Hair Care, Hair Treatments",
  },
  { path: "/login", title: "HairsNcares - Login" },
  {
    path: "/best-hair-care-products-hair-loss-scalp-health",
    title: "Best Hair Care Products for Hair Loss & Scalp Health",
    desc: "Discover top hair care products for hair loss, dandruff, and thinning. Expert solutions for men, women, and all hair types, including curly and color-treated.",
  },
  { path: "/book", title: "HairsNcares - Book" },
  {
    path: "/about-us-quality-hair-loss-scalp-care",
    title:
      "Hairsncares - Your Trusted Source for Quality Hair Loss & Scalp Care Solutions",
    desc: "Discover HairsnCares – your trusted source for expert hair loss & scalp care tips, treatments, and solutions. Committed to healthy, beautiful hair for all.",
    keywords:
      "hair care experts, about HairsnCares, hair treatments, hair solutions, healthy hair, hair care professionals, hair care advice",
  },
  { path: "/product-detail" },
  {
    path: "/hair-loss-treatment-experts-dermatologists",
    title:
      "Top Hair Experts & Dermatologists | Hair Loss Treatment Specialists - HairsnCares",
    desc: "Discover expert hair care solutions from top dermatologists and hair loss treatment specialists at HairsnCares. Personalized care for hair regrowth, scalp health, and advanced treatments to restore your confidence.",
  },
  { path: "/our-expertise", title: "HairsNcares - Expertise" },
  { path: "/user-profile", title: "HairsNcares - Profile" },
  { path: "/user-profile/", title: "HairsNcares - Profile" },
  {
    path: "/take-hair-test",
    title:
      "Take a Hair Test Online | Personalized Hair Loss Diagnosis & Treatment - HairsnCares",
    desc: "Take a quick, convenient hair test online at HairsnCares to diagnose hair loss causes. Get expert analysis, personalized treatment plans, and effective solutions delivered to your door.",
  },
  { path: "/doctor/report", title: "HairsNcares - Doctor Report" },
  {
    path: "/doctor-analyse-report",
    title: "HairsNcares - Doctor Analyse Report",
  },
  { path: "/address", title: "HairsNcares - Address" },
  { path: "/management-report/", title: "HairsNcares - Management Report" },
  { path: "/my-orders", title: "HairsNcares - My Orders" },
  { path: "/create-order", title: "HairsNcares - Create Order" },
  { path: "/cart", title: "HairsNcares - My Cart" },
  {
    path: "/hair-care-blogs",
    title:
      "Hair Care Tips, Hair Loss Solutions & Expert Advice Blogs | HairsnCares",
    desc: "Discover personalized hair loss treatments and expert scalp care at Hairsncares. Advanced tests and solutions for effective hair restoration.",
    exact: true,
  },
  {
    path: "/advanced-hair-loss-solutions-prp-smp-cloning-systems",
    title:
      "PRP Hair Treatment, Scalp Micropigmentation & Hair Cloning | HairsnCares",
    desc: "Expert hair care solutions from top dermatologists at HairsnCares. Personalized treatments for hair regrowth, scalp health, and restoring your confidence.",
  },
  {
    path: "/hair-transplants-fue-dhi-mhi-natural-restoration",
    title:
      "Hair Transplants: FUE, DHI & MHI Techniques for Natural Restoration | HairsnCares",
    desc: "Discover advanced hair transplant techniques like FUE, DHI, MHI, & MHI+ for natural restoration. Learn about costs, recovery, & top clinics for fuller hair.",
  },
  {
    path: "/online-hair-loss-test-diagnosis-treatment",
    title:
      "Take a Hair Test Online for Hair Loss Diagnosis & Treatment | HairsnCares",
    desc: " Get a personalized hair loss diagnosis with HairsnCares’ online test. Uncover causes, get expert          analysis, and receive tailored treatments delivered to your door.",
  },
  {
    path: "/effective-hair-loss-treatment-men",
    title:
      "Hair Loss Treatment for Men: Expert Solutions & Advice | HairsnCares",
    desc: "Discover expert hair care solutions for hair regrowth, scalp health, and advanced treatments at HairsnCares. Personalized care from top dermatologists and specialists.",
    keywords:
      "hair loss treatment for men, male pattern baldness solutions, hair regrowth for men, Minoxidil for men, Finasteride hair loss, hair transplant options, laser therapy hair loss, causes of hair loss in men, scalp health, prevent hair loss men, online hair test, HairsnCares hair loss solutions",
  },
  {
    path: "/hair-loss-women-causes-treatments-remedies",
    title:
      "Hair Loss in Women: Causes, Effective Treatments & Remedies | HairsnCares",
    desc: "Expert hair care & hair loss solutions by top dermatologists at HairsnCares. Personalized regrowth treatments for scalp health & restored confidence.",
  },
  {
    path: "/dr-amit-agarkar-hair-restoration-expert",
    title:
      "Dr. Amit S. Agarkar: Expert in Hair Restoration & PRP | Hairsncares",
    desc: "Discover Dr. Amit S. Agarkar, a leading dermatologist specializing in hair restoration, PRP treatments, and MHI hair transplants. Advanced solutions for hair loss.",
  },
  {
    path: "/contact-hair-experts",
    title:
      "Contact Us To Get Expert Hair Advice| Get in Touch with HairsnCares Experts",
    desc: "Have questions about hair care or treatments? Contact HairsnCares for expert advice on hair loss, hair growth, and scalp health. We're here to help with personalized solutions.",
    keywords:
      "contact HairsnCares, hair care contact, hair loss expert contact, hair growth inquiries, hair treatment support, customer service, get in touch, contact for hair solutions, hair restoration queries",
  },

  // Add more routes here
];

// Hook to set the document title based on the route

let y =
  "Discover customized hair loss treatments and accurate diagnosis with Hairsncares. Our expert services and advanced hair tests provide personalized solutions for effective hair restoration. Start your journey to fuller, healthier hair today!";
let z = "HairsNcares";

function App() {
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const dispatch = useDispatch();
  function useDocumentTitle(routes) {
    // const location = useLocation();
    console.log("nkner");

    useEffect(() => {
      console.log("nkner");
      const currentRoute = routes.find((route) =>
        route.exact
          ? route.path === window.location.pathname
          : window.location.pathname.startsWith(route.path)
      );
      if (currentRoute) {
        document.title = currentRoute.title || "hairsncares";
      } else if (title) document.title = title || "hairsncares";

      const metaDescription = document.querySelector(
        "meta[name='description']"
      );
      if (metaDescription) {
        metaDescription.setAttribute("content", currentRoute?.desc || y);
      } else {
        const meta = document.createElement("meta");
        meta.name = "description";
        meta.content = currentRoute?.desc || y;
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
    }, [window.location?.pathname, routes, desc]);
  }

  // useDocumentTitle(routes);

  useEffect(() => {
    console.log("jsijroir");
    dispatch(getUtilityContentData());
  }, []);
  useEffect(() => {
    console.log("nkner", window.location?.pathname);
    const currentRoute = routes.find((route) =>
      route.exact
        ? route.path === window.location.pathname
        : window.location.pathname.startsWith(route.path)
    );

    // Update document title
    document.title = currentRoute?.title || title || "hairsncares";

    // Update meta description
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute("content", currentRoute?.desc || desc || y);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = currentRoute?.desc || desc || y;
      document.head.appendChild(meta);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector("meta[name='keywords']");
    if (metaKeywords) {
      metaKeywords.setAttribute("content", currentRoute?.keywords || z);
    } else {
      const meta = document.createElement("meta");
      meta.name = "keywords";
      meta.content = currentRoute?.keywords || z;
      document.head.appendChild(meta);
    }

    // Update Open Graph meta tags
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

    // Update Twitter Card meta tags
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

    // Update Open Graph tags
    updateMetaTag("og:title", currentRoute?.title || title || "HairsnCares");
    updateMetaTag("og:description", currentRoute?.desc || desc || y);
    updateMetaTag("og:url", window.location.href);

    // Update Twitter Card tags
    updateTwitterTag(
      "twitter:title",
      currentRoute?.title || title || "HairsnCares"
    );
    updateTwitterTag("twitter:description", currentRoute?.desc || desc || y);
  }, [title, desc]);
  // Set document title based on the route
  console.log("sokro", localStorage.getItem("cart"));
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const [market, setMarket] = useState();

  useEffect(() => {
    let s = sessionStorage.getItem("isPopup");
    console.log("skrfgoekr", s);
    if (!s) {
      setMarket(true);
    }
  }, []);

  return (
    <div style={{ overflowX: "hidden" }} className="root-mobile">
      <Router>
        <Suspense
          fallback={
            <div style={{ textAlign: "center", marginTop: "2rem" }}>
              Loading...
            </div>
          }
        >
          <Routes>
            <Route
              path="/"
              element={
                <HomePage setTitle={setTitle} cart={cart} setCart={setCart} />
              }
            />
            <Route path="/status/:slug" element={<Status />} />
            <Route path="/payment-status/:slug" element={<PaymentStatus />} />
            <Route path="/success/:id" element={<Success />} />
            <Route path="/failure/:id" element={<Failure />} />
            <Route path="/login" element={<Login />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/return-policy" element={<ReturnPolicy />} />
            <Route path="/policy" element={<Policy />} />
            <Route
              path="/best-hair-care-products-hair-loss-scalp-health"
              element={
                <ProductPage
                  setTitle={setTitle}
                  cart={cart}
                  setCart={setCart}
                />
              }
            />
            <Route
              path="/contact-hair-experts"
              element={<BookAppointmentPage setTitle={setTitle} />}
            />
            <Route
              path="/about-us-quality-hair-loss-scalp-care"
              element={<AboutUsPage setTitle={setTitle} />}
            />
            <Route
              path="/product-detail/:id"
              element={
                <ProductDetail
                  setTitle={setTitle}
                  setDesc={setDesc}
                  cart={cart}
                  setCart={setCart}
                />
              }
            />
            <Route
              path="/hair-loss-treatment-experts-dermatologists"
              element={<OurSpecialistsPage setTitle={setTitle} />}
            />
            <Route
              path="/our-expertise"
              element={<OurExpertisePage setTitle={setTitle} />}
            />
            <Route
              path="/user-profile"
              element={<MyReportsPages setTitle={setTitle} />}
            />
            <Route
              path="/user-profile/:id"
              element={<UserProfilePage setTitle={setTitle} />}
            />
            <Route
              path="/unauthorized"
              element={<Unauthorized setTitle={setTitle} />}
            />
            <Route
              path="/take-hair-test"
              element={<HairTestPage setTitle={setTitle} />}
            />
            <Route
              path="/doctor/report/:id"
              element={<Report setTitle={setTitle} />}
            />
            <Route
              path="/doctor-analyse-report/:id"
              element={<DoctorAnalyseReport setTitle={setTitle} />}
            />
            <Route path="/address" element={<Address setTitle={setTitle} />} />
            <Route
              path="management-report/:id"
              element={<ManagementReport setTitle={setTitle} />}
            />
            <Route
              path="my-orders"
              element={<MyOrders setTitle={setTitle} />}
            />
            <Route
              path="create-order"
              element={<CreateOrder setTitle={setTitle} />}
            />
            <Route
              path="cart"
              element={
                <Cart setTitle={setTitle} cart={cart} setCart={setCart} />
              }
            />
            <Route
              path="coupon"
              element={
                <Coupons setTitle={setTitle} cart={cart} setCart={setCart} />
              }
            />

            <Route
              path="hair-loss-women-causes-treatments-remedies"
              element={
                <HairTreatmentWomen
                  setTitle={setTitle}
                  cart={cart}
                  setCart={setCart}
                />
              }
            />
            <Route
              path="effective-hair-loss-treatment-men"
              element={
                <HairTreatmentMen
                  setTitle={setTitle}
                  cart={cart}
                  setCart={setCart}
                />
              }
            />
            <Route
              path="hair-transplants-fue-dhi-mhi-natural-restoration"
              element={
                <HairTransplant
                  setTitle={setTitle}
                  cart={cart}
                  setCart={setCart}
                />
              }
            />
            <Route
              path="advanced-hair-loss-solutions-prp-smp-cloning-systems"
              element={
                <OtherProcedure
                  setTitle={setTitle}
                  cart={cart}
                  setCart={setCart}
                />
              }
            />

            <Route
              path="online-hair-loss-test-diagnosis-treatment"
              element={
                <OnlineHairTest
                  setTitle={setTitle}
                  cart={cart}
                  setCart={setCart}
                />
              }
            />
            <Route
              path="dr-amit-agarkar-hair-restoration-expert"
              element={
                <Dermatologist
                  setTitle={setTitle}
                  cart={cart}
                  setCart={setCart}
                />
              }
            />
            <Route
              path="/hair-care-blogs"
              element={
                <AllBlogs
                  setTitle={setTitle}
                  cart={cart}
                  setCart={setCart}
                  desc={desc}
                  setDesc={setDesc}
                />
              }
            />
            <Route
              exact
              path="/hair-care-blogs/:id1/:id"
              element={
                <Blog
                  setTitle={setTitle}
                  cart={cart}
                  setCart={setCart}
                  desc={desc}
                  setDesc={setDesc}
                />
              }
            />
            <Route
              exact
              path="/hair-care-blogs/:id1"
              element={
                <AllBlogs
                  setTitle={setTitle}
                  cart={cart}
                  setCart={setCart}
                  desc={desc}
                  setDesc={setDesc}
                />
              }
            />

            <Route path="/invoiceView/:id" element={<InvoiceView />} />

            <Route element={<RoleBasedRoutes allowedRoles={["doctor"]} />}>
              <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
              <Route path="/patient-list" element={<PatientList />} />
              <Route path="/appointment" element={<AppointmentList />} />
              <Route
                path="/patient-test-result/:id"
                element={<PatientTestResult />}
              />
              <Route path="/analysis/:id" element={<Analysis />} />
            </Route>

            <Route element={<RoleBasedRoutes allowedRoles={["admin"]} />}>
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
              <Route
                path="/pending-appointments"
                element={<PendingDashboard />}
              />
              <Route path="/all-patient-list" element={<AllPatientList />} />
              <Route path="/test-result/:id" element={<TestResults />} />
              <Route
                path="/pending-test-result/:id"
                element={<PendingTestResults />}
              />

              <Route
                path="/assign-appointment"
                element={<AssignAppointment />}
              />
              <Route path="/add-doctor" element={<AddDoctor />} />
              <Route path="/edit-doctor/:id" element={<EditDoctor />} />
              <Route path="/all-doctor" element={<AllDoctorList />} />
              <Route path="/all-hair-test-result" element={<AllHairTest />} />
              <Route path="/manage-website" element={<ManageWebsite />} />
              <Route
                path="/all-contact-us-form-result"
                element={<AllContactUs />}
              />
              <Route path="/reviews" element={<AllReviews />} />

              <Route path="/add-product" element={<AddProduct />} />
              <Route
                path="/edit-delete-product"
                element={<EditDeleteProduct />}
              />
              <Route path="/manage-order" element={<ManageOrder />} />
              <Route path="/all-coupons" element={<AllCoupons />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
