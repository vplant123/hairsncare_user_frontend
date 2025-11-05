import React, { useEffect } from 'react'
import Navbar from '../features/nav/Navbar'
import OurSpecialist from '../features/our-specialist/OurSpecialist'
import Footer from '../features/footer/Footer'
import { useSelector } from 'react-redux'
import Breadcrumb from '../components/Breadcrumb'
import SEOLinkHub from '../components/SEOLinkHub'
import SEO from '../components/SEO'

function OurSpecialistsPage(props) {

  useEffect(() => {
    if(props?.setTitle) props?.setTitle(window.location.pathname)
  },[])

  const content = useSelector((state) => state.content.specialist);


  return (
    <>
      <SEO
        useRouteData={true}
        canonicalUrl="https://www.hairsncares.com/our-hair-specialists"
      />
      <Navbar>
        {content ? <>
          <div className="container" style={{ marginTop: "20px" }}>
            <Breadcrumb />
          </div>
          <OurSpecialist/>
          <SEOLinkHub 
            currentPage="/hair-loss-treatment-experts-dermatologists" 
            pageType="specialists"
          />
          <Footer/></> : <></>}
      </Navbar>
    </>
  )
}

export default OurSpecialistsPage
