import emotionStyled from '@emotion/styled'
import React from 'react'
import heroBg from "../../../assets/heroBg.jpg"
import aboutImage from "../../../assets/aboutImage.png"
import { Box, Container, Grid } from '@mui/material'
import { Image } from '../../Styles/style'
import CustomButton from '../../Components/CustomButton'
import Paragraph from '../../Components/Paragraph'
import { tg, x } from '../../../links'


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
                   <Grid item xs={12} md={5}>
                        <Image src={aboutImage} alt=""/>
                   </Grid>
                   <Grid item xs={12} md={7}>
                    <Paragraph textAlign="left"fontFamily="Quicksand"mt={{xs:"0",md:"120px"}} fontWeight="800">
                    Welcome to FAT FUCK, the crypto project that’s here to fuck shit up and leave a trail of chaos in its wake. Inspired by the unfiltered genius of Matt Furie, FAT FUCK isn’t just another coin—it’s a colossal middle finger to the mundane. If you're looking for a polite, clean-cut investment, get the fuck out. Think you've got the balls to ride this wild beast? We doubt it. FAT FUCK is for the brave, the brazen, and the batshit crazy.                    </Paragraph>
                    <Box display="flex" flexWrap="wrap" gap="10px" marginTop="20px" >
                        <CustomButton href={tg} target="blank">
                            Telegram
                        </CustomButton>
                        <CustomButton href={x} target="blank">
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