import emotionStyled from '@emotion/styled'
import React, { useState } from 'react'
import heroBg from "../../../assets/heroBg.jpg"
import dexS from "../../../assets/dexScreener.png"
import dexT from "../../../assets/dexTools.png"
import uniswap from "../../../assets/uniswap.png"
import { Box, Container, Grid, Link } from '@mui/material'
import { Image } from '../../Styles/style'
import Paragraph from '../../Components/Paragraph'
import { contractAddress, dexScreener, dexTools, supply, tax, uniSwap } from '../../../links'
import FileCopyIcon from '@mui/icons-material/FileCopy';

const SectionWraper = emotionStyled(Box)`
    // background-image:url(${heroBg});
    // background-size:cover;
    // background-position: center;
    // background-repeat:no-repeat;
    min-height:auto;
    padding:120px 0 0;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    // border-bottom:50px solid transparent;
    // border-image: linear-gradient(to top,#FF4F01, transparent) 30;
`

const WhiteBox = ({text1,text2}) =>{
    return(
        <Box width="100%" bgcolor="#fff" padding="40px 20px" display="flex" flexDirection="column" alignItems="start" justifyContent="center">
            <Paragraph fontFamily="RifficFree" color="#000" fontSize={{xs:"30px",sm:"30px"}}>
                {text1}
            </Paragraph>
            <Paragraph fontFamily="RifficFree" color="#000" fontSize={{xs:"40px",sm:"50px"}}>
                {text2}
            </Paragraph>
        </Box>
    )
}
const AboutSection = () => {
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
        <Container maxWidth="md" >
            <Grid container sx={{display:"flex" ,justifyContent:"center",alignItems:{xs:"center",md:"start"},gap:"30px 0"}}>
                <Grid item xs={12}>
                   <Paragraph className="textStroke" fontFamily="MINION" fontSize={{xs:"45px",sm:"90px"}}>
                    Tokenomics
                   </Paragraph>
                </Grid>
                <Grid item xs={12}>
                    <Paragraph textAlign="center" fontFamily="Quicksand" fontWeight="800">
                    The Tokenomics are as based as it gets. If you can't complain why not bother Aping in?                    </Paragraph>
                </Grid>
                <Grid container item xs={12} spacing={4}>
                   <Grid item xs={12}>
                   <Box width="100%" bgcolor="#fff" padding="20px" display="flex" alignItems={{xs:"start",md:"start"}} flexDirection={{xs:"column",md:"column"}} justifyContent="space-between">
                        <Paragraph fontFamily="RifficFree" color="#000" fontSize={{xs:"30px",sm:"40px"}}>
                            Contract:
                        </Paragraph>
                        <Paragraph  fontFamily="Quicksand" color="#000" fontWeight="900" fontSize={{xs:"30px",sm:"30px"}} sx={{display:"flex" ,justifyContent:"center",alignItems:"center",gap:"10px",wordBreak:"break-all"}} textAlign="right">
                        {
                            isCopied ? "Copied" : contractAddress
                        }<FileCopyIcon onClick={handleCopy} sx={{color:"#000",fontSize:"32px",cursor:"pointer"}}/>
                        </Paragraph>
                    </Box>
                   </Grid>
                   <Grid item xs={12} md={3}>
                        <WhiteBox text1="Taxes" text2={tax}/>
                   </Grid>
                   <Grid item xs={12} md={5}>
                        <WhiteBox text1="Contract" text2="Renounced"/>
                   </Grid>
                   <Grid item xs={12} md={4}>
                        <WhiteBox text1="Liquidity" text2="Burned"/>
                   </Grid>
                   <Grid item xs={12}>
                        <WhiteBox text1="Total Supply" text2={supply}/>
                   </Grid>
                </Grid>
                <Grid item xs={12} display="flex" alignItems="center" justifyContent="center" gap="10px">
                    <Link href={dexScreener} target="blank">
                        <Image mw="60px" src={dexS} alt=""/>
                    </Link>
                    <Link href={dexTools} target="blank">
                        <Image mw="60px" src={dexT} alt=""/>
                    </Link>
                    <Link href={uniSwap} target="blank">
                        <Image mw="60px" src={uniswap} alt=""/>
                    </Link>
                </Grid>
            </Grid>
        </Container>
    </SectionWraper>
  )
}

export default AboutSection