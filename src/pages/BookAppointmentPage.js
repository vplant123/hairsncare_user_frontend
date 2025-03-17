import React, { useEffect } from 'react'
import Navbar from '../features/nav/Navbar'
import BookAppointment from '../features/book-appointment/BookAppointment'
import ShoppingFeature from '../features/shopping-feature/ShoppingFeature'
import Footer from '../features/footer/Footer'
import { Helmet } from 'react-helmet'

function BookAppointmentPage(props) {
  useEffect(() => {
    if(props?.setTitle) props?.setTitle(window.location.pathname)
  },[])
  return (
    <Navbar>
                <Helmet>
        <link rel="canonical" href="https://www.hairsncares.com/contact-hair-experts" />
      </Helmet>
        <BookAppointment/>
        <ShoppingFeature/>
        <Footer/>
    </Navbar>
  )
}

export default BookAppointmentPage