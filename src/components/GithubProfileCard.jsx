import React from 'react';

import {
    Card,
    Col,
    Row,
    Container,
} from "reactstrap";
import Tilt from 'react-parallax-tilt';

import Resume from "../components/Resume";

const GithubProfileCard = ({prof}) => {
    return ( 
            <Card className="section pb-0 my-5 section-profile-cover"
            style={{backgroundColor: "black", backgroundImage: `url("https://flevix.com/wp-content/uploads/2019/12/Live-Background-1.svg")` }} 
            >
                <Container className="">
                <div className="p-2">
                  <Row className="justify-content-center">
                  <Col className=" justify-content-center order-lg-2" lg="4">
                  <Tilt
                        className="parallax-effect-img"
                        tiltMaxAngleX={18}
                        tiltMaxAngleY={18}
                        perspective={2000}
                        transitionSpeed={2500}
                        scale={1}
                        gyroscope={true}
                      >
                      <img src={prof.avatar_url} style={{width: "200px"}} alt="" className="rounded-circle  img-fluid shadow shadow-lg--hover mb-1"/>
                      </Tilt>
                      <h3 className="justify-content-center text-black" style={{filter: "drop-shadow(0px 2px 3px black)"}}>
                          {prof.bio}
                      </h3>
                      <Resume />
                      </Col>
                    <Col lg="8" className="order-lg-1">
                      <h2 id="contact" className="text-white" style={{filter: "drop-shadow(0px 2px 3px black)"}}>
                       Reach Out to me &#128071;
                      </h2>
                      <div data-netlify-recaptcha="true" data-netlify="true" class="mighty-form" id="mf-e9b1f4b8-0f47-41c1-a114-0c1eac9921d5" ></div> 
                    </Col>                    
                  </Row>
                </div>
                </Container>
              </Card>
     );
}
 
export default GithubProfileCard;