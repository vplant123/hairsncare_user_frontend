import React, { useEffect } from 'react'
import Navbar from '../features/nav/Navbar'
import OurExpertise from '../features/our-expertise/OurExpertise'
import { useSelector } from 'react-redux'
import SEOLinkHub from '../components/SEOLinkHub'
import SEO from '../components/SEO'

export default function OurExpertisePage(props) {
  
  useEffect(() => {
    if(props?.setTitle) props?.setTitle(window.location.pathname)
  },[])

  const content = useSelector((state) => state.content.expertise);

  return (
    <>
      <SEO useRouteData={true} />
      <Navbar>
        {content ? (
          <>
            <OurExpertise/>
            <SEOLinkHub 
              currentPage="/our-expertise" 
              pageType="expertise"
            />
          </>
        ) : <></>}
      </Navbar>
    </>
  )
}
