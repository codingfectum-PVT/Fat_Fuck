import emotionStyled from '@emotion/styled'
import React from 'react'
import disclaimerImage from "../../../assets/disclaimerImage.png"
import X from "../../../assets/X.png"
import TG from "../../../assets/TG.png"
import { Box, Container, Grid, Link } from '@mui/material'
import { Image } from '../../Styles/style'
import Paragraph from '../../Components/Paragraph'
import BasicAccordion from '../../Components/Accordian'
import { tg, x } from '../../../links'


const SectionWraper = emotionStyled(Box)`
    background:linear-gradient(to top,#A13100 80%,transparent 0%);
    // background-size:cover;
    // background-position: center;
    // background-repeat:no-repeat;
    min-height:100vh;
    padding:0 0 50px;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    // border-bottom:50px solid transparent;
    // border-image: linear-gradient(to top,#FF4F01, transparent) 30;
`
const DisclaimerSection = () => {


  return (
    <>
    <SectionWraper>
        <Container maxWidth="lg" >
            <Grid container sx={{display:"flex",gap:"20px 0" ,justifyContent:"center",alignItems:{xs:"center",md:"start"}}}>
                <Grid item xs={12}>
                   <Image src={disclaimerImage} alt=""/>
                </Grid>
                <Grid item xs={12}>
                   <Paragraph className="textStroke" fontFamily="MINION" fontSize={{xs:"50px",sm:"90px"}}>
                        Disclaimer
                   </Paragraph>
                </Grid>
                <Grid item xs={12} md={8}>
                    <BasicAccordion def1="Legal Disclaimer" def2="FAT FUCK is a meme cryptocurrency and should not be considered financial advice or an investment recommendation. The project is not regulated and carries significant risks. Always conduct thorough research and consult with a financial advisor before investing." ></BasicAccordion>
                    <BasicAccordion def1="Risk Disclosure" def2="Investing in cryptocurrencies, including FAT FUCK, involves substantial risk and the possibility of a complete loss of capital. Market volatility, regulatory changes, and technological vulnerabilities can significantly impact the value of your investment. Only invest what you can afford to lose."></BasicAccordion>    
                </Grid>
                <Grid item xs={12} display="flex" alignItems="center" justifyContent="center" gap="10px">
                    <Link href={x} target="blank">
                        <Image mw="60px" src={X} alt=""/>
                    </Link>
                    <Link href={tg} target="blank">
                        <Image mw="60px" src={TG} alt=""/>
                    </Link>
                </Grid>
            </Grid>
        </Container>
    </SectionWraper>
    <Box width="100%" padding="20px 10px" display="flex" alignItems="center" justifyContent="center">
        <Paragraph textAlign="center" fontFamily="Quicksand" fontWeight="800">
            COPYRIGHT © 2024. ALL RIGHTS RESERVED.
        </Paragraph>
    </Box>
    </>
  )
}

export default DisclaimerSection