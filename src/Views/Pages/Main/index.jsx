import React from 'react'
import { PageWrapper } from '../../Styles/style'
import HeroSection from '../../Sections/S1_Hero'
import AboutSection from '../../Sections/S2_About'
import Tokenomics from '../../Sections/S3_Tokenomics'
import DisclaimerSection from '../../Sections/S4_Disclaimer'
import Marquee from 'react-fast-marquee'
import Paragraph from '../../Components/Paragraph'
import { Box } from '@mui/material'

const MainPage = (props) => {
  return (
    <PageWrapper>
      <HeroSection/>
      <Box m={{xs:"100px 0 0",sm:"50px 0 0"}}>

      <Marquee style={{background:"#A13100",width:"calc(100% + 40px)",left:"-20px",rotate:"6deg"}}>
        <Paragraph m={{xs:"10px 20px",sm:"20px 30px"}} fontSize={{xs:"20px",sm:"40px",md:"50px",lg:"60px"}} fontFamily="MINION">
            Fat Fuck
        </Paragraph>
        <Paragraph m={{xs:"10px 20px",sm:"20px 30px"}} fontSize={{xs:"20px",sm:"40px",md:"50px",lg:"60px"}} fontFamily="MINION">
            Fat Fuck
        </Paragraph>
        <Paragraph m={{xs:"10px 20px",sm:"20px 30px"}} fontSize={{xs:"20px",sm:"40px",md:"50px",lg:"60px"}} fontFamily="MINION">
            Fat Fuck
        </Paragraph>
        <Paragraph m={{xs:"10px 20px",sm:"20px 30px"}} fontSize={{xs:"20px",sm:"40px",md:"50px",lg:"60px"}} fontFamily="MINION">
            Fat Fuck
        </Paragraph>
        <Paragraph m={{xs:"10px 20px",sm:"20px 30px"}} fontSize={{xs:"20px",sm:"40px",md:"50px",lg:"60px"}} fontFamily="MINION">
            Fat Fuck
        </Paragraph>
        <Paragraph m={{xs:"10px 20px",sm:"20px 30px"}} fontSize={{xs:"20px",sm:"40px",md:"50px",lg:"60px"}} fontFamily="MINION">
            Fat Fuck
        </Paragraph>
        <Paragraph m={{xs:"10px 20px",sm:"20px 30px"}} fontSize={{xs:"20px",sm:"40px",md:"50px",lg:"60px"}} fontFamily="MINION">
            Fat Fuck
        </Paragraph>
      </Marquee>
      <Marquee style={{background:"#A13100",width:"calc(100% + 40px)",left:"-20px",rotate:"-6deg",top:"-120px"}}>
        <Paragraph m={{xs:"10px 20px",sm:"20px 30px"}} fontSize={{xs:"20px",sm:"40px",md:"50px",lg:"60px"}} fontFamily="MINION">
            Fat Fuck
        </Paragraph>
        <Paragraph m={{xs:"10px 20px",sm:"20px 30px"}} fontSize={{xs:"20px",sm:"40px",md:"50px",lg:"60px"}} fontFamily="MINION">
            Fat Fuck
        </Paragraph>
        <Paragraph m={{xs:"10px 20px",sm:"20px 30px"}} fontSize={{xs:"20px",sm:"40px",md:"50px",lg:"60px"}} fontFamily="MINION">
            Fat Fuck
        </Paragraph>
        <Paragraph m={{xs:"10px 20px",sm:"20px 30px"}} fontSize={{xs:"20px",sm:"40px",md:"50px",lg:"60px"}} fontFamily="MINION">
            Fat Fuck
        </Paragraph>
        <Paragraph m={{xs:"10px 20px",sm:"20px 30px"}} fontSize={{xs:"20px",sm:"40px",md:"50px",lg:"60px"}} fontFamily="MINION">
            Fat Fuck
        </Paragraph>
        <Paragraph m={{xs:"10px 20px",sm:"20px 30px"}} fontSize={{xs:"20px",sm:"40px",md:"50px",lg:"60px"}} fontFamily="MINION">
            Fat Fuck
        </Paragraph>
        <Paragraph m={{xs:"10px 20px",sm:"20px 30px"}} fontSize={{xs:"20px",sm:"40px",md:"50px",lg:"60px"}} fontFamily="MINION">
            Fat Fuck
        </Paragraph>
      </Marquee>
      </Box>
      <AboutSection/>
      <Tokenomics/>
      <DisclaimerSection/>
    </PageWrapper>
  )
}

export default MainPage