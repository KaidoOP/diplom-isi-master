import React from 'react'
import FirstSection from '../Companents/FirstSection/FirstSection';
import Newest from '../Companents/Newest/Newest';


import FourMan from '../Companents/FourMan/FourMan';
import Parallaxdi from '../Companents/Parallaxdi/Parallaxdi';

import CoursesContainer from '../Companents/Courses/CoursesContainer';
import StudyingContainer from '../Companents/Studying/StudyingContainer';
import Footer from '../Companents/Footer/Footer';
import Signup from '../Companents/Signup/Signup';
import TopNavbar from '../Companents/TopNavbar/TopNavbar'
import WhiteNavbar from '../Companents/WhiteNavbar/WhiteNavbar'
import AxmedHeader from '../Companents/AxmedHeader/AxmedHeader'

const Homes = () => {
  return (
    <>
      <TopNavbar />
      <WhiteNavbar />
      <AxmedHeader />
      <main>
        <FirstSection />
        <Newest />
        <FourMan />
        <Parallaxdi />
        <CoursesContainer />
        <Signup />
      </main>
      <StudyingContainer />
      <Footer />

    </>
  )
}

export default Homes