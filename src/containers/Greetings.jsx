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
    background: `linear-gradient(85deg , black -10%, #005266 10%, #80e5ff  90%, white 110%)`,
    boxShadow: `inset 2px 00px 150px -100px #80e5ff,inset 2px 2px 10px -5px steelblue, 0 0 3px -5px white,inset 2px -2px 2px -1px white, 0 0 5px -1px white, -2px 2px 4px steelblue, 2px -2px 4px golden;`,
    borderTop: '1px solid white;',
    borderLeft: '1px solid white',
    '&:hover': {
    },
    ':after': {
    content: '',
    width: '80px',
    height: '60px',
    background: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%)',
    position: 'absolute',
    transform: 'rotate(-18deg)',
    left: '13px',
    top: '9px',
    justifyContent: 'center',
    alignItems: 'center',
    color: "black",
    
//    backgroundImage: "linearGradient (top, rgba(255, 255, 255, .15), rgba(0, 0, 0, .25)), linear-gradient(left top,rgba(255, 255, 255, 0),rgba(255, 255, 255, .15) 50%,rgba(255, 255, 255, 0) 50%,rgba(255, 255, 255, 0))"
    },
    border: 0,
    fontSize: 16,
    borderRadius: 10,
    color: 'white',
    padding: '2px 20px 10px 20px',
    margin:'3px',
    textShadow: '0 2px 2px black',
    textAlign: 'justify',
    userSelect: "none",
  },
  text: {
    border: "0",
    fontSize: "20",
    borderRadius: "10",
    padding: '0px 5px 5px 5px',
    margin: '10px',
    textShadow: "0px 0px 10px white ",
    textAlign: 'justify',
    userSelect: "none",
    filter: 'drop-shadow(2px 4px 40px white)',
    textShadow: "0px 0px 10px black",
    color: "black",
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    textShadow: '0 2px 2px black'
    },
  textStyles: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    textShadow: '0 2px 2px white',
    color: 'white',
    alignItems: 'center'
    },
  wrapperSkills: {
    padding: "50px",
    marginTop: "50px",
    marginBottom:"50px",
    display: "flex",
    borderRadius: "50px",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    '@media only screen and (max-width: 800px)': {
    flexDirection: "column"
    },
     filter: "drop-shadow(0px 0px 50px steelblue)"
  },
  backgroundStyle: {
    backgroundColor: 'Augestina',
    boxShadow: "inset 0px 0px 50px black, 0px 0px 20px steelblue; ",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
  },
  title: {
    fontFamily: 'Augestina',
    fontSize: "28",
    textShadow: "0px 0px 1px black",
    color: "white",
  },
  svgStyling: {
    '@media only screen and (max-width: 800px)': {
      display: "none",
    },
    card: {
      background: `linear-gradient(85deg , black -10%, #005266 10%, #80e5ff  90%, white 110%)`,
      boxShadow: `inset 2px 00px 150px -100px ,inset 2px 2px 10px -5px palegoldenrod, 0 0 3px -5px white`,
      borderTop: '1px solid white;',      
      borderRight: '1px solid white',
    '&:hover': {
      cursor: 'pointer'},
      border: 0,
      fontSize: 16,
      color: 'white',
      padding: '10px',
      textShadow: '0 2px 2px black',
      textAlign: 'center',
      userSelect: "none",
      borderRadius: '10px',
      height: '60%',
      
     },
     avatar: {
      width: "50%",
      border: "2px solid white",
      borderRadius: "100%",
     },
     messageForm: {
      width: "100%",
    },
     glowingCard:{
       filter: "drop-shadow(0px 0px 50px steelblue)",
       justifyContent: "center"
     },
  }
}));
//style={{filter: "drop-shadow(0px 0px 70px white)", textShadow: "0px 2px 2px black", textAlign: 'justify'}}
const eventLogger = (e: MouseEvent, data: Object) => {
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
        <main ref="main"  >
        <div className={classes.backgroundStyle} >
              <div >
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
          <Container>
              <div className={classes.wrapperSkills} >          
                <div className={classes.textStyles}>
                <p className="lead text-center nav-title" className={ classes.description} >
                  <h1 className="display- bg-black border-1 handle text-center" className={classes.title}>
                  {greetings.title}
                  </h1 >
                 <h5 className={classes.text}>
                     <hr style={{margin: "0px"}}/>
                    {greetings.description}
                  <h1 className={classes.textStyles}>
                    <SocialLinks />
                  </h1>
                  </h5>
                  </p>
                  </div>
                    <Col lg="6">
                      <GreetingLottie  animationData={code}/>
                    </Col>
                  </div>
              <div className="separator separator-bottom separator-skew" style={{filter: "drop-shadow(0px 5px 5px black)"}}>
              <svg
                  className={classes.svgStyling}
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
                </Container>
            {/* 1st Hero Variation */}
          </div>
        </main>
        </Fade>
   );
}
export default Greetings;
