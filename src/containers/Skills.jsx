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
            background: 'linear-gradient(80deg, steelblue 30%, #80e5ff 90%)',
            display: 'flex',
            alignItems: 'space-between',
            justifyContent: 'space-between',
            flexDirection: "column",
            boxShadow: `inset 2px 00px 150px -100px white,inset 2px 2px 10px -5px steelblue, 0 0 3px -5px white,inset 2px -2px 2px -1px white, 0 0 5px -1px white, -2px 2px 4px steelblue, 2px -2px 100px steelblue;`,
            borderTop: '1px solid white',
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
          },
          row: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            textShadow: '0 2px 2px black',
          },
          textStyles: {
             display: 'flex',
             justifyContent: 'center',
             flexDirection: 'column',
             textShadow: '0 2px 2px white',
             color: 'white',
          },
          wrapperSkills: {
              backgroundColor: "black",
              padding: "50px",
              margin: "top",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
             '@media only screen and (max-width: 700px)': {
              flexDirection: "column"
              },
              icons: {
               filter: 'drop-shadow(0px 10px 10px steelblue)',
               boxShadow: `inset 2px 00px 150px -100px white,inset 2px 2px 10px -5px steelblue, 0 0 3px -5px white,inset 2px -2px 2px -1px white, 0 0 5px -1px white, -2px 2px 4px steelblue, 2px -2px 100px white;`
              },                
            },
              iconContainer: {
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'row',
                justifyContent: 'center',
                margin: '10px',
                  
            },
              iconInformation: {
                display: 'flex',
                flexDirection: 'column',
                margin: '10px',
                justifyContent: 'center',
                alignItems: 'center',
                filter: 'drop-shadow(0px 10px 10px black)',
        },
        subHeader: {
          border: 0,
          color: "white",
          padding: '1px',
          margin: '3px',
          textShadow: '0 2px 5px white',
          textAlign: 'center',
          userSelect: "none",
          borderRadius: '10px',
        },
              
              
      }));
  
const classes = useStyles();
    return ( 
        <div className={classes.wrapperSkills} >
            <Fade left duration={1000} distance="40px">
            <div lg="6">
             <DisplayLottie animationData={webdev} />
            </div>  
             <div className={classes.row}>
             <div  >
              <ExternalLink href="https://github.com/brian-reed-software">
             <Tilt
                        className="parallax-effect-img"
                        tiltMaxAngleX={6}
                        tiltMaxAngleY={6}
                        perspective={2000}
                        transitionSpeed={2500}
                        scale={1.1}
                        gyroscope={true}
                        glareEnable={false}
                        >   
            <span className={classes.subHeader}>{skillsSection.subTitle}</span>
               <div lg="6" className="text-center" className={classes.card}>
                <h3 className="h3 text-info" className={classes.textStyles}>{skillsSection.title}</h3>
                 <div className={classes.iconContainer} >
                 {
                skillsSection.softwareSkills.map((skill) => {
                  return (
                    <Fragment key={skill.skillName}>
                   <div className={classes.iconInformation}>
                   <div className=" bg-gradient-white icon icon-shape shadow rounded-circle"  id={skill.skillName}>
                   <span  className="iconify"   data-icon={skill.fontAwesomeClassname} data-inline="false"></span>
                    </div >
                      <UncontrolledTooltip
                        delay={0}
                        placement="bottom"
                        target={skill.skillName}
                          >
                        </UncontrolledTooltip>
                       <div>
                         {skill.skillName}
                         </div>
                          </div>
                            </Fragment>
                            )
                            })
                        }
                        </div>
                        {/* <h3 className="text-info">{skillsSection.portfolioName}</h3>
                        <div>
                        
                        {
                            skillsSection.skills.map(skill => {
                                return <Badge className="flex-wrap m-1 shadow" key={skill}>{skill}</Badge>
                            })
                        }
                        </div> */}
                        <h3 className={ classes.textStyles}>{skillsSection.github}</h3>
                         <img className="container-fluid  mt-1" src="https://ghchart.rshah.org/brian-reed-software" alt="" />      
                        </div>
                        </Tilt>
                </ExternalLink>
           </div>
         </div>
        </Fade>
        </div>
     );
}
export default Skills;