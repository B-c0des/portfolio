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
        style={{backgroundColor: `#212122` }} 
        className="pb-0 section-profile-cover">
            <Container >
              <Fade bottom duration={1000} distance="40px">
              <div className="d-flex p-2 pb-6" >
                    <div>
                        <div className="icon-lg rounded-circle text-info ">
                        <span class="iconify" data-icon="emojione-v1:laptop-computer"></span>

                        </div>
                    </div>
                    <div className="pl-4">
                        <h4 className="display-3 text-white ">Applications</h4>
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
 
export default Projects;