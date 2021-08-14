import React from 'react';
import Tilt from 'react-parallax-tilt';
import { projects } from "../portfolio";
import {
    Container,
    Row,
} from "reactstrap";
import ProjectsCard from "../components/ProjectsCard";
import { Fade } from 'react-reveal';

const Projects = () => {
    return ( 
      
        <section
        style={{backgroundImage: `url("https://flevix.com/wp-content/uploads/2021/05/Svg-Background-1.svg")` }} 
        className="section pb-0 my-5">
            <Container>
              <Fade bottom duration={1000} distance="40px">
              <div className="d-flex p-1">
                    <div>
                        <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                        <i className="ni ni-laptop text-info" />
                        </div>
                    </div>
                    <div className="pl-4">
                        <h4 className="display-3 text-info">Projects</h4>
                    </div>
                </div>
                <Row className="row-grid justify-content-center">
                    {
                        projects.map(data => {
                            return <ProjectsCard data={data} />
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
 
export default Projects;