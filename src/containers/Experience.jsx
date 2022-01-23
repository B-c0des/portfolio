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
      <div style={{backgroundColor: "black"}}>
        <section
        style={{backgroundColor: "black"}} 
        className="section pb-0 section-profile-cover"  >
            <Container>
              <Fade left duration={1000} distance="40px">
              <div className="d-flex p-2 pb-6">
              <div>
              <div className="icon-lg rounded-circle text-info">
              <span class="iconify" data-icon="emojione:card-index-dividers"></span>
               </div>
               </div>
               <div className="pl-4">
              <h4 className="display-3 text-white">Experience</h4>
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
          </div>
     );
}
export default Experience;