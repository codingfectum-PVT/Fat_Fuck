import React from 'react'
import LockerMenu from '../../Components/LockerMenu'
import { Image, PageWrapper } from '../../Styles/style'
import HeroSection from '../../Sections/S1_Hero'
import heroBottom from "../../../assets/heroBootm.png"
import AboutSection from '../../Sections/S2_About'
import Tokenomics from '../../Sections/S3_Tokenomics'
import DisclaimerSection from '../../Sections/S4_Disclaimer'

const MainPage = (props) => {
  return (
    <PageWrapper>
      <HeroSection/>
      
      <Image src={heroBottom} alt=''/>
      <AboutSection/>
      <Tokenomics/>
      <DisclaimerSection/>
    </PageWrapper>
  )
}

export default MainPage