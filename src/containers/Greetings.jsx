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

import GreetingLottie from "../components/DisplayLottie";
import SocialLinks from "components/SocialLinks";
// import React, { Component } from 'react'
const useStyles = makeStyles((theme) => ({
  description: {
 background: 'linear-gradient(80deg, #2196F3 30%, #80e5ff 90%)',
     boxShadow: 'inset 0px -2px 3px 0px white, 0 0 5px -1px white, -2px 2px 4px deeppink, 2px -2px 4px cyan;',
  
    '&:hover': {
      color: 'black',
      textShadow: '0 2px 10px black',
      marginTop: '',
      cursor: 'grab'},
    border: 0,
    fontSize: 16,
    borderRadius: 25,
    color: 'white',
    padding: '0 30px',
    margin:'3px',
    textShadow: '0 2px 2px black',
    textAlign: 'justify'
  },
  linkedin: {
 background: 'linear-gradient(80deg, #2196F3 30%, #80e5ff 90%)',
     boxShadow: 'inset 0px -2px 3px 0px white, 0 0 5px -1px white, -2px 2px 4px deeppink, 2px -2px 4px cyan;',
  
    '&:hover': {
      background: 'linear-gradient(145deg,  #2196F3 10%, #b3f0ff 90%)',
      color: 'cyan',
      textShadow: '0 2px 10px cyan',
      boxShadow: 'inset 0px -2px 3px 0px white, 0 0 5px -1px white, -2px 2px 4px cyan, 2px -2px 4px deeppink;',
      marginTop: '',
      filter: 'drop-shadow(0px 0px 5px white)'},
    border: 0,
    fontSize: 16,
    borderRadius: 5,
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin:'3px',
    textShadow: '0 2px 2px black'
  },
  github: {
    background: 'linear-gradient(85deg, #1a1a1a 30%, #005266 90%)',
  boxShadow: 'inset 0px -2px 3px 0px white, 0 0 5px -1px white, -2px 2px 4px deeppink, 2px -2px 4px cyan;',
  
     '&:hover': {
      background: 'linear-gradient(145deg,  #1a1a1a 10%, #008fb3 90%)',
      color: '#fff',
       boxShadow: 'inset 0px -2px 3px 0px white, 0 0 5px -1px white, -2px 2px 4px cyan, 2px -2px 4px deeppink;',
      marginTop: '',
          textShadow: '0 2px 10px cyan',
    filter: 'drop-shadow(0px 0px 5px white)',
    padding:'5px 30px'},
    border: 0,
    fontSize: 16,
    borderRadius: 3,
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin:'2px',
    textShadow: '0 2px 2px black'
  },
  resume: {
    background: 'linear-gradient(80deg, #2196F3 30%, #80e5ff 90%)',
     boxShadow: 'inset 0px -2px 3px 0px white, 0 0 5px -1px white, -2px 2px 4px deeppink, 2px -2px 4px cyan;',
  
    '&:hover': {
      background: 'linear-gradient(145deg,  #2196F3 10%, #b3f0ff 90%)',
      color: 'cyan',
      textShadow: '0 2px 10px cyan',
      boxShadow: 'inset 0px -2px 3px 0px white, 0 0 5px -1px white, -2px 2px 4px cyan, 2px -2px 4px deeppink;',
      marginTop: '',
      filter: 'drop-shadow(0px 0px 5px white)'},
    border: 0,
    fontSize: 16,
    borderRadius: 5,
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin:'3px',
    textShadow: '0 2px 2px black'
  },
  contact: {
     background: 'linear-gradient(80deg, #2196F3 30%, #80e5ff 90%)',
     boxShadow: 'inset 0px -2px 3px 0px white, 0 0 5px -1px white, -2px 2px 4px deeppink, 2px -2px 4px cyan;',
  
    '&:hover': {
      background: 'linear-gradient(145deg,  #2196F3 10%, #b3f0ff 90%)',
      color: 'cyan',
      textShadow: '0 2px 10px cyan',
      boxShadow: 'inset 0px -2px 3px 0px white, 0 0 5px -1px white, -2px 2px 4px cyan, 2px -2px 4px deeppink;',
      marginTop: '',
      filter: 'drop-shadow(0px 0px 5px white)'},
    border: 0,
    fontSize: 16,
    borderRadius: 5,
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin:'3px',
    textShadow: '0 2px 2px black'
  },
  location: {
    background: 'linear-gradient(80deg, #2196F3 30%, #80e5ff 90%)',
     boxShadow: 'inset 0px -2px 3px 0px white, 0 0 5px -1px white, -2px 2px 4px deeppink, 2px -2px 4px cyan;',
  
    '&:hover': {
      background: 'linear-gradient(145deg,  #2196F3 10%, #b3f0ff 90%)',
      color: 'cyan',
      textShadow: '0 2px 10px cyan',
      boxShadow: 'inset 0px -2px 3px 0px white, 0 0 5px -1px white, -2px 2px 4px cyan, 2px -2px 4px deeppink;',
      marginTop: '',
      filter: 'drop-shadow(0px 0px 5px white)'},
    border: 0,
    fontSize: 16,
    borderRadius: 5,
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin:'3px',
    textShadow: '0 2px 2px black'
  },
}));




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
                                       
                      <p className="lead text-white" className={classes.description}>
                      <h1 className="display- text-white bg-black border-1" style={{filter: "drop-shadow(0px 0px 70px white)", textShadow: "0px 2px 2px black", textAlign: 'justify'}}>
                      {greetings.title}
                      </h1>{greetings.description}</p>
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
