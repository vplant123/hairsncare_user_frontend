import React, { useEffect } from 'react'
import Navbar from '../features/nav/Navbar'
import OurSpecialist from '../features/our-specialist/OurSpecialist'
import Footer from '../features/footer/Footer'
import { useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'
import Breadcrumb from '../components/Breadcrumb'

function OurSpecialistsPage(props) {

  useEffect(() => {
    if(props?.setTitle) props?.setTitle(window.location.pathname)
  },[])

  const content = useSelector((state) => state.content.specialist);


  return (
    <div>
        <Navbar>
        <Helmet>
        <link rel="canonical" href="https://hairsncares.com/our-hair-specialists" />
      </Helmet>
          {content ? <>
            <div className="container" style={{ marginTop: "20px" }}>
              <Breadcrumb />
            </div>
            <OurSpecialist/>
            <Footer/></> : <></>}
        </Navbar>
    </div>
  )
}

export default OurSpecialistsPage