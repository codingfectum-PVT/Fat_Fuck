import styled from "@emotion/styled";

const PageWrapper = styled.div`
    background-color: #FF4F01;
    min-height: 100vh;
    position: relative;
    overflow: hidden;
`

const Image = styled.img`
width: 100%;
max-width: ${props=>props.mw? props.mw : "100%"};
height: auto;
display: ${props=>props.disp && props.disp };
@media(max-width: 599px){
    
display: ${props=>props.disp599 && props.disp599 };
}
`

export { PageWrapper, Image}