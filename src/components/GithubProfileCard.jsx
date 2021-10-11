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
            <Card className="section pb-0 section-profile-cover" 
            style={{backgroundColor: "white", backgroundImage: `url("https://flevix.com/wp-content/uploads/2020/01/Black-Animation-Background.svg")` }} 
            
            >
                <Container className="" style={{filter: "drop-shadow(0px 0px 50px steelblue)"}}>
                <div className="p-2" style={{filter: "drop-shadow(0px 0px 10px black)"}}>
                  <Row className="justify-content-center">
                  <Col className=" justify-content-center order-lg-2 text-center" lg="4">
                  <Tilt
                        className="parallax-effect-img"
                        tiltMaxAngleX={18}
                        tiltMaxAngleY={18}
                        perspective={2000}
                        transitionSpeed={2500}
                        scale={1}
                        gyroscope={true}
                      >
                      <img src={prof.avatar_url} style={{width: "100px"}} alt="" className="text-center rounded-circle  img-fluid shadow shadow-lg--hover mb-1"/>
                      </Tilt>
                      <h3 className="justify-content-center align-items-center text-white text-center" style={{filter: 'drop-shadow(0px 0px 5px white)' , textAlign: 'center'}}>
                          
                          <span className="text-white text-center">{prof.name}</span>
                          <br/>
                          <h3 className="text-white">{prof.bio}</h3>
                          <br/>
                          {/* <h3 className="text-white">{prof.location}</h3>
                          <br/> */}
                          <h5 className="text-white">{'Github Last Updated:'}</h5>
                          <h5 className="text-white">{prof.updated_at}</h5>
                      </h3>
                      <Resume />
                      </Col>
                    <Col lg="8" className="order-lg-1">
                      <h2 id="contact" className="text-white">
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