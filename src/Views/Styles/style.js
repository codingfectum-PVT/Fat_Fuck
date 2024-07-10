import styled from "@emotion/styled";

const PageWrapper = styled.div`
    background-color: #FF4F01;
    min-height: 100vh;
    position: relative;
`

const Image = styled.img`
width: 100%;
max-width: ${props=>props.mw? props.mw : "100%"};
height: auto;
`

export { PageWrapper, Image}