import React from 'react';
import EducationCard from "../components/EducationCard";
import { educationInfo } from "../portfolio";
import {
    Container,
    Row,
    Col
} from "reactstrap";
const Education = () => {
    return ( 
        <section
        style={{backgroundColor: "black" }} 
        className="section-profile-cover">
        <Container>
        <div className="d-flex p-2 pb-6">
        <div>
        <div className="icon-lg rounded-circle text-info">
        <span class="iconify" data-icon="emojione:bookmark-tabs"></span>
        </div>
        </div>
        <div className="pl-4">
        <h4 className="display-3 text-white text-shadows">Education</h4>
        </div>
        </div>
        <Row className="row-grid align-items-center justify-content-center">
         {
          educationInfo.map(info => {
          return  <Col className="order-lg-1" lg="6"  key={info.schoolName}><EducationCard education={info} /></Col>
         })
         }
         </Row>
         </Container>
          <div className="">
         <svg     
          xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="none"
             version="1.1"
             viewBox="0 0 2560 100"
             x="0"
             y="0"
           >
         <polygon
            style={{fill: "black"}}
            points="2560 0 2560 100 0 100"
           />
            </svg>
            </div>
          </section>
     );
}
export default Education;