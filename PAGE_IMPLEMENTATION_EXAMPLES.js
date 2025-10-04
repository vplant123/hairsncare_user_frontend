// Example implementations for your key pages

// 1. HOMEPAGE IMPLEMENTATION
// File: src/pages/HomePage.js
/*
import SEOLinkHub from "../components/SEOLinkHub";

// Add before Footer component:
<SEOLinkHub 
  currentPage="/"
  pageType="general"
  customInternalLinks={[
    {
      to: "/take-hair-test",
      text: "Start Free Hair Analysis",
      icon: "🔬",
      description: "Take our comprehensive hair test for personalized results"
    }
  ]}
  customExternalLinks={[
    {
      href: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3681114/",
      text: "Hair Loss Scientific Research",
      icon: "📊",
      description: "Latest scientific research on hair loss and treatments",
      rel: "nofollow noopener"
    }
  ]}
/>
*/

// 2. PRODUCT PAGE IMPLEMENTATION  
// File: src/pages/ProductPage.js
/*
import SEOLinkHub from "../components/SEOLinkHub";

// Add before Footer component:
<SEOLinkHub 
  currentPage="/best-hair-care-products-hair-loss-scalp-health"
  pageType="treatment"
  customInternalLinks={[
    {
      to: "/user-profile",
      text: "My Orders & Profile", 
      icon: "👤",
      description: "View your order history and manage profile"
    },
    {
      to: "/cart",
      text: "Shopping Cart",
      icon: "🛒", 
      description: "View items in your shopping cart"
    }
  ]}
/>
*/

// 3. MEN'S HAIR TREATMENT PAGE
// File: src/features/HairTreatmentMen.js
/*
import SEOLinkHub from "../components/SEOLinkHub";

// Add before Footer component:
<SEOLinkHub 
  currentPage="/effective-hair-loss-treatment-men"
  pageType="treatment"
  customInternalLinks={[
    {
      to: "/hair-loss-women-causes-treatments-remedies", 
      text: "Women's Hair Treatment",
      icon: "👩",
      description: "Hair loss solutions specifically designed for women"
    },
    {
      to: "/dr-amit-agarkar-hair-restoration-expert",
      text: "Meet Dr. Amit Agarkar",
      icon: "👨‍⚕️", 
      description: "Consult with our leading hair restoration expert"
    }
  ]}
  customExternalLinks={[
    {
      href: "https://www.aad.org/public/diseases/hair-loss/men",
      text: "Men's Hair Loss - AAD",
      icon: "👨",
      description: "American Academy of Dermatology guide for men's hair loss",
      rel: "nofollow noopener"
    },
    {
      href: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3681114/",
      text: "Male Pattern Baldness Research", 
      icon: "🔬",
      description: "Scientific research on male pattern baldness and treatments",
      rel: "nofollow noopener"
    }
  ]}
/>
*/

// 4. WOMEN'S HAIR TREATMENT PAGE
// File: src/features/HairTreatmentWomen.js  
/*
import SEOLinkHub from "../components/SEOLinkHub";

// Add before Footer component:
<SEOLinkHub 
  currentPage="/hair-loss-women-causes-treatments-remedies"
  pageType="treatment"
  customExternalLinks={[
    {
      href: "https://www.womenshealth.gov/a-z-topics/hair-loss",
      text: "Women's Hair Loss - Health.gov",
      icon: "👩",
      description: "Official women's health information on hair loss",
      rel: "nofollow noopener"
    },
    {
      href: "https://www.mayoclinic.org/diseases-conditions/hair-loss/symptoms-causes/syc-20372926",
      text: "Hair Loss in Women - Mayo Clinic",
      icon: "🏥", 
      description: "Comprehensive medical guide for women's hair loss",
      rel: "nofollow noopener"
    }
  ]}
/>
*/

// 5. BLOG PAGES IMPLEMENTATION
// File: src/features/Blogs/AllBlogs.js
/*
import SEOLinkHub from "../components/SEOLinkHub";

// Add before Footer component:
<SEOLinkHub 
  currentPage="/hair-care-blogs"
  pageType="info"
  customInternalLinks={[
    {
      to: "/take-hair-test",
      text: "Free Hair Assessment",
      icon: "📋",
      description: "Take our detailed hair health assessment"
    },
    {
      to: "/contact-hair-experts", 
      text: "Ask Our Experts",
      icon: "💬",
      description: "Get personalized advice from hair care experts"
    }
  ]}
  customExternalLinks={[
    {
      href: "https://pubmed.ncbi.nlm.nih.gov/?term=hair+loss+treatment",
      text: "Hair Research Database - PubMed",
      icon: "📚",
      description: "Access latest hair loss research and studies",
      rel: "nofollow noopener"
    }
  ]}
/>
*/

// 6. ABOUT US PAGE IMPLEMENTATION
// File: src/pages/AboutUsPage.js
/*
import SEOLinkHub from "../components/SEOLinkHub";

// Add before Footer component:
<SEOLinkHub 
  currentPage="/about-us-quality-hair-loss-scalp-care"
  pageType="info"
  customInternalLinks={[
    {
      to: "/our-expertise",
      text: "Our Hair Care Expertise", 
      icon: "🎯",
      description: "Learn about our specialized hair care expertise"
    },
    {
      to: "/hair-loss-treatment-experts-dermatologists",
      text: "Meet Our Dermatologists",
      icon: "👩‍⚕️",
      description: "Get to know our certified dermatologists"
    }
  ]}
/>
*/

// 7. CONTACT PAGE IMPLEMENTATION
// File: src/pages/BookAppointmentPage.js  
/*
import SEOLinkHub from "../components/SEOLinkHub";

// Add before Footer component:
<SEOLinkHub 
  currentPage="/contact-hair-experts"
  pageType="info"
  customInternalLinks={[
    {
      to: "/take-hair-test",
      text: "Take Hair Test First",
      icon: "🔬",
      description: "Complete our hair test before consultation"
    },
    {
      to: "/hair-care-blogs",
      text: "Hair Care Tips & Advice",
      icon: "💡", 
      description: "Read expert hair care tips and advice"
    }
  ]}
/>
*/

// 8. HAIR TRANSPLANT PAGE IMPLEMENTATION
// File: src/features/HairTransplant.js
/*
import SEOLinkHub from "../components/SEOLinkHub";

// Add before Footer component:
<SEOLinkHub 
  currentPage="/hair-transplants-fue-dhi-mhi-natural-restoration"
  pageType="treatment"
  customExternalLinks={[
    {
      href: "https://www.ishrs.org/", 
      text: "International Hair Restoration Society",
      icon: "🌍",
      description: "Global standards for hair restoration surgery",
      rel: "nofollow noopener"
    },
    {
      href: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4124702/",
      text: "Hair Transplant Research - NCBI",
      icon: "🔬",
      description: "Scientific research on hair transplant techniques",
      rel: "nofollow noopener"  
    }
  ]}
/>
*/

// 9. LEGAL PAGES (Disclaimer, Policy, Terms)
/*
// For Disclaimer, Policy, Terms pages - keep it simple
<SEOLinkHub 
  currentPage="/disclaimer"  // or /policy, /terms-of-service
  pageType="legal"
  showExternalLinks={false}
/>
*/

// 10. USER PROFILE PAGES
/*  
// For user dashboard pages
<SEOLinkHub 
  currentPage="/user-profile"  // or /my-orders, /cart, etc.
  pageType="general"
  customInternalLinks={[
    {
      to: "/best-hair-care-products-hair-loss-scalp-health",
      text: "Shop Hair Products",
      icon: "🛍️",
      description: "Browse our premium hair care products"
    }
  ]}
  showExternalLinks={false}  // Less relevant for user account pages
/>
*/