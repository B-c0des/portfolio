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
               background: `linear-gradient(85deg, #1a1a1a 30%,#005266 90%)`,
              display: 'flex',
              alignItems: 'space-between',
              justifyContent: 'space-between',
              flexDirection: "column",
                boxShadow: `inset 2px 00px 150px -100px white,inset 2px 2px 10px -5px palegoldenrod, 0 0 3px -5px white`,
              borderTop: '1px solid white',
                
      borderRight: '1px solid white',
                '&:hover': {
      
            cursor: 'grab'},
            border: 0,
            fontSize: 16,
                color: 'white',
                padding: '10px',
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
              textShadow: '0 2px 2px white',
              color: 'white',

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
                               
            <span className="lead shadow text-white ">{skillsSection.subTitle}</span>
            

                        
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
                               <h3 className={ classes.textStyles}>{skillsSection.github}</h3>
                   
                           <img className="container-fluid  mt-1" src="https://ghchart.rshah.org/brian-reed-software" alt="" />
                
                               
                                </div>
                           
        </Tilt>  </ExternalLink>
                </div>
                   </div>
        </Fade>
        </div>
     );
}
 
export default Skills;