// Example of how to use SEO component in your pages

import React from 'react';
import SEO from '../components/SEO';
import Navbar from '../features/nav/Navbar';
import Footer from '../features/footer/Footer';

// Method 1: Automatic route-based SEO (Recommended)
const YourPage = () => {
  return (
    <>
      {/* This will automatically use the SEO data from routes.js based on current URL */}
      <SEO useRouteData={true} />
      
      <Navbar>
        {/* Your page content */}
        <div>Your page content here</div>
        <Footer />
      </Navbar>
    </>
  );
};

// Method 2: Override specific SEO fields while keeping route data as fallback
const YourPageWithOverride = () => {
  return (
    <>
      {/* Use route data but override description for this specific case */}
      <SEO 
        useRouteData={true}
        description="Custom description that overrides route data"
      />
      
      <Navbar>
        <div>Your page content here</div>
        <Footer />
      </Navbar>
    </>
  );
};

// Method 3: Custom SEO (for dynamic pages or special cases)
const DynamicPage = ({ productData }) => {
  return (
    <>
      {/* Don't use route data, provide custom SEO */}
      <SEO 
        useRouteData={false}
        title={`${productData.name} - HairsNcares`}
        description={`Buy ${productData.name} for hair care. ${productData.description}`}
        keywords={`${productData.name}, hair care, ${productData.category}`}
      />
      
      <Navbar>
        <div>Product details for {productData.name}</div>
        <Footer />
      </Navbar>
    </>
  );
};

export default YourPage;

/* 
USAGE EXAMPLES:

1. For all static pages listed in routes.js:
   Just use <SEO useRouteData={true} />

2. For pages that need custom SEO:
   Use <SEO useRouteData={false} title="..." description="..." keywords="..." />

3. For pages that mostly use route data but need small changes:
   Use <SEO useRouteData={true} description="custom override" />

The SEO component will automatically:
- Set the page title in browser tab
- Set meta description for search engines
- Set meta keywords
- Set Open Graph tags for social media
- Set Twitter Card tags
- Set canonical URL
- Handle structured data if provided
*/