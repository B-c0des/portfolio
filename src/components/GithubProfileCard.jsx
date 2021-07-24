import React from 'react';

import {
    Card,
    Col,
    Row,
    Container,
} from "reactstrap";

import SocialLinks from "../components/SocialLinks";

const GithubProfileCard = ({prof}) => {
    return ( 
            <Card className="section-lg bg-gradient-info shadow-lg border-0">
                <Container className="">
                <div className="p-2">
                  <Row className="justify-content-center">
                  <Col className=" justify-content-center order-lg-2" lg="4">
                      <img src={prof.avatar_url} style={{width: "200px"}} alt="" className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"/>
                      
                        <SocialLinks />
                      <p className="justify-content-center text-white mt-3">
                          {prof.bio}
                      </p>
                      <div className="my-3 icon-shape bg-gradient-white shadow rounded text-info">
                        <i className="ni ni-pin-3 text-info mr-2" />
                        {"Remote"}
                        {/* {prof.location} */}
                        </div>
                    </Col>
                    <Col lg="8" className="order-lg-1">
                      <h2 id="contact" className="text-white">
                        Reach Out to me &#128071;
                      </h2>
                      <div class="mighty-form" id="mf-e9b1f4b8-0f47-41c1-a114-0c1eac9921d5"></div> 
                    </Col>                    
                  </Row>
                </div>
                </Container>
              </Card>
     );
}
 
export default GithubProfileCard;