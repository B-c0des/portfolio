import React from 'react';
import { experience } from "../portfolio";
import {
    Container,
    Row,
} from "reactstrap";

import { Fade } from 'react-reveal';

import ExperienceCard from "../components/ExperienceCard";

const Experience = () => {
    return ( 
        <section className="section pb-0 bg-gradient-info my-5">
            <Container>
              <Fade left duration={1000} distance="40px">
              <div className=" d-flex p-4">
                    <div>
                        <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                        <i className="ni ni-briefcase-24 text-info" />
                        </div>
                    </div>
                    <div className="pl-4">
                        <h4 className="display-3 text-info">Experience</h4>
                    </div>
                </div>
                <Row className="row-grid align-items-center justify-content-center">
                    {
                        experience.map(data => {
                            return <ExperienceCard data={data} />
                        })
                    }
                </Row>
              </Fade>
            </Container>
            <div className="separator separator-bottom separator-skew zindex-100">
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
 
export default Experience;