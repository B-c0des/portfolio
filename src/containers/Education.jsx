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
        style={{backgroundImage: `url("https://flevix.com/wp-content/uploads/2021/05/Svg-Background-1.svg")` }} 
        className="section pb-0 my-5 section-profile-cover">
            <Container>
                <div className="d-flex px-3">
                    <div>
                        <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                        <i className="ni ni-books text-info" />
                        </div>
                    </div>
                    <div className="pl-4">
                        <h4 className="display-3 text-white">Education</h4>
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
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
     );
}
 
export default Education;