import React, {Fragment} from 'react';
import { Fade } from 'react-reveal';
import DisplayLottie from '../components/DisplayLottie'
import webdev from '../assets/lottie/webdev.json';
import { ExternalLink } from 'react-external-link';
import Tilt from 'react-parallax-tilt';
import {
    Container,
    Row,
    Col,
    UncontrolledTooltip,
    Badge
} from "reactstrap";
import {Link} from 'react-scroll'
import { skillsSection } from "../portfolio";
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { textSpanIsEmpty } from 'typescript';



const Skills = () => {
      const useStyles = makeStyles((theme) => ({
          card: {
              display: 'flex',
              alignItems: 'space-between',
              justifyContent: 'space-between',
              flexDirection: "column",
 background: `linear-gradient(80deg, steelblue 30%, #80e5ff 90%)`,
     boxShadow: `inset 4px -4px 8px 0px white, 0 0 5px -1px white`,
    borderTop: '1px solid white;',
    '&:hover': {
      
      cursor: 'grab'},
    border: 0,
    fontSize: 16,
        color: 'white',
        padding: '10px',
    margin:'3px',
    textShadow: '0 2px 2px black',
    textAlign: 'center',
        userSelect: "none",
              borderRadius: '10px',
          },
          row: {
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
              textShadow: '0 2px 2px black'
          },
          textStyles: {
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'column',
              textShadow: '0 2px 2px black',

          },
          wrapperSkills: {
              filter: "drop-shadow(white 0px 2px 2px)",
              margin: "top",
              marginTop: "30%",
          }
 
    }));
    

     const classes = useStyles();
    return ( 
        <div className=" d-flex p-5  "  style={{backgroundImage: `url("https://flevix.com/wp-content/uploads/2020/01/Black-Animation-Background.svg")`,backgroundColor: "black"}} >
            <Fade left duration={1000} distance="40px">
                <div lg="6">
                    <DisplayLottie animationData={webdev} />
                </div>
                
                <div className={classes.row}>
                   
                    <div className={classes.wrapperSkills} >
                        <ExternalLink href="https://github.com/brian-reed-software">
                  
             <Tilt
                        className="parallax-effect-img"
                        tiltMaxAngleX={6}
                        tiltMaxAngleY={6}
                        perspective={2000}
                        transitionSpeed={2500}
                        scale={1.1}
                        gyroscope={true}
                        glareEnable={true}
                        >
                               
            <span className="lead shadow ">{skillsSection.subTitle}</span>
            

                        
                <div lg="6" className="text-center" className={ classes.card}>
                <h3 className="h3 text-info" className={ classes.textStyles}>{skillsSection.title}</h3>
                    <div className="d-flex justify-content-center flex-wrap mb-3" >
                    
                        {
                            skillsSection.softwareSkills.map((skill) => {
                                return <Fragment key={skill.skillName}>

                        
                        <div className="icon icon-shape shadow rounded-circle m-1 "  id={skill.skillName}>

                        <span className="iconify " data-icon={skill.fontAwesomeClassname} data-inline="false"></span>
                        
                            </div>
                           
                            <UncontrolledTooltip
                                delay={0}
                                placement="bottom"
                                target={skill.skillName}
                                >
                                {skill.skillName}
                            </UncontrolledTooltip>
                        
                                </Fragment>
                            })
                        }
                    
                    {/* <h3 className="text-info">{skillsSection.portfolioName}</h3>
                    <div>
                        
                        {
                            skillsSection.skills.map(skill => {
                                return <Badge className="flex-wrap m-1 shadow" key={skill}>{skill}</Badge>
                            })
                        }
                    </div> */}
                 
                            </div>
                               <h3 className="m-1 text-info">{skillsSection.github}</h3>
                   
                           <img className="container-fluid shadow mt-1" src="https://ghchart.rshah.org/brian-reed-software" alt="" />
                
                               
                                </div>
                           
        </Tilt>  </ExternalLink>
                </div>
                   </div>
        </Fade>
        </div>
     );
}
 
export default Skills;