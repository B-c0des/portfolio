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
        style={{backgroundImage: `url("https://flevix.com/wp-content/uploads/2019/12/Blue-Wave-Background-1.svg")` }} 
        className="section-profile-cover">
            <Container style={{filter: "drop-shadow(0px 2px 3px black)"}}>
                <div className="d-flex p-2 pb-6">
                    <div>
                        <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                        <i className="ni ni-books text-info" />
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
                  style={{fill: "#212122"}}
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
     );
}
 
export default Education;