import React from 'react';
import { ExternalLink } from 'react-external-link';

import {
    Card,
    CardBody,
    Badge
} from "reactstrap";
import Tilt from 'react-parallax-tilt';

import { Fade } from 'react-reveal';

const EducationCard = ({education}) => {
    return ( 
        
        <Fade right duration={1000} distance="40px">
            <ExternalLink href="https://catalog.pcc.edu/programsanddisciplines/computerscience/">
            <Tilt
    className="parallax-effect-glare-scale"
    perspective={1000}
    glareEnable={true}
    glareMaxOpacity={.75}
    scale={1.02}
  >
            <Card className="card-lift--hover shadow mt-4">
                <CardBody>
                    <div className="d-flex px-3">
                    <div className="pl-4">
                        <h5 className="text-info">
                        {education.schoolName}
                        </h5>
                        <h6>{education.subHeader}</h6>
                        <Badge color="info" className="mr-1">
                        {education.duration}
                    </Badge>
                        <p className="description mt-3">
                            {education.desc}
                            <ul>
                            {
                                education.descBullets ? 
                                education.descBullets.map((desc) => {
                                    return <li key={desc}>{desc}</li>
                                }) : null
                            }
                        </ul>
                        </p>
                    </div>
                    </div>
                </CardBody>
            </Card>
            </Tilt>
            </ExternalLink>
        </Fade>
     );
}
 
export default EducationCard;