import emotionStyled from '@emotion/styled'
import React from 'react'
import heroBg from "../../../assets/heroBg.jpg"
import aboutImage from "../../../assets/aboutImage.png"
import heroTop from "../../../assets/heroTop.png"
import heroBottom from "../../../assets/heroBootm.png"
import { Box, Container, Grid, Typography } from '@mui/material'
import { Image } from '../../Styles/style'
import CustomButton from '../../Components/CustomButton'
import Paragraph from '../../Components/Paragraph'


const SectionWraper = emotionStyled(Box)`
    // background-image:url(${heroBg});
    // background-size:cover;
    // background-position: center;
    // background-repeat:no-repeat;
    min-height:auto;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    // border-bottom:50px solid transparent;
    // border-image: linear-gradient(to top,#FF4F01, transparent) 30;
`
const AboutSection = () => {


  return (
    <SectionWraper>
        <Container maxWidth="lg" >
            <Grid container sx={{display:"flex" ,justifyContent:"center",alignItems:{xs:"center",md:"start"}}}>
                <Grid item xs={12}>
                   <Paragraph className="textStroke" fontFamily="MINION" fontSize={{xs:"50px",sm:"90px"}}>
                        About Fat Fuck
                   </Paragraph>
                </Grid>
                <Grid container item xs={12} sx={{display:"flex" ,justifyContent:"center",alignItems:"end",padding:"0 40px 60px",background:"linear-gradient(to top,#A13100 80%,transparent 0%)"}}>
                   <Grid item xs={12} sm={5}>
                        <Image src={aboutImage} alt=""/>
                   </Grid>
                   <Grid item xs={12} sm={7}>
                    <Paragraph textAlign="left" fontFamily="Quicksand" fontWeight="800">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                    </Paragraph>
                    <Box display="flex" gap="10px" marginTop="20px" >
                    <CustomButton>
                        Telegram
                    </CustomButton>
                    <CustomButton>
                        X(Twitter)
                    </CustomButton>
                    </Box>
                   </Grid>
                </Grid>
            </Grid>
        </Container>
    </SectionWraper>
  )
}

export default AboutSection