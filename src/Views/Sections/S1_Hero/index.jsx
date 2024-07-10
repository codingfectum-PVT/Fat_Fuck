import emotionStyled from '@emotion/styled'
import React from 'react'
import heroBg from "../../../assets/heroBg.jpg"
import heroImage from "../../../assets/heroImage.png"
import heroTop from "../../../assets/heroTop.png"
import heroBottom from "../../../assets/heroBootm.png"
import { Box, Container, Grid, Typography } from '@mui/material'
import { Image } from '../../Styles/style'
import CustomButton from '../../Components/CustomButton'


const SectionWraper = emotionStyled(Box)`
    background-image:url(${heroBg});
    background-size:cover;
    background-position: center;
    background-repeat:no-repeat;
    min-height:100dvh;
    width:100%;
    display:flex;
    justify-content:center;
    position:relative;
    // border-bottom:50px solid transparent;
    // border-image: linear-gradient(to top,#FF4F01, transparent) 30;
`
const HeroSection = () => {


  return (
    <SectionWraper>
        <Container maxWidth="xl" >
            <Image src={heroTop} style={{position:"absolute",top:0,left:0}} alt=''/>
            <Grid container sx={{display:"flex",minHeight:"100vh" ,justifyContent:"center",alignItems:{xs:"center",md:"start"}}}>
                <Grid item xs={12} sm={8}>
                    <Image src={heroImage} mw="1100px" alt=''/>
                </Grid>
                <Grid item xs={12} sx={{display:"flex" ,flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"20px"}}>
                    <Typography className='sectionTitle '>
                        <Typography color="#000" fontSize="20px" p="0 10px" component={"span"}>
                            is on a mission to take over the meme &nbsp;&nbsp;<br /> &nbsp;&nbsp; universe. The time has come for Fat Fuck &nbsp;&nbsp; <br />&nbsp;&nbsp;to show his greatness.
                        </Typography>
                    </Typography>
                    <CustomButton>
                        Copy Contract Address
                    </CustomButton>
                </Grid>
            </Grid>
        </Container>
    </SectionWraper>
  )
}

export default HeroSection