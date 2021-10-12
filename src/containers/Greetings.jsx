import React, { useEffect } from "react";
import { greetings } from "../portfolio";
import code from '../assets/lottie/coding.json';
import { Fade } from 'react-reveal';
import {Link} from 'react-scroll'
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";
import Tilt from 'react-parallax-tilt';
import GreetingLottie from "../components/DisplayLottie";
import SocialLinks from "components/SocialLinks";
import Draggable from 'react-draggable';

// import React, { Component } from 'react'
const useStyles = makeStyles((theme) => ({
  description: {
 background: 'linear-gradient(80deg, steelblue 30%, #80e5ff 90%)',
     boxShadow: 'inset 4px -4px 8px 0px white, 0 0 5px -1px white, -2px 2px 4px deeppink, 2px -2px 4px cyan;',
    borderTop: '1px solid white;',
    '&:hover': {
      
      cursor: 'grab'},
    border: 0,
    fontSize: 16,
    borderRadius: 10,
    color: 'white',
    padding: '2px 20px 10px 20px',
    margin:'3px',
    textShadow: '0 2px 2px black',
    textAlign: 'justify',
    userSelect: "none",
    marginRight: '55px'
  },
 
}));


const  eventLogger = (e: MouseEvent, data: Object) => {
    console.log('Event: ', e);
    console.log('Data: ', data);
  };

const Greetings = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  })

  const classes = useStyles();
  
  return ( 
    <Fade top duration={1000} distance="40px">
        <main ref="main" >
          <div className="position-relative">
          
            <section 
            style={{backgroundImage: `url("")`, filter: 'drop-shadow(0px 0px 12px black)'}} 
            className="section section-lg section-shaped pb-5 section-profile-cover">
              <div className="shape shape-style-1 bg-gradient-info" style={{boxShadow: "inset 0px 0px 20px lightsteelblue, 0px 0px 20px steelblue;", filter: "drop-shadow(white 0px 0px 50px);", backdropFilter: "blur(10px); border-radius: 15px;"}}>
              <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex" >
                <div className="col px-0">
                  <Row>
                    <Col lg="6" style={{filter: "drop-shadow(white 0px 0px 50px)"}}>
 <Draggable
 
        handle=".handle"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        grid={[2, 2]}
        scale={1}>
                <p className="lead text-white" className={ classes.description}>
                      <h1 className="display- text-white bg-black border-1 handle" style={{filter: "drop-shadow(0px 0px 70px white)", textShadow: "0px 2px 2px black", textAlign: 'justify'}}>
                      {greetings.title}
                      </h1>{greetings.description}
                      
                      </p>
                         </Draggable>
                      <h1 className="" style={{width: "700px"}}>
                      <SocialLinks />
                      </h1>

                      </Col>
                    <Col lg="6" style={{filter: "drop-shadow(0px 5px 150px white)"}}>
                      <GreetingLottie  animationData={code}/>
                    </Col>
                  </Row>
                </div>
                
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew" style={{filter: "drop-shadow(0px 5px 5px black)"}}>
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
            {/* 1st Hero Variation */}
          </div>
        </main>
        </Fade>
   );
}
 
export default Greetings;
