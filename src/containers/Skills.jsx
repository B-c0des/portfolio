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

const Skills = () => {
    return ( 
        <div style={{backgroundColor: "black"}} className="pb-5"  style={{backgroundImage: `url("https://flevix.com/wp-content/uploads/2020/01/Black-Animation-Background.svg")` }} >
        <Fade left duration={1000} distance="40px">
            <Container className="align-items-center" style={{filter: "drop-shadow(0px 2px 3px white)"}}>
            
            <span className="lead shadow ">{skillsSection.subTitle}</span>
            <Row>
                <Col lg="6">
                    <DisplayLottie animationData={webdev} />
                </Col>
                <Col lg="6" className="text-center">
                <h3 className="h3 text-info">{skillsSection.title}</h3>
                    <div className="d-flex justify-content-center flex-wrap mb-3">
                    
                        {
                            skillsSection.softwareSkills.map((skill) => {
                                return <Fragment key={skill.skillName}>
                        <Tilt
                        className="parallax-effect-img "
                        tiltMaxAngleX={6}
                        tiltMaxAngleY={6}
                        perspective={1000}
                        transitionSpeed={1500}
                        scale={1.1}
                        gyroscope={true}
                    >
                        
                        <div className="icon icon-shape shadow rounded-circle m-1 text-info "  id={skill.skillName}>

                        <span className="iconify " data-icon={skill.fontAwesomeClassname} data-inline="false"></span>
                        
                            </div>
                           
                            <UncontrolledTooltip
                                delay={0}
                                placement="bottom"
                                target={skill.skillName}
                                >
                                {skill.skillName}
                            </UncontrolledTooltip>
                            </Tilt>
                                </Fragment>
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
                    <h3 className="mt-5 m-1 text-info">{skillsSection.github}</h3>
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
                           <img className="container-fluid shadow mt-1" src="https://ghchart.rshah.org/brian-reed-software" alt="" />
                    </Tilt>
                    </ExternalLink>
                </Col>
            </Row>
            </Container>
        </Fade>
        </div>
     );
}
 
export default Skills;