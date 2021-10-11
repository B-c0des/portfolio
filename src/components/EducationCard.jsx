import React, {useState, createRef} from 'react';
import { ExternalLink } from 'react-external-link';
import ColorThief from "colorthief";

import {
    Card,
    CardBody,
    Badge
} from "reactstrap";
import Tilt from 'react-parallax-tilt';

import { Fade } from 'react-reveal';

const EducationCard = ({education}) => {
    const [colorArrays, setColorArrays] = useState([]);
    const imgRef = createRef();

    function getColorArrays() {
        const colorThief = new ColorThief();
        setColorArrays(colorThief.getColor(imgRef.current));
    }

    function rgb(values) {
        return typeof values === "undefined" ? null : "rgb(" + values.join(', ') + ")";
    }
    const [width, setWidth] = useState(500);
    const [height, setHeight] = useState(800);
    return ( 

        <Fade right duration={1000} distance="40px">
            <ExternalLink href="https://catalog.pcc.edu/programsanddisciplines/computerscience/">
            <Tilt
                    className="parallax-effect-img"
                    tiltMaxAngleX={12}
                    tiltMaxAngleY={12}
                    perspective={2000}
                    transitionSpeed={9500}
                    scale={1.1}
                    gyroscope={true}
                    glareEnable={true}
                >
            <Card className="shadow-lg--hover bg-black  shadow border-1 text-center rounded card" style={{boxShadow: `inset 0px -2px 5px 10px ${rgb(colorArrays)}`}}>
                <Card>
                    <div className="" >
                    <div className="">
                    <Card className="shadow" style={{background: rgb(colorArrays)}} >
                      <img ref={imgRef} className=" bg-black rounded-circle mb-3 img-center img-fluid shadow-lg " top src={education.schoolLogo} style={{ width: "125px" }} onLoad={() => getColorArrays()} alt=""/>
                    <h5 className="text-info" >{education.schoolName}</h5>
                     </Card>

                        <h5>{education.subHeader}
                        <Badge color="info" className="ml-4">
                        {education.duration}
                        </Badge>
                        </h5>

                        <p className="description mt-3" style={{color: rgb(colorArrays)}}>
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
                </Card>
            </Card>
            </Tilt>
            </ExternalLink>
        </Fade>
     );
}
 
export default EducationCard;