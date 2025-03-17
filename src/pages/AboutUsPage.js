import React, { useEffect } from 'react'
import Navbar from '../features/nav/Navbar'
import About from '../features/about-us/About'
import Footer from '../features/footer/Footer'
import { useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'
export default function AboutUsPage
  (props) {
  useEffect(() => {
    if (props?.setTitle) props?.setTitle(window.location.pathname)
  }, [])

  const content = useSelector((state) => state.content.aboutUs);

  return (
    <div>
      <Navbar>
      <Helmet>
        <link rel="canonical" href="https://www.hairsncares.com/about-us-quality-hair-loss-scalp-care" />
      </Helmet>
        {content ? <>
          <About />
          <Footer />
        </> : <></>}
      </Navbar>
    </div>
  )
}
