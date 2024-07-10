import * as React from 'react';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Accordion } from '@mui/material';  
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import emotionStyled from '@emotion/styled';
import Paragraph from '../Paragraph';

const StyledAccordian = emotionStyled(Accordion)`
    background: #FBF700;
    margin-top: 30px;
    border-radius: 0px !important;
    box-shadow: -5px 5px 0 #000; 
    // border-bottom: 5px solid black;
    & .MuiButtonBase-root{
        border-radius: 0px !important;
        background: #FBF700;
            &>.MuiAccordionSummary-content{ 
              display: flex; 
              justify-content: space-between; 
              margin: 0px 20px;
                &>.MuiTypography-root{
                    color:#000000;   
                }
            }
            &>.MuiAccordionSummary-expandIconWrapper{
                &>.MuiSvgIcon-root{
                    color: #000;
                }
            }
        }
        &>.MuiCollapse-root{
            &>.MuiCollapse-wrapper{
                &>.MuiCollapse-wrapperInner{
                    &>.MuiAccordion-region{
                        &>.MuiAccordionDetails-root{
                        border-top: 1px solid #000;
                            &>.MuiTypography-root{

                                color:#000;
                            }
                        }
                    }
                }
            }
        }
    
`
export default function BasicAccordion(props) {
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = () => () => { 
      setExpanded(!expanded);
    };
  return (
    <div>
      <StyledAccordian onChange={handleChange()} sx={{marginTop: expanded?"30px !important":"0px"}}>
        <AccordionSummary
        sx={{alignItems:"center !important"}}
          aria-controls="panel1a-content"
          id="panel1a-header" >
            <Paragraph my="0px" fontFamily="RifficFree" fontWeight="semibold" fontSize={{xs:"22px",sm:"30px"}} >{props.def1}</Paragraph>   
            { 
              expanded ?   <ExpandLessIcon  sx={{fontSize:"38px",color:"#000"}} /> :   
              <ExpandMoreIcon sx={{fontSize:"38px",color:"#000"}} />
            }
       
           
        </AccordionSummary> 
        <AccordionDetails>
          <Paragraph textAlign="left" m="0px 15px" sx={{marginRight:{xs:"0px", md:"95px"},fontFamily:'RifficFree', fontWeight:'400'}}>
            {props.def2} 
          </Paragraph>
        </AccordionDetails>
      </StyledAccordian>
    </div>
  );
}