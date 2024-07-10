import emotionStyled from '@emotion/styled'
import React, { useState } from 'react'
import heroBg from "../../../assets/heroBg.jpg"
import heroImage from "../../../assets/heroImage.png"
import heroImageMobile from "../../../assets/heroImageMobile.png"
import heroTop from "../../../assets/heroTop.png"
import { Box, Container, Grid, Typography } from '@mui/material'
import { Image } from '../../Styles/style'
import CustomButton from '../../Components/CustomButton'
import { contractAddress } from '../../../links'


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
    overflow:hidden;
    // border-bottom:50px solid transparent;
    // border-image: linear-gradient(to top,#FF4F01, transparent) 30;
`
const HeroSection = () => {
    const [isCopied,setIsCopied] = useState(false)
const handleCopy =async () =>{
    setIsCopied(true)
    await navigator.clipboard.writeText(contractAddress)
    setTimeout(() => {
        setIsCopied(false)
    }, 3000);
}

  return (
    <SectionWraper>
        <Container maxWidth="xl" >
            <Image src={heroTop} style={{position:"absolute",top:0,left:0}} alt=''/>
        {/* <Image src={heroBottom} style={{position:"absolute",bottom:0,right:0}} alt=''/> */}
            <Grid container sx={{display:"flex",minHeight:"100vh" ,justifyContent:"center",alignItems:{xs:"center",md:"start"}}}>
                <Grid item xs={12} sm={10} xl={12} display={{xs:"none",sm:"block"}}>
                    <Image src={heroImage} mw="1500px" alt=''/>
                </Grid>
                <Grid item xs={12} sm={8} display={{xs:"block",sm:"none"}}>
                    <Image src={heroImageMobile} mw="100%" alt=''/>
                </Grid>
                <Grid item xs={12} sx={{display:"flex" ,flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"20px"}}>
                    <Typography className='sectionTitle '>
                        <Typography whiteSpace="nowrap" color="#000" fontSize={{xs:"13px",sm:"22px"}} p="0 6px" component={"span"}>
                            This Fat Fukcer is on a mission to take over &nbsp;<br /> &nbsp; the meme universe. The time has come for Fat Fuck  &nbsp; <br />&nbsp;to show his greatness.
                        </Typography>
                    </Typography>
                    <CustomButton sx={{minWidth:"320px"}} onClick={handleCopy}>
                        {
                            isCopied ? "Copied" : "Copy Contract Address"
                        }
                        
                    </CustomButton>
                </Grid>
            </Grid>
        </Container>
    </SectionWraper>
  )
}

export default HeroSection